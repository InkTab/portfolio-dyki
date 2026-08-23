import { Label, NavBar, StatusDot, TickerBar } from '../../components'
import { Specimen } from '../Specimen'

export function BarsSection() {
  return (
    <section className="pg-section" id="bars">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Components</span>
        <h2 className="pg-section__title">Bars</h2>
        <p className="pg-section__lede">
          Full-bleed strips. These are the pieces that give the site its instrument-panel feel.
        </p>
      </header>

      <Specimen
        name="TickerBar"
        note="Evenly split cells with hairline dividers. Stacks when the bar is under 720px wide."
        padded={false}
      >
        <TickerBar items={['Since July 2019', '60+ Projects', 'Ecommerce, SaaS & B2B']} />
        <TickerBar
          bordered
          items={[
            'Toronto / remote',
            <StatusDot key="s" status="available">Available for hire</StatusDot>,
            'letstalk@dyki.design',
          ]}
        />
      </Specimen>

      <Specimen
        name="NavBar"
        note="Brand lockup, links, live Toronto time, availability. Container-query driven — the links drop to their own row when the bar is under 780px."
        padded={false}
      >
        <NavBar
          links={[
            { label: 'About me', href: '#bars' },
            { label: 'Case Studies', href: '#bars' },
            { label: 'Get in Touch', href: '#bars' },
          ]}
          status="Available for hire"
        />
      </Specimen>

      <Specimen
        name="Footer composition"
        note="How the live page closes."
        padded={false}
      >
        <TickerBar
          bordered
          items={[
            <Label key="a">letstalk@dyki.design</Label>,
            <Label key="b">Download CV</Label>,
            <Label key="c" tone="muted">Launched 2026 · v6.2</Label>,
          ]}
        />
      </Specimen>
    </section>
  )
}
