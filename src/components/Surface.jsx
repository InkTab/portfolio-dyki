import { cx } from '../lib/cx'
import './Surface.css'

/**
 * Surface — re-themes everything inside it by swapping the semantic tokens.
 * surface: violet | sand | ink
 */
export function Surface({ surface = 'violet', pad, as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag
      data-surface={surface}
      className={cx('ds-surface', pad === true && 'ds-surface--pad', pad === 'lg' && 'ds-surface--pad-lg', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
