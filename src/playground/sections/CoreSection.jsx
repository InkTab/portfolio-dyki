import { useState } from 'react'
import { Button, Field, Link, Pill, StatusDot, Tag, Text } from '../../components'
import { Specimen, Variants } from '../Specimen'

const FILTERS = ['All', 'SaaS', 'Ecommerce', 'B2B', 'Deep tech']

export function CoreSection() {
  const [filter, setFilter] = useState('All')
  const [email, setEmail] = useState('')

  return (
    <section className="pg-section" id="core">
      <header className="pg-section__head">
        <span className="pg-section__kicker">Components</span>
        <h2 className="pg-section__title">Core</h2>
        <p className="pg-section__lede">
          The small interactive pieces. Every one of them inherits its colours from the surface
          it sits on, so the same markup works on paper, ink, and the accent band.
        </p>
      </header>

      <Specimen name="Button" note="Mono, uppercase, 2px corners. Four variants across three sizes. Accent-filled buttons carry a halo.">
        <Variants label="Variant">
          <Button>Download CV</Button>
          <Button variant="outline">View work</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="link" arrow>Full Report</Button>
        </Variants>
        <Variants label="Size">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Variants>
        <Variants label="Arrow">
          <Button arrow>Case studies</Button>
          <Button variant="outline" arrow>Get in touch</Button>
        </Variants>
        <Variants label="State">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
        </Variants>
      </Specimen>

      <Specimen name="Pill" note="The rounded outline chip from the hero. Add onClick to make it a filter toggle.">
        <Variants label="Static">
          <Pill>Emotionally intelligent design</Pill>
          <Pill>Business-user translator</Pill>
          <Pill variant="solid">Available</Pill>
          <Pill variant="soft">Tinted</Pill>
          <Pill size="sm">Small</Pill>
        </Variants>
        <Variants label="Interactive — try it">
          {FILTERS.map((f) => (
            <Pill key={f} selected={filter === f} onClick={() => setFilter(f)}>
              {f}
            </Pill>
          ))}
        </Variants>
        <Text size="sm" tone="muted">Selected: {filter}</Text>
      </Specimen>

      <Specimen name="Tag" note="Square metadata chip for tool lists and project attributes.">
        <Variants label="Tone">
          <Tag>Figma</Tag>
          <Tag tone="outline">Framer</Tag>
          <Tag tone="soft">Protopie</Tag>
          <Tag tone="accent">NDA</Tag>
        </Variants>
      </Specimen>

      <Specimen name="StatusDot" note="Availability indicator with a pulsing ring. Pulse respects reduced-motion, and each state reads its colour from a per-surface token so the dot clears 3:1 on sand, ink and violet alike.">
        <Variants label="Status">
          <StatusDot status="available">Available for hire</StatusDot>
          <StatusDot status="busy">Booked until Q3</StatusDot>
          <StatusDot status="offline" pulse={false}>Away</StatusDot>
        </Variants>
      </Specimen>

      <Specimen
        name="Link"
        note={'Underlined at rest — a link whose colour matches the body text has nothing else to mark it, so the underline is the affordance, not the hover flourish. underline="hover" is for rows where position already says "link": nav, footer.'}
      >
        <Variants label="Font & tone" align="baseline">
          <Link href="#core">About me</Link>
          <Link href="#core" tone="muted">Case studies</Link>
          <Link href="#core" font="mono">letstalk@dyki.design</Link>
          <Link href="#core" underline="hover">Nav treatment</Link>
        </Variants>
      </Specimen>

      <Specimen name="Field" note="Accent-purple focus, not ink. Pass `error` for a validation message: it is announced through a live region and marked with a shape as well as a colour.">
        <div className="pg-form">
          <Field
            label="Name"
            placeholder="Jane Doe"
          />
          <Field
            label="Email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hint="I reply within two working days."
          />
          <Field
            label="Budget"
            placeholder="Not a number"
            invalid
            hint="Enter a range, not a single figure."
          />
          <Field
            label="Project"
            as="textarea"
            placeholder="What are you building, and what is in the way?"
          />
          <Field label="Locked" placeholder="Disabled" disabled />
        </div>
      </Specimen>
    </section>
  )
}
