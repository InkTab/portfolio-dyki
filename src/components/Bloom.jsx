import { cx } from '../lib/cx'
import './Bloom.css'

/**
 * Named sharpness levels, so a bloom can be specified in conversation and in
 * code with the same word. A raw percentage still works for one-offs.
 */
export const SHARPNESS = {
  feathered: '0%',   // no hold at all — fades from the leading edge
  soft: '15%',
  balanced: '30%',
  defined: '45%',
  hard: '60%',       // holds most of the shape, then drops away fast
}

/**
 * Bloom — a gradient decoration with a directional falloff. The leading edge
 * keeps the shape's own crisp boundary; the far edge dissolves along the axis,
 * dithered with grain.
 *
 * Deliberately restrained: this is punctuation, not a background treatment.
 *
 * axis:      direction the falloff runs — 'to bottom', '135deg', …
 *            The sharp edge is where the axis starts.
 * sharpness: how far along the axis the shape stays at full strength. Takes a
 *            named level — feathered / soft / balanced / defined / hard — or a
 *            raw percentage.
 * grain:     intensity only — grain cannot be switched off. Every gradient in
 *            this system is grained; a clean one bands on the warm ground and
 *            reads as a different material from everything else.
 * ratio:     aspect ratio, so a bloom can be a long smear rather than a disc.
 * radius:    any CSS radius — circle by default, but a square-ish bloom with a
 *            2px corner reads very differently.
 */
export function Bloom({
  size = '320px',
  axis = 'to bottom',
  sharpness = 'balanced',
  intensity = 'base',
  ratio,
  radius,
  grain = 0.4,
  className,
  style,
  ...rest
}) {
  return (
    <div
      aria-hidden="true"
      className={cx('ds-bloom', intensity !== 'base' && `ds-bloom--${intensity}`, className)}
      style={{
        '--ds-bloom-size': size,
        '--ds-bloom-axis': axis,
        '--ds-bloom-sharpness': SHARPNESS[sharpness] || sharpness,
        /* Floored, not optional — see the grain note above. */
        '--ds-bloom-grain': Math.min(1, Math.max(0.25, grain)),
        ...(ratio ? { '--ds-bloom-ratio': ratio } : null),
        ...(radius ? { '--ds-bloom-radius': radius } : null),
        ...style,
      }}
      {...rest}
    />
  )
}
