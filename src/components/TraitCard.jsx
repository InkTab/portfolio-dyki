import { cx } from '../lib/cx'
import './TraitCard.css'

/**
 * TraitCard — the rule-topped column used for the four "how I work" traits
 * ("Creative Problem Solver — Finds elegant solutions in chaotic systems.").
 */
export function TraitCard({ index, title, children, className, ...rest }) {
  return (
    <article className={cx('ds-trait', className)} {...rest}>
      {index && <span className="ds-trait__index">{index}</span>}
      <h3 className="ds-trait__title">{title}</h3>
      <p className="ds-trait__body">{children}</p>
    </article>
  )
}
