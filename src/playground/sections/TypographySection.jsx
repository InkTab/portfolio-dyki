import { typeScale } from '../../lib/tokens'
import { Block } from '../Specimen'

const families = [
  {
    name: 'NAMU 1600',
    role: 'Display',
    css: '--ds-font-display',
    note: 'Weight 200 only, always uppercase, tracking −0.02em. The brand voice — use it big and rarely.',
    sample: 'MEET TETIANA',
    style: { fontFamily: 'var(--ds-font-display)', fontWeight: 200, textTransform: 'uppercase', letterSpacing: '-0.02em', fontSize: 'var(--ds-text-display-md)' },
  },
  {
    name: 'Albert Sans',
    role: 'Text',
    css: '--ds-font-sans',
    note: 'Light 300 for body copy, 400/500 for emphasis. Everything a person actually reads.',
    sample: 'the human-centered product designer that tames high complexity flows',
    style: { fontFamily: 'var(--ds-font-sans)', fontWeight: 300, fontSize: 'var(--ds-text-body-lg)' },
  },
  {
    name: 'Roboto Mono',
    role: 'Label',
    css: '--ds-font-mono',
    note: 'Uppercase with +0.02em tracking. Every label, ticker cell, button, and timestamp.',
    sample: 'SINCE JULY 2019 — 60+ PROJECTS',
    style: { fontFamily: 'var(--ds-font-mono)', fontSize: 'var(--ds-text-label)', textTransform: 'uppercase', letterSpacing: '0.02em' },
  },
]

export function TypographySection() {
  return (
    <section className="pg-section" id="type">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Foundations</span>
        <h2 className="pg-section__title">Typography</h2>
        <p className="pg-section__lede">
          Three families with strictly separate jobs. If a piece of text is not a headline and not
          a sentence, it is a mono label.
        </p>
      </header>

      <Block title="Families">
        <div className="pg-families">
          {families.map((f) => (
            <div className="pg-family" key={f.name}>
              <div className="pg-family__meta">
                <span className="pg-family__role">{f.role}</span>
                <span className="pg-family__name">{f.name}</span>
                <code className="pg-family__css">{f.css}</code>
                <p className="pg-family__note">{f.note}</p>
              </div>
              <div className="pg-family__sample" style={f.style}>{f.sample}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Scale" note="Display sizes are fluid and clamp between the listed bounds.">
        <div className="pg-scale">
          {typeScale.map((row) => (
            <div className="pg-scale__row" key={row.token}>
              <div className="pg-scale__meta">
                <span className="pg-scale__label">{row.label}</span>
                <code>{row.token}</code>
                <span className="pg-scale__size">{row.size} · {row.font}</span>
              </div>
              <div
                className="pg-scale__sample"
                style={{
                  fontSize: `var(${row.token})`,
                  fontFamily: row.font.startsWith('NAMU')
                    ? 'var(--ds-font-display)'
                    : row.font.startsWith('Roboto')
                      ? 'var(--ds-font-mono)'
                      : 'var(--ds-font-sans)',
                  fontWeight: row.font.startsWith('NAMU') ? 200 : 300,
                  textTransform: row.font.startsWith('NAMU') || row.font.startsWith('Roboto') ? 'uppercase' : 'none',
                  letterSpacing: row.font.startsWith('NAMU') ? '-0.02em' : '0.02em',
                  lineHeight: 1.1,
                }}
              >
                {row.sample}
              </div>
            </div>
          ))}
        </div>
      </Block>
    </section>
  )
}
