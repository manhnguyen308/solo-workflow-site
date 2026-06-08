---
name: soloopsguide-design
description: Use this skill to generate well-branded interfaces and assets for SoloOpsGuide, either for production or throwaway prototypes/mocks. Contains the future-state redesign system — typography, palette, primitives, and trust posture.
user-invocable: true
---

Read the `README.md` at the root of this skill first. It documents the **future-state redesign system** — Source Serif 4 (prose) + Public Sans (UI) + JetBrains Mono (copyable blocks), warm-neutral paper palette, deep-ink text, one editorial-blue accent, no gradients, no emoji, no SaaS-style cards.

The earlier fidelity-pass UI kit (teal/amber + Source Sans 3 + Lora + SaaS-style cards) is **obsolete** and lives in `archive/obsolete-fidelity-pass/`. Do not reach into it for new work — the README explains why.

When creating visual artifacts (slides, mocks, throwaway prototypes), copy `styles.css` + the relevant `screens/*.jsx` + `components.jsx` + `design-canvas.jsx` and build a static HTML file. When working on production code, use the README as the canonical reference.

If invoked without other guidance, ask what the user wants to build, then act as an expert designer who outputs HTML artifacts or production guidance — always against the future-state system, never the archived direction.
