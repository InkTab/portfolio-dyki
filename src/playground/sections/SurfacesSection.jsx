import { surfaces } from '../../lib/tokens'
import { Button, Heading, Label, Pill, Text } from '../../components'

export function SurfacesSection() {
  return (
    <section className="pg-section" id="surfaces">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Foundations</span>
        <h2 className="pg-section__title">Surfaces</h2>
        <p className="pg-section__lede">
          Sand and ink are the primaries — the paper and the black. Violet is an accent: it shows up
          as a highlight, a tint, or a gradient bloom, and gets at most one full-bleed band per page.
          Theming happens by nesting: drop <code>data-surface</code> on any element (or use the{' '}
          <code>&lt;Surface&gt;</code> component) and everything inside re-reads the semantic tokens.
        </p>
      </header>

      <div className="pg-surfaces">
        {surfaces.map((s) => (
          <div className="pg-surface-demo" data-surface={s.id} key={s.id}>
            <Label tone="muted">{s.id}</Label>
            <Heading size="sm">{s.label}</Heading>
            <Text size="sm" tone="muted">{s.hint}</Text>
            <div className="pg-surface-demo__row">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Pill size="sm">Chip</Pill>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
