import { cx } from '../lib/cx'
import './Grain.css'

/**
 * Grain — the paper texture under a section (or the whole viewport, with
 * `fixed`). Purely visual and never interactive.
 *
 * It sits BELOW content: an overlay blend over text eats up to 1.5:1 of
 * contrast, which the muted text tier cannot spare. Pass `over` for the rare
 * case where the grain should dither the thing above it — artwork, a gradient
 * — and never put text under that.
 *
 * Either render <Grain /> inside a positioned container, or add the
 * `.ds-grain` class to that container for the same effect with no extra node.
 */
export function Grain({ fixed = false, over = false, opacity, className, style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'ds-grain-layer',
        fixed && 'ds-grain-layer--fixed',
        over && 'ds-grain-layer--over',
        className,
      )}
      style={{ ...(opacity != null ? { '--ds-grain-opacity': opacity } : null), ...style }}
      {...rest}
    />
  )
}
