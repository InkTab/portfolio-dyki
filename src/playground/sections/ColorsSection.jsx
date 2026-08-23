import { useState } from 'react'
import { colorRamps, semanticTokens, surfaces } from '../../lib/tokens'
import { Block } from '../Specimen'

function Swatch({ name, value, cssVar }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(`var(${cssVar})`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button type="button" className="pg-swatch" onClick={copy} title={`Copy var(${cssVar})`}>
      <span className="pg-swatch__chip" style={{ background: value }} />
      <span className="pg-swatch__meta">
        <span className="pg-swatch__name">{name}</span>
        <span className="pg-swatch__value">{copied ? 'copied' : value}</span>
      </span>
    </button>
  )
}

export function ColorsSection() {
  return (
    <section className="pg-section" id="color">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Foundations</span>
        <h2 className="pg-section__title">Colour</h2>
        <p className="pg-section__lede">
          Two ramps, but not equal partners. Sand and ink carry the page; violet is the accent
          that marks actions, tints panels, and blooms behind sections. Click a swatch to copy its
          CSS variable.
        </p>
      </header>

      {colorRamps.map((ramp) => (
        <Block key={ramp.name} title={ramp.name} note={ramp.note}>
          <div className="pg-swatches">
            {ramp.steps.map(([name, value]) => (
              <Swatch
                key={name}
                name={name}
                value={value}
                cssVar={ramp.prefix ? `--ds-${ramp.prefix}-${name}` : `--ds-${name}`}
              />
            ))}
          </div>
        </Block>
      ))}

      <Block
        title="Semantic tokens"
        note="Components never reference a ramp directly — they read these, which are redefined per surface."
      >
        <div className="pg-semantic">
          {surfaces.map((s) => (
            <div className="pg-semantic__col" key={s.id} data-surface={s.id}>
              <span className="pg-semantic__title">{s.label}</span>
              {semanticTokens.map((group) => (
                <div className="pg-semantic__group" key={group.group}>
                  <span className="pg-semantic__group-name">{group.group}</span>
                  {group.names.map((name) => (
                    <div className="pg-semantic__row" key={name}>
                      <span className="pg-semantic__chip" style={{ background: `var(${name})` }} />
                      <code>{name}</code>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Block>
    </section>
  )
}
