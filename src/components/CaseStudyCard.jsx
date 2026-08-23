import { cx } from '../lib/cx'
import { Illustration } from './Illustration'
import './CaseStudyCard.css'

/**
 * CaseStudyCard — the project card from the Case Studies grid: optional
 * cover image, a title, then a stack of labelled fields (PROJECT TYPE / INPUT
 * / OUTPUT), then a CTA row pinned to the bottom.
 *
 * title:  required. The card is a heading + a link, not a wall of spans — a
 *         grid of these is how a screen reader user navigates the section, and
 *         without headings there is nothing to navigate by.
 * titleAs: heading level, so the card fits the page's outline (default h3).
 * fields: [{ name, value }]
 * cta:    string — omit `ctaHref` for the "Ask me in person" NDA variant,
 *         which renders a non-linked quiet CTA.
 * image:  cover artwork. Pass `image2x` for the retina file, and `imageBlur` /
 *         `imageBloom` to apply either blur composition to the cover.
 *
 * Only the TITLE is the link. The whole card is still clickable — the link's
 * ::after covers it — but the accessible name stays "Redesigning checkout"
 * instead of the cover's alt text plus every field name, every field value and
 * "Full Report" run together, which is what wrapping the card in an <a> gave.
 */
export function CaseStudyCard({
  image,
  image2x,
  imageBlur = false,
  imageBloom = false,
  imageAlt = '',
  title,
  titleAs: TitleTag = 'h3',
  fields = [],
  cta = 'Full Report',
  ctaHref,
  className,
  ...rest
}) {
  return (
    <article className={cx('ds-casestudy', ctaHref && 'ds-casestudy--linked', className)} {...rest}>
      <div className="ds-casestudy__media">
        {image ? (
          <Illustration
            src={image}
            src2x={image2x}
            alt={imageAlt}
            ratio="16 / 10"
            blur={imageBlur}
            bloom={imageBloom}
          />
        ) : (
          <span className="ds-casestudy__media-placeholder">Cover</span>
        )}
      </div>

      {title && (
        <TitleTag className="ds-casestudy__title">
          {ctaHref ? (
            <a className="ds-casestudy__link" href={ctaHref}>{title}</a>
          ) : (
            title
          )}
        </TitleTag>
      )}

      <div className="ds-casestudy__fields">
        {fields.map((field) => (
          <div className="ds-casestudy__field" key={field.name}>
            <span className="ds-casestudy__field-name">{field.name}</span>
            <span className="ds-casestudy__field-value">{field.value}</span>
          </div>
        ))}
      </div>

      {cta && (
        <div
          className={cx('ds-casestudy__cta', !ctaHref && 'ds-casestudy__cta--quiet')}
          // The link above already carries the destination. Repeating the CTA
          // as a second link would put two links to one place in the tab order.
          aria-hidden={ctaHref ? 'true' : undefined}
        >
          {cta}
          {ctaHref && <span className="ds-casestudy__cta-arrow">→</span>}
        </div>
      )}
    </article>
  )
}
