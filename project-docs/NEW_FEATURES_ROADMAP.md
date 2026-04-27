# SoloOpsGuide New Features Roadmap

A practical 5-phase roadmap for SoloOpsGuide improvements. Read `AGENT.md` and `TRACKER.md` first. Do not implement more than one feature per pass unless explicitly instructed.

---

## 1. Purpose

This roadmap tracks the next recommended improvements to SoloOpsGuide's content, discovery, and reader-routing systems. It is not a product strategy document. It is a prioritized queue for daily passes, organized into phases to reflect signal-dependency and execution order.

---

## 2. Current status

**Phase 1: Complete.**

All six Phase 1 features are done. No Phase 1 feature should be rebuilt or revisited unless a specific regression is discovered.

### Phase 1 completed features

| # | Feature | Status |
|---|---------|--------|
| 1 | Workflow Diagnostic Checklist | Done — `/templates/workflow-diagnostic-checklist/` |
| 2 | Client Workflow Health Check | Done — `/templates/client-workflow-health-check/` |
| 3 | Approval and Billing Readiness Checklist | Done — `/templates/approval-billing-readiness-checklist/` |
| 4 | Stack Decision Readiness Checklist | Done — `/templates/stack-decision-readiness-checklist/` |
| 5 | Internal Search Improvement Pass | Done — synonym map expanded in `static/js/search.js` |
| 6 | Template Bundle Refinement Pass | Done — Workflow Starter Pack routing updated |

---

## 3. Roadmap selection principles

- Prefer routing clarity over new content volume.
- Prefer small refinements over new pages.
- Do not create new public pages unless the value is clear.
- Preserve workflow-first hierarchy at every phase.
- Avoid feature bloat — a deferred idea is better than a weak addition.
- Use GSC and internal search behavior to prioritize Phase 3 and later work.
- Keep templates and checklists subordinate to workflow cornerstone pages.
- Keep search improvements lightweight; do not rebuild what works.
- Avoid broad redesigns and URL changes at any phase.
- Prefer pruning or consolidating weak ideas over adding more features.

---

## 4. Phase 2 — Routing and first-screen clarity

**Purpose:** Improve the main upstream entry points and ensure the new Phase 1 support assets do not compete with core workflow pages.

### Task 2.1 — Workflow Hub First-Screen Refinement

**Purpose:** Improve the first screen of `/client-workflow-systems/` so readers and Google immediately understand this is the main upstream workflow path.

**Constraints:**
- No redesign, no URL changes, no broad rewrite.
- Tighten intro copy, routing copy, or page-positioning only.

**Signal dependency:** Can proceed now. This is the most important upstream path and benefits from refinement before any further new pages or UI features are added.

---

### Task 2.2 — Workflow Anchor First-Screen Refresh

**Purpose:** Clarify the main workflow anchor's first screen so it remains the strongest canonical path for lifecycle sequence problems.

**Constraints:**
- Small copy refinement only.
- Preserve existing slug and URL.
- Do not make support assets look primary.

**Signal dependency:** Can proceed after 2.1 if a first-screen gap is confirmed.

---

### Task 2.3 — Templates Hub Decision Strip

**Purpose:** Add or refine a compact decision strip to help readers choose between the diagnostic checklist, health check, readiness checklists, and starter bundles.

**Constraints:**
- Do not make templates the main strategy layer.
- No broad page rewrite.

**Signal dependency:** Can proceed after 2.1. Should only be added if the hub genuinely has a routing gap after Phase 1 additions.

---

### Task 2.4 — Problem-to-Page Guide Routing Review

**Purpose:** Verify that the guide still routes to the best exact pages after Phase 1 additions.

**Constraints:**
- Review only.
- Make at most one small fix if a routing issue is found.

**Signal dependency:** Can proceed any time.

---

## 5. Phase 3 — Search, discovery, and reader-path UX

**Purpose:** Improve how readers find the right page now that more pages exist.

### Task 3.1 — Search Query Chips / Suggested Searches

**Purpose:** Add a small set of suggested search prompts near the internal search entry or results page.

**Suggested chips:**
- client won't respond
- approval before invoice
- choose CRM or project tool
- workflow health check
- billing status
- stack decision

**Constraints:**
- Do not rebuild search.
- No new dependency or library.
- Keep UI lightweight and removable.

**Signal dependency:** Proceed after Phase 2 routing tasks are complete. Wait for some post-Phase-1 search behavior before deciding which chips matter most.

---

### Task 3.2 — Phase 2 Internal Search Ranking Pass

**Purpose:** Refine ranking rules after new feature pages have been tested through natural queries.

**Constraints:**
- No search rebuild.
- Small synonym or weight changes only.
- Use observed query behavior where available.

**Signal dependency:** Wait for real search behavior data. Do not run speculatively.

---

### Task 3.3 — Reader Path Footer Pilot

**Purpose:** Test a small reader-path block on one section or one template group showing the intended reading sequence: start upstream → diagnose → choose asset → execute next step.

**Constraints:**
- Pilot only — one section or group.
- Do not add globally unless proven useful.
- Avoid duplicate CTAs.

**Signal dependency:** Wait for Phase 2 routing results before piloting.

---

### Task 3.4 — Search Console Response Checklist

**Purpose:** Create or refine a lightweight documentation checklist for responding to GSC signals without over-editing pages.

**Constraints:**
- Repo documentation only unless a specific GSC signal exists.
- Avoid page churn — this exists to prevent reactive over-editing, not to trigger it.

**Signal dependency:** Create after enough GSC data exists to inform a repeatable process.

---

## 6. Phase 4 — Workflow-stage support improvements

**Purpose:** Strengthen selected lifecycle stage pages with natural support links and clearer execution paths.

### Task 4.1 — Milestone Delivery Support Pass

**Purpose:** Review the milestone delivery workflow and confirm it routes naturally to the approval, readiness, and diagnostic assets added in Phase 1.

**Constraints:**
- One focused page review.
- No broad rewrite.
- Add only natural links where a gap is confirmed.

**Signal dependency:** Can proceed after Phase 2 is complete.

---

### Task 4.2 — Invoice and Payment Support Pass

**Purpose:** Review the invoice and payment workflow and confirm it routes naturally to the billing readiness checklist, billing-status comparison, and closeout guidance.

**Constraints:**
- One focused page review.
- No broad rewrite.
- No billing-before-approval implication.

**Signal dependency:** Can proceed after 4.1.

---

### Task 4.3 — Offboarding and Closeout Support Pass

**Purpose:** Review offboarding and closeout paths for final handoff, closeout non-response, and testimonial or referral readiness.

**Constraints:**
- One focused page review.
- No broad rewrite.

**Signal dependency:** Can proceed after 4.2.

---

### Task 4.4 — Stack and System-of-Record Support Pass

**Purpose:** Review the lean stack blueprint, CRM vs PM page, and stack readiness checklist relationship for routing clarity.

**Constraints:**
- Targeted routing review only.
- No comparison-page rewrite unless a specific issue is found.

**Signal dependency:** Can proceed any time after Phase 2 is complete.

---

## 7. Phase 5 — Measurement, pruning, and monetization readiness

**Purpose:** Keep the site clean, evidence-led, and ready for long-term SEO and AdSense quality review without adding unnecessary features.

### Task 5.1 — GSC Signal Response Pass

**Purpose:** Review GSC data and choose one page or query for a small targeted edit.

**Constraints:**
- One query or one page only per pass.
- No broad SEO rewrite.
- Prioritize positions 15–40 with real impressions.

**Signal dependency:** Requires meaningful GSC data. Do not run speculatively.

---

### Task 5.2 — Low-Value Content Risk Review

**Purpose:** Check whether Phase 1 and Phase 2 support pages feel useful and distinct — not thin or duplicative.

**Constraints:**
- Review only unless a clear issue exists.
- Prefer consolidation or pruning over adding more pages.

**Signal dependency:** Run after Phase 2 and Phase 3 features have settled for at least a few weeks.

---

### Task 5.3 — Feature Roadmap Pruning Pass

**Purpose:** Remove or defer ideas in this roadmap that no longer look useful after data arrives.

**Constraints:**
- Roadmap documentation only.
- Do not add features as a substitute for pruning.

**Signal dependency:** Run after Phase 3 is complete or after 60+ days of post-Phase-1 GSC data.

---

### Task 5.4 — AdSense / Monetization Readiness Check

**Purpose:** Review trust signals, content distinctness, navigation clarity, and low-value-content risk before any monetization push.

**Constraints:**
- No ad placement unless explicitly requested.
- No affiliate additions unless explicitly requested.
- No public claims that are not true.

**Signal dependency:** Run after low-value content risk review passes.

---

## 8. First recommended next task

**Phase 2, Task 2.1 — Workflow Hub First-Screen Refinement**

The workflow hub (`/client-workflow-systems/`) is the most important upstream entry point. A small first-screen refinement is the right next move before adding more pages, UI features, or new phases.

This roadmap update does not implement it. It only identifies it as the next recommended task.

**Implementation scope when ready:**
- Read `/client-workflow-systems/` first screen.
- Tighten intro copy, routing copy, or page-positioning only.
- No URL changes, no redesign, no new sections.
- Update `TRACKER.md` and commit.

---

## 9. Deferred / do-not-build-yet ideas

These ideas are excluded from the current roadmap. Do not add them until GSC data, reader behavior, or a specific structural problem makes the value clear.

- Large redesigns of any cluster or the global layout.
- New global navigation system.
- New search library or search rebuild.
- New public content clusters without GSC evidence of demand.
- Broad monetization, ad placement, or affiliate additions.
- Mass internal-link passes across the full site.
- Full template or checklist rewrites.
- New calculators or interactive tools unless a concrete reader need appears.
- New hub pages not tied to a confirmed routing gap.

---

## 10. Implementation rules

- Read `AGENT.md` and `TRACKER.md` before starting any feature.
- Implement one feature per pass unless explicitly directed otherwise.
- Every new page must have:
  - a clear support role (not a hub or cornerstone)
  - a "Start upstream first if..." section
  - specific internal links to the best exact destination pages
  - a feature image generated through `tools/feature-images/`
  - at most 1–2 backlinks from the most directly relevant existing pages
- Do not use internal planning language in public-facing page copy.
- Do not keyword-stuff query phrases.
- Do not create new public pages unless the value is clearly established.
- Prefer routing clarity and small refinements over new content volume.
- Update `TRACKER.md` and commit after each feature.

---

## 11. Validation rules

- Run `git diff --check` before committing.
- Confirm `public/` remains ignored and untracked.
- Confirm only intended source files were changed.
- For docs-only passes, a Hugo build is not required unless a non-doc source file changed.
- For content or template changes, run the Hugo build:
  - System Hugo first: `hugo --gc --minify --baseURL https://soloopsguide.com/`
  - Fallback: `tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/`
- Report the exact Hugo version and page count in `TRACKER.md`.
- See `project-docs/BUILD-VALIDATION.md` for the full validation reference.
