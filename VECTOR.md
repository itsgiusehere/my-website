---
# VECTOR.md — Project Doctrine
# This file is the single source of truth for project intent, audience, and knowledge.
# Read this before CLAUDE.md. Read CLAUDE.md before writing code.

vector_version: "0.1"

project:
  name: "Giuseppe de Cesare — Strategic Designer"
  description: "Personal website for a freelance strategic designer to attract and convert senior design and product leaders seeking project-based collaboration."
  stage: "draft-built"
  started: "2026-03-05"
  repo: ""

owner:
  name: "Giuseppe de Cesare"
  role: "Freelance Strategic Designer"

knowledge:
  research: "./vector/research/"
  schemas: "./vector/schemas/"
  decisions: "./vector/decisions/"
---

# Identity

## Problem Statement

Design leaders and CPOs at growth-stage companies are stuck with fragmented ideas and misaligned teams — they've often spent months trying to move forward with no shared, tangible direction. They know what they need to achieve but can't articulate it in a way that gets everyone committed and building. They need someone who synthesises across product, business, and user needs and delivers something concrete enough to act on — not a strategy deck, not pixel-perfect designs, but a vision artefact that unlocks alignment.

## Target Audience

**Primary:** VPs, Heads of Design, and Design Directors at growth-stage tech companies (50–500 people) who recognise multi-stakeholder complexity and treat design as a strategic function, not a delivery queue. They have budget authority or strong influence over it, and they hire freelancers for focused, high-stakes engagements — not ongoing production work.

**Secondary:** CPOs and founding teams who need external thinking to clarify early-stage vision when internal capacity or perspective is insufficient.

**What they already use:** Strategy consultants (who work in abstraction), design agencies (who execute without strategy), and in-house design teams (who are too close to the problem). What they wish existed: someone who does both — aligns and builds.

## Core Value Proposition

Visiting design leaders and CPOs can quickly assess whether Giuseppe's way of working matches their situation, and reach out with enough context to start a real conversation — so they spend less time evaluating and more time moving forward.

## What This Is Not

- Not a portfolio site. Work is described by outcome and context, not shown as pretty screens.
- Not a CV. Employment history is not the focus.
- Not a design agency. This is one person, one engagement at a time.
- Not a thought leadership blog. No ongoing content strategy.
- Not a general design freelancer directory listing. This site speaks directly to a specific type of client with a specific problem.

---

# Knowledge Map

## Research Status

| Artifact | Status | Location |
|----------|--------|----------|
| Business Profile | Done | `./vector/research/business-profile.md` |
| Positioning | Done | `./vector/research/positioning.md` |
| User Interviews | Not started | `./vector/research/interviews/` |
| Jobs to Be Done | Not started | `./vector/research/jtbd/` |
| Personas | Not started | `./vector/research/personas/` |
| Competitive Analysis | Not started | `./vector/research/competitive/` |
| Assumptions | Not started | `./vector/research/assumptions/` |

## Build Status

**Bulk owns this table.** Update it at the end of every session — no need to route through Cooper or Giuseppe unless a strategic question surfaces.

| Section | Copy | Component | Notes |
|---------|------|-----------|-------|
| Hero | Tiziano pass done (2026-04-14) | Done | Profile picture, headline, subheadline rewritten for voice (see ADR-001). Scroll CTA. Responsive: done. **Pending Bulk: wire new copy into Hero.jsx.** |
| How I help | Tiziano pass done (2026-04-14) | Needs rebuild | Engagement modes collapsed from 3 to 2 — Visioning + Embedded partnership (see ADR-002). New copy in `vector/content/tiziano-session-2026-04-14.md`. **Pending Bulk: restructure `engagementModes` in `core/content.js`, review layout weight with 2 accordions, decide on third illustration.** |
| Challenges I help leaders with | Tiziano pass done (2026-04-17) | Done | Section label → "Where things usually start". Cards trimmed (consultancy language, em dashes, prescriptions removed). **Pending Bulk: update label in `TheProblem.jsx`, update card data in `core/content.js`.** |
| How I work | Tiziano pass done (2026-04-17) | Needs rebuild | Intro rewritten. Principles 1–3 tightened. Two new principles added (4: Progress happens through people, 5: Your problem becomes my problem). **Pending Bulk: expand `Principles.jsx` from 3 to 5 cards, new SVG icons for 4+5, review grid layout.** |
| Selected Work | Hidden | Draft | Commented out in App.jsx. Content on `selected-work` branch. |
| What clients say | Reviewed | Done | Featured pull-quote + white-bg card grid. White nav bg. Section divider. Responsive: done. Mobile: 3 visible, rest behind Show more/less. |
| About me | Tiziano pass done (2026-04-17) | Done | Full rewrite. Coaching session + room image + coherence through-line + beauty/nature. **Pending Bulk: wire new copy into `About.jsx`, consider room illustration as visual, drop old headline.** |
| Contact | Reviewed | Done | Serif display intro, Book a chat (real Calendly URL), Connect on LinkedIn, email. No form. Beige bg. Double bottom padding. Section divider. Responsive: done. |
| Nav | Reviewed | Done | Links: "How I help", "Testimonials", "About me", "Get in touch". Responsive: done. Mobile: hamburger drawer. |

## Key Assumptions (Seed These Early)

1. **Primary clients find this site before reaching out** — They discover Giuseppe via LinkedIn, referral, or search, then visit the site to validate whether to engage. The site is a conversion tool, not a discovery tool. — *hypothesis*
2. **Outcome framing outperforms process framing** — Clients respond more to "what changed after the engagement" than "here is my four-phase process." — *hypothesis*
3. **Personal voice builds trust faster than polished agency copy** — For a solo practitioner, the human behind the work is a differentiator. Generic positioning erodes it. — *hypothesis*
4. **The positioning is about altitude range, not a middle ground** — The old triangulation (strategy consultant vs. design agency) broke down — "design agency" is too broad and inaccurate. The real differentiator is the ability to move fluidly across altitudes: framing the problem, defining outcomes, making direction tangible — and bringing people along through the process. Informed by direction.md thinking on visioning as process. — *validated (replaced the two-pole comparison during Cooper session 2026-03-20)*

## Decisions

- **Engagement modes:** Collapsed from three to two — Visioning + Embedded partnership (see ADR-002, 2026-04-14). Old model (Vision Sprint / Embedded Leadership / Strategic Clarity) retired.
- **Call to action:** Book a chat (Calendly, secondary btn), Connect on LinkedIn, email. Form removed. Real Calendly URL wired.
- **Site structure:** Single page, scroll-based, eight sections (Selected Work hidden):
  1. **Hero** — name, headline, differentiator subheadline, scroll CTA
  2. **How I help** — positioning intro + two engagement modes (accordions)
  3. **Where things usually start** — sticky card stack with custom illustrations
  4. **How I work** — ownership intro + three principles with icons
  5. ~~**Selected work**~~ — hidden, content on `selected-work` branch
  6. **What clients say** — featured pull-quote + card grid
  7. **About me** — photo + bio
  8. **Contact** — intro + Calendly, LinkedIn, email (no form)

## Tiziano Sessions

### Session 1 — 2026-04-14

Full-site copy assessment. Hero and How I help reworked.

**Done:**
- Hero headline + subheadline rewritten — see ADR-001.
- How I help frame shift: 3 engagements collapsed to 2 (Visioning + Embedded partnership) — see ADR-002.
- New copy for both engagements drafted in `vector/content/tiziano-session-2026-04-14.md`.

### Session 2 — 2026-04-17

About me, The Problem cards, How I work (Principles) reworked.

**Done:**
- About me: full rewrite. Coaching session + room image + coherence through-line + beauty as coherence.
- The Problem: section label → "Where things usually start". Cards trimmed (consultancy language, prescriptions, em dashes).
- How I work intro: "I X so you Y" triplet collapsed to one sentence.
- Principles 1–3: em dashes cleaned, Principle 2 tightened ("where the risk is highest").
- Two new principles added: "Progress happens through people" (absorbs stakeholder unlocking + levelling up the team) and "Your problem becomes my problem" (absorbs high drive + easy to work with).

All new copy in `vector/content/tiziano-session-2026-04-14.md`.

**Outstanding for Tiziano:**
1. Contact intro — minor, lightly passive.
2. General em dash reduction pass.
3. Refresh `vector/content/site-copy.md` once all sections reviewed.
4. Testimonials selection (VECTOR launch blocker).

**Pending for Bulk (triggered by both sessions):**
- Wire new Hero copy into `Hero.jsx`.
- Restructure `engagementModes` in `core/content.js` from 3 items to 2.
- Reassign accordion accents (currently 3 — lavender, yellow, teal — now only 2 needed).
- Decide fate of the third accordion illustration.
- Review `HowIWork.jsx` layout: do 2 accordions still carry the section's visual weight?
- Update section label in `TheProblem.jsx` + card data in `core/content.js`.
- Expand `Principles.jsx` from 3 to 5 cards, new SVG icons for principles 4+5, review grid layout (3+2? 5-col?).
- Wire new About copy into `About.jsx`. Consider room illustration as visual. Drop old headline.
- Review nav items: "Challenges" label may need updating to match new section label.

## Content Improvements — Pending (Cooper, 2026-03-19)

The Problem section has been rewritten with three differentiated use cases. The following narrative issues remain across Hero → How I Work:

1. ~~**Hero subheadline overlaps with The Problem.**~~ **Resolved (2026-04-14).** Hero rewritten — subheadline now carries the altitude-range differentiator only. Situation weight stays in The Problem cards. See ADR-001.

2. ~~**How I Work body copy echoes The Problem situations.**~~ **Resolved (2026-04-14/17).** Engagement modes collapsed to two. Bodies now describe the engagement shape, not the situation. Problem cards trimmed and de-overlapped.

3. ~~**The differentiator line is buried.**~~ **Resolved (2026-03-20).** Old two-pole comparison scrapped — replaced with new differentiator line about altitude range and process. Moved to Hero subheadline. Old descriptive subheadline repurposed as a bridge section between The Problem and How I Work. Tiziano pass done (2026-04-14).

4. **Principle: never tell the reader what they need.** Established during this session. All copy should describe situations and outcomes — never prescribe ("you need", "what's needed is"). **Applied across all sections during Tiziano sessions 2026-04-14/17.**

## Pre-Launch Todos

**Launch definition:** silent publish — site publicly reachable, URL not shared anywhere at launch.

**MUST (blocks launch):**
- [x] **Self-host fonts (GDPR)**: Cardo + DM Sans self-hosted as woff2 in `src/assets/fonts/`. Google Fonts links removed.
- [x] **Calendly link**: real URL wired in Contact.jsx.
- [x] **Favicon**: stroke-only diamond SVG in `src/public/favicon.svg`, linked in index.html.
- [x] **robots.txt**: `Disallow: /` in `src/public/robots.txt`. Remove before public launch.
- [x] **Problem card illustrations**: all 3 cards have custom illustrations (diamond in rock, fragmented faces, sketch on paper). Wired in `TheProblem.jsx`.
- [ ] **Copy review with Tiziano**: review copy of the whole website
- [x] **Review section order**: moved Challenges after How I Help. Bg sync unaffected (ID-based).
- [ ] **Testimonials selection**: review which testimonials to show on the website

**SHOULD / COULD (to be triaged next session):**
- [ ] **iPad responsive**: review iPad portrait and landscape viewports
- [ ] **SEO + LLM discoverability**: optimise copy and implementation for search engines and LLMs
- [ ] **Review nav items**: ensure menu items match website sections; review section names
- [ ] **Principles illustrations** *(optional)*: create illustrations for the 3 principles
- [ ] **Testimonial profile pictures**: add profile photos to testimonial cards
- [ ] **Social preview**: create OG/meta preview for social networks
- [ ] **CV link in bio**: add link to CV/resume in the About me section
- [ ] **Client logo strip**: add rotating/scrolling strip of client logos in Hero section (Giuseppe to provide logos)

**Done:**
- [x] **Problem → How I Help spacing**: dynamic JS scroll region sizing based on frame/card height

**Public launch (after silent publish):**
- [ ] **Open robots.txt**: change `Disallow: /` to `Allow: /` in `src/public/robots.txt` so search engines can index the site

**Post-launch:**
- [x] **Enrich How I Work section**: all four raw themes absorbed into two new principles (2026-04-17). Themes 1+2 → "Progress happens through people." Themes 3+4 → "Your problem becomes my problem." See `vector/content/tiziano-session-2026-04-14.md`.

## Open Questions

- What does a client need to see to move from "interesting" to "I want to reach out"?
- How much of Giuseppe's personal POV and beliefs should surface on the site — and where?

---

# Architecture Doctrine

See ARCHITECTURE.md for technical implementation details.

## Design Principles

1. **Clarity over cleverness.** Every design and copy decision should make it faster for the right client to say "this is what I need." Anything that slows that down is wrong, regardless of how good it looks.
2. **Personal, not corporate.** This is one person's voice and point of view. The site should feel like a conversation, not a brochure.
3. **Content first, always.** No section gets designed, no component gets built, until the copy is defined and approved. The architecture serves the message, not the other way around.

## Constraints

- **Hard:** Solo practitioner — no team, no ongoing content pipeline. The site must be low-maintenance once shipped.
- **Hard:** No backend at launch. Static or near-static. Add only when a feature clearly requires it.
- **Soft:** Personal preference for restraint — no animations for the sake of it, no heavy frameworks, no design trends that age poorly.
- **Soft:** The site should be legible and fast on mobile. Most decision-makers read on their phones first.
- **Hard:** Fluid scaling via rem-based spacing tokens and a viewport-responsive root font-size (`clamp(14.5px, 0.27vw + 10.6px, 16px)`). All spacing must use tokens or rem — no hardcoded px except borders, radii, shadows, nav-height, and media query breakpoints.

---

# Quality Gates

## Definition of Done

What does "done" mean for a feature on this site?

- [ ] Copy is final — not placeholder, not lorem ipsum
- [ ] Works without layout errors on mobile and desktop
- [ ] Uses design tokens — no hardcoded colors, spacing, or font sizes
- [ ] Consistent with the voice and tone established in this document
- [ ] No broken links or missing assets

## Ship Criteria

What must be true before this site goes live?

- [ ] All sections have final copy approved by Giuseppe
- [ ] At least two project case studies are complete (outcome-framed, not portfolio-framed)
- [ ] Contact path is clear and functional
- [ ] Site loads fast on mobile (no unoptimised assets)
- [ ] Giuseppe has reviewed the full site at desktop and mobile sizes and signed off
