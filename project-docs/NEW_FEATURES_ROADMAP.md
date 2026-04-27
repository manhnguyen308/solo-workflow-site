# SoloOpsGuide New Features Roadmap

A practical queue of recommended next features. Read `AGENT.md` and `TRACKER.md` first. Do not implement more than one feature per pass unless explicitly instructed.

## Purpose

This roadmap tracks the next recommended improvements to SoloOpsGuide's content, discovery, and reader-routing systems. It is not a product strategy document — it is a prioritized queue for daily Claude Code passes.

## Feature selection principles

1. Workflow-first hierarchy must be preserved. No feature makes templates, comparisons, or tools feel like the primary strategy layer.
2. Each feature must close a real gap in reader routing, diagnosis, or execution.
3. Prefer features that strengthen existing cornerstone pages over features that create independent new hubs.
4. New pages must stay clearly subordinate to the workflow anchor, blueprint, and comparison cornerstone pages.
5. Do not create a feature that duplicates an existing page's role.
6. Image generation must follow the approved `tools/feature-images/` workflow.

## Recommended feature queue

### 1. Workflow Diagnostic Checklist (COMPLETED 2026-04-26)

**Status:** Done. Page at `/templates/workflow-diagnostic-checklist/`.

**Purpose:** Help readers identify whether their current problem is a workflow sequence problem, approval/delivery problem, billing problem, tool/system-of-record problem, template execution problem, or narrow FAQ blocker — before opening any workflow, blueprint, comparison, or template page.

**Why first:** Complements the Problem-to-Page Guide (symptom → page mapping) and the Workflow Starter Pack (bundled assets) without duplicating either. Serves readers who know something is broken but cannot name the category yet. Strengthens workflow-first routing by gating tool and template browsing behind diagnosis.

**Risk:** Must not imply the templates/checklists section is a strategic starting point. Page must route upstream to the workflow anchor for readers with broad problems.

---

### 2. Client Workflow Health Check

**Status:** Done. Page at `/templates/client-workflow-health-check/`.

**Purpose:** A short scorecard-style page that helps readers identify whether their client workflow is healthy, fragile, or breaking — based on observable signals like client confusion, billing slippage, and repeated approval ambiguity.

**Why after #1:** More interpretive than the diagnostic checklist. The diagnostic checklist names a problem category; the health check scores overall workflow fitness. Should come after the diagnostic asset establishes the category-naming layer.

**Risk:** Can feel too abstract if scoring language is not tied to concrete operational signals. Keep language specific and output-oriented.

---

### 3. Approval and Billing Readiness Checklist

**Status:** Done. Page at `/templates/approval-billing-readiness-checklist/`.

**Purpose:** A focused checklist for confirming whether a project is ready for the next stage — covering approval, invoice, payment tracking, and closeout readiness.

**Why after #2:** A narrower support asset. Useful only when the broader workflow and diagnostic layers are already established. Works as a pre-billing gate, not a workflow primer.

**Risk:** Overlaps with existing approval FAQ and invoice/payment checklist. Must be scoped more narrowly — specifically the readiness check before stage transition, not a general billing guide.

---

### 4. Stack Decision Readiness Checklist

**Status:** Done. Page at `/templates/stack-decision-readiness-checklist/`.

**Purpose:** Helps readers determine whether they are ready to choose tools or still need to clarify workflow first. Routes premature tool shoppers back upstream.

**Why after #3:** Useful companion to the CRM vs PM comparison and lean stack blueprint. Should not come before the broader diagnostic and health check pages establish the triage layer.

**Risk:** Could easily duplicate the CRM vs PM comparison or the lean blueprint's "when this page is the right starting point" section. Must focus on readiness (is the reader ready to decide?) rather than the decision itself.

---

### 5. Internal Search Improvement Pass

**Status:** Done. Synonym map expanded in `static/js/search.js`.

**Purpose:** Improve synonym coverage, stop-word handling, and result routing for new pages added after the initial search implementation.

**Why later:** Search already works. Improvements should only happen after new content creates new search targets that the current index cannot surface well.

**Risk:** Unnecessary churn if done too early. Phase 2 items from `INTERNAL_SEARCH_ROADMAP.md` should guide what gets added.

---

### 6. Template Bundle Refinement Pass

**Status:** Deferred.

**Purpose:** Improve bundle grouping, copy, and routing around the Workflow Starter Pack if GSC or reader behavior shows confusion about bundle entry points.

**Why later:** The Workflow Starter Pack was recently created and should settle before receiving additional edits. Refinement should be signal-driven, not speculative.

**Risk:** Early refinement may introduce unnecessary changes before there is reader behavior data.

---

## Implementation rules

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
- Update `TRACKER.md` and commit after each feature.

## Current first feature

Implement feature #1: Workflow Diagnostic Checklist.
See implementation notes in `TRACKER.md`.
