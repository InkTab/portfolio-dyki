import { useRef } from 'react'
import { spaceScale, radiusScale, durationTokens, easeTokens } from '../../lib/tokens'
import { Col, Grid } from '../../components'
import { Block } from '../Specimen'

export function ScaleSection() {
  return (
    <section className="pg-section" id="scale">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Foundations</span>
        <h2 className="pg-section__title">Space, shape & motion</h2>
        <p className="pg-section__lede">
          A 4px base scale, near-square corners, and one decelerating easing curve. The site is
          built from hairlines and hard edges — resist rounding things.
        </p>
      </header>

      <Block
        title="Layout grid"
        note="Six columns, 24px gutter, 24px margin. Columns step 6 → 3 → 1 at 1024px and 640px, and spans clamp with them. Every multi-column layout in the system sits on this — nothing declares its own track list."
      >
        <Grid className="pg-gridspec">
          {Array.from({ length: 6 }, (_, i) => (
            <Col key={i} className="pg-gridspec__col">
              <span>{i + 1}</span>
            </Col>
          ))}
        </Grid>

        <Grid className="pg-gridspec pg-gridspec--spans">
          <Col span={2} className="pg-gridspec__span">span 2</Col>
          <Col span={4} className="pg-gridspec__span">span 4</Col>
          <Col span={3} className="pg-gridspec__span">span 3</Col>
          <Col span={3} className="pg-gridspec__span">span 3</Col>
          <Col span={6} className="pg-gridspec__span">span 6</Col>
        </Grid>
      </Block>

      <Block title="Space" note="Gaps and padding step through this scale. 42 and 94 are inherited from the live layout.">
        <div className="pg-spaces">
          {spaceScale.map(([token, px]) => (
            <div className="pg-space" key={token}>
              <span className="pg-space__bar" style={{ width: `var(${token})` }} />
              <code>{token}</code>
              <span className="pg-space__px">{px}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Radius" note="2px is the house corner. Pills are reserved for chips and tag-style buttons.">
        <div className="pg-radii">
          {radiusScale.map(([token, value]) => (
            <div className="pg-radius" key={token}>
              <span className="pg-radius__box" style={{ borderRadius: `var(${token})` }} />
              <code>{token}</code>
              <span className="pg-radius__value">{value}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="Motion"
        note="Press play to run every row at once — the point is comparing them side by side, not one at a time. Easing rows all run at 700ms so the shape of the curve is actually visible."
      >
        <MotionDemo />
      </Block>
    </section>
  )
}

/**
 * Fires every track simultaneously so durations and curves can be compared
 * directly.
 *
 * This drives the Web Animations API rather than toggling a CSS transition.
 * The transition approach could not actually replay: resetting the flag sent
 * every dot travelling *backwards* to the start, and the return trip collided
 * with the next run, so pressing replay only produced a twitch. `.animate()`
 * cancels and restarts cleanly every time.
 */
function MotionDemo() {
  const trackRefs = useRef([])

  const rows = [
    ...durationTokens.map(([token, value, use]) => ({
      token, value, use, duration: parseInt(value, 10), easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    })),
    ...easeTokens.map(([token, value, use]) => ({
      token, value, use, duration: 700, easing: value,
    })),
  ]

  const play = () => {
    trackRefs.current.forEach((dot, i) => {
      if (!dot) return
      const row = rows[i]
      const distance = dot.parentElement.clientWidth - dot.offsetWidth - 2
      dot.getAnimations().forEach((a) => a.cancel())
      dot.animate(
        [{ transform: 'translateX(0)' }, { transform: `translateX(${distance}px)` }],
        { duration: row.duration, easing: row.easing, fill: 'forwards' },
      )
    })
  }

  let index = 0
  const renderRow = (row) => {
    const i = index++
    return (
      <div className="pg-motion__row" key={row.token}>
        <code>{row.token}</code>
        <span className="pg-motion__value">{row.value}</span>
        <span className="pg-motion__use">{row.use}</span>
        <span className="pg-motion__track">
          <span className="pg-motion__dot" ref={(el) => (trackRefs.current[i] = el)} />
        </span>
      </div>
    )
  }

  return (
    <div className="pg-motion">
      <button type="button" className="pg-motion__play" onClick={play}>
        Play ▸
      </button>

      <span className="pg-motion__group-name">Duration — all on the default curve</span>
      {rows.slice(0, durationTokens.length).map(renderRow)}

      <span className="pg-motion__group-name">Easing — all at 700ms</span>
      {rows.slice(durationTokens.length).map(renderRow)}
    </div>
  )
}
