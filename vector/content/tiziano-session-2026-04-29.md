# Copy Pass — Tiziano Session 4 (2026-04-29)

**Status:** Draft. Agreed between Giuseppe and Tiziano. Not yet wired into components.
**Scope:** How I help — three engagement shapes. Copy pass on Concept Sprint (renamed from Visioning Project). Full copy pass on new Visioning Project (futures/foresight engagement). Section intro updated for three shapes.

---

## How I help — section intro (updated)

**Previous:**
> I provide strategic design and design stewardship: from shaping product vision through to the concrete concepts and first actions teams can take. Engagements tend to take one of two shapes.

**Updated:**
> I provide strategic design and design stewardship: from shaping product vision through to the concrete concepts and first actions teams can take. Engagements tend to take one of three shapes.

**Pending Bulk:** Update "two" → "three" in `HowIHelp.jsx`.

---

## Concept Sprint (renamed from Visioning Project)

**Duration:** Weeks to months

**Subtitle:**
> Turning half-formed direction or an emerging opportunity into a concept the team can build from.

**Body:**
> The work runs through understanding, reframing, opening up options, and converging on a concept — in weeks, not months. Conversations with users, PMs, marketers, engineers become insights, journey maps, experience flows. What lands is a UX concept, co-created with the team and concrete enough to test and build from.

**What changed and why:**
- Name: "Visioning Project" → "Concept Sprint". Sprint signals compression and urgency; Concept names the deliverable.
- Duration: "Weeks to months" retained — more honest than "Weeks" alone, as some sprints run longer.
- Body: "In weeks, not months" added to carry the sprint signal without restructuring the approved copy. "A product vision, or the design of a customer experience across channels" removed — too open-ended for a Sprint. "Keep testing and building from" tightened to "test and build from."

**Pending Bulk:** Rename engagement in `core/content.js`. Update duration label. Update body copy.

---

## Visioning Project (new — futures/foresight engagement)

**Duration:** 3–6 months

**Subtitle:**
> Scanning how a domain is changing — and framing what it will be worth designing for.

**Body:**
> It starts not with a problem, but with a domain that needs a map of future problems and opportunities. The process is both explorative — expert interviews, strategy sessions, desk research — and convergent, through iterative co-creation sessions that bring fragments of future solution to the surface. Visualisations like value chains, journey maps, and early design directions serve as artefacts for testing: are the projected futures sound? Is the focus right? What lands is a set of concepts, each describing the future problem it solves and the benefit it delivers — held together by a narrative that helps the client inform their roadmap.

**What changed and why:**
- New engagement, full copy pass on Cooper's content direction (ADR-003).
- Subtitle: Cooper's "Understanding where a domain is heading" → "Scanning how a domain is changing" — more active verb, names the movement rather than the destination.
- Body: Single paragraph. "It starts not with a problem, but with a domain" — states the distinctive framing plainly. Explorative/convergent dual nature named explicitly. "Fragments of future solution" — Giuse's phrase, kept verbatim. Visualisations named as artefacts for testing, with the two key questions surfaced. Cooper's roadmap closer kept and sharpened: "helps the client inform their roadmap."
- Duration: "3–6 months" — concrete, signals sustained engagement.

**Pending Bulk:** Add as third engagement in `core/content.js`. Add third accordion in `HowIHelp.jsx`. Review layout for three accordions.

---

## Open questions (from ADR-003 — for Cooper/Giuseppe)

1. Does "or an emerging opportunity" in the Concept Sprint subtitle now belong to Visioning Project? An emerging opportunity in a domain is closer to what Visioning starts from. Worth reviewing once both are live side by side.
2. Does adding a third engagement type change the How I help section structure significantly? Currently two accordions — Bulk to review layout for three.
