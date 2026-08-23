import { useEffect, useState } from 'react'
import { cx } from '../lib/cx'
import { Link } from './Link'
import { StatusDot } from './StatusDot'
import './NavBar.css'

/**
 * Live local time in a given zone. Ticks on the minute boundary rather than
 * every 60s from mount, so it flips when the clock actually changes.
 */
function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone,
    }).format(new Date())

  const [time, setTime] = useState(format)

  useEffect(() => {
    let timer
    const tick = () => {
      setTime(format())
      const now = new Date()
      const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
      timer = setTimeout(tick, msToNextMinute)
    }
    tick()
    return () => clearTimeout(timer)
  }, [timeZone])

  return time
}

/**
 * NavBar — brand lockup, links, local time, availability status.
 *
 * links:    [{ label, href, current }]
 * status:   the availability label, e.g. "Available for hire"
 * statusKind: available | busy | offline — drives the dot colour
 * place:    what the clock is the local time OF, for the screen-reader prefix
 */
export function NavBar({
  name = 'Tetiana',
  role = 'Product Designer',
  links = [],
  timeZone = 'America/Toronto',
  place = 'Toronto',
  time,
  status,
  statusKind = 'available',
  label = 'Main',
  className,
  ...rest
}) {
  const localTime = useLocalTime(timeZone)
  // `time` overrides the live clock, for screenshots and tests.
  const shownTime = time ?? localTime

  return (
    <nav className={cx('ds-navbar', className)} aria-label={label} {...rest}>
      <div className="ds-navbar__brand">
        <span className="ds-navbar__name">{name}</span>
        <span className="ds-navbar__role">{role}</span>
      </div>

      <div className="ds-navbar__links">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            // Position identifies these as links, so they stay bare until hover.
            underline="hover"
            // Announces which page you are on; the CSS marks it visually too,
            // so the current item is not signalled by colour alone.
            aria-current={link.current ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="ds-navbar__meta">
        {shownTime && (
          <span className="ds-navbar__time">
            {/* Built from `place`, not hard-coded. This said "Toronto" while
                timeZone was a prop, so any other zone announced a false city. */}
            <span className="ds-visually-hidden">Local time in {place}: </span>
            {shownTime}
          </span>
        )}
        {status && <StatusDot status={statusKind}>{status}</StatusDot>}
      </div>
    </nav>
  )
}
