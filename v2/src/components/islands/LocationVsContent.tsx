import { useState } from 'react';

const btnGhost: React.CSSProperties = {
  border: '1px solid var(--line)', background: 'var(--paper)', color: 'var(--ink-2)',
  padding: '6px 10px', borderRadius: 5, fontSize: 'var(--text-2xs)', cursor: 'pointer',
  fontFamily: "var(--font-mono)",
};

export default function LocationVsContent() {
  const [hostDown, setHostDown] = useState(false);
  const [tampered, setTampered] = useState(false);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 32px 1fr',
      gap: 0,
      alignItems: 'stretch',
    }}>
      <div style={{
        border: '1px solid var(--line)', borderRadius: 10, padding: 18,
        background: 'var(--paper)', opacity: hostDown ? 0.55 : 1,
        transition: 'opacity .3s', position: 'relative',
      }}>
        <div className="retro-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)', marginBottom: 8 }}>
          today · location-addressed
        </div>
        <div className="mono" style={{ fontSize: 'var(--text-sm)', marginBottom: 12, wordBreak: 'break-all', color: 'var(--ink-2)' }}>
          <span style={{ color: 'var(--ink-3)' }}>https://</span>
          <span style={{ textDecoration: hostDown ? 'line-through' : 'none', color: hostDown ? 'var(--carmine)' : 'var(--ink)' }}>example.com</span>
          <span style={{ color: 'var(--ink-3)' }}>/2026/</span>
          <span style={{ color: 'var(--ink)' }}>report.pdf</span>
        </div>
        <div style={{ minHeight: 40, display: 'flex', alignItems: 'center', padding: '6px 0', fontSize: 'var(--text-xs)', color: 'var(--ink-3)' }}>
          {hostDown
            ? <span style={{ color: 'var(--carmine)', fontWeight: 500 }}>⚠ 404 · host unreachable</span>
            : tampered
              ? <span style={{ color: 'var(--carmine)', fontWeight: 500 }}>⚠ content swapped silently</span>
              : <span>▤ fetched content</span>}
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          <button onClick={() => { setHostDown((d) => !d); setTampered(false); }} className="mono" style={btnGhost}>
            {hostDown ? '↺ restore' : '✕ take host down'}
          </button>
          <button onClick={() => { setTampered((t) => !t); setHostDown(false); }} className="mono" style={btnGhost}>
            {tampered ? '↺ restore' : '⇄ swap content'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mono" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-3)' }}>vs.</div>
      </div>

      <div style={{
        border: '1.5px solid var(--turq)', borderRadius: 10, padding: 18,
        background: 'linear-gradient(135deg, rgba(107,196,206,0.08) 0%, rgba(7,58,83,0.04) 100%)',
        position: 'relative',
      }}>
        <div className="retro-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--jade)', marginBottom: 8 }}>
          ipfs · content-addressed
        </div>
        <div className="mono" style={{ fontSize: 'var(--text-sm)', marginBottom: 12, wordBreak: 'break-all', color: 'var(--ink-2)' }}>
          <span style={{ color: 'var(--ink-3)' }}>ipfs://</span>
          <span style={{ color: 'var(--turq)', fontWeight: 600 }}>bafkreic</span>
          <span>7p4kehu3mqj2s5a8wrx9m3q2f6t8y4c</span>
        </div>
        <div style={{ minHeight: 40, display: 'flex', alignItems: 'center', padding: '6px 0', fontSize: 'var(--text-xs)', color: 'var(--jade)', fontWeight: 500 }}>
          ✓ verified from any peer
        </div>
        <div style={{ marginTop: 12, fontSize: 'var(--text-xs)', color: 'var(--ink-3)', fontStyle: 'italic' }}>
          The address <em>is</em> the fingerprint. Host, network, middle-box. None of them get to lie.
        </div>
      </div>
    </div>
  );
}
