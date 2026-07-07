import { useState, useEffect } from 'react';
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
      { label: 'CID inspector', hint: 'Inspect any CID', link: 'https://cid.ipfs.tech' },
      { label: 'Read the spec', hint: 'CID', link: 'https://specs.ipfs.tech/cid/' },
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
    ctas: [],
  },
];

export default function Foundations() {
  const [active, setActive] = useState('cid');

  // Sync active tab with the URL hash so it's deep-linkable.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && FOUNDATIONS.some((f) => f.id === hash)) {
      setActive(hash);
    }
    const onHashChange = () => {
      const h = window.location.hash.slice(1);
      if (h && FOUNDATIONS.some((f) => f.id === h)) setActive(h);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectTab = (id: string) => {
    setActive(id);
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.replaceState(null, '', url);
  };

  const node = FOUNDATIONS.find((f) => f.id === active) || FOUNDATIONS[0];

  return (
    <>
      <div className="foundation-tabs" role="tablist" aria-label="IPFS foundations">
        {FOUNDATIONS.map((f) => {
          const isActive = f.id === active;
          return (
            <button key={f.id}
              role="tab"
              id={`foundation-tab-${f.id}`}
              aria-selected={isActive}
              aria-controls="foundation-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(f.id)}
              onKeyDown={(e) => {
                const idx = FOUNDATIONS.findIndex((x) => x.id === active);
                if (e.key === 'ArrowRight') { e.preventDefault(); const n = FOUNDATIONS[(idx + 1) % FOUNDATIONS.length]; selectTab(n.id); (document.getElementById(`foundation-tab-${n.id}`) as HTMLButtonElement)?.focus(); }
                if (e.key === 'ArrowLeft') { e.preventDefault(); const n = FOUNDATIONS[(idx - 1 + FOUNDATIONS.length) % FOUNDATIONS.length]; selectTab(n.id); (document.getElementById(`foundation-tab-${n.id}`) as HTMLButtonElement)?.focus(); }
              }}
              style={{
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                border: isActive ? '1.5px solid var(--turq)' : '1px solid var(--line)',
                background: 'var(--paper)',
                borderRadius: 14, padding: 26, position: 'relative', overflow: 'hidden',
                boxShadow: isActive
                  ? '0 0 0 5px rgba(107,196,206,0.15), 0 12px 28px -18px rgba(7,58,83,0.35)'
                  : 'none',
                transition: 'border-color .18s, box-shadow .18s',
              }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: isActive ? 'var(--grad)' : 'var(--stone)',
                opacity: isActive ? 1 : 0.4,
              }} />
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline', marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-display-mono)', fontSize: 'var(--text-2xs)', color: isActive ? 'var(--turq)' : 'var(--ink-3)', letterSpacing: '.12em', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {isActive ? '◉ live demo ↓' : '○ try demo'}
                </span>
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--navy)', letterSpacing: '-0.01em', userSelect: 'text' }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--text-base)', color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.body}</p>
            </button>
          );
        })}
      </div>

      <div id="foundation-panel" role="tabpanel" aria-labelledby={`foundation-tab-${active}`} style={{ background: 'var(--pearl)', border: '1px solid var(--line)', borderRadius: 16, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--text-3xl)', fontWeight: 600, letterSpacing: '-0.015em', color: 'var(--navy)' }}>{node.demoHeading}</h3>
          </div>
        </div>
        <div key={active}>{node.demo}</div>

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
        .foundation-tabs button:focus-visible {
          outline: 2px solid var(--turq);
          outline-offset: 3px;
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
        .foundation-cta:focus-visible {
          outline: 2px solid var(--turq);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
