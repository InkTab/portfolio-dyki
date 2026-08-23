import { cx } from '../lib/cx'

/**
 * Grid — the six-column layout grid. 24px gutter, 24px page margin.
 *
 * Nothing in this system declares its own track list; multi-column layouts
 * compose <Grid> and <Col> so every edge lines up with every other edge.
 *
 * Columns step 6 → 3 → 1 at 1024px and 640px, and spans clamp with them.
 */
export function Grid({ as: Tag = 'div', rowGap, className, style, children, ...rest }) {
  return (
    <Tag
      className={cx('ds-grid', className)}
      style={{ ...(rowGap ? { '--ds-grid-row-gap': rowGap } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Col — a span of the grid. `span` is 1–6; `start` pins it to a column.
 */
export function Col({ span = 1, start, as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cx(`ds-col-${span}`, start && `ds-col-start-${start}`, className)} {...rest}>
      {children}
    </Tag>
  )
}
