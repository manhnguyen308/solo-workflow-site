/* Reading Path page (desktop) — the differentiator */

const ReadingPathDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="" />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Reading paths", "Review control"]} />
    </div>

    {/* Header */}
    <section style={{ padding: "32px 56px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Reading path · 6 steps · ~42 min total</div>
          <h1 className="h-display" style={{ margin: "0 0 16px", maxWidth: 760, fontSize: 52, lineHeight: 1.08 }}>
            Review control — fix the approvals step of your client work.
          </h1>
          <p className="lede" style={{ margin: 0, maxWidth: 640 }}>
            A sequenced reading path for solo operators whose engagements stall at review. Replace ad-hoc check-ins with a system the client understands, and recover gracefully when the system isn't honoured.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Symptoms this path fixes</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "Deliverables sit unreviewed for a week or more",
              "Feedback arrives in fragments from multiple people",
              "Revision rounds expand the original scope",
              "Projects stall at the same milestone repeatedly",
            ].map((s, i) => (
              <li key={i} style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink)", paddingLeft: 16, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 1, background: "var(--ink-3)" }}></span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--rule)", display: "flex", gap: 32, alignItems: "center" }}>
        <button className="btn">Start at step 01</button>
        <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Or jump to where you are stuck →</a>
        <div style={{ marginLeft: "auto", display: "flex", gap: 24 }}>
          <span className="meta">Updated 2026-05-15 · Reviewed by SoloOpsGuide Editorial</span>
        </div>
      </div>
    </section>

    {/* The path — vertical sequence */}
    <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>The path</div>
          <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
            Six steps. Each step is one workflow or template, ordered so the next step assumes the previous one is in place. Do them in order on a new engagement; pick the step that matches your friction on an existing one.
          </p>
        </div>

        <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: 16, top: 8, bottom: 8, width: 1, background: "var(--rule)" }}></div>
          {[
            { type: "Workflow", t: "Naming the decision-maker before kickoff", d: "Identify by role, not by name. Add a backup. Surface this as a kickoff risk if the client can't answer.", time: "5 min" },
            { type: "Workflow", t: "Setting the approval window in the proposal", d: "Define window length and fallback rule as a Terms clause, not a Scope sub-bullet.", time: "7 min" },
            { type: "Workflow", t: "Fixing slow client approvals without nagging", d: "The core workflow: scheduled window, decision-maker, fallback rule, copyable email.", time: "9 min", active: true },
            { type: "Template", t: "Approval window — proposal clause", d: "Paste-ready clause. ~80 words, 5 variables.", time: "2 min" },
            { type: "Workflow", t: "Handling revision rounds without scope creep", d: "Cap revision count, define what counts as a round, decline gracefully past the cap.", time: "11 min" },
            { type: "Workflow", t: "Recovering when the approval window isn't honoured", d: "Two failure modes, two fixes — neither involves shortening or extending silently.", time: "8 min" },
          ].map((s, i) => (
            <li key={i} style={{
              padding: "20px 0 20px 56px",
              position: "relative",
              borderTop: i === 0 ? "1px solid var(--rule)" : "0",
              borderBottom: "1px solid var(--rule-2)",
            }}>
              <div style={{
                position: "absolute", left: 0, top: 24,
                width: 32, height: 32,
                background: s.active ? "var(--accent)" : "var(--paper)",
                color: s.active ? "var(--paper)" : "var(--ink-2)",
                border: s.active ? "1px solid var(--accent)" : "1px solid var(--rule)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                font: "500 13px/1 var(--mono)",
                letterSpacing: 0,
                zIndex: 1,
              }}>{String(i + 1).padStart(2, "0")}</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 140px", gap: 32, alignItems: "baseline" }}>
                <div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, color: "var(--ink-2)" }}>{s.type}</span>
                    {s.active && <span className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, color: "var(--accent)" }}>· You are here</span>}
                  </div>
                  <a href="#" style={{ font: "500 22px/1.25 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{s.t}</a>
                  <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "8px 0 0", maxWidth: 580 }}>{s.d}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12, marginBottom: 6 }}>{s.time}</div>
                  <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>{s.active ? "Continue →" : "Read step →"}</a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* What this path doesn't cover */}
    <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Out of scope</div>
          <h2 className="h2" style={{ margin: 0, font: "500 26px/1.2 var(--serif)" }}>What this path doesn't cover.</h2>
        </div>
        <div>
          <p style={{ font: "400 17px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 20px" }}>
            Review control fixes the approval phase. It does not address upstream problems that cause approvals to be hard in the first place — most often, unclear deliverables or missing scope. If the work itself is the issue, take a different path.
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid var(--rule)", paddingTop: 16 }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "baseline" }}>
              <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>Delivery consistency</a>
              <span className="meta">When deliverables themselves are unclear</span>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "baseline" }}>
              <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>Scope control</a>
              <span className="meta">When the original scope wasn't tight</span>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "baseline" }}>
              <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>Recovery after drift</a>
              <span className="meta">When the project is already off-track</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Other paths */}
    <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Other reading paths</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)" }}>
        {[
          ["Kickoff reliability", "Engagements stalling before week 1", "5 steps"],
          ["Delivery consistency", "Missed handoffs, irregular cadence", "6 steps"],
          ["Payment control", "Late invoices, chase cycles", "5 steps"],
          ["Scope control", "Creep, undefined extras", "7 steps"],
        ].map((p, i) => (
          <a key={i} href="#" style={{
            padding: "24px 24px 28px",
            borderRight: i < 3 ? "1px solid var(--rule)" : "0",
            color: "var(--ink)",
            display: "block",
            borderBottom: 0,
          }}>
            <div className="h3" style={{ marginBottom: 8 }}>{p[0]}</div>
            <p style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>{p[1]}</p>
            <div className="meta" style={{ color: "var(--accent)" }}>{p[2]} →</div>
          </a>
        ))}
      </div>
    </section>

    <SiteFooter />
  </div>
);

window.ReadingPathDesktop = ReadingPathDesktop;
