import { cx } from '../lib/cx'
import './TickerBar.css'

/**
 * TickerBar — the divided stat strip that opens the site
 * ("SINCE JULY 2019 | 60+ PROJECTS | ECOMMERCE, SAAS & B2B").
 * Cells split evenly and stack on narrow screens.
 */
export function TickerBar({ items = [], bordered = false, className, ...rest }) {
  return (
    <div className={cx('ds-tickerbar', bordered && 'ds-tickerbar--bordered', className)} {...rest}>
      {items.map((item, i) => (
        <div className="ds-tickerbar__cell" key={typeof item === 'string' ? item : i}>
          {item}
        </div>
      ))}
    </div>
  )
}
