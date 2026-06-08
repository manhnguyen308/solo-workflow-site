/* Hub — Workflows (mobile) */

const HubMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["Workflows"]} />
    </div>

    <section style={{ padding: "16px 20px 28px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Hub · 62 workflows</div>
      <h1 style={{ font: "500 36px/1.1 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 14px" }}>Workflows</h1>
      <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
        Process guides for one phase of client work. Use this hub when something specific in your project is breaking.
      </p>
    </section>

    <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--rule)", overflowX: "auto", whiteSpace: "nowrap" }}>
      <div style={{ display: "inline-flex", gap: 8 }}>
        {["All 62", "Kickoff", "Delivery", "Approvals", "Payment", "Closeout", "Recovery"].map((c, i) => (
          <span key={i} className={`chip ${i === 0 ? "solid" : ""}`} style={i === 0 ? { color: "var(--ink)", fontWeight: 600 } : {}}>{c}</span>
        ))}
      </div>
    </div>

    {[
      { phase: "Kickoff", items: [
        ["Two-day kickoff for productized services", "2026-05-02"],
        ["Kickoff checklist for solo consultants", "2026-05-15"],
        ["Async kickoff when no meeting is possible", "2026-04-21"],
      ]},
      { phase: "Approvals", items: [
        ["Fixing slow client approvals without nagging", "2026-05-12"],
        ["Handling revision rounds without scope creep", "2026-04-30"],
      ]},
      { phase: "Payment", items: [
        ["Deposit-first project structure", "2026-05-08"],
        ["Polite escalation for late invoices", "2026-04-25"],
      ]},
    ].map((sec, si) => (
      <section key={si} style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Phase · {String(si + 1).padStart(2, "0")}</div>
        <h2 style={{ font: "500 24px/1.2 var(--serif)", margin: "0 0 16px", letterSpacing: "-0.005em" }}>{sec.phase}</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {sec.items.map(([t, d], i) => (
            <li key={i} style={{ padding: "14px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)" }}>
              <a href="#" style={{ font: "500 17px/1.35 var(--serif)", color: "var(--ink)", display: "block", marginBottom: 6 }}>{t}</a>
              <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{d}</div>
            </li>
          ))}
          <li style={{ paddingTop: 14, borderTop: "1px solid var(--rule-2)" }}>
            <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>See all {sec.phase.toLowerCase()} workflows →</a>
          </li>
        </ul>
      </section>
    ))}

    <section style={{ padding: "24px 20px", background: "var(--paper-2)", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Cross-reference</div>
      <h2 style={{ font: "500 22px/1.25 var(--serif)", margin: "0 0 12px" }}>Not sure which workflow you need?</h2>
      <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>
        Reading paths group workflows around one operator problem.
      </p>
      <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse reading paths →</a>
    </section>

    <div style={{ padding: 20, textAlign: "center", borderTop: "1px solid var(--rule)" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.HubMobile = HubMobile;
