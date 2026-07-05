import { useState } from 'react';

type Kind = 'spec' | 'node' | 'library' | 'infra';
interface KindMeta { label: string; color: string; shape: 'circle' | 'square' | 'diamond' | 'ring' }
interface ConstellationNode {
  id: string; label: string; x: number; y: number; kind: Kind;
  role: string; blurb: string; link: string;
}

const KINDS: Record<Kind, KindMeta> = {
  spec:    { label: 'Spec',                  color: 'var(--turq)',   shape: 'square' },
  node:    { label: 'Node implementation',   color: 'var(--navy)',   shape: 'circle' },
  library: { label: 'Library',               color: 'var(--jade)',   shape: 'diamond' },
  infra:   { label: 'Public infrastructure', color: 'var(--yellow)', shape: 'ring' },
};

const NODES: ConstellationNode[] = [
  { id: 'specs', label: 'Specs', x: 12, y: 14, kind: 'spec', role: 'Spec · Reference',
    blurb: 'Everything specified formally. Implement independently, test your fork, or simply understand how it works under the hood.',
    link: 'specs.ipfs.tech' },
  { id: 'dasl', label: 'DASL', x: 50, y: 50, kind: 'spec', role: 'Spec · Profile',
    blurb: 'Data-Addressed Structures & Links. A small, focused profile optimized for interoperability and simplicity. Easy to implement, easy to deploy.',
    link: 'dasl.ing' },
  { id: 'ipld', label: 'IPLD', x: 22, y: 70, kind: 'spec', role: 'Spec · Data Model',
    blurb: 'Interplanetary Linked Data. A data model and codecs for building linked data with content addressing. The semantic web with a power-up.',
    link: 'ipld.io' },
  { id: 'kubo', label: 'Kubo', x: 28, y: 28, kind: 'node', role: 'Node implementation · Go',
    blurb: 'The full-featured Go implementation. Client and/or server, punching NATs to connect to the public or a private network. A Swiss-army knife for IPFS.',
    link: 'github.com/ipfs/kubo' },
  { id: 'helia', label: 'Helia', x: 72, y: 26, kind: 'library', role: 'Library · JS/TS',
    blurb: 'The modular JS/TS library for browsers and Node. Import only what you need and work with your web tooling.',
    link: 'helia.io' },
  { id: 'boxo', label: 'Boxo', x: 88, y: 44, kind: 'library', role: 'Library · Go toolkit',
    blurb: 'Modular Go building blocks. The lego set behind Kubo. Pick only the pieces your app needs.',
    link: 'github.com/ipfs/boxo' },
  { id: 'ipni', label: 'IPNI', x: 80, y: 68, kind: 'infra', role: 'Public infrastructure · Routing',
    blurb: 'Interplanetary Network Indexer. Scalable content routing. Look up which peers have content for a given CID, without running a DHT node.',
    link: 'ipni.io' },
  { id: 'amino', label: 'Amino', x: 50, y: 86, kind: 'infra', role: 'Public infrastructure · Network',
    blurb: 'Mainnet for IPFS. One shared public-good network to which all can connect, and which we can all use to build.',
    link: '—' },
];

const EDGES: [string, string][] = [
  ['kubo', 'dasl'], ['helia', 'dasl'], ['dasl', 'ipld'], ['kubo', 'boxo'],
  ['kubo', 'amino'], ['helia', 'amino'], ['amino', 'ipni'], ['ipld', 'specs'],
  ['dasl', 'specs'], ['helia', 'ipld'],
];

function nodeShape(kind: Kind, isActive: boolean): React.CSSProperties {
  const k = KINDS[kind];
  const base: React.CSSProperties = {
    width: 22, height: 22,
    background: isActive ? k.color : 'var(--paper)',
    border: `2px solid ${k.color}`,
    transition: 'all .15s',
  };
  if (k.shape === 'circle') return { ...base, borderRadius: '50%' };
  if (k.shape === 'square') return { ...base, borderRadius: 4 };
  if (k.shape === 'diamond') return { ...base, borderRadius: 4, transform: 'rotate(45deg)' };
  if (k.shape === 'ring') return { ...base, borderRadius: '50%', borderWidth: 3 };
  return base;
}

function legendShape(kind: Kind): React.CSSProperties {
  const k = KINDS[kind];
  const base: React.CSSProperties = { width: 11, height: 11, border: `1.5px solid ${k.color}`, background: 'var(--paper)', display: 'inline-block' };
  if (k.shape === 'circle') return { ...base, borderRadius: '50%' };
  if (k.shape === 'square') return { ...base, borderRadius: 2 };
  if (k.shape === 'diamond') return { ...base, borderRadius: 2, transform: 'rotate(45deg)' };
  if (k.shape === 'ring') return { ...base, borderRadius: '50%', borderWidth: 2.5 };
  return base;
}

export default function Constellation({ height = 480 }: { height?: number }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [locked, setLocked] = useState('dasl');
  const active = hovered || locked;
  const activeNode = NODES.find((n) => n.id === active)!;

  return (
    <div className="constellation-grid">
      <div style={{
        position: 'relative', height,
        border: '1px solid var(--line)', borderRadius: 12,
        background: 'var(--pearl)', overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="bdots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.7" fill="rgba(13,22,68,0.08)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bdots)" />
          {EDGES.map(([a, b], i) => {
            const na = NODES.find((n) => n.id === a)!;
            const nb = NODES.find((n) => n.id === b)!;
            const isActive = !!active && (active === a || active === b);
            return (
              <line key={i}
                x1={`${na.x}%`} y1={`${na.y}%`} x2={`${nb.x}%`} y2={`${nb.y}%`}
                stroke={isActive ? 'var(--turq)' : 'rgba(13,22,68,0.18)'}
                strokeWidth={isActive ? 1.8 : 1}
                strokeDasharray={isActive ? 'none' : '3 4'}
              />
            );
          })}
        </svg>
        {NODES.map((n) => {
          const isActive = active === n.id;
          const isLocked = locked === n.id;
          return (
            <button key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLocked(n.id)}
              style={{
                position: 'absolute', left: `${n.x}%`, top: `${n.y}%`,
                transform: 'translate(-50%,-50%)', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                background: 'transparent', border: 'none', padding: 0,
                zIndex: isActive ? 3 : 2,
              }}>
              <div style={{
                ...nodeShape(n.kind, isActive),
                boxShadow: isLocked ? `0 0 0 6px ${KINDS[n.kind].color}33` : 'none',
              }} />
              <div className="mono" style={{
                fontSize: 'var(--text-2xs)', fontWeight: 600, color: 'var(--ink)',
                background: 'var(--paper)', padding: '2px 6px', borderRadius: 3,
                boxShadow: '0 0 0 1px var(--hair)',
              }}>{n.label}</div>
            </button>
          );
        })}
        <div className="mono" style={{
          position: 'absolute', top: 12, right: 12, fontSize: 'var(--text-2xs)',
          color: 'var(--ink-3)', background: 'var(--paper)',
          padding: '8px 12px', borderRadius: 6, border: '1px solid var(--hair)',
          display: 'flex', flexDirection: 'column', gap: 6, minWidth: 150,
        }}>
          {(Object.entries(KINDS) as [Kind, KindMeta][]).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
              <span style={{ ...legendShape(k), flexShrink: 0 }} />
              <span>{v.label.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        border: '1px solid var(--line)', borderRadius: 12, padding: 22,
        background: 'var(--paper)', display: 'flex', flexDirection: 'column',
      }}>
        <div className="retro-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)', marginBottom: 6 }}>
          {activeNode.role}
        </div>
        <h3 className="mono" style={{ margin: '0 0 12px', fontSize: 'var(--text-4xl)', fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.01em' }}>
          {activeNode.label}
        </h3>
        <p style={{ margin: '0 0 18px', fontSize: 'var(--text-base)', color: 'var(--ink-2)' }}>{activeNode.blurb}</p>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          {activeNode.link === '—' ? (
            <span className="mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-3)' }}>{activeNode.link}</span>
          ) : (
            <a
              className="mono"
              href={`https://${activeNode.link}`}
              target="_blank"
              rel="noopener"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--turq)', textDecoration: 'none' }}
            >
              ↗ {activeNode.link}
            </a>
          )}
          <div style={{ display: 'flex', gap: 8 }}>
            {NODES.map((n) => (
              <button key={n.id} onClick={() => setLocked(n.id)} aria-label={n.label}
                style={{
                  width: 8, height: 8, padding: 0,
                  border: 'none', borderRadius: KINDS[n.kind].shape === 'square' ? 1.5 : '50%',
                  background: locked === n.id ? KINDS[n.kind].color : 'var(--stone)',
                  cursor: 'pointer',
                }} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .constellation-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .constellation-grid { grid-template-columns: 3fr 2fr; }
        }
      `}</style>
    </div>
  );
}
