/* FAQ Index — clustered by topic (mobile) */

const FAQIndexMobile = () => {
  const data = window.FAQ_DATA;
  const totalQ = data.reduce((n, t) => n + t.count, 0);

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["FAQ"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Reference · {totalQ} questions · {data.length} topics</div>
        <h1 style={{ font: "500 36px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 12px" }}>FAQ</h1>
        <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
          Practical questions about running a solo operation, clustered by the part of an engagement they touch.
        </p>
      </section>

      {/* Search */}
      <section style={{ padding: "16px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="filter-input" style={{ minWidth: 0, width: "100%" }}>
          <span>Find a question…</span>
          <span className="k">⌕</span>
        </div>
      </section>

      {/* Topic filter — horizontal scroll */}
      <section style={{ padding: "14px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Filter by topic</div>
        <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          <span className="chip solid" style={{ whiteSpace: "nowrap", color: "var(--ink)", fontWeight: 600 }}>All {totalQ}</span>
          {data.map((t, i) => <Chip key={i}>{`${t.topic} ${t.count}`}</Chip>)}
        </div>
      </section>

      {/* Topic groups */}
      {data.map((t, ti) => (
        <section key={ti} style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Topic · {String(ti + 1).padStart(2, "0")} · {t.count} questions</div>
          <h2 style={{ font: "500 24px/1.15 var(--serif)", letterSpacing: "-0.008em", margin: "0 0 8px" }}>{t.topic}</h2>
          <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 14px" }}>{t.desc}</p>

          <div style={{ borderTop: "1px solid var(--rule)" }}>
            {t.items.slice(0, 3).map((q, qi) => (
              <div key={qi} className="faq-row mobile">
                <div className="faq-topic" style={{ fontSize: 11 }}>{t.topic}</div>
                <h3 className="faq-q"><a href="#">{q.q}</a></h3>
                <p className="faq-a-preview" style={{ fontSize: 13 }}>{q.a}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)" }}>Reviewed {q.date}</div>
                  <a href="#" className="faq-go" style={{ textAlign: "left" }}>Open →</a>
                </div>
              </div>
            ))}
            {t.items.length > 3 && (
              <div style={{ padding: "12px 0", borderTop: "1px solid var(--rule-2)" }}>
                <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>See all {t.count} {t.topic.toLowerCase()} questions →</a>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Cross-link */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Cross-reference</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 8px" }}>Not finding your question?</h2>
        <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>
          The Glossary defines vocabulary. The Workflows give step-by-step guides.
        </p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Glossary →</a>
          <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Workflows →</a>
        </div>
      </section>

      <section style={{ padding: "24px 20px" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          Maintained by SoloOpsGuide Editorial. Reviewed quarterly · next 2026-08-14. Answers reflect operating practice, not legal or financial advice.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.FAQIndexMobile = FAQIndexMobile;
