import { cx } from '../lib/cx'
import './Tag.css'

/** Tag — small square-cornered metadata chip. tone: neutral | accent | soft | outline */
export function Tag({ tone = 'neutral', className, children, ...rest }) {
  return (
    <span className={cx('ds-tag', `ds-tag--${tone}`, className)} {...rest}>
      {children}
    </span>
  )
}
