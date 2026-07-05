import { useState } from 'react'

type Lang = 'all' | 'node' | 'cli' | 'go' | 'typescript' | 'rust' | 'python' | 'java' | 'http' | 'other'

interface ToolChip {
  name: string
  link: string
  lang: Lang
}

interface Problem {
  label: string
  guidance: string
  tools: ToolChip[]
}

const LANG_META: Record<Lang, { label: string; color: string }> = {
  all: { label: 'All', color: 'var(--navy)' },
  node: { label: 'Node', color: '#64748B' },
  cli: { label: 'CLI', color: '#9333EA' },
  go: { label: 'Go', color: '#00ADD8' },
  typescript: { label: 'TypeScript', color: '#3178C6' },
  rust: { label: 'Rust', color: '#CE422B' },
  python: { label: 'Python', color: '#3776AB' },
  java: { label: 'Java', color: '#ED8B00' },
  http: { label: 'HTTP / API', color: 'var(--jade)' },
  other: { label: 'Other', color: '#A16207' },
}

const PROBLEMS: Problem[] = [
  {
    label: 'Use CIDs in your own stack',
    guidance:
      'Use DASL for simple content-addressed values; reach for full IPLD when you need linked data or Merkle structures. Boxo provides Go building blocks for CID handling and IPFS protocols.',
    tools: [
      { name: 'DASL', link: 'https://dasl.ing/', lang: 'http' },
      { name: 'Helia', link: 'https://helia.io/', lang: 'typescript' },
      { name: 'Boxo', link: 'https://github.com/ipfs/boxo', lang: 'go' },
      {
        name: 'js-multiformats',
        link: 'https://github.com/multiformats/js-multiformats',
        lang: 'typescript',
      },
      { name: 'rust-cid', link: 'https://github.com/multiformats/rust-cid', lang: 'rust' },
      { name: 'go-cid', link: 'https://github.com/ipfs/go-cid', lang: 'go' },
      { name: 'go-dasl', link: 'https://github.com/hyphacoop/go-dasl', lang: 'go' },
      { name: 'py-cid', link: 'https://github.com/ipld/py-cid', lang: 'python' },
      { name: 'java-cid', link: 'https://github.com/ipld/java-cid', lang: 'java' },
    ],
  },
  {
    label: 'Share data in a private network',
    guidance:
      'Run Kubo with a swarm key for a closed IPFS network, or use iroh-blobs for lightweight QUIC-native transfer.',
    tools: [
      { name: 'Kubo', link: 'https://github.com/ipfs/kubo', lang: 'node' },
      { name: 'Helia', link: 'https://helia.io/', lang: 'typescript' },
      { name: 'iroh-blobs', link: 'https://www.iroh.computer/', lang: 'rust' },
    ],
  },
  {
    label: 'Publish from your own node',
    guidance:
      'Run a Kubo or Helia node to pin and serve content; use ipfs-cluster for coordinated pinning across multiple nodes.',
    tools: [
      { name: 'IPFS Desktop', link: 'https://docs.ipfs.tech/install/ipfs-desktop/', lang: 'node' },
      { name: 'Kubo', link: 'https://github.com/ipfs/kubo', lang: 'node' },
      { name: 'Helia', link: 'https://helia.io/', lang: 'typescript' },
      { name: 'ipfs-cluster', link: 'https://ipfscluster.io/', lang: 'node' },
    ],
  },
  {
    label: 'Publish via a hosted service',
    guidance:
      'Upload to a pinning service, they handle replication, availability, and IPNI/DHT announcements.',
    tools: [
      { name: 'Pinata', link: 'https://pinata.cloud/', lang: 'http' },
      { name: 'Filebase', link: 'https://filebase.com/', lang: 'http' },
      { name: 'Filecoin.Cloud', link: 'https://filecoin.cloud/', lang: 'http' },
    ],
  },
  {
    label: 'Publish a content-addressed static website',
    guidance:
      'Drop ipfs-deploy-action into your CI pipeline to get a CID per build and pin it automatically. Omnipin offers one-click pinning via MetaMask.',
    tools: [
      { name: 'ipfs-deploy-action', link: 'https://github.com/ipshipyard/ipfs-deploy-action', lang: 'other' },
      { name: 'Omnipin', link: 'https://omnipin.eth.limo/', lang: 'cli' },
      { name: 'SimplePage', link: 'https://github.com/stigmergic-org/simplepage', lang: 'other' },
    ],
  },
  {
    label: 'Distribute signed release artifacts',
    guidance:
      'Publish binaries, model weights, or data sets as signed CIDs bound to their source git commit, seedable over iroh-blobs, HTTP, IPFS, and BitTorrent.',
    tools: [
      { name: 'radicle-artifact', link: 'https://crates.io/crates/radicle-artifact', lang: 'rust' },
    ],
  },
  {
    label: 'Verified retrieval in browsers',
    guidance:
      'Fetch and cryptographically verify IPFS content directly in the browser with no trusted gateway required.',
    tools: [
      {
        name: 'service-worker-gateway',
        link: 'https://github.com/ipfs/service-worker-gateway',
        lang: 'typescript',
      },
      {
        name: '@helia/verified-fetch',
        link: 'https://github.com/ipfs/helia-verified-fetch',
        lang: 'typescript',
      },
      { name: '@dasl/rasl', link: 'https://github.com/darobin/rasl', lang: 'typescript' },
    ],
  },
  {
    label: 'Archive & transfer with CAR files',
    guidance:
      'Pack content-addressed blocks into a single CAR (Content Addressable aRchive) file for storage or transfer; verifiable and self-describing.',
    tools: [
      { name: '@ipld/car', link: 'https://github.com/ipld/js-car', lang: 'typescript' },
      { name: 'go-car', link: 'https://github.com/ipld/go-car', lang: 'go' },
      { name: 'py-ipld-car', link: 'https://github.com/storacha/py-ipld-car', lang: 'python' },
      // No standalone maintained Rust CAR crate; rust-ipfs handles CAR internally.
      { name: 'rust-ipfs', link: 'https://github.com/dariusc93/rust-ipfs', lang: 'rust' },
    ],
  },
  {
    label: 'Encode IPLD data (DAG-CBOR / DAG-JSON)',
    guidance:
      'Serialize linked data with the DAG-CBOR and DAG-JSON codecs, the IPLD formats that give you deterministic encoding and CID links between blocks.',
    tools: [
      { name: 'js-dag-cbor', link: 'https://github.com/ipld/js-dag-cbor', lang: 'typescript' },
      { name: 'js-dag-json', link: 'https://github.com/ipld/js-dag-json', lang: 'typescript' },
      { name: 'serde_ipld_dagcbor', link: 'https://github.com/ipld/serde_ipld_dagcbor', lang: 'rust' },
      { name: 'serde_ipld_dagjson', link: 'https://github.com/ipld/serde_ipld_dagjson', lang: 'rust' },
      { name: 'rust-ipld-core', link: 'https://github.com/ipld/rust-ipld-core', lang: 'rust' },
      { name: 'go-ipld-prime', link: 'https://github.com/ipld/go-ipld-prime', lang: 'go' },
      { name: 'go-dasl', link: 'https://github.com/hyphacoop/go-dasl', lang: 'go' },
      { name: 'py-ipld-dag', link: 'https://github.com/ipld/py-ipld-dag', lang: 'python' },
      // dag-cbor only; no maintained Java dag-json codec found.
      { name: 'dag-cbor', link: 'https://github.com/Peergos/dag-cbor', lang: 'java' },
    ],
  },
  {
    label: 'Build UnixFS file trees',
    guidance:
      'Represent files and directories as IPLD with UnixFS, the data model behind chunked files and folders on IPFS.',
    tools: [
      { name: 'js-ipfs-unixfs', link: 'https://github.com/ipfs/js-ipfs-unixfs', lang: 'typescript' },
      { name: 'boxo/unixfs', link: 'https://github.com/ipfs/boxo/tree/main/ipld/unixfs', lang: 'go' },
      // Only actively maintained Rust UnixFS implementation; older repos are archived.
      { name: 'rust-ipfs', link: 'https://github.com/dariusc93/rust-ipfs/tree/libp2p-next/unixfs', lang: 'rust' },
    ],
  },
  {
    label: 'Debug & inspect retrieval',
    guidance:
      'Check whether a CID is retrievable, inspect its DAG, and test gateways and IPNS records when content is not resolving as expected.',
    tools: [
      { name: 'IPFS Check', link: 'https://check.ipfs.network/', lang: 'http' },
      { name: 'DAG inspector', link: 'https://dag.ipfs.tech/', lang: 'http' },
      { name: 'Gateway Checker', link: 'https://ipfs.github.io/public-gateway-checker/', lang: 'http' },
      { name: 'IPNS inspector', link: 'https://ipns.ipfs.network/', lang: 'http' },
    ],
  },
]

function chipOpacity(chipLang: Lang, active: Lang): number {
  if (active === 'all') return 1
  if (chipLang === active) return 1
  if (chipLang === 'http' || chipLang === 'node' || chipLang === 'cli' || chipLang === 'other') return 0.5
  if (chipLang === 'python' || chipLang === 'java') return 0.5
  return 0.2
}

function rowOpacity(tools: ToolChip[], active: Lang): number {
  if (active === 'all') return 1
  const agnostic = (l: Lang) =>
    l === 'http' || l === 'node' || l === 'cli' || l === 'other' || l === 'python' || l === 'java'
  return tools.some((t) => t.lang === active || agnostic(t.lang)) ? 1 : 0.35
}

export default function ToolsProblems() {
  const [active, setActive] = useState<Lang>('all')

  return (
    <>
      <div className="lf-bar" role="group" aria-label="Filter by language">
        {(Object.entries(LANG_META) as [Lang, (typeof LANG_META)[Lang]][]).map(([id, meta]) => {
          const isActive = id === active
          return (
            <button
              key={id}
              className={`lf-btn${isActive ? ' is-active' : ''}`}
              style={{ '--lc': meta.color } as React.CSSProperties}
              onClick={() => setActive(isActive && id !== 'all' ? 'all' : id)}
            >
              {id !== 'all' && <span className="lf-dot" aria-hidden="true" />}
              {meta.label}
            </button>
          )
        })}
      </div>

      <div className="tp-problems">
        {PROBLEMS.map((p) => (
          <div
            key={p.label}
            className="tp-row"
            style={{ opacity: rowOpacity(p.tools, active), transition: 'opacity .2s' }}
          >
            <div className="tp-label">{p.label}</div>
            <div className="tp-right">
              <p className="tp-guidance">{p.guidance}</p>
              <div className="tp-tools">
                {p.tools.map((t) => (
                  <a
                    key={t.name}
                    href={t.link}
                    target="_blank"
                    rel="noopener"
                    className="tp-chip"
                    style={
                      {
                        '--cc': LANG_META[t.lang].color,
                        opacity: chipOpacity(t.lang, active),
                        transition: 'opacity .2s, border-color .15s, background .15s, transform .15s',
                      } as React.CSSProperties
                    }
                  >
                    {t.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .lf-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }

        .lf-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 999px;
          cursor: pointer;
          font: inherit;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--ink-2);
          transition: border-color .15s, background .15s, color .15s;
        }
        .lf-btn:hover { border-color: var(--lc, var(--turq)); color: var(--navy); }
        .lf-btn.is-active {
          background: var(--lc, var(--navy-surface));
          border-color: var(--lc, var(--navy-surface));
          color: #fff;
        }

        .lf-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--lc);
          flex-shrink: 0;
          transition: background .15s;
        }
        .lf-btn.is-active .lf-dot { background: rgba(255,255,255,0.75); }

        .tp-problems { display: flex; flex-direction: column; }

        .tp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }
        .tp-row:first-child { border-top: 1px solid var(--line); }

        @media (max-width: 700px) {
          .tp-row { grid-template-columns: 1fr; gap: 10px; }
        }

        .tp-label {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--navy);
          letter-spacing: -0.01em;
          line-height: 1.35;
          padding-top: 3px;
        }

        .tp-right { display: flex; flex-direction: column; gap: 14px; }

        .tp-guidance {
          margin: 0;
          font-size: var(--text-base);
          color: var(--ink-2);
          line-height: 1.6;
        }

        .tp-tools { display: flex; flex-wrap: wrap; gap: 8px; }

        .tp-chip {
          display: inline-flex;
          align-items: center;
          padding: 5px 12px;
          background: var(--pearl);
          border: 1px solid var(--line);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--cc, var(--turq));
          text-decoration: none;
        }
        .tp-chip:hover {
          border-color: var(--cc, var(--turq));
          background: var(--paper);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  )
}
