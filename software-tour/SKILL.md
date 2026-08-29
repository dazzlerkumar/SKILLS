---
name: software-tour
description: Generate a single, self-contained interactive HTML "software tour" — a scrollable walkthrough of a product with per-module screen walkthroughs, generated step content, and Mermaid relation/flow diagrams. Use this whenever the user asks for a product walkthrough, software tour, feature tour, onboarding walkthrough, interactive demo page, user-flow documentation, module relation diagram, or a "click-through" / "guided tour" of an app — even if they don't say "HTML" explicitly, and even if they only give a rough description of the product rather than a full spec. Also use when the user wants to turn a PRD, feature list, or set of screenshots into a shareable walkthrough document.
---

# Software Tour Generator

Turns a description of a product (its modules, user flows, and optionally screenshots) into one
self-contained `.html` file: a scrollable, anchor-linked tour with a top-level module relation
diagram, per-module flow diagrams, and step-by-step screen walkthroughs.

## Check for existing specs first

Before drafting anything, look for an existing spec or `/docs` in the project — check for files
like `spec/`, `docs/`, `*.md` (PRD, requirements, feature briefs) or any `specification`/`task`
documents. If you find one, base the tour on it. If you don't find anything, it's fine to ask the
user once whether they have a spec file they'd like you to use — but this is **not mandatory**;
if they say no or don't respond, proceed with what you have.

## When input is incomplete

Don't stall waiting for a perfect spec. If the user gives a rough description, draft reasonable
flows and modules yourself and say what you assumed. Only ask a clarifying question when you
genuinely can't proceed — e.g. they named a product with no description at all.

If the user provides screenshots, use them (see "Screens" below). Otherwise generate a wireframe
mockup — never invent a screenshot or claim a wireframe is the real UI.

## Process

### 1. Gather the shape of the product

From whatever the user gave you (PRD, chat description, screenshots, existing docs), extract:

- **Product name** and one-line purpose.
- **Modules**: the major feature areas (e.g. "Dashboard", "Billing", "Team Settings"). Keep this
  to 3–8 modules — more than that and the tour gets unwieldy; group sub-features under a parent
  module instead of flattening everything.
- **Relations between modules**: what navigates to what, what depends on what, or what the typical
  path through the product looks like (e.g. Onboarding → Dashboard → Billing).
- **User flow per module**: the ordered steps a user takes to accomplish the module's core task.
  Each step becomes one "screen" in the walkthrough.

If the user only gives you a product name and a sentence of context, propose a plausible module
list and flows and move forward — flag your assumptions in your reply, don't block on asking.

### 2. Build the top-level relation diagram

One Mermaid `flowchart` (or `graph TD`) showing how modules relate — navigation paths or
dependencies, whichever the product implies. Keep it to the modules only, not individual screens;
individual screens get their own smaller diagram if a module's flow branches (see step 4).

Reference `assets/template.html` for the exact `<div class="mermaid">` wrapper and CDN script tag
— don't hand-roll the Mermaid setup.

### 3. Write the content for each module section

For each module, write:
- A 1–2 sentence intro: what this module does and why a user would use it.
- If the flow branches or has more than ~4 steps, a small Mermaid diagram just for this module's
  flow (optional — skip it for simple linear flows, the numbered steps already communicate order).
- The ordered list of steps (see step 4 for how each step is rendered).

Keep step descriptions concrete and short (1–3 sentences) — this is a tour, not documentation.
Describe what the user sees and what they'd do next, not implementation detail.

### 4. Render each screen/step

Each step in a flow needs: a step number, a short title, the 1–3 sentence description, and a
visual. For the visual:

- **User-provided screenshot**: embed it directly (`<img>`), and if the user described what to
  point out, add numbered callout pins positioned over the image with absolutely-positioned
  `<div class="callout-pin">` elements (see template) rather than editing the image itself.
- **No screenshot available**: build a wireframe mockup — a generic, labeled layout (browser
  chrome bar, sidebar/nav block, header, content blocks, a primary button) using the wireframe
  components in `assets/template.html`. Label regions with plain text (e.g. "Team list", "Invite
  button") rather than trying to simulate real UI chrome or copy. Never present a wireframe as if
  it were a real screenshot — the visual style should read as a sketch/mockup, not a photo.

### 5. Assemble the single HTML file

Start from `assets/template.html` — it already has the page shell, sticky top anchor-nav, a
hyperlinked contents list, CSS for step cards/callouts/wireframes, and the Mermaid CDN + init
script. Duplicate its module-section block per module and its step-card block per step. Don't
rebuild the shell from scratch.

Two places need one entry per module, kept in the same order and pointing at the same anchor ids:
the sticky nav bar links near the top, and the `.toc-list` "Contents" panel right under the hero.
The contents list is the primary way someone jumps to a section — give each entry a real label
(the module name) plus a short right-aligned hint (e.g. "4 steps"), not just a bare link.

Keep everything in one file (inline `<style>`, inline `<script>` besides the Mermaid CDN import) —
this is meant to be handed to someone as a single artifact they can open or host anywhere.

### 6. Save and present

Write the finished file to `/docs/<product-name>-tour.html` if docs folder exists otherwise to root level of the repository. Don't paste the full HTML into the chat response. Open it for the user — `xdg-open <path>` on Linux, `open <path>` on macOS, `start <path>` on Windows — and tell them the absolute path.

Ask user to review the tour and provide feedback. If they want changes, iterate on the content, flow, or visuals as needed such as deepening the each step, providing more context and examples, adding/removing steps, reordering, or clarifying descriptions. Repeat until the user is satisfied.

## Style notes

- Tone in the copy should be second-person and light ("Here's where you'll invite your team"), not
  formal documentation voice.
- Don't pad with modules or steps the input didn't ask for — a tight 4-module tour beats a bloated
  10-module one with filler.
- If the user asks for a tour of something you clearly don't have enough information about (no
  name, no description, no product context at all), ask one question rather than fabricating an
  entire product.