import { cx } from '../lib/cx'
import './MetaList.css'

/**
 * MetaList — the label/value rows used for "CURRENTLY / ALWAYS / RECENT /
 * EARLIER" and for a case study's INPUT / OUTPUT fields.
 *
 * items:  [{ term, description }]
 * layout: inline (label in a left column) | stacked
 */
export function MetaList({ items = [], layout = 'inline', className, ...rest }) {
  return (
    <dl className={cx('ds-metalist', `ds-metalist--${layout}`, className)} {...rest}>
      {items.map((item) => (
        <div className="ds-metalist__row" key={item.term}>
          <dt className="ds-metalist__term">{item.term}</dt>
          <dd className="ds-metalist__desc">{item.description}</dd>
        </div>
      ))}
    </dl>
  )
}
