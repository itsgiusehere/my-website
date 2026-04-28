# Copy Pass — Tiziano Session 2026-04-28

**Status:** Draft. Agreed between Giuseppe and Tiziano. Not yet wired into components.
**Scope:** How I help — section intro line added.

---

## How I help

### Section intro (updated)

**Add before "Engagements tend to take one of two shapes.":**

> I provide strategic design and design stewardship: from shaping product vision through to the concrete concepts and first actions teams can take.

**Full intro reads:**

> I provide strategic design and design stewardship: from shaping product vision through to the concrete concepts and first actions teams can take. Engagements tend to take one of two shapes.

**What changed and why:** The section previously opened on the structural description ("Engagements tend to take one of two shapes") with no statement of what Giuseppe brings. The new line names the work specifically — strategic design, design stewardship, the arc from vision to concrete concept — before the engagement types arrive. Matches the specificity of how the right clients recognise the work.

**Pending Bulk:** Wire into `HowIHelp.jsx` or wherever the section intro copy lives.

---

## How I help — engagement rename

**Visioning** → **Visioning Project**

**What changed and why:** Adding "Project" signals the engagement is bounded — a defined start, end, and deliverable — rather than an open-ended mode of working. Pairs cleanly with "Embedded partnership": one is a project, one is a relationship.

**Pending Bulk:** Rename in `core/content.js` (`engagementModes` array title field) and wherever the label renders in `HowIHelp.jsx`.

---

## Visioning Project — subtitle update

**Previous:**
> Turning a half-formed direction into a concept the team can build from.

**Updated:**
> Turning half-formed direction or an emerging opportunity into a concept the team can build from.

**What changed and why:** Added "or an emerging opportunity" to cover the second common starting point — not just clarifying something half-formed, but exploring new territory. Dropped the article before "half-formed direction" to keep the two inputs parallel.

**Pending Bulk:** Update subtitle field for the Visioning Project engagement in `core/content.js`.
