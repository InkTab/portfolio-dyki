import { cx } from '../lib/cx'
import './Link.css'

/**
 * Link — underlined at rest, picking up the site's wavy purple underline on
 * hover.
 *
 * underline:
 *   'always' (default) — the correct behaviour for a link inside prose. The
 *      link colour is the body colour, so the underline is the ONLY thing
 *      distinguishing it; without one, a link in a paragraph is invisible
 *      until hovered, which fails WCAG 1.4.1 (Use of Colour).
 *   'hover' — for links whose position already identifies them as links: nav
 *      rows, footer columns, card CTAs. Never use it in running text.
 *
 * tone: default | muted   ·   font: sans | mono
 */
export function Link({ tone, font = 'sans', underline = 'always', className, children, ...rest }) {
  return (
    <a
      className={cx(
        'ds-link',
        tone === 'muted' && 'ds-link--muted',
        font === 'mono' && 'ds-link--mono',
        underline === 'hover' && 'ds-link--bare',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
