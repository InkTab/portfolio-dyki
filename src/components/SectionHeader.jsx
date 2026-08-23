import { cx } from '../lib/cx'
import { Heading } from './Text'
import './SectionHeader.css'

/**
 * SectionHeader — mono eyebrow with a trailing rule, a NAMU display title,
 * and an optional lede. The standard opener for every page section.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  size = 'lg',
  align = 'start',
  as = 'h2',
  className,
  ...rest
}) {
  return (
    <header
      className={cx('ds-sectionheader', align === 'center' && 'ds-sectionheader--center', className)}
      {...rest}
    >
      {eyebrow && <span className="ds-sectionheader__eyebrow">{eyebrow}</span>}
      <Heading as={as} size={size}>{title}</Heading>
      {lede && <p className="ds-sectionheader__lede">{lede}</p>}
    </header>
  )
}
