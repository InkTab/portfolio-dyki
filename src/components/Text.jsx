import { cx } from '../lib/cx'
import './Text.css'

/**
 * Display heading — NAMU 1600, always uppercase.
 * This is the voice of the brand; use it sparingly and large.
 */
export function Heading({ as: Tag = 'h2', size = 'md', className, children, ...rest }) {
  return (
    <Tag className={cx('ds-heading', `ds-heading--${size}`, className)} {...rest}>
      {children}
    </Tag>
  )
}

/** Body copy — Albert Sans Light. */
export function Text({ as: Tag = 'p', size = 'md', tone, className, children, ...rest }) {
  return (
    <Tag
      className={cx('ds-text', `ds-text--${size}`, tone && `ds-text--${tone}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Mono label — the small uppercase caption that runs through the whole site
 * (ticker cells, card field names, footer meta).
 */
export function Label({ as: Tag = 'span', size = 'md', tone, className, children, ...rest }) {
  return (
    <Tag
      className={cx('ds-label', size === 'sm' && 'ds-label--sm', tone && `ds-label--${tone}`, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
