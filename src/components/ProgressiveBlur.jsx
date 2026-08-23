import { useEffect, useRef } from 'react'
import { cx } from '../lib/cx'
import './ProgressiveBlur.css'

/**
 * ProgressiveBlur — lays a compounding blur over whatever sits beneath it, so
 * the artwork stays crisp at one edge and dissolves at the other.
 *
 * This is a *treatment*, not a shape: it makes no assumption about what it is
 * covering. Put it inside any element with `.ds-pblur-host` (or any positioned,
 * clipped container) and it will ramp across an illustration, a photo, or a
 * gradient the same way.
 *
 * NEVER put this over text. backdrop-filter blurs everything beneath it, and
 * blurred type reads as a rendering fault rather than as a treatment. Keep the
 * host to artwork only and put captions outside it. In development this warns
 * if it finds text underneath.
 *
 * axis:     the direction blur increases in — 'to bottom', 'to right', '135deg', …
 *           The sharp edge is where the axis starts.
 * strength: base blur; each of the four layers doubles it, so the far edge
 *           lands around 8× this value.
 * The host should be LARGER than the artwork, and `--ds-pblur-inset` set to the
 * gap between them. Two things have to be true at once:
 *
 *   - the layers need headroom around the art, or blurred pixels are clipped
 *     flat at its edge;
 *   - the ramp must still map to the artwork, or its crisp 0% end lands on
 *     empty space and the sharp edge never appears.
 *
 * The inset reconciles them: layers cover the whole host, gradient stops are
 * offset so 0% and 100% sit on the artwork's edges. Uniform padding on the host
 * is the easy way to get both — the padding value *is* the inset.
 * <Illustration> exposes this as `blurSpill`.
 *
 * axis accepts any CSS gradient direction, plus 'corners' for a radial ramp
 * that stays sharp in the middle and blurs outward in every direction.
 */
export function ProgressiveBlur({
  axis = 'to bottom',
  strength = '2px',
  className,
  style,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (import.meta.env.PROD) return
    const host = ref.current?.parentElement
    if (!host) return

    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.textContent.trim() && !ref.current.contains(node)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT,
    })

    if (walker.nextNode()) {
      console.warn(
        '[ProgressiveBlur] Text found under the blur host — blurred type reads as a ' +
          'rendering fault. Move captions outside the host.',
        host,
      )
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx('ds-pblur', axis === 'corners' && 'ds-pblur--corners', className)}
      style={{
        '--ds-pblur-axis': axis === 'corners' ? 'to bottom' : axis,
        '--ds-pblur-base': strength,
        ...style,
      }}
      {...rest}
    >
      <div className="ds-pblur__layer" />
      <div className="ds-pblur__layer" />
      <div className="ds-pblur__layer" />
      <div className="ds-pblur__layer" />
    </div>
  )
}
