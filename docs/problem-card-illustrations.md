# Problem Card Illustrations — Brief

**Status:** Draft, ready for Bulk
**Owner:** Cooper (content/strategy) → Bulk (production)
**Date:** 2026-04-08

---

## Purpose

Three illustrations, one per card, for the "Challenges I help leaders with" section. The three empty slots currently read as unfinished and are a MUST on the pre-launch list.

## The Metaphor

The diamond is the **precious vision** — the thing Giuseppe helps clients carve out of whatever state it's in. The metaphor lives only in the illustrations; it is not stated in the copy.

Across all three cards, the illustration shows the diamond in a **different state of stuckness**. Each state corresponds to the specific problem described on the card. Giuseppe's role is implied by the diamond's unfinished condition — the viewer does not need to see him in the frame.

## Family Logic

One subject (a diamond) in three visually distinct registers:

1. **Raw material** — the diamond exists but is trapped inside rock
2. **Broken pieces** — the diamond exists only as fragments that never became a whole
3. **A drawing** — the diamond exists only as a sketch, not yet a stone

Three different visual registers (geological, fragmented, conceptual) unified by the single diamond motif.

---

## Card 1 — The high-stakes initiative

**Copy context:** The brief is to future a product, reimagine a core experience, define a new direction. The stakes are visible and the room is full of opinions. In-house designers are strong at delivery, but this asks for someone who can hold the strategic frame end to end.

**Visual:** A diamond trapped inside rough rock. The stone is raw, untouched. The diamond is visible — its facets catch the eye through the surrounding rock — but nobody is extracting or carving it. The value is evident; the work hasn't started.

**What it says without saying it:** The stakes are visible, but the strategic frame is unheld.

---

## Card 2 — The bar to raise

**Copy context:** Your teams deliver but no one holds the end-to-end experience. Design, product, and marketing each move forward on their own terms, but nothing ties the pieces together. The impact stays local.

**Visual:** Facet-shaped shards lying separately, each clearly a fragment of something larger. The shards are arranged so the viewer can almost see the diamond they could form — but they were never one. Fragments that never became a whole, not a whole that shattered.

**What it says without saying it:** Each team is shaping its own piece. No one is bringing the pieces into one shape.

---

## Card 3 — The bold idea

**Copy context:** You have a strong sense of where this should go but it is not fully formed yet. It is still only in your head.

**Visual:** A sketch or plan of a diamond — a technical drawing, measured and considered, annotated with construction lines or dimensions. It is the *drawing* of the diamond, not the stone itself. The intention exists; the material does not.

**What it says without saying it:** The direction is real but still lives on paper (or in one person's head). It has not been made.

---

## Style

**Sibling family** to the existing service illustrations (`illustration-how-i-work-vision-sprint.png`, `illustration-embedded-leadership.png`, `illustration-strategic-clarity.png`). The problem cards share the linework, texture, and zine/linocut tone of the service illustrations, but use the **stereotypical diamond silhouette** rather than the chunky angular crystal form — so the metaphor reads at a glance.

**Core style:**
- Black and white only — no colour, no greyscale, no soft shading
- Hand-drawn, loose, confident linework — thick, slightly irregular outlines made with a brush pen or marker
- Zine or risograph quality — edges are rough and slightly distressed, as if printed by hand
- High contrast — large solid black shapes next to large white shapes
- Fills rendered with visible texture (stippling, hatching, crosshatching, grainy noise) — never flat grey
- **Diamond silhouette: stereotypical cut-diamond shape** — flat top, angled crown facets, pointed bottom. Facets rendered as flat solid black and white blocks (no sparkle marks, no shiny highlights, no jewellery rendering)
- Hand-drawn accents welcome: dashes, dotted lines, motion marks, small circles, scribbles
- Playful but graphically strong — editorial spot illustration crossed with DIY zine or linocut

**Difference from the service illustrations:**
- Service illustrations are densely populated (characters, tools, environments). Problem cards are **simpler and more iconic** — one central motif per card, minimal secondary elements.
- Service illustrations use a chunky angular crystal. Problem cards use the **stereotypical diamond silhouette**. Linework, texture, and tone match; the diamond shape itself is different.

**What to avoid:** no colour, no gradients, no soft shading, no 3D rendering, no clean vector look, no photorealism, no thin technical line art, no sparkle marks or highlights.

---

## Production Notes

- Giuseppe will use Gemini to draft a base image and then draw on top by hand. See Gemini prompts below.
- Once finalised, export as PNG with transparent or black background (match existing assets) and place in `src/assets/` using the naming pattern `illustration-problem-01.png`, `illustration-problem-02.png`, `illustration-problem-03.png`.
- Update `src/components/TheProblem/TheProblem.jsx` line 7 to import the three separate files instead of the single placeholder.

---

## Gemini Prompts

**Important — how to render the diamond (applies to all three prompts):** Use the **stereotypical diamond silhouette** — the classic symmetrical cut-diamond shape with a flat top (table), angled crown facets, and a pointed bottom (pavilion). This is a deliberate departure from the chunky angular crystals in the service illustrations: the problem cards are a **sibling family**, sharing the linework, texture, and zine/linocut tone, but using the more immediately legible stereotypical diamond silhouette so the metaphor reads at a glance. The diamond's facets are still rendered in **solid black and white blocks** — no sparkle marks, no shiny highlights, no realistic gemstone rendering. Think: a diamond drawn by a linocut artist, not by a jeweller. **Upload one of the service illustrations (`illustration-embedded-leadership.png` or `illustration-how-i-work-vision-sprint.png`) as a style reference** for linework, texture, and tone — but note the diamond shape itself should be the classic symmetrical cut, not the chunky crystal from the references.

### Card 1 — Diamond trapped in rough rock

> Black and white hand-drawn illustration in the style of a DIY zine or linocut print. A single central subject: **a stereotypical diamond shape — the classic symmetrical cut-diamond silhouette with a flat top, angled crown facets, and a pointed bottom — trapped inside a rough rock**. The rock almost completely swallows the diamond: only the sharp corners and a few facet tips of the diamond stick out through cracks and openings in the stone, poking through the rough surface. The bulk of the diamond is hidden inside the rock. The diamond's visible facets are rendered as **flat solid black and white blocks**, hand-drawn in brushy ink — no sparkle marks, no shiny highlights, no jewellery rendering. The surrounding rock is drawn with thick, irregular brush-pen outlines and filled with visible texture — stippling, hatching, and grainy noise. High contrast: large solid black areas next to large white areas, no greyscale, no soft shading. Hand-drawn accents — small dashes, dotted lines, little scribble marks — add energy around the rock. The diamond is untouched, uncarved, waiting to be extracted. Loose, confident, slightly distressed linework. Iconic and centred in the frame, minimal secondary elements. No colour, no gradients, no 3D rendering, no photorealism, no clean vector look. **The image should read as: "a classic diamond shape whose points are piercing through the surface of a rough rock that otherwise hides most of it."**

### Card 2 — Fragments of a diamond

> Black and white hand-drawn illustration in the style of a DIY zine or linocut print. **The primary subject is several large angular shards — the pieces of a diamond that has exploded outward.** Do NOT draw a whole, intact diamond. Draw the pieces themselves, as the main subject. There are roughly five to eight sharp, facet-shaped shards — each one clearly a fragment of a classic cut-diamond (flat planes, angular edges, triangular and trapezoidal facet shapes). The shards are **sparse, rotated at different angles, randomly scattered across the frame, drifting outward as if mid-explosion** — not clustered together, not touching, not arranged neatly. Each shard is at a different rotation, some tilted, some upside-down, spread across the composition with empty space between them. Behind the scattered shards, **a faint ghost outline of the complete classic cut-diamond silhouette** is drawn in light dotted or dashed lines — centred in the frame, acting as a silent anchor that tells the viewer these pieces belong to one whole. The shards radiate outward from this ghost outline. The shards' facets are rendered as **flat solid black and white blocks**, hand-drawn in brushy ink — no sparkle marks, no shiny highlights, no jewellery rendering. Thick, irregular brush-pen outlines. High contrast: solid black against solid white, filled with visible texture — stippling, hatching, grainy noise — no greyscale, no soft shading. Loose, confident, slightly distressed linework. No colour, no gradients, no 3D rendering, no photorealism, no clean vector look. **The image must read as: "an exploded diamond — sparse, rotated shards drifting outward through empty space, with a faint ghost of the original whole visible behind them."** **Do not draw a complete diamond. The diamond exists only as the ghost outline and the scattered pieces.**

### Card 3 — Sketch of a diamond

> Black and white hand-drawn illustration in the style of a DIY zine or linocut print. A single central subject: **a technical drawing or blueprint sketch of a stereotypical diamond shape — the classic symmetrical cut-diamond silhouette with a flat top, angled crown facets, and a pointed bottom** — annotated with construction lines, dimension marks, dotted guide lines, and small notation marks as if designed on a drafting table. The sketch is clearly a drawing, not a solid object — it reads as an intention on paper, not a carved stone. The diamond outline is drawn in thick brushy ink, the facets are indicated as **flat solid black and white blocks** without sparkle or highlight, and the construction guides around it are in lighter dotted and dashed lines — measurement marks, angles noted, small arrows pointing at facets. High contrast: solid black against solid white with visible texture — stippling, hatching — no greyscale, no soft shading. Hand-drawn accents welcome — small circles, arrows, scribbled annotations. Loose, confident, slightly distressed linework. Iconic and centred in the frame, minimal secondary elements. No colour, no gradients, no 3D rendering, no photorealism, no clean vector look. **The image must read as: "a draftsman's sketch of a classic diamond on paper, annotated like a blueprint — not a finished stone."**
