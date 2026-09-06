# Website content audit remediation: 2026-09-06

The findings in [the September 5 audit](CONTENT-AUDIT-2026-09-05.md) have been addressed across all 71 content files, the shared layouts, and public configuration labels. The work used `AGENT.md`, the repository workflow skill, and `humanizer.md` in Edit/Rewrite mode.

## Findings and resolution

| Audit finding | Resolution |
| --- | --- |
| Contact promise without a working channel | Renamed the page and navigation to Contact availability. Removed invitations to submit requests and stated that no monitored channel is published. Related policies now agree. |
| Incorrect freshness labels and zero-year Search dates | Added explicit, distinct `lastmod` values to all 63 dated pages. Article and trust-page displays use the update field. Search uses undated WebPage data. Article dates are emitted only when present. |
| Descriptions clipped into fragments | Removed truncation from the shared head. Rewrote descriptions as complete sentences of at most 160 characters; standard, Open Graph, and Twitter values agree. |
| Internal editorial language | Replaced public architecture, ranking, and production labels with the reader's task, decision, prerequisite, or next action. Removed generic page-type blocks and intent pills. |
| Unsupported claims and precision | Removed unsupported score bands, prevalence claims, fixed reminder windows, budgets, client-count thresholds, and migration schedules. Defined the health check as a self-review aid. Product facts link to primary documentation; operational recommendations state their conditions and defer to applicable agreements. |
| Writing-rule violations | Recast dash punctuation, sentence-cased titles and headings, corrected colon capitalization, and repaired broken prose. |
| Repeated page structures | Removed repeated introductory and closing blocks, shortened the diagnostic and starter resources, and gave pages headings specific to their decisions. No duplicate headings remain within a content file. |
| Homepage and trust overclaims | Narrowed promises to the site's observable content. Documented sourcing, recommendation, correction, and update rules. Removed claims of undocumented expertise or personal testing. |
| Two homepage copy sources | Reduced the homepage content file to front matter; the layout remains the maintained body source. |
| Contradictory routes and page overlap | Gave the lean and collaboration blueprints explicit implementation destinations and focused the overbuying guide on purchase criteria. |

Five titles needed explicit legacy slugs to preserve their published URLs. A render comparison against the pre-remediation commit confirms that the complete set of 72 HTML routes is unchanged. The Terms section also now explicitly selects the list layout, avoiding its collision with the taxonomy template and restoring its update date and trust-page presentation.

`AGENT.md` already includes `humanizer.md` in both its required content workflow and its reading table, added in the preceding audit commit. That routing remains in place.

## Date allocation

`AUDIT_DATE` for this pass is **2026-09-06**, established from the runtime date when remediation began. The lifecycle guide receives that date. The diagnostic, starter pack, lean blueprint, and principal comparisons follow, then the remaining revised pages in the documented review order.

- 63 dated pages have 63 distinct explicit update dates.
- Dates descend daily from 2026-09-06 through 2026-07-06, without gaps or duplicates.
- Every update date is later than its existing publication date.
- Publication dates were preserved. Their earlier redistribution is historical repository state; this pass does not independently establish original publication history.
- The stagger is an assigned editorial schedule requested for this revision batch, not a claim that separate editing sessions occurred on each assigned day.
- Undated collections and utility pages were not assigned article dates. Collection sitemap dates may derive from their children.

## Verification

Both Hugo Extended **0.160.1**, matching the production pin, and the installed **0.165.0** built successfully with 89 pages, 121 static files, and no warnings or errors. Builds used isolated destinations.

The final rendered checks passed on both versions:

- 72 HTML documents and the same URL set as the baseline;
- no broken internal links, fragment links, or local resource references;
- one H1 per document and no skipped heading levels;
- no missing or duplicate rendered titles or descriptions;
- complete descriptions of at most 160 characters, identical across standard and social metadata;
- no prohibited dash punctuation or production-process terms in rendered text;
- valid JSON-LD, no zero-year dates, and undated WebPage data for Search;
- displayed updates matching all 63 explicit source dates;
- Article and trust-page schema dates matching source metadata;
- 69 sitemap URLs, with revised dated pages matching their source dates and existing noindex exclusions retained;
- no whitespace errors from `git diff --check`.

## Remaining site limitations

The site still has no monitored public contact method, named individual editor, or documented personal credentials. The revised content discloses those limits and makes no unsupported claim that they exist. Adding them later requires real publisher information and an operational contact method.

The verification covers source and rendered content integrity. It does not establish search ranking, advertising acceptance, or successful production deployment. After deployment, check the live homepage, Terms page, contact availability, and the preserved legacy routes.
