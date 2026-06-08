/* Site-wide Search Results (desktop) */

const SEARCH_DATA = {
  query: "source of truth",
  total: 24,
  groups: [
    { type: "Workflow", count: 4, hub: "Workflows", items: [
      { t: "Declaring your <mark>source of truth</mark> for an engagement", s: "The operational decision that makes a workspace or stack actually work. Pick one tool, write it into the proposal, and treat every other surface as a view.", section: "Workflows · Setup", tags: ["Setup", "Tooling"], date: "2026-05-09" },
      { t: "Migrating from scattered tools to one workflow system", s: "How to consolidate when canonical state is split across three tools. Declare a <mark>source of truth</mark> first, migrate second.", section: "Workflows · Setup", tags: ["Setup", "Tooling"], date: "2026-04-22" },
      { t: "Async kickoff when no meeting is possible", s: "An intake doc that names the <mark>source of truth</mark> and the decision-maker up front so the engagement opens on a written commitment.", section: "Workflows · Kickoff", tags: ["Kickoff", "Async"], date: "2026-04-21" },
      { t: "Two-day kickoff for productized services", s: "Day one ends with deliverables agreed and the canonical <mark>source of truth</mark> declared. Day two ends with first work in motion.", section: "Workflows · Kickoff", tags: ["Kickoff", "Productized"], date: "2026-05-02" },
    ]},
    { type: "Blueprint", count: 3, hub: "Blueprints", items: [
      { t: "Solo freelancer lean-budget stack", s: "Step 01: declare your <mark>source of truth</mark>. Step 02: pick the tools that feed it. Step 03: write the maintenance cadence.", section: "Blueprints · Solo · Lean", tags: ["Solo", "Lean"], date: "2026-05-04" },
      { t: "Productized-services stack (sub-$50/mo)", s: "A minimum stack for fixed-scope work. Doc tool acts as the <mark>source of truth</mark>; project tool is treated as a view.", section: "Blueprints · Solo", tags: ["Solo", "Productized"], date: "2026-04-18" },
    ]},
    { type: "Comparison", count: 2, hub: "Comparisons", items: [
      { t: "All-in-one workspace vs specialised stack", s: "The decision that fixes where the <mark>source of truth</mark> will live. Workspace = workspace is canonical. Stack = you declare one tool canonical.", section: "Comparisons · Operating model", tags: ["Tooling", "Operating model"], date: "2026-05-06" },
      { t: "Doc-first vs project-tool-first operating models", s: "Two ways to nominate a <mark>source of truth</mark>. Doc-first holds canonical scope; project-tool-first holds canonical state.", section: "Comparisons · Operating model", tags: ["Tooling"], date: "2026-04-30" },
    ]},
    { type: "Glossary", count: 3, hub: "Glossary", items: [
      { t: "<mark>Source of truth</mark>", s: "The single tool or document declared as the authoritative version of project state. There is exactly one per engagement.", section: "Glossary · S", tags: ["Tooling", "Setup"], date: "2026-05-09" },
      { t: "Canonical source", s: "The tool or doc declared authoritative — often used interchangeably with <mark>source of truth</mark>.", section: "Glossary · C", tags: ["Tooling"], date: "2026-04-22" },
      { t: "Operating model", s: "The broader pattern your <mark>source of truth</mark> lives inside — workspace-led, stack-led, or hybrid.", section: "Glossary · O", tags: ["Tooling"], date: "2026-04-11" },
    ]},
    { type: "FAQ", count: 4, hub: "FAQ", items: [
      { t: "Do I need a CRM if I have a workspace?", s: "Usually no. A workspace covers contacts and pipeline if you've already declared it as your <mark>source of truth</mark>.", section: "FAQ · Software stacks", tags: ["Stacks"], date: "2026-05-06" },
      { t: "Should I trust a single workspace as my <mark>source of truth</mark>?", s: "Yes — with a quarterly export routine. The risk isn't the tool; it's not having an export.", section: "FAQ · Software stacks", tags: ["Stacks"], date: "2026-04-08" },
      { t: "How often should I review my stack?", s: "Twice a year, on a calendar date. Drift compounds; the <mark>source of truth</mark> declaration is the first thing to re-audit.", section: "FAQ · Software stacks", tags: ["Stacks"], date: "2026-04-20" },
    ]},
    { type: "Template", count: 5, hub: "Templates", items: [
      { t: "<mark>Source-of-truth</mark> declaration clause", s: "A short proposal clause naming the canonical project surface and what follows from it. Copy and parametrise.", section: "Templates · Proposal", tags: ["Proposal", "Setup"], date: "2026-04-29" },
      { t: "Stack-review checklist (quarterly)", s: "The list you actually run when you re-audit the stack. Step 1 is verifying the <mark>source of truth</mark> hasn't drifted.", section: "Templates · Maintenance", tags: ["Maintenance"], date: "2026-04-15" },
      { t: "Engagement state snapshot — handoff format", s: "A one-page snapshot of canonical state for handoff to a VA or contractor.", section: "Templates · Operations", tags: ["Operations"], date: "2026-04-03" },
    ]},
    { type: "Reading path", count: 3, hub: "Reading paths", items: [
      { t: "Stack cleanup", s: "A 5-step path for an operator whose tools have drifted out of sync. Step 01 is naming the <mark>source of truth</mark>; step 05 is the maintenance cadence.", section: "Reading paths · Tools", tags: ["Tools", "Maintenance"], date: "2026-05-01" },
      { t: "Kickoff reliability", s: "A 6-step path for operators whose engagements slip in week one. Includes the <mark>source-of-truth</mark> clause as step 03.", section: "Reading paths · Kickoff", tags: ["Kickoff"], date: "2026-04-26" },
    ]},
  ],
};

window.SEARCH_DATA = SEARCH_DATA;

const TYPE_ORDER = ["Workflow", "Blueprint", "Comparison", "Glossary", "FAQ", "Template", "Reading path"];

const SearchResultsDesktop = () => {
  const data = SEARCH_DATA;
  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["Search", `Results for "${data.query}"`]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 28px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 880 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Search</div>
          <h1 className="h1" style={{ margin: "0 0 24px" }}>Search the guide</h1>

          <div className="search-large">
            <span className="glyph">⌕</span>
            <div className="q">{data.query}<span className="caret"></span></div>
            <span className="clear">Clear</span>
            <span className="k">esc</span>
          </div>

          <div className="meta" style={{ marginTop: 12, fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-2)" }}>
            {data.total} results across {data.groups.length} content types · indexed 2026-05-17 · static search · no tracking
          </div>
        </div>
      </section>

      {/* Filter row */}
      <section style={{ padding: "20px 56px", borderBottom: "1px solid var(--rule)", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap", background: "var(--paper-2)" }}>
        <div className="eyebrow">Filter by type</div>
        <div className="type-filter">
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>All {data.total}</span>
          {data.groups.map((g, i) => <Chip key={i}>{g.type} {g.count}</Chip>)}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 24 }}>
          <span className="meta">Sort: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>Relevance</strong> · <a href="#" style={{ color: "var(--ink-2)" }}>Recently updated</a></span>
        </div>
      </section>

      {/* Grouped results */}
      <div style={{ padding: "40px 56px 16px" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          {data.groups.map((g, gi) => (
            <section key={gi} style={{ paddingBottom: 40, marginBottom: 40, borderBottom: gi === data.groups.length - 1 ? 0 : "1px solid var(--rule)" }}>
              <div className="group-head">
                <h2 className="gh-title">{g.type} <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>· {g.count}</span></h2>
                <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>See all in {g.hub} →</a>
              </div>

              {g.items.map((r, ri) => (
                <div key={ri} className="result-row">
                  <div className="r-type">{g.type}</div>
                  <div>
                    <h3 className="r-title">
                      <a href="#" dangerouslySetInnerHTML={{ __html: r.t }}></a>
                    </h3>
                    <p className="r-snippet" dangerouslySetInnerHTML={{ __html: r.s }}></p>
                    <div className="r-meta">
                      <span>{r.section}</span>
                      {r.tags.map((tg, i) => (
                        <React.Fragment key={i}>
                          <span className="dot"></span>
                          <span>{tg}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="r-end">
                    <span className="date">{r.date}</span>
                    <a href="#" className="open">Open →</a>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* Search tips / what to do if nothing's right */}
      <section style={{ padding: "40px 56px", borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div className="container-wide" style={{ maxWidth: 1080, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Not quite what you wanted?</div>
            <h2 className="h2" style={{ margin: 0 }}>Try a different angle.</h2>
          </div>
          <div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li className="meta" style={{ fontSize: 14, color: "var(--ink-2)" }}>· Search for the <strong style={{ color: "var(--ink)" }}>symptom</strong>, not the term. e.g. "approvals stall" → review-control content.</li>
              <li className="meta" style={{ fontSize: 14, color: "var(--ink-2)" }}>· Filter by content type if you know whether you need a workflow, a definition, or a template.</li>
              <li className="meta" style={{ fontSize: 14, color: "var(--ink-2)" }}>· Browse the <a href="#">Reading paths</a> index — it's organised by operator problem.</li>
              <li className="meta" style={{ fontSize: 14, color: "var(--ink-2)" }}>· Or jump straight to a hub: <a href="#">Workflows</a>, <a href="#">Blueprints</a>, <a href="#">Glossary</a>, <a href="#">FAQ</a>.</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 56px 56px" }}>
        <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
          Search is static — generated when the site is built, served as a small index file, no server-side query log, no tracking. Indexed across workflows, blueprints, comparisons, templates, glossary, FAQ, reading paths and trust pages. Last index build: 2026-05-17.
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const SearchEmptyDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Search", "No results"]} />
    </div>

    <section style={{ padding: "32px 56px 28px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: 880 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Search</div>
        <h1 className="h1" style={{ margin: "0 0 24px" }}>Search the guide</h1>

        <div className="search-large">
          <span className="glyph">⌕</span>
          <div className="q">offshore-resourcing pivot model<span className="caret"></span></div>
          <span className="clear">Clear</span>
          <span className="k">esc</span>
        </div>

        <div className="meta" style={{ marginTop: 12, fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-2)" }}>
          0 results · indexed 2026-05-17
        </div>
      </div>
    </section>

    <section style={{ padding: "48px 56px 0" }}>
      <div className="container-wide" style={{ maxWidth: 1080 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>No results</div>
            <h2 className="h2" style={{ margin: 0, maxWidth: 380 }}>Nothing in the index matches that.</h2>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "16px 0 0" }}>
              SoloOpsGuide is intentionally narrow — operating practice for solo and small service businesses. We don't cover everything, and a no-result is sometimes a correct answer.
            </p>
          </div>
          <div className="recovery">
            <h3>Try one of these instead</h3>
            <p>
              The index is organised around four reference layers. Start in whichever feels closest to your question.
            </p>
            <div className="hubs">
              {[
                ["Workflows", "Process guides per phase"],
                ["Templates & Checklists", "Copyable artefacts"],
                ["Glossary", "Plain-English definitions"],
                ["FAQ", "Practical questions"],
              ].map(([name, sub], i) => (
                <a key={i} href="#">
                  <div className="h">Hub</div>
                  <div className="n">{name}</div>
                  <div className="meta" style={{ fontSize: 12, marginTop: 4 }}>{sub}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: "32px 56px 0" }}>
      <div className="container-wide" style={{ maxWidth: 1080 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Or try the diagnostic</div>
        <h2 className="h2" style={{ margin: "0 0 24px" }}>What's actually broken?</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
          {[
            ["Approvals", "Reviews keep drifting, no one signs off", "Review control · 6 steps"],
            ["Kickoff", "Engagements slip in week one", "Kickoff reliability · 6 steps"],
            ["Scope", "Scope keeps expanding", "Scope control · 5 steps"],
            ["Payment", "Cashflow is unpredictable", "Payment control · 5 steps"],
            ["Stack", "Tools are scattered", "Stack cleanup · 5 steps"],
          ].map(([area, sym, path], i) => (
            <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "14px 0", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 20, alignItems: "baseline" }}>
              <span style={{ font: "600 11px/1.4 var(--sans)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-2)" }}>{area}</span>
              <a href="#" style={{ font: "500 17px/1.35 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{sym}</a>
              <span style={{ color: "var(--accent)", font: "500 13px/1 var(--sans)" }}>{path} →</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section style={{ padding: "32px 56px 56px" }}>
      <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
        Search is static and rebuilt on every site review. If you think a topic should be indexed but isn't, see our <a href="#">Content policy</a>. We add new entries when a topic appears in three or more workflows, templates or FAQ questions.
      </div>
    </section>

    <SiteFooter />
  </div>
);

window.SearchResultsDesktop = SearchResultsDesktop;
window.SearchEmptyDesktop = SearchEmptyDesktop;
