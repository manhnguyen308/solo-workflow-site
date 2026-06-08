/* Software Stack Blueprint page (mobile) */

const BlueprintMobile = () => {
  const inventory = [
    ["Source of truth", "Project doc", "$0–8"],
    ["Client communication", "Email + digest", "$0"],
    ["Project tracking", "Lightweight task tool", "$0–10"],
    ["Document collaboration", "Shared docs", "$6–10"],
    ["Invoicing & contracts", "Single billing tool", "$15–25"],
    ["Time tracking", "Minimal tracker", "$0–8"],
    ["File storage", "Cloud drive", "Paid"],
  ];

  const steps = [
    ["Declare your source of truth", "One canonical place for project state. Everything else defers to it."],
    ["Set the phase model", "Kickoff, Delivery, Approvals, Payment, Closeout. Identical across clients."],
    ["Build the communication rhythm", "Fixed weekly digest day. Reusable template. No ad-hoc channels."],
    ["Wire invoicing into phases", "Each phase ends with a billing event. Source of truth records it."],
    ["Decouple time from estimation", "Track only for retainer reconciliation. Estimate from outcomes."],
    ["Lock storage conventions", "Per-client root. YYYY-MM_client_artifact. No exceptions."],
    ["Run a dry kickoff", "Test on one real proposal before committing."],
  ];

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Blueprints", "Solo freelancer"]} />
      </div>

      <section style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>Blueprint</span>
          <Chip kind="phase">Solo freelancer</Chip>
        </div>
        <h1 style={{ font: "500 30px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 12px" }}>
          Solo freelancer lean-budget stack
        </h1>
        <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
          A complete operating setup for one operator running 3–6 engagements on under $50/month.
        </p>
        <div className="meta" style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--rule-2)" }}>
          By SoloOpsGuide Editorial · Updated 2026-05-11 · 7 components
        </div>
      </section>

      {/* What for + assumptions */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>What this is for</div>
        <p style={{ font: "400 17px/1.6 var(--serif)", color: "var(--ink)", margin: "0 0 20px" }}>
          A working operating setup for solo operators whose client work has to run consistently without paying for team software. Opinionated about structure, neutral about specific products.
        </p>

        <div className="eyebrow" style={{ marginBottom: 10 }}>Who this fits</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule-2)" }}>
          {[
            ["Fits", "Solo consultants, freelancers. 3–6 active engagements."],
            ["Fits", "Budget under $50/month."],
            ["Doesn't fit", "Routinely running 8+ engagements."],
            ["Doesn't fit", "Real-time client collaboration needs."],
          ].map(([k, v], i) => (
            <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid var(--rule-2)" }}>
              <div className="eyebrow" style={{ color: k === "Fits" ? "var(--accent)" : "var(--caution)", marginBottom: 4 }}>{k}</div>
              <div style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink)" }}>{v}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Inventory — stacked cards instead of table */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>System components</div>
        <h2 style={{ font: "500 22px/1.22 var(--serif)", margin: "0 0 16px" }}>Seven roles to fill.</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
          {inventory.map(([role, tool, cost], i) => (
            <li key={i} style={{ padding: "14px 0", borderBottom: "1px solid var(--rule-2)", display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 12, alignItems: "baseline" }}>
              <span style={{ font: "500 12px/1.5 var(--mono)", color: "var(--ink-3)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="label" style={{ marginBottom: 2 }}>{role}</div>
                <div style={{ font: "400 13px/1.4 var(--mono)", color: "var(--ink-2)" }}>{tool}</div>
              </div>
              <span style={{ font: "500 12px/1 var(--mono)", color: "var(--ink-2)" }}>{cost}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 12, padding: "10px 12px", background: "var(--paper-2)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span className="label">Total monthly</span>
          <span style={{ font: "600 13px/1 var(--mono)", color: "var(--ink)" }}>$21–61</span>
        </div>
      </section>

      {/* Setup sequence — vertical with rail */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Setup sequence</div>
        <h2 style={{ font: "500 22px/1.22 var(--serif)", margin: "0 0 16px" }}>Seven steps, in order.</h2>
        <div className="sequence">
          {steps.map(([t, d], i) => (
            <div className="seq-step" key={i} style={{ padding: "12px 0 16px 44px" }}>
              <div className="seq-num" style={{ top: 14, width: 28, height: 28, fontSize: 12 }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="seq-title" style={{ fontSize: 17, marginBottom: 4 }}>{t}</h3>
              <p style={{ font: "400 14px/1.55 var(--serif)", color: "var(--ink)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to avoid */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>What to avoid</div>
        <h2 style={{ font: "500 22px/1.22 var(--serif)", margin: "0 0 14px" }}>Five mistakes this prevents.</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule-2)" }}>
          {[
            ["Stack creep", "Adding tools when a process change would fix the problem."],
            ["Two sources of truth", "Pick one. Demote the other to a read-only mirror."],
            ["Live chat with new clients", "Defer Slack/Teams until trust is established."],
            ["Estimating from timesheets", "Estimate from delivered outcomes, not logged hours."],
            ["Per-client tool variation", "Don't adopt a client's preferred PM tool unless you bill for it."],
          ].map(([t, d], i) => (
            <li key={i} style={{ padding: "12px 0", borderBottom: "1px solid var(--rule-2)" }}>
              <div className="label" style={{ color: "var(--caution)", marginBottom: 4 }}>{t}</div>
              <div style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink)" }}>{d}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Maintenance */}
      <section style={{ padding: "24px 20px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Maintenance</div>
        <h2 style={{ font: "500 22px/1.22 var(--serif)", margin: "0 0 16px" }}>Keep it honest.</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            ["Weekly", "Per-engagement digest"],
            ["Monthly", "Tool subscription audit"],
            ["Quarterly", "Phase model review"],
            ["Quarterly", "Source-of-truth check"],
            ["Yearly", "Pricing reconciliation"],
          ].map(([c, t], i) => (
            <li key={i} style={{ padding: "12px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)", display: "grid", gridTemplateColumns: "90px 1fr", gap: 16 }}>
              <span className="eyebrow" style={{ color: "var(--accent)", marginBottom: 0 }}>{c}</span>
              <span className="label">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related */}
      <section style={{ padding: "24px 20px" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Related</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            ["Workflow", "Declaring your source of truth"],
            ["Workflow", "Migrating from scattered tools"],
            ["Template", "Weekly digest template"],
            ["Comparison", "Workspace vs specialised stack"],
            ["Comparison", "Email vs client portal"],
          ].map(([t, n], i) => (
            <li key={i} style={{ padding: "12px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)" }}>
              <div className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>{t}</div>
              <a href="#" style={{ font: "500 15px/1.35 var(--serif)", color: "var(--ink)" }}>{n}</a>
            </li>
          ))}
        </ul>

        <div className="meta" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)", lineHeight: 1.7 }}>
          By SoloOpsGuide Editorial · Updated 2026-05-11 · Reviewed 2026-05-15 · Next review 2026-08-15.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.BlueprintMobile = BlueprintMobile;
