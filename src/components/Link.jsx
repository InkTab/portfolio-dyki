import { cx } from '../lib/cx'
import './Link.css'

/**
 * Link — picks up the site's wavy purple underline on hover.
 * tone: default | muted   ·   font: sans | mono
 */
export function Link({ tone, font = 'sans', underlined = false, className, children, ...rest }) {
  return (
    <a
      className={cx(
        'ds-link',
        tone === 'muted' && 'ds-link--muted',
        font === 'mono' && 'ds-link--mono',
        underlined && 'ds-link--underlined',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
