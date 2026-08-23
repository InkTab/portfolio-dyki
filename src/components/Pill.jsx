import { cx } from '../lib/cx'
import './Pill.css'

/**
 * Pill — the fully rounded outline chip under the hero headline
 * ("EMOTIONALLY INTELLIGENT DESIGN"). Also works as a filter toggle.
 *
 * variant: outline | solid | soft   ·   size: sm | md
 */
export function Pill({
  variant = 'outline',
  size = 'md',
  selected = false,
  onClick,
  className,
  children,
  ...rest
}) {
  const interactive = Boolean(onClick)
  const Tag = interactive ? 'button' : 'span'
  return (
    <Tag
      className={cx(
        'ds-pill',
        `ds-pill--${variant}`,
        size === 'sm' && 'ds-pill--sm',
        interactive && 'ds-pill--interactive',
        selected && 'ds-pill--selected',
        className,
      )}
      onClick={onClick}
      {...(interactive ? { type: 'button', 'aria-pressed': selected } : {})}
      {...rest}
    >
      {children}
    </Tag>
  )
}
