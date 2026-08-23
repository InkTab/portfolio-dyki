import {
  Button, Card, CaseStudyCard, Heading, Label, MetaList,
  SectionHeader, Text, TraitCard,
} from '../../components'
import { Specimen } from '../Specimen'

const updates = [
  { term: 'Currently', description: 'Looking for a product team to join full-time' },
  { term: 'Always', description: 'Turning user feedback into clear, actionable roadmap decisions' },
  { term: 'Recent', description: 'Exploring micro-animation details' },
  { term: 'Earlier', description: 'Shifted focus toward embedded, in-house product teams' },
]

const traits = [
  ['01', 'Creative Problem Solver', 'Finds elegant solutions in chaotic systems.'],
  ['02', 'Strategic Communicator', 'Connects vision to execution with empathy and clarity.'],
  ['03', 'Research-Driven Thinker', 'Translates research into actionable product decisions.'],
  ['04', 'Sees What Others Miss', 'Can spot the one thing everyone forgot to consider.'],
]

export function PatternsSection() {
  return (
    <section className="pg-section" id="patterns">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Components</span>
        <h2 className="pg-section__title">Patterns</h2>
        <p className="pg-section__lede">
          Composed blocks that map one-to-one onto sections of the portfolio.
        </p>
      </header>

      <Specimen name="SectionHeader" note="Mono eyebrow with a trailing rule, display title, optional lede.">
        <div className="pg-stack-lg">
          <SectionHeader
            eyebrow="Case studies"
            title="Selected work"
            lede="Three projects that show the range: zero-to-one, a rescue, and a deep-tech translation job."
          />
          <SectionHeader eyebrow="Backstory" title="Recent updates" size="md" />
        </div>
      </Specimen>

      <Specimen name="Card" note="Raised, outline, and soft. The soft variant is where accent purple lives in a layout — a tint, not a fill — and it is the one that lifts on hover.">
        <div className="pg-grid-3">
          <Card>
            <Card.Header>
              <Label tone="muted">Raised</Label>
              <Label tone="subtle" size="sm">01</Label>
            </Card.Header>
            <Card.Body>
              <Heading size="sm" as="h4">Default</Heading>
              <Text size="sm" tone="muted">Sits on a raised background. The workhorse.</Text>
            </Card.Body>
          </Card>

          <Card variant="outline">
            <Card.Header>
              <Label tone="muted">Outline</Label>
            </Card.Header>
            <Card.Body>
              <Heading size="sm" as="h4">Hairline</Heading>
              <Text size="sm" tone="muted">For grids where the background must stay flat.</Text>
            </Card.Body>
            <Card.Footer>
              <Label size="sm" tone="subtle">Updated Aug 2026</Label>
              <Button variant="link" arrow>Open</Button>
            </Card.Footer>
          </Card>

          <Card variant="soft">
            <Card.Header>
              <Label>Soft</Label>
              <Label size="sm">04</Label>
            </Card.Header>
            <Card.Body>
              <Heading size="sm" as="h4">Tinted</Heading>
              <Text size="sm">Accent purple as a wash, and the only card that moves. Use it to pick two or three out of a grid, never all of them.</Text>
            </Card.Body>
          </Card>
        </div>
      </Specimen>

      <Specimen name="CaseStudyCard" note="Cover, labelled fields, and a CTA row pinned to the bottom. Omit ctaHref for NDA work.">
        <div className="pg-grid-3">
          <CaseStudyCard
            ctaHref="#patterns"
            cta="Full Report"
            fields={[
              { name: 'Project type', value: 'Holistic Fitness App' },
              { name: 'Input', value: 'From only an idea, in a two-person team' },
              { name: 'Output', value: 'Closed beta. Fully prototyped' },
            ]}
          />
          <CaseStudyCard
            cta="Ask me in person"
            fields={[
              { name: 'Project type', value: 'AI-Powered Marketing Service' },
              { name: 'Input', value: 'Scientific jargon + stiff layout' },
              { name: 'Output', value: 'Simplified core flow from 7 to 3 steps' },
            ]}
          />
          <CaseStudyCard
            cta="Ask me in person"
            fields={[
              { name: 'Project type', value: 'Quantum Chemistry Startup' },
              { name: 'Input', value: 'Deep-tech company with 2 audiences' },
              { name: 'Output', value: 'Landing + pitch deck (NDA)' },
            ]}
          />
        </div>
      </Specimen>

      <Specimen name="MetaList" note="Label/value rows. Inline on wide screens, stacking below 640px.">
        <div className="pg-stack-lg">
          <MetaList items={updates} />
          <MetaList layout="stacked" items={updates.slice(0, 2)} />
        </div>
      </Specimen>

      <Specimen name="TraitCard" note="Rule-topped column for the four 'how I work' traits.">
        <div className="pg-grid-4">
          {traits.map(([index, title, body]) => (
            <TraitCard key={title} index={index} title={title}>{body}</TraitCard>
          ))}
        </div>
      </Specimen>

    </section>
  )
}
