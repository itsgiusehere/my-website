# AGENTS.md — Agent Ecosystem and Coordination Protocol

**Read this before starting any session with any agent.**

---

## The Crew

| Agent | Folder | Role | Owns |
|-------|--------|------|------|
| **Cooper** | `/` (root) | Strategic design consultant and content lead | What gets built and what it says |
| **Bulk** | `Agents/Bulk/` | Frontend engineer and designer | How it looks and how it is built |
| **Reviewer** | `Agents/Reviewer/` | Code and architecture auditor | Quality gates on Bulk's output |
| **Giuseppe** | — | Director and coordinator | Final decisions, positioning review, tone review |

Each agent loads its own `CLAUDE.md` when you open its folder in Claude Code. They do not share a session — you are the handoff.

---

## How to Open Each Agent

- **Cooper** — open the project root (`/My Website/`) in Claude Code
- **Bulk** — open `Agents/Bulk/` in Claude Code
- **Reviewer** — open `Agents/Reviewer/` in Claude Code

---

## The Workflow

### Phase 1 — Content and Structure (Cooper)
1. Open the project root. You are talking to Cooper.
2. Work with Cooper to define content, copy, and section structure for a feature or page.
3. When content is approved by you, it is ready for Bulk.

**Output:** Approved content spec — what each section says, in what order, doing what job.

### Phase 2 — Design and Build (Bulk)
1. Open `Agents/Bulk/`. You are talking to Bulk.
2. Hand Bulk the approved content spec from Cooper.
3. Bulk designs the visual execution and builds the frontend code.
4. You review positioning and tone as Bulk ships. Flag anything that does not sound like you.

**Output:** Working frontend code, committed and pushed.

### Phase 3 — Review (Reviewer)
1. Open `Agents/Reviewer/`. You are talking to Reviewer.
2. Point Reviewer at the files or components Bulk just built.
3. Reviewer audits for code quality and architecture violations. Delivers a structured flag list.
4. You route flags back to Bulk for fixes.

**Output:** Structured review — PASS or FLAGS with owner and location for each issue.

### Phase 4 — Fix and Close
1. Open `Agents/Bulk/`. Hand Bulk the Reviewer's flags.
2. Bulk fixes. Commits. Done.
3. If content or tone flags surface during review, bring them back to Cooper.

---

## Handoff Protocol

When moving between agents, always pass:

- **Cooper → Bulk:** the approved content spec (what each section says, section job, any structural decisions)
- **Bulk → Reviewer:** the list of files changed and which layer each belongs to
- **Reviewer → Bulk:** the structured flag list (location, problem, owner)
- **Any agent → Giuseppe:** anything that requires a final decision or is outside the agent's domain

---

## What Each Agent Does Not Do

| Agent | Does NOT |
|-------|----------|
| Cooper | Write code, make visual design decisions |
| Bulk | Write copy, decide what gets built |
| Reviewer | Fix anything, review content or tone |
| Giuseppe | Execute — that is what the agents are for |

---

## Shared Context

All agents read the same doctrine files. These are the source of truth for every decision:

- **VECTOR.md** — project identity, audience, positioning, quality gates
- **ARCHITECTURE.md** — four-layer architecture, conventions, stack
- **Each agent's CLAUDE.md** — identity, voice, working style

If any agent's behaviour contradicts these files, the files win.

---

## Current Agent Status

| Agent | Status | Last active |
|-------|--------|-------------|
| Cooper | Active | 2026-03-05 |
| Bulk | Defined, not yet active | — |
| Reviewer | Defined, not yet active | — |
