# ADR-002: Engagement modes collapsed from three to two

**Date:** 2026-04-14
**Status:** accepted
**Deciders:** Giuseppe, Cooper, Tiziano

## Context

The How I help section has carried three engagement modes since the first draft: Vision Sprint, Embedded Design Leadership, and Strategic Clarity. VECTOR had already flagged that the three accordion bodies restated situations that The Problem section was now covering (Cooper session, 2026-03-19). Rewriting the bodies surfaced a deeper issue: the engagements themselves overlap.

- **Vision Sprint** and **Strategic Clarity** are the same engagement described from different angles. Strategic Clarity names the *process* (interviews, workshops, synthesis toward shared direction). Vision Sprint names the *output* (artefacts the team can build from). The process is inside the output; they are not two separate offers.
- **Vision Sprint** as a name implied a short, fixed duration. The actual work can run from a few weeks to several months. The name worked against the reality.
- The distinction that matters to a client is binary: *do I need someone to help me figure out the direction, or someone to help me carry a direction through delivery?*

## Decision

Two engagements replace the three:

1. **Visioning** — finite engagement, produces a shared picture the team can build from. Duration: weeks to months. Runs through understanding, reframing, opening up options, and converging on a direction.
2. **Embedded partnership** — ongoing engagement inside an initiative, or across several. Holds direction across delivery. Sparring partner, connector, hands-on where the work needs it.

Full copy drafted in `vector/content/tiziano-session-2026-04-14.md`.

The asymmetry in naming (*Visioning* names the output, *Embedded partnership* names the relationship) is intentional — the engagements are asymmetric in shape and the labels reflect that.

## Consequences

**Positive**
- Removes the recurring overlap between How I help bodies and The Problem cards.
- Clearer client question: *figure out direction* or *carry direction*. Binary choice is easier to recognise oneself in than a three-way taxonomy.
- *Visioning* frees the engagement from the duration anxiety that *Vision Sprint* imposed.
- *Direction survives contact with execution* lands as the closer for Embedded — a strong aphoristic line.

**Negative / to watch**
- Two accordions instead of three changes the visual weight of the section. Bulk to decide whether the layout still reads as substantial, or whether the two cards want different treatment.
- One of the three existing illustrations becomes redundant. Repurpose, retire, or commission a replacement.
- `core/content.js` `engagementModes` array needs restructuring: rename keys, update bodies, statements, durations, reassign accents.
- Loss of variety — three options on a page feel like a real menu; two can feel thin. Accepted trade: thin-and-true beats full-and-confused.

## Alternatives Considered

- **Keep three modes, rewrite to remove overlap.** Rejected — the overlap is structural, not a copy problem. No rewrite resolves it.
- **Collapse to one mode with variations.** Rejected — clients need a concrete handle. One offer with fine print reads as vague.
- **Rename Vision Sprint to Vision Process / Vision Work, keep three.** Rejected — solves the duration problem but not the overlap with Strategic Clarity.
- **Parallel naming (*Visioning* + *Embedding* or *Visioning* + *Embedded work*).** Rejected — symmetric naming flattens the genuine asymmetry. One engagement is a thing you deliver; the other is a way you work.
