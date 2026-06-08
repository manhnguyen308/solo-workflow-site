/* 404 — Page not found (desktop) */

const NF_RECOVERY = [
  { h: "Workflow", n: "Workflows", d: "End-to-end process per phase of one engagement." },
  { h: "Asset", n: "Templates & Checklists", d: "Copyable, parametrised artefacts used inside live processes." },
  { h: "System", n: "Blueprints", d: "Whole-stack compositions, end-to-end." },
  { h: "Decision", n: "Comparisons", d: "Bounded tool-or-model decisions, sided." },
  { h: "Term", n: "Glossary", d: "Narrow definitions of operator language used across the site." },
  { h: "Question", n: "FAQ", d: "Quick blockers, routed back to the right workflow." },
  { h: "Diagnostic", n: "Reading paths", d: "Symptom-led sequences across workflows, templates, comparisons." },
  { h: "Topic", n: "Topics A–Z", d: "Cross-cutting topic destinations — Approvals, Scope, Payment, more." },
];

const NotFoundDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader />

    <div style={{ padding: "16px 56px 0", maxWidth: 1120, margin: "0 auto" }}>
      <Breadcrumbs items={["404"]} />
    </div>

    <div className="nf-shell">
      <div className="eyebrow">Error · 404 · Page not found</div>
      <h1>Page not found</h1>
      <p className="lede">
        The URL you followed doesn't match a published page on SoloOpsGuide. That's usually one of three things: a stale link, a typo, or a page we moved or removed during a recent editorial update.
      </p>

      <div className="nf-update-note">
        <strong>Recent editorial update.</strong> Some pages were re-slugged in the last quarterly review. If you arrived via an old bookmark or third-party link, search for the page title below or jump to the relevant hub.
      </div>

      <div className="nf-search">
        <span className="glyph">⌕</span>
        <span className="q">Search SoloOpsGuide — try the page title you were looking for</span>
        <span className="k">/</span>
      </div>

      <div className="nf-recovery">
        <div className="h">Or jump to a recovery point</div>
        <div className="grid">
          {NF_RECOVERY.map((r, i) => (
            <a key={i} href="#">
              <div className="h">{r.h}</div>
              <div className="n">{r.n}</div>
              <div className="d">{r.d}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="review-note" style={{ marginTop: 40, maxWidth: 760 }}>
        <span className="label">Editorial note</span>
        <span className="body">
          If you believe this page should exist — for example a link inside another SoloOpsGuide page pointed here — write to <strong>SoloOpsGuide Editorial</strong> with the URL you followed and the page you came from. See the <a href="#">Contact</a> page.
        </span>
        <span className="pos">404 · v2</span>
      </div>
    </div>

    <div style={{ height: 56 }}></div>
    <SiteFooter />
  </div>
);

const NotFoundMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["404"]} />
    </div>

    <div className="nf-shell mobile">
      <div className="eyebrow">Error · 404 · Page not found</div>
      <h1>Page not found</h1>
      <p className="lede">
        The URL you followed doesn't match a published page on SoloOpsGuide. Usually a stale link, a typo, or a page we re-slugged during a recent update.
      </p>

      <div className="nf-update-note">
        <strong>Recent editorial update.</strong> Some pages were re-slugged in the last quarterly review. Try the search below or jump to a hub.
      </div>

      <div className="nf-search">
        <span className="glyph">⌕</span>
        <span className="q">Search SoloOpsGuide…</span>
      </div>

      <div className="nf-recovery">
        <div className="h">Or jump to a recovery point</div>
        <div className="grid">
          {NF_RECOVERY.map((r, i) => (
            <a key={i} href="#">
              <div className="h">{r.h}</div>
              <div className="n">{r.n}</div>
              <div className="d">{r.d}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="review-note" style={{ marginTop: 24, gridTemplateColumns: "1fr" }}>
        <span className="label">Editorial note</span>
        <span className="body">
          If you believe this page should exist, write to <strong>SoloOpsGuide Editorial</strong> with the URL you followed. See <a href="#">Contact</a>.
        </span>
      </div>
    </div>

    <div style={{ height: 24 }}></div>
    <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.NotFoundDesktop = NotFoundDesktop;
window.NotFoundMobile = NotFoundMobile;
