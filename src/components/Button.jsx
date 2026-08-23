import { cx } from '../lib/cx'
import './Button.css'

/**
 * Button — mono, uppercase, 2px corners by default.
 *
 * variant: solid | outline | ghost | link
 * size:    sm | md | lg
 */
export function Button({
  variant = 'solid',
  size = 'md',
  as,
  arrow = false,
  block = false,
  className,
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'button')
  // A <button> with no type attribute defaults to type="submit", so any
  // secondary action dropped into a form would submit it. Only real <button>
  // elements take the attribute, and an explicit `type` still wins.
  const typeAttr = Tag === 'button' ? { type: 'button' } : null
  return (
    <Tag
      className={cx(
        'ds-button',
        `ds-button--${variant}`,
        `ds-button--${size}`,
        block && 'ds-button--block',
        className,
      )}
      {...typeAttr}
      {...rest}
    >
      {children}
      {arrow && (
        <span className="ds-button__arrow" aria-hidden="true">
          →
        </span>
      )}
    </Tag>
  )
}
