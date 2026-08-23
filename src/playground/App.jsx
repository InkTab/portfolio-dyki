import { useEffect, useState } from 'react'
import { ColorsSection } from './sections/ColorsSection'
import { TypographySection } from './sections/TypographySection'
import { ScaleSection } from './sections/ScaleSection'
import { SurfacesSection } from './sections/SurfacesSection'
import { TextureSection } from './sections/TextureSection'
import { CoreSection } from './sections/CoreSection'
import { PatternsSection } from './sections/PatternsSection'
import { BarsSection } from './sections/BarsSection'
import './playground.css'

const NAV = [
  {
    group: 'Foundations',
    items: [
      { id: 'color', label: 'Colour' },
      { id: 'type', label: 'Typography' },
      { id: 'scale', label: 'Space, shape & motion' },
      { id: 'surfaces', label: 'Surfaces' },
      { id: 'texture', label: 'Texture & decoration' },
    ],
  },
  {
    group: 'Components',
    items: [
      { id: 'core', label: 'Core' },
      { id: 'patterns', label: 'Patterns' },
      { id: 'bars', label: 'Bars' },
    ],
  },
]

/** Highlights the nav entry for whichever section is nearest the top. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids.join(',')])

  return active
}

function Shell() {
  const ids = NAV.flatMap((g) => g.items.map((i) => i.id))
  const active = useActiveSection(ids)

  return (
    <div className="pg" data-surface="sand">
      <a className="pg-skip" href="#content">Skip to content</a>

      <aside className="pg-sidebar">
        <div className="pg-sidebar__brand">
          <span className="pg-sidebar__mark">DYKI</span>
          <span className="pg-sidebar__sub">Design system</span>
          <span className="pg-sidebar__version">v0.1 · playground</span>
        </div>

        <nav className="pg-nav" aria-label="Sections">
          {NAV.map((group) => (
            <div className="pg-nav__group" key={group.group}>
              <span className="pg-nav__group-name">{group.group}</span>
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="pg-nav__link"
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <p className="pg-sidebar__foot">
          Tokens extracted from the live build of dyki.design.
        </p>
      </aside>

      <main className="pg-main" id="content">
        <header className="pg-masthead">
          <div className="pg-masthead__head">
            <h1 className="pg-masthead__title">Design system</h1>
            <p className="pg-masthead__lede">
            The component library behind the portfolio. Sand and ink are the primaries; violet is
            the accent. Every component is unstyled by surface — it inherits colour from whatever{' '}
            <code>data-surface</code> wraps it, so the same button works on all three without a
              variant prop.
            </p>
          </div>
        </header>

        <ColorsSection />
        <TypographySection />
        <ScaleSection />
        <SurfacesSection />
        <TextureSection />
        <CoreSection />
        <PatternsSection />
        <BarsSection />

        <footer className="pg-foot">
          <span>DYKI design system</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  )
}

export function App() {
  return <Shell />
}
