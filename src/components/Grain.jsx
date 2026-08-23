import { cx } from '../lib/cx'
import './Grain.css'

/**
 * Grain — the paper texture that sits over a section (or the whole viewport,
 * with fixed). Purely visual and never interactive.
 *
 * Either render <Grain /> inside a positioned container, or add the
 * `.ds-grain` class to that container for the same effect with no extra node.
 */
export function Grain({ fixed = false, opacity, className, style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={cx('ds-grain-layer', fixed && 'ds-grain-layer--fixed', className)}
      style={{ ...(opacity != null ? { '--ds-grain-opacity': opacity } : null), ...style }}
      {...rest}
    />
  )
}
