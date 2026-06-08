/* Hub — Workflows (desktop). Shared pattern for Workflows/Blueprints/Comparisons */

const HubDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="Workflows" />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Workflows"]} />
    </div>

    {/* Hub header */}
    <section style={{ padding: "32px 56px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Hub · 62 workflows</div>
          <h1 className="h-display" style={{ margin: "0 0 16px", maxWidth: 760 }}>Workflows</h1>
          <p className="lede" style={{ margin: 0, maxWidth: 620 }}>
            Process guides for one phase of client work — kickoff, delivery, approvals, payment, closeout. Use this hub when something specific in your project is breaking.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Who this helps</div>
          <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px" }}>
            Solo consultants, freelancers and service businesses managing repeated client engagements. Each workflow assumes you are the only operator and need a system that runs without a team.
          </p>
          <div className="eyebrow" style={{ marginBottom: 8 }}>What to do next</div>
          <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
            Pick the phase below that matches your current friction. Each workflow links to relevant templates and to a reading path if the fix needs more than one step.
          </p>
        </div>
      </div>
    </section>

    {/* Filter row */}
    <section style={{ padding: "20px 56px", borderBottom: "1px solid var(--rule)", display: "flex", gap: 32, alignItems: "center" }}>
      <div className="eyebrow">Filter by phase</div>
      <div style={{ display: "flex", gap: 8 }}>
        {["All 62", "Kickoff 11", "Delivery 14", "Approvals 9", "Payment 12", "Closeout 8", "Recovery 8"].map((c, i) => (
          <span key={i} className={`chip ${i === 0 ? "solid" : ""}`} style={i === 0 ? { color: "var(--ink)", fontWeight: 600 } : {}}>{c}</span>
        ))}
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 24 }}>
        <span className="meta">Sort: Recently revised</span>
        <span className="meta" style={{ color: "var(--accent)" }}>Switch to reading-path view →</span>
      </div>
    </section>

    {/* Phase sections (list, not cards) */}
    {[
      { phase: "Kickoff", desc: "Setting an engagement up so it doesn't slip in week one.", items: [
        { t: "Two-day kickoff for productized services", d: "A condensed kickoff for fixed-scope work that needs to start moving immediately.", tag: ["Kickoff", "Productized"], date: "2026-05-02" },
        { t: "Kickoff checklist for solo consultants", d: "The minimum set of agreements, accesses and deliverables to lock in before week one.", tag: ["Kickoff", "Consulting"], date: "2026-05-15" },
        { t: "Async kickoff when no meeting is possible", d: "Replace the kickoff call with a structured intake doc and a written commitment.", tag: ["Kickoff", "Async"], date: "2026-04-21" },
      ]},
      { phase: "Approvals", desc: "Replacing implied review cycles with explicit ones.", items: [
        { t: "Fixing slow client approvals without nagging", d: "Replace ad-hoc check-ins with a scheduled window, a single decision-maker, and a fallback rule.", tag: ["Approvals", "Communication"], date: "2026-05-12" },
        { t: "Handling revision rounds without scope creep", d: "Cap revision count, define what counts as a round, and decline gracefully past the cap.", tag: ["Approvals", "Scope"], date: "2026-04-30" },
        { t: "Reviewer-of-record clause for proposals", d: "A short proposal clause that names a single decision-maker and a fallback approver.", tag: ["Approvals", "Proposal"], date: "2026-04-18" },
      ]},
      { phase: "Payment", desc: "Reducing the gap between invoice and deposit.", items: [
        { t: "Deposit-first project structure", d: "Restructure phases so each milestone is invoiced before work begins, not after.", tag: ["Payment", "Structure"], date: "2026-05-08" },
        { t: "Polite escalation sequence for late invoices", d: "Three messages, fixed spacing, and a hard stop. No emotional escalation, no apology spiral.", tag: ["Payment", "Communication"], date: "2026-04-25" },
      ]},
    ].map((sec, si) => (
      <section key={si} style={{ padding: "48px 56px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Phase · {String(si + 1).padStart(2, "0")}</div>
            <h2 className="h1" style={{ font: "500 36px/1.1 var(--serif)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{sec.phase}</h2>
            <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>{sec.desc}</p>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {sec.items.map((it, i) => (
              <li key={i} style={{ borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)", padding: "20px 0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 140px", gap: 32, alignItems: "baseline" }}>
                  <div>
                    <a href="#" style={{ font: "500 20px/1.3 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{it.t}</a>
                    <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "8px 0 12px", maxWidth: 620 }}>{it.d}</p>
                    <div style={{ display: "flex", gap: 6 }}>
                      {it.tag.map((c, j) => <Chip key={j} kind={j === 0 ? "phase" : ""}>{c}</Chip>)}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12, marginBottom: 4 }}>{it.date}</div>
                    <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>Read →</a>
                  </div>
                </div>
              </li>
            ))}
            <li style={{ borderTop: "1px solid var(--rule-2)", padding: "16px 0" }}>
              <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>See all {sec.phase.toLowerCase()} workflows →</a>
            </li>
          </ul>
        </div>
      </section>
    ))}

    {/* Cross-link to paths */}
    <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Cross-reference</div>
          <h2 className="h2" style={{ margin: 0 }}>Not sure which workflow you need?</h2>
        </div>
        <div>
          <p style={{ font: "400 17px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px" }}>
            Reading paths group workflows, templates and blueprints around one operator problem. Pick the symptom that matches and follow the path.
          </p>
          <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse reading paths →</a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

window.HubDesktop = HubDesktop;
