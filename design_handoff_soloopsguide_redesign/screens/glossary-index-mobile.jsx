/* Glossary Index — A–Z reference (mobile) */

const GlossaryIndexMobile = () => {
  const data = window.GLOSSARY_DATA;
  const filled = new Set(data.map(g => g.L));
  const totalTerms = data.reduce((n, g) => n + g.terms.length, 0);

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Glossary"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Reference · {totalTerms} terms</div>
        <h1 style={{ font: "500 36px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 12px" }}>Glossary</h1>
        <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
          Plain-English definitions for the vocabulary used across SoloOpsGuide. Tap a letter to jump, or tap any term for its full entry.
        </p>
      </section>

      {/* Search */}
      <section style={{ padding: "16px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="filter-input" style={{ minWidth: 0, width: "100%" }}>
          <span>Find a term…</span>
          <span className="k">⌕</span>
        </div>
      </section>

      {/* Topic filter — horizontal scroll */}
      <section style={{ padding: "14px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Filter by topic</div>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          {["All 43", "Approvals", "Kickoff", "Payment", "Scope", "Tooling", "Structure", "Editorial"].map((c, i) => (
            <span key={i} className={`chip ${i === 0 ? "solid" : ""}`} style={{ whiteSpace: "nowrap", ...(i === 0 ? { color: "var(--ink)", fontWeight: 600 } : {}) }}>{c}</span>
          ))}
        </div>
      </section>

      {/* A–Z jump rail */}
      <section style={{ padding: "14px 20px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)", position: "sticky", top: 0, zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Jump to letter</div>
        <AlphaRail filled={filled} mobile />
      </section>

      {/* Letter sections */}
      {data.map((g, gi) => (
        <section key={g.L} id={`L-${g.L}`} style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
          <div className="glossary-letter" style={{ paddingBottom: 10, marginBottom: 8 }}>
            <div className="L" style={{ fontSize: 48 }}>{g.L}</div>
            <div className="count">{g.terms.length} term{g.terms.length === 1 ? "" : "s"}</div>
          </div>
          {g.desc && <p style={{ font: "400 13px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 8px" }}>{g.desc}</p>}
          <div style={{ borderTop: "1px solid var(--rule-2)" }}>
            {g.terms.map((t, ti) => (
              <div key={ti} className="term-row mobile">
                <h3 className="term-name"><a href="#">{t.name}</a></h3>
                <p className="term-summary">{t.sum}</p>
                <div className="term-end">
                  <Chip kind="phase">{t.phase}</Chip>
                  <Chip>{t.topic}</Chip>
                  <a href="#" className="go" style={{ marginLeft: "auto" }}>Read →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Cross-link */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Cross-reference</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 8px" }}>Looking for a question, not a term?</h2>
        <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>
          The FAQ answers practical questions about applying the vocabulary defined here.
        </p>
        <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse the FAQ →</a>
      </section>

      <section style={{ padding: "24px 20px" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          Maintained by SoloOpsGuide Editorial. Reviewed quarterly · next 2026-08-14. Each entry shows its own last-reviewed date.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.GlossaryIndexMobile = GlossaryIndexMobile;
