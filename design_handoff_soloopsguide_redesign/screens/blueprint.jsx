/* Software Stack Blueprint page (desktop) */

const BlueprintDesktop = () => {
  const inventory = [
    { role: "Source of truth", tool: "Project doc", why: "One canonical place for scope, decisions, and status. Lives in your writing tool of choice.", cost: "$0–8/mo" },
    { role: "Client communication", tool: "Email + scheduled digest", why: "Avoid portal sprawl until you reach 6+ engagements. Use a recurring weekly update template.", cost: "$0" },
    { role: "Project tracking", tool: "Lightweight task tool", why: "Per-engagement task lists with a fixed phase model. Not a full PM workspace.", cost: "$0–10/mo" },
    { role: "Document collaboration", tool: "Shared docs", why: "Used only for deliverables that need client comment, not internal notes.", cost: "$6–10/mo" },
    { role: "Invoicing & contracts", tool: "Single billing tool", why: "Generates invoices, holds proposal templates, signs contracts. Decoupled from PM.", cost: "$15–25/mo" },
    { role: "Time tracking", tool: "Minimal tracker", why: "Only used for retainer reconciliation, not estimation. Weekly summary, not granular.", cost: "$0–8/mo" },
    { role: "File storage", tool: "Cloud drive", why: "Per-client folders, named by year and engagement. Not your task system.", cost: "Already paid" },
  ];

  const steps = [
    { t: "Declare your source of truth", d: "Choose one place where canonical project state lives. Every other tool defers to it. This is the single decision the rest of the blueprint depends on.", pre: "None — do this first.", out: "A named tool, written into your operating notes." },
    { t: "Set the phase model", d: "Adopt the five-phase model — Kickoff, Delivery, Approvals, Payment, Closeout — and create a per-engagement task list that mirrors it. Keep the model identical across clients.", pre: "Source of truth declared.", out: "A reusable per-engagement task list template." },
    { t: "Build the client communication rhythm", d: "Pick a fixed weekly send-day for the engagement digest. Write a reusable digest template. Decline ad-hoc Slack-style channels with new clients.", pre: "Phase model in place.", out: "Calendar entry + reusable digest template." },
    { t: "Wire invoicing into the phase model", d: "Each phase ends with a billing event — deposit, milestone, or retainer renewal. The billing tool issues the invoice; the source of truth records the event.", pre: "Phase model and source of truth.", out: "Invoice schedule per engagement type." },
    { t: "Decouple time tracking from estimation", d: "Time tracking exists only for retainer reconciliation. Do not use logged hours to estimate future work. Estimate from prior engagement outcomes, not timesheets.", pre: "Invoicing wired in.", out: "Weekly time summary per active retainer." },
    { t: "Lock storage and naming conventions", d: "Per-client root folder. Subfolders for proposal, deliverables, financials, closeout. Naming pattern: YYYY-MM_clientcode_artifact. No exceptions.", pre: "All tools selected.", out: "A folder template you copy per client." },
    { t: "Run a dry kickoff with a real proposal", d: "Test the full blueprint on one real proposal before committing. The first one finds the friction; the second one removes it.", pre: "Everything else in place.", out: "Working blueprint, dated, ready to scale." },
  ];

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader active="Blueprints" />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["Blueprints", "Solo freelancer", "Lean-budget stack"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600, padding: "8px 10px" }}>Blueprint</span>
              <Chip kind="phase">Solo freelancer</Chip>
              <Chip>Lean budget</Chip>
              <Chip>Specialised stack</Chip>
            </div>
            <h1 className="h1" style={{ margin: "0 0 16px", maxWidth: 780 }}>
              Solo freelancer lean-budget stack
            </h1>
            <p className="lede" style={{ margin: 0, maxWidth: 660 }}>
              A complete operating setup for a one-person service business running 3–6 concurrent engagements on under $50 a month. Specialised stack model, email-led client communication, one declared source of truth, a fixed phase rhythm.
            </p>
          </div>
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Written by", "SoloOpsGuide Editorial"],
                ["Updated", "2026-05-11"],
                ["Reviewed", "2026-05-15"],
                ["Next review", "2026-08-15"],
                ["Components", "7 roles"],
                ["Setup time", "~2 weeks part-time"],
              ].map(([k, v], i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 16 }}>
                  <span className="eyebrow">{k}</span>
                  <span className="label">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What this is for + Assumptions */}
      <section style={{ padding: "48px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>What this blueprint is for</div>
              <p style={{ font: "400 19px/1.65 var(--serif)", color: "var(--ink)", margin: 0 }}>
                A working operating setup for solo operators who want their client work to run consistently without paying for software meant for teams. It defines the seven roles a solo business needs to fill, names a category for each, and orders the setup so each step builds on the one before.
              </p>
              <p style={{ font: "400 19px/1.65 var(--serif)", color: "var(--ink-2)", margin: "16px 0 0" }}>
                It is opinionated about structure — the phase model, the source of truth, the communication rhythm — and deliberately neutral about specific products.
              </p>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Who this fits</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
                {[
                  ["Fits", "Solo consultants, freelancers, productized services. 3–6 active engagements."],
                  ["Fits", "Budget under $50/month for operating software."],
                  ["Fits", "Clients who tolerate email + scheduled digests as the primary surface."],
                  ["Doesn't fit", "Anyone routinely running 8+ engagements."],
                  ["Doesn't fit", "Engagements requiring real-time client collaboration."],
                  ["Doesn't fit", "Operators who want one workspace covering all phases — see the workspace blueprint."],
                ].map(([k, v], i) => (
                  <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "12px 0", display: "grid", gridTemplateColumns: "100px 1fr", gap: 16 }}>
                    <span className="eyebrow" style={{ color: k === "Fits" ? "var(--accent)" : "var(--caution)", marginBottom: 0 }}>{k}</span>
                    <span style={{ font: "400 15px/1.5 var(--sans)", color: "var(--ink)" }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System components inventory */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>System components</div>
          <h2 className="h2" style={{ margin: "0 0 8px", fontSize: 28 }}>Seven roles the system has to fill.</h2>
          <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 24px", maxWidth: 720 }}>
            Each row is a role, not a product. Pick one tool per role. If a single tool covers two roles, use it for both — but never split one role across two tools.
          </p>
          <table className="inventory" style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th>Role</th>
                <th>Category</th>
                <th>Why this role exists</th>
                <th style={{ textAlign: "right" }}>Monthly cost</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((r, i) => (
                <tr key={i}>
                  <td className="role">{r.role}</td>
                  <td className="tool">{r.tool}</td>
                  <td className="why">{r.why}</td>
                  <td className="cost">{r.cost}</td>
                </tr>
              ))}
              <tr style={{ background: "var(--paper-2)" }}>
                <td style={{ fontWeight: 600, color: "var(--ink)" }}>Total</td>
                <td></td>
                <td className="meta">Indicative, single-operator pricing. Excludes discounts.</td>
                <td className="cost" style={{ fontWeight: 600, color: "var(--ink)" }}>$21–61/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Setup sequence */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 24 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Setup sequence</div>
              <h2 className="h2" style={{ margin: "0 0 12px", fontSize: 28 }}>Seven steps, in order.</h2>
              <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
                Each step has a prerequisite and an output. Don't skip ahead — later steps assume the earlier ones are real. Reasonable pace is one step per two days, part-time.
              </p>
            </div>
            <div className="sequence">
              {steps.map((s, i) => (
                <div className="seq-step" key={i}>
                  <div className="seq-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="seq-title">{s.t}</h3>
                  <p className="seq-desc">{s.d}</p>
                  <div className="seq-meta">
                    <div>
                      <div className="label">Prerequisite</div>
                      <div className="val">{s.pre}</div>
                    </div>
                    <div>
                      <div className="label">Output</div>
                      <div className="val">{s.out}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to avoid */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>What to avoid</div>
              <h2 className="h2" style={{ margin: 0, fontSize: 28 }}>Five mistakes this blueprint exists to prevent.</h2>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
              {[
                ["Stack creep", "Adding tools when a process change would fix the underlying problem. New tool = new role only."],
                ["Two sources of truth", "Treating both the project doc and the PM tool as canonical. Pick one. Demote the other to a read-only mirror."],
                ["Live chat with new clients", "Opening a Slack or Teams channel before kickoff. Defer to scheduled digests until trust is established."],
                ["Estimating from timesheets", "Using last quarter's tracked hours as the basis for next quarter's quote. Estimate from delivered outcomes."],
                ["Per-client tool variation", "Adopting a client's preferred PM tool just to make their week easier. Adopt their portal only if you bill for it."],
              ].map(([t, d], i) => (
                <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "18px 0", display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "baseline" }}>
                  <div className="label" style={{ color: "var(--caution)" }}>{t}</div>
                  <div style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink)" }}>{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance notes */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Maintenance</div>
          <h2 className="h2" style={{ margin: "0 0 24px", fontSize: 28 }}>How to keep this stack honest.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { cadence: "Weekly", t: "Per-engagement digest", d: "Send the scheduled update on the same day each week. Skip only if you have nothing to report, and say so." },
              { cadence: "Monthly", t: "Tool subscription audit", d: "Review every line item in the inventory. Remove anything not used in the last 30 days. Cancel free trials." },
              { cadence: "Quarterly", t: "Phase model review", d: "Re-walk the five phases. If one of them has been silently replaced by ad-hoc work, formalise the new shape." },
              { cadence: "Quarterly", t: "Source-of-truth check", d: "Confirm your declared canon is still where decisions are recorded. Demote anything pretending to be canon." },
              { cadence: "Yearly", t: "Pricing reconciliation", d: "Re-quote three recent engagements against this year's costs. Adjust your floor rate accordingly." },
              { cadence: "Yearly", t: "Blueprint comparison", d: "Re-read the comparison page. If your engagement count has crossed 6, plan a migration to the team blueprint." },
            ].map((m, i) => (
              <div key={i} style={{ border: "1px solid var(--rule)", padding: 18, background: "var(--paper)" }}>
                <div className="eyebrow" style={{ color: "var(--accent)", marginBottom: 8 }}>{m.cadence}</div>
                <div className="h3" style={{ marginBottom: 6, fontSize: 16 }}>{m.t}</div>
                <p style={{ font: "400 13.5px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: "56px 56px" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Related</div>
          <h2 className="h2" style={{ margin: "0 0 24px", fontSize: 28 }}>Where to go next.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid var(--rule)" }}>
            {[
              { col: "Related workflows", items: [
                "Declaring your source of truth",
                "Setting the approval window in the proposal",
                "Polite escalation for late invoices",
                "Migrating from scattered tools",
              ]},
              { col: "Related templates", items: [
                "Per-engagement task-list template",
                "Weekly digest template",
                "Engagement folder structure",
                "Client tooling notice clause",
              ]},
              { col: "Related comparisons", items: [
                "All-in-one workspace vs specialised stack",
                "Email vs client portal",
                "Project-based vs retainer pricing",
                "Time tracker vs reconciliation log",
              ]},
            ].map((c, i) => (
              <div key={i} style={{ padding: "24px 24px 24px", borderRight: i < 2 ? "1px solid var(--rule)" : "0" }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>{c.col}</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {c.items.map((it, j) => (
                    <li key={j} style={{ borderTop: j === 0 ? "1px solid var(--rule-2)" : "1px solid var(--rule-2)", padding: "12px 0" }}>
                      <a href="#" style={{ font: "500 15px/1.4 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next-step block */}
      <section style={{ padding: "0 56px 56px" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <a href="#" style={{ display: "block", border: "1px solid var(--rule)", padding: 24, color: "var(--ink)" }}>
              <div className="eyebrow" style={{ marginBottom: 8, color: "var(--ink-3)" }}>If you haven't decided the model yet</div>
              <div className="h3" style={{ marginBottom: 4, fontSize: 18 }}>Read the comparison first</div>
              <p style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)", margin: 0 }}>All-in-one workspace vs specialised stack — work through the decision criteria before adopting this blueprint.</p>
            </a>
            <a href="#" style={{ display: "block", border: "1px solid var(--rule)", padding: 24, color: "var(--ink)" }}>
              <div className="eyebrow" style={{ marginBottom: 8, color: "var(--ink-3)" }}>If you're already on a workspace</div>
              <div className="h3" style={{ marginBottom: 4, fontSize: 18 }}>See the workspace blueprint</div>
              <p style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)", margin: 0 }}>The same seven roles, fulfilled inside a single workspace rather than across a stack.</p>
            </a>
          </div>

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
            <div className="meta" style={{ lineHeight: 1.7, maxWidth: 760 }}>
              Written by SoloOpsGuide Editorial. Updated 2026-05-11. Reviewed 2026-05-15. Next scheduled review 2026-08-15. This blueprint names roles, not vendors; specific product names are intentionally absent. See our <a href="#">Editorial policy</a> and <a href="#">Content policy</a> for how we treat tooling.
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

window.BlueprintDesktop = BlueprintDesktop;
