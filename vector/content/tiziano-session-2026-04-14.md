# Copy Pass — Tiziano Session 2026-04-14

**Status:** Draft for Bulk review. Agreed between Giuseppe and Tiziano. Not yet wired into `core/content.js` or the components.
**Scope:** Hero (headline + subheadline), How I help (frame shift + both engagement bodies), About me (full rewrite), The Problem / Challenges (section label + cards pass).

See "Outstanding" at the bottom for sections not yet rewritten.

---

## Hero

**Name (unchanged)**
Hello, I'm Giuseppe.

**Headline**
I turn scattered thinking into a direction teams can move on.

**Subheadline**
I zoom out to frame the direction of a digital product or experience, and zoom in to make it tangible. The craft is in doing both, and bringing everyone along.

**What changed and why**
- *Fragmented thinking into shared clarity* → *scattered thinking into a direction teams can move on.* More physical, less consulting.
- AI opener dropped. It was trendy, ages badly, and delayed the real line.
- The altitude idea (zoom out / zoom in / bringing everyone along) now opens the subheadline directly — it is the differentiator.
- *Digital product or experience* names the domain without bolding. Quiet concreteness.
- Em dash in the headline removed.

---

## How I help

### Frame shift — three modes collapsed to two

The three-engagement model (Vision Sprint / Embedded Design Leadership / Strategic Clarity) produced overlapping copy because the engagements themselves overlapped. Strategic Clarity is a description of the process inside Visioning work, not a separate offer. Vision Sprint as a name falsely implied short duration.

New frame: two engagements, distinguished by shape.

- **Visioning** — finite, produces a shared picture a team can build from.
- **Embedded partnership** — ongoing, holds direction across delivery.

The client's underlying question is binary: *do I need someone to help me figure out the direction, or someone to help me carry a direction through delivery?* Two answers, two engagements.

### Section intro

> Engagements tend to take one of three shapes.

**Replace with:**

> Engagements tend to take one of two shapes.

### Visioning

- **Title:** Visioning
- **Duration label:** Weeks to months
- **Subtitle:** Turning a half-formed direction into a concept the team can build from.
- **Body:** The work runs through understanding, reframing, opening up options, and converging on a direction. Conversations with users, PMs, marketers, engineers become insights, journey maps, experience flows. What lands is a UX concept, a product vision, or the design of a customer experience across channels — co-created with the team and concrete enough to keep testing and building from.

### Embedded partnership

- **Title:** Embedded partnership
- **Duration label:** Months, sometimes across initiatives
- **Subtitle:** Holding the direction, so vision survives delivery.
- **Body:** I join the team inside an initiative, or across several, and stay for the arc of it. Part sparring partner to leadership, part connector across functions, part hands-on where the work needs it. The outputs accumulate: hypotheses, prototypes, tested concepts, decisions documented and shared. I keep the line open between where the company is going and what actually ships. Direction survives contact with execution.

---

## About me

**Section label (unchanged):** About me

**Body:**

> After a period away from work, I sat in a coaching session about understanding the work I love doing and how it fits in my life. What came was an image: a room full of books and sticky notes, plants growing everywhere, warm light through a window looking out onto something green. A place where knowledge accumulates and stays alive. It made something click: what I do is seek coherence where there are fragments and build it where the dots don't connect yet. It's what draws me to a forest, to a landscape, to the green outside that window. Complexity that feels whole. It's what I try to craft in the work.
>
> 15 years across logistics, fintech, hardware, music software, manufacturing. Each new domain is the part that excites me most. Mapping concepts, finding the first principles underneath, crafting to understand and to make that understanding shared.

**What changed and why**
- Full rewrite. The previous version ("15+ years spanning design, strategy, and product... a generalist who's been deep in enough disciplines") was CV language with no person on the page.
- Anchored in a real moment: a coaching session after a period away from work, and the image that came from it.
- The room description matches Giuseppe's actual vision board illustration (books, sticky notes, plants, green outside the window — not a city skyline).
- *Seek coherence where there are fragments and build it where the dots don't connect yet* is the through-line of the work, stated plainly.
- Beauty as coherence — *complexity that feels whole* — connects the personal (forests, landscapes, the green outside the window) to the professional without explaining it.
- *Crafting to understand and to make that understanding shared* replaces the old "building an understanding before I start designing." Crafting is not a step after understanding; crafting is a means of understanding and of creating alignment.
- "Based in Berlin, working globally" dropped — CV filler that doesn't help a reader decide whether to reach out.
- Old list of principles ("a few things I hold to...") removed — they already live in the How I work section.

**Consequences for design and build (Bulk to consider)**
- The section photo may want to coexist with or be replaced by the room illustration from Giuseppe's vision board. The room is a stronger visual anchor for this text than a portrait photo.
- The process sketch (vague ideas → the mess in between → solid concept + impact) could live on this page or nearby — it explains the work faster than any paragraph.
- The old headline ("I went independent to move faster") is dropped. Bulk to decide whether the section needs a headline at all, or whether the text stands on its own.

---

## The Problem / Challenges

### Section label

**"Challenges I help leaders with"** → **"Where things usually start"**

The cards describe situations, not challenges. "Where things usually start" invites recognition without claiming to know the reader's problem. Follows the VECTOR principle: never tell the reader what they need.

### Card 1 — The high-stakes initiative

- **Tab (unchanged):** The high-stakes initiative
- **Title:** The brief is big: reimagine a core experience, define a new direction.
- **Body:** The stakes are visible and the room will be full of opinions. Your in-house designers are strong at delivery, but this asks for someone who can hold the direction across stakeholders and drive it end to end.

**What changed:** *Future a product* dropped (jargon). Three-item comma list compressed to two. *Hold the strategic frame* → *hold the direction across stakeholders*. Prescriptive closer ("so you can focus where you're needed most") removed.

### Card 2 — The bar to raise

- **Tab (unchanged):** The bar to raise
- **Title (unchanged):** Your teams deliver but no one holds the end-to-end experience.
- **Body:** Design, product, and marketing each move forward on their own terms, but nothing ties the pieces together. The work stays local. The gap isn't more capacity. It's someone senior enough to work across functions and connect what each team is doing into one coherent direction.

**What changed:** *Impact* → *work* (plain, concrete). *What's missing isn't...* reframed to avoid telling the reader what they're missing. *Raise the strategic impact of design* → *connect what each team is doing into one coherent direction*. Em dash removed.

### Card 3 — The bold idea

- **Tab (unchanged):** The bold idea
- **Title (unchanged):** You have a strong sense of where this should go but it's not fully formed yet.
- **Body:** It's still only in your head. Your design team may not have the bandwidth or the seniority to carry something this ambiguous, and a rough direction won't land until it's tangible enough for the organisation to commit to.

**What changed:** *Profile* → *seniority* (plain). *Rally around* → *commit to* (stronger). Em dash → comma.

**Consequences for design and build (Bulk to consider)**
- Section label change: update in `TheProblem.jsx` (line 200).
- Card 1 title shortened. Bulk to check whether layout still works at current card widths.
- No structural or component changes needed.

---

## How I work (Principles)

### Section intro

> I take ownership so you don't have to chase progress. I stay three steps ahead so you save time. And I see things through to results — so you can focus on what matters knowing it's in good hands.

**Replace with:**

> I take ownership of the work, stay ahead of what's coming, and see things through to results.

**What changed:** Three "I X so you Y" clauses collapsed to one sentence with three behaviours. The prescribed benefits were doing no work — the behaviours speak for themselves. "Three steps ahead" (cliché) and "in good hands" (filler) dropped.

### Principle 1 — Not just user-centred

- **Title (unchanged):** Not just user-centred
- **Body:** I bring everyone to the table: users, PMs, marketers, engineers. People commit to a vision when it serves their interests, so I make sure each perspective is understood and integrated.

**What changed:** Em dash → colon (it was doing a colon's job).

### Principle 2 — Validate only what matters

- **Title (unchanged):** Validate only what matters
- **Body:** I don't get stuck validating everything. I make assumptions, reuse existing insights, and focus validation where the risk is highest.

**What changed:** "What truly moves things forward" → "where the risk is highest." Objective, plain, nine words instead of twelve.

### Principle 3 — Always a recommendation

- **Title (unchanged):** Always a recommendation
- **Body:** I don't leave you with options and no opinion. No matter how complex the situation, I provide a clear next step. Otherwise we stay stuck.

**What changed:** Em dash → full stop. The closer lands as its own beat.

### Principle 4 — Progress happens through people (NEW)

- **Title:** Progress happens through people
- **Body:** Complex organisations move through trust, not processes. I map who matters and earn their buy-in. On the ground, I elevate the team I work with — improving rituals, ways of working, how they function together. The right people aligned and growing is what makes the work last.

**Source:** Absorbs two raw themes from VECTOR post-launch list: *strategic stakeholder unlocking* (upward: mapping who matters, earning trust) and *levelling up the team* (on the ground: improving rituals, ways of working). Both are consequences of the same belief — progress happens through people — so they belong in one principle, not two.

### Principle 5 — Your problem becomes my problem (NEW)

- **Title:** Your problem becomes my problem
- **Body:** I care about the work and the people doing it. I'm always there, I go further than expected, and I stay until it's right. Clients don't have to chase me for progress or worry about quality.

**Source:** Absorbs two raw themes: *high drive and standards* and *easy to work with*. Both describe the same thing from different angles — what it feels like to have Giuseppe on the team. The title names the client's experience, not a trait.

### The five principles as a set

1. **Not just user-centred** — who I involve
2. **Validate only what matters** — how I prioritise
3. **Always a recommendation** — how I decide
4. **Progress happens through people** — how I navigate and elevate
5. **Your problem becomes my problem** — how I show up

**Consequences for design and build (Bulk to consider)**
- Two new principle cards. `Principles.jsx` currently renders three — Bulk to expand to five.
- New SVG icons needed for principles 4 and 5.
- Grid layout may need adjusting (3-column → 5 items). Options: 3+2, 5-column, or different treatment.
- Copy-only updates for existing principles 1–3.

---

## Contact

**Body:**

> If something here resonated, or you want to think out loud about a project, I'm happy to chat.

**What changed:** *Resonates with a challenge you're navigating* → *resonated*. One word, past tense — the reader has already read the page. Missing comma added. Corporate filler dropped.

**Consequences for design and build (Bulk to consider)**
- Copy-only update in `Contact.jsx`. No structural changes.

---

## Testimonials — selection and order

**Name format:** First name + last initial (e.g. Rachel H.). Title and company shown in full. Photo provided by Giuseppe. Rationale: testimonials were shared on LinkedIn, not written for this site. First name + initial respects the person's control; title and company carry the credibility.

### Featured pull-quote

**Rachel H.** — VP of Design, Native Instruments
> At a pivotal moment for the company Giuseppe quickly gained cross-disciplinary trust and respect from stakeholders as well as from a team of designers, content strategists and PMs. He was an invaluable sparring partner for me in my role as the company strategy evolved throughout the year.

**Why featured:** Target audience title (VP of Design). Names trust-building, cross-disciplinary work, sparring partner, navigating change. Directly validates the Embedded partnership engagement and principle 4.

### Visible cards

1. **Samta K.** — Lead PM, Sennder
> Faced with a tight deadline and complex requirements, Giuseppe distilled vast amounts of information into a clear, coherent structure that users loved. His sharp intellect, calm demeanour and commitment to excellence set him apart.

2. **Simon A.** — Design Strategy Lead, EOS
> Giuseppe's ability to research, synthesise and communicate that synthesis in a clear and inspiring manner is phenomenal. When priorities are changing weekly, this is super helpful.

### Behind Show more

3. **Gerrit E.** — CPO, PRO360 Bosch Power Tools
> Giuseppe brings everything together cohesively in an understandable way. His work brought us forward as no one did before.

4. **Dietrich P.** — VP Growth, Native Instruments
> What sets Giuseppe apart is his thorough discovery and stakeholder management upfront. If you need someone who can architect connected experiences across channels and align diverse stakeholders around a shared vision, Giuseppe delivers.

5. **Denis W.** — Lead Engineer, Futurice
> I was impressed by Giuseppe's systematic, professional approach, the empathetic but honest way he communicates with clients and the quality of his deliverables.

### Dropped

- Maria B. (Senior MP, SumUp) — warm but generic, doesn't name anything specific about the work.
- Simon C. (CTPO, Native Instruments) — strong quote, but three NI testimonials was too many. Replaced by Denis W. for company diversity and an engineering perspective.
- Samantha L. (CPO, MoreTo) — concrete outcome (pivot in strategy) but less memorable overall.

### What changed and why

- Rachel H. is new to the site — wasn't in `core/content.js`. Needs adding.
- Denis W. is new to the site — wasn't in `core/content.js`. Needs adding.
- Name format changed from full names to first name + last initial across all testimonials.
- Order designed for the scroll: featured names trust and partnership (the relationship), visible cards name synthesis and coherence (the work), behind Show more reinforces both.
- Company diversity: Native Instruments (x2), Sennder, EOS, Bosch, Futurice. No single company dominates.

**Consequences for design and build (Bulk to consider)**
- Add Rachel H. and Denis W. to `testimonials` array in `core/content.js`.
- Remove Maria B., Simon C., Samantha L. from the array (or keep in code but don't render).
- Reorder array: Rachel first (featured), then Samta, Simon A., Gerrit, Dietrich, Denis.
- Update all `name` fields in `testimonials` array to first name + last initial format.
- Giuseppe to provide profile photos for all six. Wire into `photo` field (component already supports it).

---

## Consequences for design and build (Bulk to consider)

1. **`core/content.js` — `engagementModes` array** needs restructuring from three items to two. Rename keys, update bodies, statements, durations. Accents may need reassignment (currently lavender / yellow / teal — now only two needed).
2. **Accordion illustrations** — three exist today (`illustration-how-i-work-vision-sprint.png`, `illustration-embedded-leadership.png`, `illustration-strategic-clarity.png`). One becomes redundant. Either repurpose, retire, or commission a replacement that better represents the new Visioning framing.
3. **Layout** — two accordions instead of three will change the section's visual weight. Bulk to decide whether the design still reads as substantial, or whether the two cards want different treatment (larger, more breathing room, illustrations inline rather than stacked).
4. **Auto-open on scroll** — logic currently opens the first accordion on intersection. Still works with two items, no change needed.
5. **Nav + anchors** — section id is `how-i-help`. No change.
6. **`site-copy.md`** — the existing file is stale (still references the old three-mode structure, the old About section, the old contact form). Worth a separate pass once the rest of the site is reviewed.

---

## Outstanding — still to review with Tiziano

Ordered by impact (from today's full-site assessment):

1. ~~**About me**~~ — done (2026-04-17).

2. ~~**The Problem cards**~~ — done (2026-04-17). Section label changed, consultancy language trimmed, em dashes removed.

3. ~~**How I work (Principles) intro**~~ — done (2026-04-17). "I X so you Y" triplet collapsed to one sentence.

4. ~~**Principle 2 (Validate only what matters)**~~ — done (2026-04-17). "What truly moves things forward" → "where the risk is highest".

5. ~~**Contact intro**~~ — done (2026-04-17). *Resonated* replaces *resonates with a challenge you're navigating*.

6. ~~**Section label mismatch**~~ — resolved (2026-04-17). Changed to "Where things usually start".

7. **General pass on em dashes** — reduce across the site per Giuseppe's preference (sparingly, only when a comma or full stop genuinely doesn't do the same job). Most em dashes already addressed in individual section passes above.

8. **`vector/content/site-copy.md`** — refresh once all changes are wired. Currently stale in multiple places.

9. ~~**Testimonials selection**~~ — done (2026-04-17). Six testimonials selected and ordered. Rachel Hill and Denis W. added. Maria Bykova, Simon Cross, Samantha Lim dropped. **Action needed: Giuseppe to confirm Denis W.'s full surname for the site.**
