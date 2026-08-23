/**
 * JS mirror of the CSS token layer. Used by the playground to render swatch
 * grids and scale tables. Keep in sync with src/styles/tokens.css.
 */

export const colorRamps = [
  {
    name: 'Violet',
    prefix: 'violet',
    note: 'The accent. 400 is the neon that marks primary actions, tints, and blooms — never a page ground.',
    steps: [
      ['50', '#f5f2fd'], ['100', '#e7e0fb'], ['200', '#cabaf7'], ['300', '#9e7ef7'],
      ['400', '#5e23ff'], ['500', '#4d13ec'], ['600', '#4315c1'], ['700', '#381599'],
      ['800', '#2c1372'], ['900', '#20104c'], ['950', '#130b28'],
    ],
  },
  {
    name: 'Sand',
    prefix: 'sand',
    note: 'Primary light. 100 is the paper, 50 is what sits raised on it; the deep end doubles as warm ink.',
    steps: [
      ['50', '#fef9f0'], ['100', '#fff3e0'], ['200', '#ffeccc'], ['300', '#f8daaa'],
      ['400', '#f0c175'], ['500', '#e0a442'], ['600', '#bc862f'], ['700', '#8a672e'],
      ['800', '#624c28'], ['900', '#41341f'], ['950', '#241e14'],
    ],
  },
  {
    name: 'Signal',
    prefix: null,
    note: 'The only colours outside the two ramps, and only ever for status. No pure white, black, or neutral grey exists in this palette.',
    steps: [
      ['green', '#18c445'],
      ['red', '#d92d20'],
    ],
  },
]

export const surfaces = [
  { id: 'sand', label: 'Sand', hint: 'Primary — the paper. Default surface for most of the page.' },
  { id: 'ink', label: 'Ink', hint: 'Primary — the black. Full-bleed contrast sections and footers.' },
  { id: 'violet', label: 'Violet', hint: 'Accent band — one full-bleed moment per page, no more.' },
]

export const semanticTokens = [
  { group: 'Background', names: ['--ds-bg', '--ds-bg-raised', '--ds-bg-sunken', '--ds-bg-inset'] },
  { group: 'Foreground', names: ['--ds-fg', '--ds-fg-muted', '--ds-fg-subtle', '--ds-fg-inverse'] },
  { group: 'Border', names: ['--ds-border-color', '--ds-border-strong', '--ds-border-subtle'] },
  { group: 'Accent', names: ['--ds-accent', '--ds-accent-fg', '--ds-accent-soft', '--ds-accent-soft-fg'] },
  { group: 'Signal', names: ['--ds-danger', '--ds-focus'] },
]

export const typeScale = [
  { token: '--ds-text-display-xl', label: 'Display XL', size: '56 → 112', font: 'NAMU 1600', sample: 'MEET TETIANA' },
  { token: '--ds-text-display-lg', label: 'Display LG', size: '40 → 80', font: 'NAMU 1600', sample: 'CASE STUDIES' },
  { token: '--ds-text-display-md', label: 'Display MD', size: '32 → 46', font: 'NAMU 1600', sample: 'RECENT UPDATES' },
  { token: '--ds-text-display-sm', label: 'Display SM', size: '24 → 32', font: 'NAMU 1600', sample: 'BACKSTORY' },
  { token: '--ds-text-title', label: 'Title', size: '24', font: 'Albert Sans 300', sample: 'Creative Problem Solver' },
  { token: '--ds-text-body-lg', label: 'Body LG', size: '20', font: 'Albert Sans 300', sample: 'Finds elegant solutions in chaotic systems.' },
  { token: '--ds-text-body', label: 'Body', size: '16', font: 'Albert Sans 300', sample: 'Translates research into actionable product decisions.' },
  { token: '--ds-text-body-sm', label: 'Body SM', size: '14', font: 'Albert Sans 400', sample: 'Turning feedback into roadmap decisions.' },
  { token: '--ds-text-label', label: 'Label', size: '14', font: 'Roboto Mono 400', sample: 'PROJECT TYPE' },
  { token: '--ds-text-caption', label: 'Caption', size: '12', font: 'Roboto Mono 400', sample: 'VERSION 6.2' },
]

export const spaceScale = [
  ['--ds-space-1', '4px'], ['--ds-space-2', '8px'], ['--ds-space-3', '12px'],
  ['--ds-space-4', '16px'], ['--ds-space-5', '24px'], ['--ds-space-6', '32px'],
  ['--ds-space-7', '42px'], ['--ds-space-8', '48px'], ['--ds-space-9', '64px'],
  ['--ds-space-10', '96px'], ['--ds-space-11', '128px'],
]

export const radiusScale = [
  ['--ds-radius-none', '0'], ['--ds-radius-xs', '2px'], ['--ds-radius-sm', '4px'],
  ['--ds-radius-md', '8px'], ['--ds-radius-pill', '999px'], ['--ds-radius-circle', '50%'],
]

export const durationTokens = [
  ['--ds-duration-fast', '120ms', 'Hover / press feedback'],
  ['--ds-duration-base', '220ms', 'Most state changes'],
  ['--ds-duration-slow', '420ms', 'Entrances, reveals'],
]

export const easeTokens = [
  ['--ds-ease-out', 'cubic-bezier(0.22, 1, 0.36, 1)', 'Default — leaves fast, settles slow'],
  ['--ds-ease-in-out', 'cubic-bezier(0.65, 0, 0.35, 1)', 'Symmetric — eases at both ends'],
  ['linear', 'linear', 'Reference only — never ship this'],
]
