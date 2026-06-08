/* Homepage (desktop) */

const HomepageDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="" />

    {/* Hero — quiet, editorial */}
    <section style={{ padding: "80px 56px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>An operating manual for solo businesses</div>
          <h1 className="h-display" style={{ margin: "0 0 24px", maxWidth: 760 }}>
            Run your client work like a small operation, not a series of fires.
          </h1>
          <p className="lede" style={{ margin: 0, maxWidth: 620 }}>
            Workflows, blueprints, comparisons and templates for freelancers, consultants and one-person service businesses. Dated, revised, written in plain English.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Start here</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <li><a href="#" style={{ font: "500 16px/1.4 var(--sans)", color: "var(--ink)", borderBottom: "1px solid var(--rule)", paddingBottom: 2 }}>If client work is constantly slipping →</a></li>
            <li><a href="#" style={{ font: "500 16px/1.4 var(--sans)", color: "var(--ink)", borderBottom: "1px solid var(--rule)", paddingBottom: 2 }}>If invoices and scope feel out of control →</a></li>
            <li><a href="#" style={{ font: "500 16px/1.4 var(--sans)", color: "var(--ink)", borderBottom: "1px solid var(--rule)", paddingBottom: 2 }}>If you are setting up a new solo practice →</a></li>
            <li><a href="#" style={{ font: "500 16px/1.4 var(--sans)", color: "var(--ink)", borderBottom: "1px solid var(--rule)", paddingBottom: 2 }}>If you don't know where to start →</a></li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 1 — Five hubs explained */}
    <section style={{ padding: "72px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 64, marginBottom: 40 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>01 · The library</div>
          <h2 className="h1" style={{ margin: 0 }}>Five sections, organised by what you're trying to fix.</h2>
        </div>
        <p className="lede" style={{ margin: "8px 0 0", color: "var(--ink-2)" }}>
          We arrange content by situation — kickoff, delivery, approvals, payment, closeout — before subject. Pick the hub closest to your problem.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderTop: "1px solid var(--rule)" }}>
        {[
          { n: "01", t: "Workflows", d: "Process guides for one phase of client work.", c: "62 articles" },
          { n: "02", t: "Blueprints", d: "Full operating setups, end-to-end.", c: "18 blueprints" },
          { n: "03", t: "Comparisons", d: "Side-by-side operational decisions.", c: "34 comparisons" },
          { n: "04", t: "Templates", d: "Copyable artifacts and checklists.", c: "118 items" },
          { n: "05", t: "Glossary", d: "Plain-English terms and FAQ.", c: "94 entries" },
        ].map((h, i) => (
          <div key={i} style={{ padding: "32px 24px 24px", borderRight: i < 4 ? "1px solid var(--rule)" : "0" }}>
            <div className="eyebrow" style={{ color: "var(--ink-3)", marginBottom: 16 }}>{h.n}</div>
            <div className="h3" style={{ marginBottom: 8 }}>{h.t}</div>
            <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 20px" }}>{h.d}</p>
            <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)", display: "inline-block" }}>{h.c} →</a>
          </div>
        ))}
      </div>
    </section>

    {/* Section 2 — Priority pages (PageCard shelf) */}
    <section style={{ padding: "72px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 64, marginBottom: 32, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>02 · Priority pages</div>
          <h2 className="h2" style={{ margin: 0 }}>The anchor guides.</h2>
        </div>
        <p style={{ font: "400 16px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0", maxWidth: 560 }}>
          The three pages most operators read first. Each is dated, revised on a fixed cadence, and links into a longer reading path if you need more depth.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        <PageCard
          type="Workflow"
          date="2025-01-02"
          title="Freelance Client Workflow System: Inquiry to Final Payment"
          summary="End-to-end operating sequence from first contact to project close."
          descriptor="How-to"
          readLabel="Read workflow →"
        />
        <PageCard
          type="Workflow"
          date="2024-12-15"
          title="How to Build a Client Intake and Qualification Workflow"
          summary="Standardize the intake stage to filter better-fit clients earlier."
          descriptor="How-to"
          readLabel="Read workflow →"
        />
        <PageCard
          type="Blueprint"
          date="2024-11-14"
          title="Software Stack Blueprint: Solo Freelancer (Lean Budget)"
          summary="A lean tool model for solo operators with clear stack boundaries."
          descriptor="Decision guide"
          readLabel="Open blueprint →"
        />
      </div>
    </section>

    {/* Section 3 — Reading paths (the differentiator) */}
    <section style={{ padding: "72px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>03 · Reading paths</div>
          <h2 className="h1" style={{ margin: "0 0 16px" }}>Start with what's broken.</h2>
          <p style={{ font: "400 17px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 24px", maxWidth: 360 }}>
            Each path is a curated 4–7 step reading sequence that crosses workflows, templates and blueprints to fix one specific operator problem.
          </p>
          <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>How reading paths work →</a>
        </div>

        <PathPicker
          items={[
            { title: "Kickoff reliability", sub: "Engagements stalling before week 1" },
            { title: "Delivery consistency", sub: "Missed handoffs, irregular cadence" },
            { title: "Payment control", sub: "Late invoices, chase cycles" },
            { title: "Scope control", sub: "Creep, undefined extras" },
            { title: "Stack cleanup", sub: "Too many tools, no source of truth" },
            { title: "Review control", sub: "Slow approvals, vague feedback" },
            { title: "Ownership clarity", sub: "Who owns what after delivery" },
            { title: "Recovery after drift", sub: "Project off-track, re-baseline" },
          ]}
        />
      </div>
    </section>

    {/* Section 4 — Latest + revised */}
    <section style={{ padding: "72px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>04 · Recently added</div>
          <h2 className="h2" style={{ margin: "0 0 24px" }}>New this month</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              ["Workflow", "Fixing slow client approvals without nagging", "2026-05-12"],
              ["Template", "Approval window — proposal clause", "2026-05-10"],
              ["Comparison", "Project-based vs retainer pricing for solo consultants", "2026-05-06"],
              ["Blueprint", "Two-day kickoff for productized services", "2026-05-02"],
            ].map((r, i) => (
              <li key={i} style={{ borderTop: "1px solid var(--rule-2)", padding: "16px 0", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 16, alignItems: "baseline" }}>
                <span className="meta" style={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 11, fontWeight: 600, color: "var(--ink-2)" }}>{r[0]}</span>
                <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>{r[1]}</a>
                <span className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{r[2]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>05 · Recently revised</div>
          <h2 className="h2" style={{ margin: "0 0 24px" }}>Re-checked this month</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {[
              ["Workflow", "Kickoff checklist for solo consultants", "Rev. 2026-05-15"],
              ["Blueprint", "Operating stack for a one-person agency", "Rev. 2026-05-11"],
              ["Workflow", "Scope-creep recovery in retainer engagements", "Rev. 2026-05-08"],
              ["Glossary", "Statement of Work (SOW)", "Rev. 2026-05-04"],
            ].map((r, i) => (
              <li key={i} style={{ borderTop: "1px solid var(--rule-2)", padding: "16px 0", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 16, alignItems: "baseline" }}>
                <span className="meta" style={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: 11, fontWeight: 600, color: "var(--ink-2)" }}>{r[0]}</span>
                <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>{r[1]}</a>
                <span className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{r[2]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Section 5 — How this site is written */}
    <section style={{ padding: "72px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>06 · Editorial</div>
          <h2 className="h2" style={{ margin: 0 }}>How this site is written.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          <div>
            <div className="h4" style={{ marginBottom: 8 }}>Dated and revised</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              Every article shows its last update, last review and next scheduled review. Stale content gets demoted.
            </p>
          </div>
          <div>
            <div className="h4" style={{ marginBottom: 8 }}>One editorial voice</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              All articles are written by SoloOpsGuide Editorial. No invented bylines. No fake reviewer credentials.
            </p>
          </div>
          <div>
            <div className="h4" style={{ marginBottom: 8 }}>Workflow-first</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              We organise by the situation you're in, not by category names you have to learn first.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--rule)", display: "flex", gap: 24 }}>
        <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Editorial policy →</a>
        <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Content policy →</a>
        <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>About SoloOpsGuide →</a>
      </div>
    </section>

    <SiteFooter />
  </div>
);

window.HomepageDesktop = HomepageDesktop;
