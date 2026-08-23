import { cx } from '../lib/cx'
import { Illustration } from './Illustration'
import './CaseStudyCard.css'

/**
 * CaseStudyCard — the project card from the Case Studies grid: optional
 * cover image, then a stack of labelled fields (PROJECT TYPE / INPUT /
 * OUTPUT), then a CTA row pinned to the bottom.
 *
 * fields: [{ name, value }]
 * cta:    string — omit for the "Ask me in person" NDA variant by passing
 *         `ctaHref={undefined}`, which renders a non-linked quiet CTA.
 * image:  cover artwork. Pass `image2x` for the retina file, and `imageBlur` /
 *         `imageBloom` to apply either blur composition to the cover.
 */
export function CaseStudyCard({
  image,
  image2x,
  imageBlur = false,
  imageBloom = false,
  imageAlt = '',
  fields = [],
  cta = 'Full Report',
  ctaHref,
  className,
  ...rest
}) {
  const Tag = ctaHref ? 'a' : 'article'
  return (
    <Tag className={cx('ds-casestudy', className)} {...(ctaHref ? { href: ctaHref } : {})} {...rest}>
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

      <div className="ds-casestudy__fields">
        {fields.map((field) => (
          <div className="ds-casestudy__field" key={field.name}>
            <span className="ds-casestudy__field-name">{field.name}</span>
            <span className="ds-casestudy__field-value">{field.value}</span>
          </div>
        ))}
      </div>

      {cta && (
        <div className={cx('ds-casestudy__cta', !ctaHref && 'ds-casestudy__cta--quiet')}>
          {cta}
          {ctaHref && <span className="ds-casestudy__cta-arrow" aria-hidden="true">→</span>}
        </div>
      )}
    </Tag>
  )
}
