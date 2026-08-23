import { cx } from '../lib/cx'
import { Bloom } from './Bloom'
import { ProgressiveBlur } from './ProgressiveBlur'
import './Illustration.css'

/**
 * Illustration — the slot for artwork, with both blur compositions available.
 *
 * Raster-first. A PNG carries its own colour and cannot follow the surface the
 * way an SVG can, so `srcInk` supplies a second file for artwork that also has
 * to sit on a dark band. It is selected by the nearest [data-surface="ink"],
 * NOT by prefers-color-scheme — ink is a section here, not a colour scheme.
 * Omit it and `src` is used everywhere.
 *
 * Note: supplying `srcInk` puts both files in the DOM, so both may be fetched.
 * Only pass it for artwork that genuinely appears on both surfaces.
 *
 *   blur   — Composition A: the artwork itself dissolves along an axis.
 *            Pass `true` for the default, or {axis, strength}.
 *   blurSpill — headroom around the image for blurred pixels to spread into.
 *            Without it the blur is clipped flat at the image's edge. The ramp
 *            still maps to the artwork, not to the padded box.
 *   bloom  — Composition B: crisp artwork with a separate gradient shape
 *            behind or beside it. Pass {x, y, size, axis, sharpness, …};
 *            x/y are percentages of the frame and default to centre.
 *
 * Both can be used at once, but rarely should be.
 */
export function Illustration({
  src,
  src2x,
  srcInk,
  srcInk2x,
  alt = '',
  ratio,
  fit = 'cover',
  blur = false,
  blurSpill = '0px',
  bloom = false,
  bleed = false,
  loading = 'lazy',
  className,
  style,
  ...rest
}) {
  const blurProps = blur === true ? {} : blur || {}
  const { x = 50, y = 50, ...bloomProps } = bloom === true ? {} : bloom || {}

  const srcSet = src2x ? `${src} 1x, ${src2x} 2x` : undefined
  const inkSrcSet = srcInk2x ? `${srcInk} 1x, ${srcInk2x} 2x` : undefined

  return (
    <div
      className={cx(
        'ds-illustration',
        ratio && 'ds-illustration--ratio',
        srcInk && 'ds-illustration--has-ink',
        fit === 'contain' && 'ds-illustration--contain',
        bleed && 'ds-illustration--bleed',
        className,
      )}
      style={{ ...(ratio ? { '--ds-illustration-ratio': ratio } : null), ...style }}
      {...rest}
    >
      {bloom && (
        <div className="ds-illustration__bloom" style={{ left: `${x}%`, top: `${y}%` }}>
          <Bloom {...bloomProps} />
        </div>
      )}

      <div
        className="ds-illustration__frame"
        style={
          blur && blurSpill !== '0px'
            ? { padding: blurSpill, '--ds-pblur-inset': blurSpill }
            : undefined
        }
      >
        <img
          className="ds-illustration__img ds-illustration__img--light"
          src={src}
          srcSet={srcSet}
          alt={alt}
          loading={loading}
          decoding="async"
        />
        {srcInk && (
          <img
            className="ds-illustration__img ds-illustration__img--ink"
            src={srcInk}
            srcSet={inkSrcSet}
            alt=""
            aria-hidden="true"
            loading={loading}
            decoding="async"
          />
        )}
        {blur && <ProgressiveBlur {...blurProps} />}
      </div>
    </div>
  )
}
