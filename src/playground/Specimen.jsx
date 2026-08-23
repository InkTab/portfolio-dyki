
/**
 * Component names are PascalCase, and the label styling uppercases them, so
 * "ProgressiveBlur" would render as one unbroken run. Split on the camel
 * boundaries instead of hand-writing a second display name for every specimen —
 * that way the label can never drift from the component it documents.
 */
const spaceWords = (name) =>
  typeof name === 'string' ? name.replace(/([a-z0-9])([A-Z])/g, '$1 $2') : name

/**
 * Specimen — one component demo: name, one-line note, and a preview canvas
 * painted on the sand surface, which is the site's default ground.
 */
export function Specimen({ name, note, children, background = true, padded = true }) {
  return (
    <article className="pg-specimen">
      <div className="pg-specimen__head">
        <h3 className="pg-specimen__name">{spaceWords(name)}</h3>
        {note && <p className="pg-specimen__note">{note}</p>}
      </div>
      <div
        className={`pg-canvas${padded ? '' : ' pg-canvas--flush'}`}
        {...(background ? { 'data-surface': 'sand' } : {})}
      >
        {children}
      </div>
    </article>
  )
}

/**
 * A labelled row of variants inside a canvas.
 *
 * layout 'pack' (default) flex-packs children left — right for inline controls
 * like buttons and chips, which should sit at their natural width.
 * layout 'grid' puts them on the six-column grid so larger visual demos spread
 * across the full measure instead of clustering at the left edge. `columns`
 * overrides the count for a row whose fixed item count does not divide into
 * six, so it still fills the measure.
 */
export function Variants({ label, children, align = 'center', layout = 'pack', span, columns }) {
  return (
    <div className="pg-variants">
      {label && <span className="pg-variants__label">{label}</span>}
      <div
        className={layout === 'grid' ? 'pg-variants__grid' : 'pg-variants__row'}
        style={{
          alignItems: align,
          ...(span ? { '--pg-variant-span': span } : null),
          ...(columns ? { '--pg-variant-columns': columns } : null),
        }}
      >
        {children}
      </div>
    </div>
  )
}

/** A titled block inside a foundations section. */
export function Block({ title, note, children }) {
  return (
    <div className="pg-block">
      <div className="pg-block__head">
        <h3 className="pg-block__title">{title}</h3>
        {note && <p className="pg-block__note">{note}</p>}
      </div>
      {children}
    </div>
  )
}
