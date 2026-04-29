/* ─────────────────────────────────────────────
   Static Content Data
   Pure data — no side effects, no DOM access.
   All copy verbatim from vector/content/site-copy.md
   ───────────────────────────────────────────── */

export const engagementModes = [
  {
    id: 'concept-sprint',
    title: 'Concept Sprint',
    duration: 'Weeks to months',
    body: 'The work runs through understanding, reframing, opening up options, and converging on a concept \u2014 in weeks, not months. Conversations with users, PMs, marketers, engineers become <strong>insights, journey maps, experience flows</strong>. What lands is a <strong>UX concept</strong>, co-created with the team and concrete enough to test and build from.',
    accent: 'var(--color-accent-lavender)',
    statement: 'Turning half-formed direction or an emerging opportunity into a concept the team can build from.',
  },
  {
    id: 'visioning',
    title: 'Visioning Project',
    duration: '3\u20136 months',
    body: 'It starts not with a problem, but with a domain that needs a map of future problems and opportunities. The process is both explorative \u2014 <strong>expert interviews, strategy sessions, desk research</strong> \u2014 and convergent, through iterative co-creation sessions that bring fragments of future solution to the surface. Visualisations like <strong>value chains, journey maps, and early design directions</strong> serve as artefacts for testing: are the projected futures sound? Is the focus right? What lands is a <strong>set of concepts</strong>, each describing the future problem it solves and the benefit it delivers \u2014 held together by a narrative that helps the client inform their roadmap.',
    accent: 'var(--color-accent-teal)',
    statement: 'Scanning how a domain is changing \u2014 and framing what it will be worth designing for.',
  },
  {
    id: 'embedded',
    title: 'Embedded partnership',
    duration: 'Months, sometimes across initiatives',
    body: 'I join the team inside an initiative, or across several, and stay for the arc of it. Part <strong>sparring partner</strong> to leadership, part <strong>connector across functions</strong>, part hands-on where the work needs it. The outputs accumulate: <strong>hypotheses, prototypes, tested concepts, decisions documented and shared</strong>. I keep the line open between where the company is going and what actually ships. Direction survives contact with execution.',
    accent: 'var(--color-accent-yellow)',
    statement: 'Holding the direction, so vision survives delivery.',
  },
]

export const workCards = [
  {
    id: 'music-software',
    situation: 'A music software platform with 900+ products and a CX initiative that six teams were pulling in different directions.',
    outcome: 'A shared discovery experience, cross-team alignment, and a foundation that generated €350K in its first quarter.',
  },
  {
    id: 'pos-onboarding',
    situation: 'A fast-growing point-of-sale product losing merchants in onboarding — with the journey owned by teams who didn\'t share a map.',
    outcome: 'A cross-team vision, an onboarding dashboard shipped, and two quarters of design work ready to execute.',
  },
  {
    id: 'b2b-logistics',
    situation: 'A complex B2B logistics tool, six product teams, no shared direction — and a tech migration that needed a new interface concept.',
    outcome: 'A north-star vision for all six teams. CEO endorsement. Two months to achieve what the client had tried to do for two years.',
  },
  {
    id: 'hardware-iot',
    situation: 'A hardware company with no direct customer relationship — dealers owned it. They needed an IoT app craftspeople would actually use.',
    outcome: '2.5 hours saved daily per professional. Four million tools registered in year one. Three follow-on engagements across 16 countries.',
  },
]

export const problemContent = {
  cta: 'Get in touch',
  situations: [
    {
      id: 'initiative',
      number: '01',
      tab: 'The high-stakes initiative',
      title: 'The brief is big: reimagine a core experience, define a new direction.',
      body: 'The stakes are visible and the room will be full of opinions. Your in-house designers are strong at delivery, but this asks for someone who can hold the direction across stakeholders and drive it end to end.',
    },
    {
      id: 'bar',
      number: '02',
      tab: 'The bar to raise',
      title: 'Your teams deliver but no one holds the end-to-end experience.',
      body: 'Design, product, and marketing each move forward on their own terms, but nothing ties the pieces together. The work stays local. The gap isn\u2019t more capacity. It\u2019s someone senior enough to work across functions and connect what each team is doing into one coherent direction.',
    },
    {
      id: 'vision',
      number: '03',
      tab: 'The bold idea',
      title: 'You have a strong sense of where this should go but it\u2019s not fully formed yet.',
      body: 'It\u2019s still only in your head. Your design team may not have the bandwidth or the seniority to carry something this ambiguous, and a rough direction won\u2019t land until it\u2019s tangible enough for the organisation to commit to.',
    },
  ],
}

export const testimonials = [
  {
    id: 'rachel-hill',
    quote: 'At a pivotal moment for the company Giuseppe quickly gained cross-disciplinary trust and respect from stakeholders as well as from a team of designers, content strategists and PMs. He was an invaluable sparring partner for me in my role as the company strategy evolved throughout the year.',
    name: 'Rachel H.',
    title: 'VP of Design',
    company: 'Native Instruments',
  },
  {
    id: 'samta-kothari',
    quote: 'Faced with a tight deadline and complex requirements, Giuseppe distilled vast amounts of information into a clear, coherent structure that users loved. His sharp intellect, calm demeanour and commitment to excellence set him apart.',
    name: 'Samta K.',
    title: 'Lead PM',
    company: 'Sennder',
  },
  {
    id: 'simon-allen',
    quote: 'Giuseppe\'s ability to research, synthesise and communicate that synthesis in a clear and inspiring manner is phenomenal. When priorities are changing weekly, this is super helpful.',
    name: 'Simon A.',
    title: 'Design Strategy Lead',
    company: 'EOS',
  },
  {
    id: 'gerrit-elvers',
    quote: 'Giuseppe brings everything together cohesively in an understandable way. His work brought us forward as no one did before.',
    name: 'Gerrit E.',
    title: 'CPO',
    company: 'PRO360 Bosch Power Tools',
  },
  {
    id: 'dietrich-pfluger',
    quote: 'What sets Giuseppe apart is his thorough discovery and stakeholder management upfront. If you need someone who can architect connected experiences across channels and align diverse stakeholders around a shared vision, Giuseppe delivers.',
    name: 'Dietrich P.',
    title: 'VP Growth',
    company: 'Native Instruments',
  },
  {
    id: 'denis-w',
    quote: 'I was impressed by Giuseppe\'s systematic, professional approach, the empathetic but honest way he communicates with clients and the quality of his deliverables.',
    name: 'Denis W.',
    title: 'Lead Engineer',
    company: 'Futurice',
  },
]
