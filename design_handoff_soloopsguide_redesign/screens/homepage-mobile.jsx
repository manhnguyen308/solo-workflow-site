/* Homepage (mobile) */

const HomepageMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <section style={{ padding: "32px 20px 28px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>An operating manual for solo businesses</div>
      <h1 style={{ font: "500 34px/1.1 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 16px" }}>
        Run your client work like a small operation.
      </h1>
      <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
        Workflows, blueprints, comparisons and templates for freelancers and consultants. Dated and revised.
      </p>
    </section>

    <section style={{ padding: "28px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Start here</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {[
          "If client work is constantly slipping",
          "If invoices and scope feel out of control",
          "If you are setting up a new solo practice",
          "If you don't know where to start",
        ].map((t, i) => (
          <li key={i} style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule-2)" }}>
            <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", color: "var(--ink)", font: "500 15px/1.4 var(--sans)" }}>
              <span>{t}</span>
              <span style={{ color: "var(--accent)" }}>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>

    <section style={{ padding: "32px 20px 8px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>01 · The library</div>
      <h2 style={{ font: "500 24px/1.22 var(--serif)", margin: "0 0 20px", letterSpacing: "-0.005em" }}>Five sections, by situation.</h2>
      {[
        { n: "01", t: "Workflows", d: "Process guides for one phase of client work.", c: "62 articles" },
        { n: "02", t: "Blueprints", d: "Full operating setups, end-to-end.", c: "18 blueprints" },
        { n: "03", t: "Comparisons", d: "Side-by-side operational decisions.", c: "34 items" },
        { n: "04", t: "Templates", d: "Copyable artifacts and checklists.", c: "118 items" },
        { n: "05", t: "Glossary", d: "Plain-English terms and FAQ.", c: "94 entries" },
      ].map((h, i) => (
        <div key={i} style={{ padding: "18px 0", borderTop: "1px solid var(--rule-2)" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 6 }}>
            <span className="eyebrow" style={{ color: "var(--ink-3)" }}>{h.n}</span>
            <span className="h3">{h.t}</span>
          </div>
          <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 10px" }}>{h.d}</p>
          <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>{h.c} →</a>
        </div>
      ))}
    </section>

    <section style={{ padding: "32px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>02 · Priority pages</div>
      <h2 style={{ font: "500 24px/1.22 var(--serif)", margin: "0 0 12px", letterSpacing: "-0.005em" }}>The anchor guides.</h2>
      <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 20px" }}>
        The three pages most operators read first.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <PageCard
          mobile
          type="Workflow"
          date="2025-01-02"
          title="Freelance Client Workflow System: Inquiry to Final Payment"
          summary="End-to-end operating sequence from first contact to project close."
          descriptor="How-to"
          readLabel="Read workflow →"
        />
        <PageCard
          mobile
          type="Workflow"
          date="2024-12-15"
          title="How to Build a Client Intake and Qualification Workflow"
          summary="Standardize the intake stage to filter better-fit clients earlier."
          descriptor="How-to"
          readLabel="Read workflow →"
        />
        <PageCard
          mobile
          type="Blueprint"
          date="2024-11-14"
          title="Software Stack Blueprint: Solo Freelancer (Lean Budget)"
          summary="A lean tool model for solo operators with clear stack boundaries."
          descriptor="Decision guide"
          readLabel="Open blueprint →"
        />
      </div>
    </section>

    <section style={{ padding: "32px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>03 · Reading paths</div>
      <h2 style={{ font: "500 24px/1.22 var(--serif)", margin: "0 0 12px", letterSpacing: "-0.005em" }}>Start with what's broken.</h2>
      <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 20px" }}>
        Each path is a 4–7 step reading sequence that fixes one operator problem.
      </p>

      <div style={{ border: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        {[
          ["Kickoff reliability", "Engagements stalling before week 1"],
          ["Delivery consistency", "Missed handoffs"],
          ["Payment control", "Late invoices, chase cycles"],
          ["Scope control", "Creep, undefined extras"],
          ["Stack cleanup", "Too many tools"],
          ["Review control", "Slow approvals"],
        ].map(([t, s], i) => (
          <div key={i} style={{ padding: "14px 16px", borderTop: i === 0 ? "0" : "1px solid var(--rule)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, alignItems: "center" }}>
            <span style={{ font: "500 12px/1 var(--mono)", color: "var(--ink-3)" }}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="label">{t}</div>
              <div className="meta" style={{ fontSize: 12 }}>{s}</div>
            </div>
            <span style={{ color: "var(--accent)" }}>→</span>
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: "32px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>04 · New this month</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {[
          ["Workflow", "Fixing slow client approvals", "2026-05-12"],
          ["Template", "Approval window clause", "2026-05-10"],
          ["Comparison", "Project vs retainer pricing", "2026-05-06"],
        ].map((r, i) => (
          <li key={i} style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule-2)", padding: "14px 0" }}>
            <div className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>{r[0]} · {r[2]}</div>
            <a href="#" style={{ font: "500 16px/1.35 var(--serif)", color: "var(--ink)" }}>{r[1]}</a>
          </li>
        ))}
      </ul>
    </section>

    <section style={{ padding: "32px 20px", background: "var(--paper-2)", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Editorial</div>
      <h2 style={{ font: "500 22px/1.25 var(--serif)", margin: "0 0 16px" }}>How this site is written.</h2>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        <li>
          <div className="h4" style={{ marginBottom: 4 }}>Dated and revised</div>
          <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>Every article shows its last review and next review.</p>
        </li>
        <li>
          <div className="h4" style={{ marginBottom: 4 }}>One editorial voice</div>
          <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>Written by SoloOpsGuide Editorial. No invented bylines.</p>
        </li>
      </ul>
    </section>

    <div style={{ padding: 20, textAlign: "center", borderTop: "1px solid var(--rule)" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.HomepageMobile = HomepageMobile;
