import { cx } from '../lib/cx'
import './Card.css'

/**
 * Card — the generic surface container.
 * variant: raised | outline | flat | soft   ·   pad: true | 'lg' | false
 */
export function Card({
  variant = 'raised',
  pad = true,
  interactive = false,
  as,
  className,
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'div')
  return (
    <Tag
      className={cx(
        'ds-card',
        `ds-card--${variant}`,
        pad === true && 'ds-card--pad',
        pad === 'lg' && 'ds-card--pad-lg',
        (interactive || rest.href) && 'ds-card--interactive',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Card.Header = function CardHeader({ className, children, ...rest }) {
  return <div className={cx('ds-card__header', className)} {...rest}>{children}</div>
}

Card.Body = function CardBody({ className, children, ...rest }) {
  return <div className={cx('ds-card__body', className)} {...rest}>{children}</div>
}

Card.Footer = function CardFooter({ className, children, ...rest }) {
  return <div className={cx('ds-card__footer', className)} {...rest}>{children}</div>
}
