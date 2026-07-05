import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { categories, type UseCase } from '../../data/stories';

const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();

export default function UseCasesTabs() {
  const [active, setActive] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const railRef = useRef<HTMLDivElement>(null);

  // Measure the active tab so the underline indicator matches its width.
  useEffect(() => {
    const measure = () => {
      const rail = railRef.current;
      if (!rail) return;
      const tab = rail.querySelectorAll<HTMLButtonElement>('[data-tab]')[active];
      if (!tab) return;
      setIndicator({ left: tab.offsetLeft, width: tab.offsetWidth });
    };
    measure();
    // Mono fonts often shift after they finish loading. Re-measure once they do.
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  // Mark hydrated so the static fallback underline yields to the moving indicator.
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Center the chosen tab when the rail overflows on small screens.
  useEffect(() => {
    if (!hydrated) return;
    const rail = railRef.current;
    if (!rail) return;
    const tab = rail.querySelectorAll<HTMLButtonElement>('[data-tab]')[active];
    if (!tab) return;
    if (rail.scrollWidth > rail.clientWidth) {
      tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  }, [active, hydrated]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((a) => (a + 1) % categories.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((a) => (a - 1 + categories.length) % categories.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(categories.length - 1);
    }
  };

  const cat = categories[active];

  return (
    <div className="uc-shell">
      <div
        ref={railRef}
        className={`uc-tabs-rail${hydrated ? ' is-hydrated' : ''}`}
        role="tablist"
        aria-label="Use case categories"
        onKeyDown={onKeyDown}
      >
        {categories.map((c, i) => {
          const isActive = i === active;
          return (
            <button
              key={c.id}
              type="button"
              data-tab
              role="tab"
              id={`uc-tab-${c.id}`}
              aria-selected={isActive}
              aria-controls={`uc-panel-${c.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`uc-tab${isActive ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="uc-tab-label">{c.label}</span>
            </button>
          );
        })}
        <span
          className="uc-indicator"
          aria-hidden="true"
          style={{
            transform: `translate3d(${indicator.left}px, 0, 0)`,
            width: indicator.width,
          }}
        />
      </div>

      <div
        key={cat.id}
        className="uc-panel"
        role="tabpanel"
        id={`uc-panel-${cat.id}`}
        aria-labelledby={`uc-tab-${cat.id}`}
      >
        <div className="uc-head">
          <h3 className="uc-job">{cat.job}</h3>
          <p className="uc-framing">{cat.framing}</p>
        </div>

        <div className="uc-grid">
          {cat.cases.map((card, i) => (
            <Card key={`${cat.id}-${card.brand}`} card={card} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ card, index }: { card: UseCase; index: number }) {
  // Tint the logo background and border with the brand hue so cards stay visually distinct
  // even when the logo PNG itself is monochrome.
  const logoStyle: CSSProperties = {
    background: `hsl(${card.hue} 35% 96%)`,
    border: `1px solid hsl(${card.hue} 35% 82%)`,
  };
  const gradientStyle: CSSProperties = {
    background: `linear-gradient(135deg, hsl(${card.hue} 55% 45%) 0%, hsl(${(card.hue + 30) % 360} 55% 30%) 100%)`,
  };
  return (
    <a
      className="story-card"
      href={card.href}
      target="_blank"
      rel="noopener"
      style={{ '--i': index } as CSSProperties}
    >
      <div className="story-card-head">
        {card.logo ? (
          <div className="story-card-mark story-card-mark-logo" style={logoStyle}>
            <img src={card.logo} alt={`${card.brand} logo`} loading="lazy" />
          </div>
        ) : (
          <div className="story-card-mark" style={gradientStyle}>
            {initials(card.brand)}
          </div>
        )}
        <div className="story-card-brand">{card.brand}</div>
      </div>
      <h4 className="story-card-title">{card.title}</h4>
      <p className="story-card-body">{card.body}</p>

      <div className="mono story-card-footer">
        <span>↗ {card.linkLabel}</span>
        <span className="story-card-link">{card.link}</span>
      </div>
    </a>
  );
}
