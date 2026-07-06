import { useEffect, useRef, useState } from 'react';
import { CID } from 'multiformats/cid';
import { sha256 } from 'multiformats/hashes/sha2';
import * as raw from 'multiformats/codecs/raw';

// Real CIDv1: raw codec (0x55) over a sha2-256 digest, same as `ipfs add --raw-leaves`
// would produce for a single small block.
async function computeCid(bytes: Uint8Array): Promise<string> {
  const digest = await sha256.digest(bytes);
  return CID.create(1, raw.code, digest).toString();
}

// Detects a pasted CIDv1 (base32, starts with b). CIDv0 (Qm…) is excluded
// because the anatomy labels assume the CIDv1 layout and would be wrong for it.
function looksLikeCid(s: string): boolean {
  return /^b[a-z2-7]{40,}$/.test(s.trim());
}

// Common multicodec/multihash names; falls back to the raw hex code for anything else.
const CODEC_NAMES: Record<number, string> = {
  0x55: 'raw',
  0x70: 'dag-pb',
  0x71: 'dag-cbor',
  0x72: 'libp2p-key',
  0x0129: 'dag-json',
  0x0200: 'json',
};
const HASH_NAMES: Record<number, string> = {
  0x11: 'sha1',
  0x12: 'sha2-256',
  0x13: 'sha2-512',
  0x1e: 'blake3',
  0xb220: 'blake2b-256',
};

interface CidPart {
  key: string;
  label: string;
  sub: string;
  chars: string;
  color: string;
  // Hover-fill background behind white text. Defaults to `color`; set only for
  // chunks whose color (--navy/--ink) flips to near-white in dark mode, which
  // would otherwise leave white text on a white fill.
  fill?: string;
  detail: string;
}

function CIDAnatomy({ cid, pulse }: { cid: string; pulse: boolean }) {
  const [hover, setHover] = useState<string | null>(null);
  if (!cid) {
    return <div style={{ height: 64, border: '1.5px dashed var(--stone)', borderRadius: 8, background: 'var(--paper)' }} />;
  }

  // Decode the real CID so the labels below reflect what was actually pasted or
  // computed, rather than assuming raw+sha2-256. Falls back to that assumption
  // only if parsing fails (shouldn't happen for anything that reached this point).
  let parsedCid: CID | null = null;
  try {
    parsedCid = CID.parse(cid);
  } catch {
    parsedCid = null;
  }
  const codecCode = parsedCid?.code ?? raw.code;
  const codecName = CODEC_NAMES[codecCode] ?? `0x${codecCode.toString(16)}`;
  const hashCode = parsedCid?.multihash.code ?? sha256.code;
  const hashName = HASH_NAMES[hashCode] ?? `0x${hashCode.toString(16)}`;
  const hashLen = parsedCid?.multihash.size ?? 32;

  const parts: CidPart[] = [
    { key: 'mb', label: 'multibase', sub: 'base32',
      chars: cid.slice(0, 1), color: 'var(--carmine)',
      detail: 'Single-letter prefix that tells parsers how the rest is encoded. "b" = base32 lowercase.' },
    { key: 'ver', label: 'version', sub: 'CIDv1',
      chars: cid.slice(1, 2), color: 'var(--yellow)',
      detail: 'Which CID format. "a" here encodes version 1. Self-describing, upgrade-safe.' },
    { key: 'codec', label: 'multicodec', sub: `${codecName} · 0x${codecCode.toString(16)}`,
      chars: cid.slice(2, 4), color: 'var(--jade)',
      detail: `What kind of bytes we're naming — ${codecName} here. Raw is just bytes; dag-pb, dag-cbor, and dag-json describe structured/linked data. Tells you how to interpret the data once you fetch it.` },
    { key: 'hfn', label: 'hash algo', sub: hashName,
      chars: cid.slice(4, 6), color: 'var(--turq)',
      detail: `Which hash function was used — ${hashName} here. Others like blake3 or sha2-512 are equally legal; the CID tells you which.` },
    { key: 'hlen', label: 'hash length', sub: `${hashLen} bytes`,
      chars: cid.slice(6, 8), color: 'var(--navy)', fill: 'var(--navy-surface)',
      detail: `How many bytes of digest follow — ${hashLen} bytes here (${hashLen * 8} bits).` },
    { key: 'digest', label: 'digest', sub: 'the fingerprint',
      chars: cid.slice(8), color: 'var(--ink)', fill: 'var(--navy-surface)',
      detail: 'The actual hash of the bytes. Change one character of the file and every character here changes.' },
  ];

  const hovered = parts.find((p) => p.key === hover);

  return (
    <div style={{
      background: pulse ? 'rgba(107,196,206,0.12)' : 'var(--pearl)',
      borderRadius: 10, padding: 14, transition: 'background .4s',
    }}>
      <div className="mono" style={{ fontSize: 'var(--text-ui)', lineHeight: 1.5, marginBottom: 12, wordBreak: 'break-all' }}>
        {parts.map((p) => {
          const isHovered = hover === p.key;
          const isDim = !!hover && !isHovered;
          return (
            <span key={p.key}
              onMouseEnter={() => setHover(p.key)}
              onMouseLeave={() => setHover(null)}
              style={{
                padding: '2px 1px',
                background: isHovered ? (p.fill ?? p.color) : 'transparent',
                color: isHovered ? '#fff' : (isDim ? 'var(--ink-3)' : p.color),
                fontWeight: p.key === 'digest' ? 400 : 600,
                cursor: 'help',
                transition: 'all .12s',
                borderBottom: `2px solid ${isDim ? 'transparent' : p.color}`,
              }}>
              {p.chars}
            </span>
          );
        })}
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 6, alignItems: 'start',
        borderTop: '1px dashed var(--hair)', paddingTop: 12,
      }}>
        {parts.map((p) => {
          const isHovered = hover === p.key;
          return (
            <div key={p.key}
              onMouseEnter={() => setHover(p.key)}
              onMouseLeave={() => setHover(null)}
              style={{
                cursor: 'help', padding: '8px 10px', borderRadius: 6,
                background: isHovered ? (p.fill ?? p.color) : 'var(--pearl)',
                color: isHovered ? '#fff' : 'var(--ink-2)',
                transition: 'all .12s', minWidth: 0,
                borderLeft: `3px solid ${p.color}`,
              }}>
              <div className="retro-label" style={{
                fontSize: 'var(--text-sm)',
                color: isHovered ? '#fff' : p.color,
                marginBottom: 2, whiteSpace: 'nowrap',
                overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{p.label}</div>
              <div style={{
                fontSize: 'var(--text-2xs)',
                color: isHovered ? 'rgba(255,255,255,0.85)' : 'var(--ink-3)',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{p.sub}</div>
            </div>
          );
        })}
        <div style={{ gridColumn: '1 / -1', marginTop: 8, paddingTop: 10, borderTop: '1px dashed var(--hair)' }}>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-2)', lineHeight: 1.55, minHeight: 34 }}>
            {hovered ? (
              <span>
                <span className="retro-label" style={{
                  color: hovered.color,
                  fontSize: 'var(--text-sm)', marginRight: 8,
                }}>{hovered.label}</span>
                {hovered.detail}
              </span>
            ) : (
              <span style={{ color: 'var(--ink-3)', fontStyle: 'italic' }}>
                Hover any chunk above. A CID self-describes: it tells you how it was encoded, what kind of bytes it names, and which hash was used.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FileDropCID() {
  const [text, setText] = useState('hello, content-addressed world\n');
  const [cid, setCid] = useState('');
  const [computing, setComputing] = useState(false);
  const [size, setSize] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [pulseCid, setPulseCid] = useState(false);
  // When a CID is pasted we hide the input so its computed hash can't be confused
  // with the pasted one. `editNonce` lets us recompute from text on returning to edit.
  const [showInput, setShowInput] = useState(true);
  const [editNonce, setEditNonce] = useState(0);
  const liveRef = useRef(true);

  useEffect(() => {
    if (!showInput) return;
    liveRef.current = true;
    setComputing(true);
    const bytes = new TextEncoder().encode(text);
    setSize(bytes.byteLength);
    const t = setTimeout(async () => {
      const c = await computeCid(bytes);
      if (!liveRef.current) return;
      setCid(c);
      setComputing(false);
      setPulseCid(true);
      setTimeout(() => setPulseCid(false), 450);
    }, 160);
    return () => {
      liveRef.current = false;
      clearTimeout(t);
    };
  }, [text, editNonce]);

  const onPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pasted = e.clipboardData.getData('text');
    if (!looksLikeCid(pasted)) return;
    e.preventDefault();
    liveRef.current = false; // cancel any pending compute from the textarea
    setShowInput(false);
    setComputing(false);
    setCid(pasted.trim());
    setPulseCid(true);
    setTimeout(() => setPulseCid(false), 450);
  };

  const editText = () => {
    setShowInput(true);
    setEditNonce((n) => n + 1); // re-trigger compute from the current text
  };

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (!f) return;
    const buf = await f.arrayBuffer();
    try {
      const t = new TextDecoder('utf-8', { fatal: false }).decode(buf);
      setText(t.slice(0, 4000));
    } catch {
      setText(`[binary · ${f.size} bytes]`);
    }
  };

  return (
    <div style={{ background: 'var(--paper)', borderRadius: 10, padding: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div className="retro-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)' }}>
          {showInput ? '↓ drop a file, edit, or paste a CID' : 'pasted CID'}
        </div>
        <div className="mono" style={{ fontSize: 'var(--text-2xs)', color: 'var(--ink-3)' }}>
          {showInput ? `sha-256 · ${size} bytes` : 'from clipboard'}
        </div>
      </div>
      {showInput ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          style={{
            border: `1.5px dashed ${dragOver ? 'var(--turq)' : 'var(--stone)'}`,
            borderRadius: 8, padding: 12, marginBottom: 12,
            background: dragOver ? 'rgba(107,196,206,0.08)' : 'var(--pearl)',
            transition: 'all .15s',
          }}
        >
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onPaste={onPaste}
            rows={4}
            className="mono"
            style={{
              width: '100%', border: 'none', borderRadius: 5,
              fontSize: 'var(--text-sm)', padding: 10, resize: 'vertical', background: 'transparent',
              color: 'var(--ink)', outline: 'none', boxSizing: 'border-box',
              lineHeight: 1.5,
            }}
          />
        </div>
      ) : (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
          border: '1.5px solid var(--stone)', borderRadius: 8, padding: '10px 12px', marginBottom: 12,
          background: 'var(--pearl)',
        }}>
          <span className="mono" style={{
            fontSize: 'var(--text-xs)', color: 'var(--ink-2)', minWidth: 0,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            inspecting <span style={{ color: 'var(--ink)' }}>{cid}</span>
          </span>
          <button
            onClick={editText}
            className="retro-label"
            style={{
              border: '1px solid var(--stone)', borderRadius: 5, padding: '4px 10px',
              background: 'transparent', color: 'var(--ink-2)', cursor: 'pointer', fontSize: 'var(--text-xs)',
            }}
          >
            edit text instead
          </button>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
        <div className="mono" style={{ fontSize: 'var(--text-2xs)', color: 'var(--ink-3)' }}>
          {computing ? 'computing…' : 'anatomy of a CID'}
        </div>
        <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
      </div>

      <CIDAnatomy cid={cid} pulse={pulseCid} />
    </div>
  );
}
