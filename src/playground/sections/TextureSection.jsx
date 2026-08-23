import { Bloom, Heading, Label, ProgressiveBlur, Text } from '../../components'
import { Specimen, Variants } from '../Specimen'

/**
 * Stands in for artwork that does not exist yet. Deliberately not a designed
 * shape — its only job is to have hard edges and enough contrast to show what
 * the blur treatment does to it.
 *
 * It carries `ds-pblur-host` itself, so the blur is bounded by the artwork
 * rather than by a frame drawn around it.
 */
function BlurredArtwork({ axis, label }) {
  return (
    <div className="pg-illo-demo pg-illo-demo--wide">
      <div className="pg-artwork ds-pblur-host">
        <span className="pg-artwork__bars">
          <i /><i /><i /><i /><i /><i />
        </span>
        <ProgressiveBlur axis={axis} strength="3px" />
      </div>
      <Label size="sm" tone="subtle">{label}</Label>
    </div>
  )
}

export function TextureSection() {
  return (
    <section className="pg-section" id="texture">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Foundations</span>
        <h2 className="pg-section__title">Texture & decoration</h2>
        <p className="pg-section__lede">
          The pattern here is a <strong>sharp element paired with a progressive blur</strong> — one
          edge holds a hard boundary, the opposite edge dissolves. Two rules hold throughout: every
          gradient is grained, and <strong>blur never touches text</strong> — captions live outside
          the blur host, always.
        </p>
      </header>

      <Specimen
        name="ProgressiveBlur"
        note="Compounding blur across an axis. The sharp edge is where the axis starts. The host carries headroom around the artwork so the blur spills instead of clipping, while the ramp itself still maps to the art's edges."
      >
        <Variants label="Axis" layout="grid" columns={1} align="start">
          <BlurredArtwork axis="to bottom" label="to bottom" />
          <BlurredArtwork axis="to top" label="to top" />
          <BlurredArtwork axis="to right" label="to right" />
          <BlurredArtwork axis="to left" label="to left" />
          <BlurredArtwork axis="45deg" label="45deg" />
          <BlurredArtwork axis="corners" label="corners — radial" />
        </Variants>
      </Specimen>

      <Specimen
        name="Bloom"
        note="A gradient shape with a directional falloff: crisp along the leading edge, dissolving along the axis."
      >
        <Variants label="Sharpness — how long the shape holds before it fades" layout="grid" columns={5} align="start">
          {[
            ['feathered', '0%'],
            ['soft', '15%'],
            ['balanced', '30%'],
            ['defined', '45%'],
            ['hard', '60%'],
          ].map(([name, value]) => (
            <div className="pg-level" key={name}>
              <Bloom size="100%" sharpness={name} />
              <span className="pg-level__name">{name}</span>
              <span className="pg-level__value">{value}</span>
            </div>
          ))}
        </Variants>
        <Text size="sm" tone="muted">
          A bloom can be any shape — pass <code>radius</code> for square or rounded corners and{' '}
          <code>ratio</code> to stretch it into a smear rather than a disc. It is a gradient with a
          falloff, not a fixed form.
        </Text>
      </Specimen>

      <div className="pg-rule">
        <span className="pg-rule__label">
          <span className="pg-rule__marker" aria-hidden="true" />
          Rule
        </span>
        <p className="pg-rule__text">
          <strong>Every blurred or gradient shape carries grain.</strong> It is baked in, not a
          prop you can switch off — a clean gradient bands on the warm ground and reads as a
          different material from everything else here.
        </p>
      </div>

      <Specimen
        name="In place"
        note="What restraint looks like: one bloom, off to the side, behind nothing that has to be read."
        padded={false}
      >
        <div className="pg-restraint">
          <Bloom
            size="380px"
            axis="to top"
            sharpness="feathered"
            intensity="soft"
            className="pg-restraint__bloom"
          />
          <div className="pg-restraint__body">
            <Label tone="muted">Backstory</Label>
            <Heading size="md" as="h4">Team news</Heading>
            <Text size="lg" tone="muted">
              The decoration sits in the margin. Body copy never crosses it.
            </Text>
          </div>
        </div>
      </Specimen>
    </section>
  )
}
