/* Site-wide Search Results (mobile) */

const SearchResultsMobile = () => {
  const data = window.SEARCH_DATA;
  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Search", `"${data.query}"`]} />
      </div>

      {/* Header */}
      <section style={{ padding: "16px 20px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Search</div>
        <h1 style={{ font: "500 32px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 16px" }}>Search the guide</h1>

        <div className="search-large" style={{ gridTemplateColumns: "auto 1fr auto", padding: "14px 16px" }}>
          <span className="glyph" style={{ fontSize: 18 }}>⌕</span>
          <div className="q" style={{ fontSize: 19 }}>{data.query}<span className="caret" style={{ height: 19 }}></span></div>
          <span className="clear" style={{ fontSize: 12, padding: "4px 8px" }}>Clear</span>
        </div>

        <div className="meta" style={{ marginTop: 10, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-2)" }}>
          {data.total} results across {data.groups.length} types
        </div>
      </section>

      {/* Type filter — horizontal scroll */}
      <section style={{ padding: "14px 20px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Filter by type</div>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          <span className="chip solid" style={{ whiteSpace: "nowrap", color: "var(--ink)", fontWeight: 600 }}>All {data.total}</span>
          {data.groups.map((g, i) => <Chip key={i}>{`${g.type} ${g.count}`}</Chip>)}
        </div>
      </section>

      {/* Grouped results */}
      {data.groups.map((g, gi) => (
        <section key={gi} style={{ padding: "20px 20px", borderBottom: "1px solid var(--rule)" }}>
          <div className="group-head" style={{ paddingBottom: 8 }}>
            <h2 className="gh-title" style={{ fontSize: 19 }}>{g.type} <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>· {g.count}</span></h2>
            <a href="#" style={{ font: "500 12px/1 var(--sans)", color: "var(--accent)" }}>All →</a>
          </div>

          {g.items.slice(0, 3).map((r, ri) => (
            <div key={ri} className="result-row mobile">
              <div className="r-type" style={{ fontSize: 11 }}>{g.type}</div>
              <h3 className="r-title" style={{ fontSize: 17 }}>
                <a href="#" dangerouslySetInnerHTML={{ __html: r.t }}></a>
              </h3>
              <p className="r-snippet" style={{ fontSize: 13 }} dangerouslySetInnerHTML={{ __html: r.s }}></p>
              <div className="r-meta">
                <span>{r.section}</span>
              </div>
              <div className="r-end">
                <span className="date">{r.date}</span>
                <a href="#" className="open">Open →</a>
              </div>
            </div>
          ))}
          {g.items.length > 3 && (
            <div style={{ padding: "10px 0", borderTop: "1px solid var(--rule-2)" }}>
              <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>See all {g.count} {g.type.toLowerCase()} results →</a>
            </div>
          )}
        </section>
      ))}

      {/* Tips */}
      <section style={{ padding: "20px 20px", background: "var(--paper-2)", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Not quite right?</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 10px" }}>Try a different angle.</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          <li className="meta" style={{ fontSize: 13 }}>· Search the symptom, not the term.</li>
          <li className="meta" style={{ fontSize: 13 }}>· Filter by content type above.</li>
          <li className="meta" style={{ fontSize: 13 }}>· Browse <a href="#">Reading paths</a> — organised by operator problem.</li>
        </ul>
      </section>

      <section style={{ padding: "20px 20px" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          Static search · indexed 2026-05-17 · no tracking.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

const SearchEmptyMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["Search", "No results"]} />
    </div>

    <section style={{ padding: "16px 20px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Search</div>
      <h1 style={{ font: "500 32px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 16px" }}>Search the guide</h1>

      <div className="search-large" style={{ gridTemplateColumns: "auto 1fr auto", padding: "14px 16px" }}>
        <span className="glyph" style={{ fontSize: 18 }}>⌕</span>
        <div className="q" style={{ fontSize: 17 }}>offshore-resourcing pivot<span className="caret" style={{ height: 17 }}></span></div>
        <span className="clear" style={{ fontSize: 12, padding: "4px 8px" }}>Clear</span>
      </div>

      <div className="meta" style={{ marginTop: 10, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-2)" }}>
        0 results · indexed 2026-05-17
      </div>
    </section>

    <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>No results</div>
      <h2 style={{ font: "500 24px/1.2 var(--serif)", margin: "0 0 10px" }}>Nothing in the index matches that.</h2>
      <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
        SoloOpsGuide is intentionally narrow. A no-result is sometimes a correct answer.
      </p>
    </section>

    <section style={{ padding: "20px 20px" }}>
      <div className="recovery mobile" style={{ padding: 18 }}>
        <h3 style={{ fontSize: 20, margin: "0 0 8px" }}>Try one of these instead</h3>
        <p style={{ fontSize: 14 }}>The index is organised around four reference layers.</p>
        <div className="hubs">
          {[
            ["Workflows", "Process per phase"],
            ["Templates", "Copyable artefacts"],
            ["Glossary", "Definitions"],
            ["FAQ", "Practical questions"],
          ].map(([name, sub], i) => (
            <a key={i} href="#">
              <div className="h">Hub</div>
              <div className="n" style={{ fontSize: 15 }}>{name}</div>
              <div className="meta" style={{ fontSize: 11, marginTop: 4 }}>{sub}</div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section style={{ padding: "24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Or try the diagnostic</div>
      <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 12px" }}>What's actually broken?</h2>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
        {[
          ["Approvals", "Reviews keep drifting", "Review control"],
          ["Kickoff", "Engagements slip in week one", "Kickoff reliability"],
          ["Scope", "Scope keeps expanding", "Scope control"],
          ["Payment", "Cashflow is unpredictable", "Payment control"],
          ["Stack", "Tools are scattered", "Stack cleanup"],
        ].map(([area, sym, path], i) => (
          <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "12px 0" }}>
            <div style={{ font: "600 11px/1.4 var(--sans)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: 4 }}>{area}</div>
            <a href="#" style={{ font: "500 16px/1.35 var(--serif)", color: "var(--ink)" }}>{sym}</a>
            <div style={{ marginTop: 6 }}><span style={{ color: "var(--accent)", font: "500 13px/1 var(--sans)" }}>{path} →</span></div>
          </li>
        ))}
      </ul>
    </section>

    <section style={{ padding: "20px 20px" }}>
      <div className="meta" style={{ lineHeight: 1.7 }}>
        Static search · rebuilt on every site review. See <a href="#">Content policy</a> for what gets indexed.
      </div>
    </section>

    <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.SearchResultsMobile = SearchResultsMobile;
window.SearchEmptyMobile = SearchEmptyMobile;
