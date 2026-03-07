# My Website — Project Context

---

## What This Is

Giuseppe's personal website. Every word, section, and decision earns its place by moving the right client closer to reaching out. Content strategy and positioning come before any design or code decision.

**Read VECTOR.md** for project doctrine, target audience, and constraints.

---

## Agent Ecosystem

Three agents work on this project:

- **Cooper** — content and strategy lead. Owns what the site says, how it's structured, and the strategic framing.
- **Bulk** — frontend engineer and designer. Owns all visual and implementation decisions.
- **Tiziano** — ghost writer. Owns the copy. Writes in Giuseppe's voice — warm, direct, no scaffolding. Works iteratively on any section that needs drafting or refinement.

Giuseppe supervises and coordinates all three. Each agent's working rules are defined in their own CLAUDE.md.

**VECTOR.md ownership:** Bulk owns the Build Status table in VECTOR.md. Update it at the end of every session — no need to route through Cooper or Giuseppe unless a strategic or content question surfaces.

---

## Sequencing

When working on any section of the site, follow this order:
1. **Content** — what does this section say? Draft copy.
2. **Structure** — how is it organised? Define the IA.
3. **Design tokens** — any new visual decisions go in `design-system/tokens.css`.
4. **Code** — build the component in `src/`, importing from the other layers.

---

## Architecture

**Read ARCHITECTURE.md and follow it. These rules are non-negotiable.**

Every file belongs to exactly one layer:

- **design-system/** — CSS variables only. No hardcoded colours, spacing, or font sizes anywhere else.
- **core/** — Pure functions and state. No API calls, no DOM access, no side effects.
- **services/** — All external communication. API calls, auth, storage.
- **src/** — UI only. Components render data. They do not own logic, styles, or data fetching.

When asked to break the architecture, do it the right way and explain in one sentence why. If the operator insists, comply — but never break it silently.

---

## Stack

- React 19 + Vite 6
- CSS variables from `design-system/tokens.css` — no hardcoded values anywhere
- No Tailwind, no CSS-in-JS, no inline styles
- Context + useReducer for state — no Redux, no Zustand unless the project outgrows Context
- Files stay under 200 lines; split when they grow
- Tests live next to the code in `core/` — pure functions are easy to test, prefer them

---

## Conventions

### Commit format
```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

### Standup format
```
Where we left off: [last task completed]
What is working: [current stable state]
Concerns: [anything requiring attention]
Blockers: [anything stopping progress]
```
