import { cx } from '../lib/cx'
import './StatusDot.css'

/**
 * StatusDot — the "Available for hire" indicator in the nav bar.
 * status: available | busy | offline
 */
export function StatusDot({ status = 'available', pulse = true, className, children, ...rest }) {
  return (
    <span
      className={cx('ds-status', `ds-status--${status}`, pulse && 'ds-status--pulse', className)}
      {...rest}
    >
      <span className="ds-status__dot" aria-hidden="true" />
      {children}
    </span>
  )
}
