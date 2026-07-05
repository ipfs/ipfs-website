export interface UseCase {
  brand: string;
  hue: number;
  title: string;
  body: string;
  linkLabel: string;
  // Short display string shown in the card footer (e.g., "atproto.com").
  link: string;
  // Full URL the card navigates to.
  href: string;
  // Optional brand logo (path under /public). Falls back to gradient + initials.
  logo?: string;
  // photo: optional portrait path under /public. Falls back to initials avatar.
  quote?: { who: string; role: string; text: string; photo?: string };
}

export interface UseCaseCategory {
  id: string;
  label: string;
  job: string;
  framing: string;
  cases: UseCase[];
}

export const categories: UseCaseCategory[] = [
  {
    id: 'social',
    label: 'Open social',
    job: 'Self-certifying data for the next wave of open networks.',
    framing: 'AT Protocol uses CIDs so anyone on the network can verify what they receive. No trusted server in the middle.',
    cases: [
      {
        brand: 'atproto', hue: 210,
        title: 'Self-verifying records for open social',
        body: 'AT Protocol identifies every post, repo, and event by CID, so any client can verify what it received without trusting the server that delivered it.',
        linkLabel: 'How atproto uses CIDs', link: 'atproto.com', href: 'https://atproto.com/specs/data-model#link-and-cid-formats',
        logo: '/brands/atproto.png',
      },
      {
        brand: 'Seed Hypermedia', hue: 165,
        title: 'Peer-to-peer hypermedia documents',
        body: 'Seed builds collaborative documents where every version, comment, and link is addressed by CID, durable across servers, editors, and time.',
        linkLabel: 'Visit Seed', link: 'seed.hyper.media', href: 'https://seed.hyper.media/',
        logo: '/brands/seed-hypermedia.png',
        quote: {
          who: 'Gabo H Beaumont', role: 'Co-Founder, Seed Hypermedia',
          text: 'It’s crucially important to have a distributed file system in our open hypertext system. IPFS is the missing piece that allows for a truly decentralized and open web.',
          photo: '/portraits/gabo-h-beaumont.webp',
        },
      },
      {
        brand: 'Anytype', hue: 255,
        title: 'Offline-native knowledge graphs',
        body: 'Anytype uses content addressing to let users build personal knowledge webs that sync peer to peer, with no server lock-in.',
        linkLabel: 'How they do it', link: 'doc.anytype.io', href: 'https://doc.anytype.io/',
        logo: '/brands/anytype.png',
      },
    ],
  },
  {
    id: 'science',
    label: 'Open science',
    job: 'Verifiable, citable datasets across labs, borders, and field sites.',
    framing: 'Hash-anchored measurements that any colleague, reviewer, or citizen can re-fetch and re-verify, regardless of institution or bandwidth.',
    cases: [
      {
        brand: 'ORCESTRA', hue: 35,
        title: 'Verifiable scientific datasets across institutions',
        body: 'The ORCESTRA atmospheric campaign uses IPFS to share verifiable, accessible datasets across research institutions worldwide.',
        linkLabel: 'Case study', link: 'docs.ipfs.tech', href: 'https://docs.ipfs.tech/case-studies/orcestra/',
        logo: '/brands/orcestra.svg',
        quote: {
          who: 'Tobias Kölling', role: 'Max Planck Institute for Meteorology',
          text: 'Our local data infrastructure was stuck in customs. We set up IPFS on notebooks and a Raspberry Pi, and suddenly all scientists could sync, share, and collaborate, with automatic uploads back to Hamburg whenever the connection returned.',
          photo: '/portraits/tobias-kolling.webp',
        },
      },
      {
        brand: 'GainForest', hue: 130,
        title: 'Provable rainforest monitoring',
        body: 'GainForest hashes on-the-ground forest measurements and pins them publicly, so funders, scientists, and communities can audit conservation outcomes themselves.',
        linkLabel: 'See GainForest', link: 'gainforest.app', href: 'https://gainforest.app/',
      },
    ],
  },
  {
    id: 'publishing',
    label: 'Resilient web publishing',
    job: 'Sovereign, peer-to-peer publishing on Mainnet tooling.',
    framing: 'Publish once, reference forever. The site survives a host outage, a takedown, or a country-wide block.',
    cases: [
      {
        brand: 'HIN', hue: 270,
        title: 'Secure healthcare messaging for Switzerland',
        body: 'HIN runs the encrypted messaging backbone between Swiss doctors and patients. Every message is sharded into cryptographic fragments and distributed across an IPFS swarm, with no central database to breach. 700,000 messages a month, up from 350,000 last year.',
        linkLabel: 'Read the case study', link: 'vereign.com/use-cases/hin', href: 'https://vereign.com/use-cases/hin/',
        quote: {
          who: 'Georg Greve', role: 'CEO and Co-founder, Vereign',
          text: 'There is no central point of compromise anymore. There is no database that can be hacked, because the data just doesn’t exist, even in encrypted form, in one place anywhere. It only comes together at the edge device of the patient.',
          photo: '/portraits/georg-grev.jpg',
        },
      },
      {
        brand: 'Wikipedia', hue: 220,
        title: 'Restore a censored encyclopedia',
        body: 'When the government of Turkey blocked Wikipedia, a copy was posted to IPFS, restoring access for millions of readers.',
        linkLabel: 'Read the story', link: 'observer.com', href: 'https://observer.com/2017/05/turkey-blocks-wikipedia-ipfs/',
        logo: '/brands/wikipedia.png',
      },
      {
        brand: 'Snapshot', hue: 48,
        title: 'Permanent, public DAO records',
        body: 'Snapshot uses IPFS to publicly record every proposal, vote, and result for more than 9,000 web3 projects and DAOs.',
        linkLabel: 'Case study', link: 'docs.ipfs.tech', href: 'https://docs.ipfs.tech/case-studies/snapshot/',
        logo: '/brands/snapshot.png',
        quote: {
          who: 'Fabien', role: 'Founder and CEO, Snapshot Labs',
          text: 'IPFS is the standard for storing data in a verifiable and fully transparent way, thereby allowing us to build openly auditable governance systems.',
        },
      },
    ],
  },
  {
    id: 'iot',
    label: 'IoT data & streaming',
    job: 'Lightweight private swarms with iroh-blobs and embedded IPFS.',
    framing: 'Move bytes between sensors, satellites, factories, and games, with cryptographic guarantees and no central broker.',
    cases: [
      {
        brand: 'WeatherXM', hue: 200,
        title: 'Crowdsourced weather, verified at the edge',
        body: 'WeatherXM ships smart weather vanes with IPFS clients so thousands of stations can collaboratively share atmospheric data.',
        linkLabel: 'Watch presentation', link: 'youtube.com', href: 'https://www.youtube.com/watch?v=Y2VgbDS1Hak',
        logo: '/brands/weatherxm.png',
      },
      {
        brand: '3S Studios', hue: 340,
        title: 'Fast game asset delivery for superfans',
        body: '3S Studios built an IPFS plugin for Unity that reduced game content from 2 GB to 40 MB, then streamed updates over the swarm.',
        linkLabel: 'Their story', link: 'blog.ipfs.tech', href: 'https://blog.ipfs.tech/2022-11-15-3s-studio/',
        logo: '/brands/3s.png',
      },
    ],
  },
  {
    id: 'media',
    label: 'Tamperproof media',
    job: 'Integrity for journalism, art, and field evidence.',
    framing: 'A CID is a fingerprint. Anchor a photograph, a dataset, or a research artifact, and prove later that nothing was altered.',
    cases: [
      {
        brand: 'Starling Lab', hue: 12,
        title: 'Authenticate human-rights evidence',
        body: 'Starling Lab anchors photos, videos, and documents to CIDs so journalists, archivists, and prosecutors can prove integrity over time.',
        linkLabel: 'See their work', link: 'starlinglab.org', href: 'https://www.starlinglab.org/',
      },
      {
        brand: 'Nancy Baker Cahill', hue: 15,
        title: 'A permanent home for digital art',
        body: 'Nancy Baker Cahill stores all her full-resolution art assets on IPFS via NFT.storage. Each work with its own CID.',
        linkLabel: 'Watch her presentation', link: 'youtube.com', href: 'https://www.youtube.com/watch?v=K2zVNcn6CIU',
        quote: {
          who: 'Nancy Baker Cahill', role: 'Artist',
          text: 'It was such a relief to know I could store my videos in one place, each with its own IPFS URL and CID. Resilience is important to me, and having the work backed up means it’ll be around for a long time.',
          photo: '/portraits/nancy-baker-cahill.webp',
        },
      },
    ],
  },
];
