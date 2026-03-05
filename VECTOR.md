---
# VECTOR.md — Project Doctrine
# This file is the single source of truth for project intent, audience, and knowledge.
# Read this before CLAUDE.md. Read CLAUDE.md before writing code.

vector_version: "0.1"

project:
  name: "Giuseppe de Cesare — Strategic Designer"
  description: "Personal website for a freelance strategic designer to attract and convert senior design and product leaders seeking project-based collaboration."
  stage: "definition"
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

## Key Assumptions (Seed These Early)

1. **Primary clients find this site before reaching out** — They discover Giuseppe via LinkedIn, referral, or search, then visit the site to validate whether to engage. The site is a conversion tool, not a discovery tool. — *hypothesis*
2. **Outcome framing outperforms process framing** — Clients respond more to "what changed after the engagement" than "here is my four-phase process." — *hypothesis*
3. **Personal voice builds trust faster than polished agency copy** — For a solo practitioner, the human behind the work is a differentiator. Generic positioning erodes it. — *hypothesis*
4. **The middle-ground positioning is distinctive** — "Neither strategy consultant nor design agency" is a real gap clients recognise and actively seek to fill. — *validated (supported by positioning research)*

## Decisions

- **Engagement modes:** All three (Vision Sprint / Embedded Leadership / Strategic Clarity) appear on the site. Legibility of the framing to clients is still to be validated.
- **Call to action:** All three options (contact form, calendar link, LinkedIn DM) will be available. Final hierarchy — which is primary, which are secondary — is TBD.
- **Site structure:** Single page, scroll-based, six sections in this order:
  1. **Hero** — name, one-line positioning, primary CTA
  2. **The problem** — name the situation clients are in before hiring Giuseppe
  3. **How I work** — three engagement modes as a choice, not a process
  4. **Selected work** — 2–3 outcome-framed case studies
  5. **About** — who Giuseppe is, what he believes, personal not biographical
  6. **Contact** — all three CTAs (calendar, form, LinkedIn)

## Next Session

**Start here:** Review the six-section site structure with Giuseppe before writing any copy. Confirm the order, the section jobs, and whether anything is missing or should be cut.

## Open Questions

- What does a client need to see to move from "interesting" to "I want to reach out"?
- How much of Giuseppe's personal POV and beliefs should surface on the site — and where?
- Which CTA should be the primary prompt? Calendar link (low friction, high intent signal), contact form (more context, slightly more effort), or LinkedIn (familiar but off-site)?

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
