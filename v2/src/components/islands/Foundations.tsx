import { useState } from 'react';
import FileDropCID from './FileDropCID';
import LocationVsContent from './LocationVsContent';
import TransportRoutes from './TransportRoutes';

interface CTA {
  label: string;
  hint: string;
  link: string;
}

interface Foundation {
  id: string;
  num: string;
  title: string;
  body: string;
  demoHeading: string;
  demo: React.ReactNode;
  ctas: CTA[];
}

const FOUNDATIONS: Foundation[] = [
  {
    id: 'cid', num: '01', title: 'CIDs for addressing',
    body: 'Data is identified by what it is, not where it lives. A CID is a self-describing, cryptographic fingerprint of the content, used by UnixFS, DASL, and BDASL to address everything from a single byte to a multi-gigabyte dataset. Any party generates one; any party verifies one.',
    demoHeading: 'Hash around, and find out.',
    demo: <FileDropCID />,
    ctas: [
      { label: 'CID inspector', hint: 'Inspect any CID', link: 'cid.ipfs.tech' },
      { label: 'Read the spec', hint: 'CID', link: 'https://github.com/multiformats/cid' },
      { label: 'Try DASL', hint: 'Minimal subset of the CID spec', link: 'dasl.ing' },
    ],
  },
  {
    id: 'transport', num: '02', title: 'Transport agnostic',
    body: "IPFS is strict about outcomes, tolerant about methods. The same CID can travel over HTTP, libp2p with Bitswap, iroh-blobs over QUIC, RASL. Verification always happens at the endpoints. Hosts come and go. Routes change. The bytes you asked for arrive intact, or you know they didn't.",
    demoHeading: 'One CID. Any wire. Same bytes.',
    demo: (
      <>
        <TransportRoutes />
        <LocationVsContent />
      </>
    ),
    ctas: [
      { label: 'Pin & retrieve', hint: 'gateways + RASL', link: 'docs.ipfs.tech/concepts/gateways' },
      { label: 'libp2p transports', hint: 'connect anywhere', link: 'libp2p.io' },
    ],
  },
];

export default function Foundations() {
  const [active, setActive] = useState('cid');
  const node = FOUNDATIONS.find((f) => f.id === active) || FOUNDATIONS[0];

  return (
    <>
      <div className="foundation-tabs">
        {FOUNDATIONS.map((f) => {
          const isActive = f.id === active;
          return (
            <button key={f.id} onClick={() => setActive(f.id)}
              style={{
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                border: isActive ? '1.5px solid var(--turq)' : '1px solid var(--line)',
                background: 'var(--paper)',
                borderRadius: 14, padding: 26, position: 'relative', overflow: 'hidden',
                boxShadow: isActive
                  ? '0 0 0 5px rgba(107,196,206,0.15), 0 12px 28px -18px rgba(7,58,83,0.35)'
                  : 'none',
                transition: 'all .18s',
              }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: isActive ? 'var(--grad)' : 'var(--stone)',
                opacity: isActive ? 1 : 0.4,
              }} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 'var(--text-2xs)', color: isActive ? 'var(--turq)' : 'var(--ink-3)', letterSpacing: '.12em', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {isActive ? '◉ live demo ↓' : '○ try demo'}
                </span>
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.01em', userSelect: 'text' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.body}</p>
            </button>
          );
        })}
      </div>

      <div style={{ background: 'var(--pearl)', border: '1px solid var(--line)', borderRadius: 16, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--text-3xl)', fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--navy)' }}>{node.demoHeading}</h3>
          </div>
          <div style={{ fontSize: 'var(--text-ui)', color: 'var(--ink-3)', maxWidth: 380, textAlign: 'right' }}>{node.demoSub}</div>
        </div>
        <div key={active}>{node.demo}</div>

        <div className="foundation-ctas">
          <div className="retro-label" style={{ fontSize: 'var(--text-ui)', color: 'var(--ink-3)' }}>
            get started
          </div>
          {node.ctas.map((c) => (
            <a key={c.link} href={`https://${c.link}`} className="foundation-cta">
              <span style={{ color: 'var(--turq)', fontWeight: 600 }}>↗ {c.label}</span>
              <span style={{ color: 'var(--ink-3)', fontSize: 'var(--text-2xs)' }}>{c.hint}</span>
              <span className="mono" style={{ color: 'var(--ink-3)', fontSize: 'var(--text-2xs)', marginLeft: 'auto' }}>{c.link}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .foundation-tabs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }
        @media (min-width: 768px) {
          .foundation-tabs { grid-template-columns: repeat(2, 1fr); }
        }
        .foundation-ctas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 18px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px dashed var(--line);
        }
        .foundation-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          border-radius: 6px;
          background: var(--paper);
          border: 1px solid var(--line);
          font-size: var(--text-sm);
          text-decoration: none;
          transition: border-color .15s, transform .15s;
          flex: 1 1 auto;
          min-width: 220px;
        }
        .foundation-cta:hover {
          border-color: var(--turq);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}
