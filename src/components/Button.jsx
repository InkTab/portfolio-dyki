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
  return (
    <Tag
      className={cx(
        'ds-button',
        `ds-button--${variant}`,
        `ds-button--${size}`,
        block && 'ds-button--block',
        className,
      )}
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
