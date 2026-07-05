// Diagram for the "transport agnostic" commitment: one CID fans out across
// many wires, every lane re-verifies against the same hash at the endpoint.
interface Lane {
  icon: string;
  name: string;
  hint: string;
  color: string;
}

const CID = 'bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi';

const LANES: Lane[] = [
  { icon: '↗', name: 'HTTP Trustless Gateway', hint: 'request / response', color: 'var(--yellow)' },
  { icon: '◆', name: 'libp2p · Bitswap', hint: 'peer-to-peer block exchange', color: 'var(--turq)' },
  { icon: '●', name: 'iroh-blobs · QUIC', hint: 'embedded, low-latency', color: 'var(--carmine)' },
  { icon: '≋', name: 'RASL', hint: 'streaming verifiable bytes', color: 'var(--jade)' },
];

export default function TransportRoutes() {
  return (
    <div style={{ background: 'var(--paper)', borderRadius: 12, padding: '16px 20px', marginBottom: 18 }}>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
        <span className="retro-label" style={{ fontSize: 'var(--text-xs)', color: 'var(--teal)', flexShrink: 0 }}>cid</span>
        <span className="mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-2)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>
          {CID}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)' }}>
        {LANES.map((l) => (
          <div key={l.name} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: '1px solid var(--line)', padding: '10px 0',
            borderLeft: `3px solid ${l.color}`, paddingLeft: 12,
          }}>
            <span className="mono" style={{ color: l.color, fontWeight: 600, fontSize: 'var(--text-sm)', width: 14, textAlign: 'center', flexShrink: 0 }}>{l.icon}</span>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{l.name}</span>
            <span className="mono" style={{ fontSize: 'var(--text-2xs)', color: 'var(--ink-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.hint}</span>
          </div>
        ))}
      </div>

      <div className="mono" style={{
        marginTop: 12, fontSize: 'var(--text-xs)', color: 'var(--ink-3)',
        display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
      }}>
        <span style={{ color: 'var(--jade)' }}>✓</span>
        same bytes, re-hashed at the endpoint — or you know they didn't arrive.
      </div>
    </div>
  );
}
