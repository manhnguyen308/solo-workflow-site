/* Workflow Comparison page (mobile) */

const ComparisonMobile = () => {
  const rows = [
    ["Setup time", "Half a day. Workspace template, all phases live.", "One to two weeks. Tools configured separately."],
    ["Source of truth", "The workspace itself.", "Distributed. One declared canonical."],
    ["Client visibility", "Shared workspace view or none.", "Email + per-tool surfaces."],
    ["10+ clients", "Strains at 8–10 engagements.", "Scales further with discipline."],
    ["Concentration risk", "High — one vendor.", "Distributed."],
    ["Monthly cost (solo)", "$10–25, one seat.", "$35–80, summed."],
  ];

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Comparisons", "Operating model"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>Comparison</span>
          <Chip kind="phase">Operating model</Chip>
        </div>
        <h1 style={{ font: "500 30px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 12px" }}>
          All-in-one workspace vs specialised stack
        </h1>
        <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
          Two operating models for a solo business. The decision shapes how you onboard clients and what fails first under load.
        </p>
        <div className="meta" style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid var(--rule-2)" }}>
          By SoloOpsGuide Editorial · Updated 2026-05-06 · 11 min
        </div>
      </section>

      {/* Decision summary */}
      <section style={{ padding: "24px 20px 0" }}>
        <div className="decision-summary" style={{ padding: "20px 22px" }}>
          <div className="ds-eyebrow">Decision summary</div>
          <div className="ds-body" style={{ fontSize: 18, lineHeight: 1.45 }}>
            1–5 engagements with shared client visibility → <strong>workspace</strong>. 6+ engagements with light surfaces → <strong>specialised stack</strong>. Under three live clients → defer.
          </div>
        </div>
      </section>

      {/* Option cards — stacked */}
      <section style={{ padding: "24px 20px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { eyebrow: "Option A", name: "All-in-one workspace", tag: "One environment covering projects, docs, tasks, and client views.", meta: [["Model", "One workspace"], ["Surface", "Shared or none"], ["Scales to", "~8 engagements"], ["Risk", "Single vendor"]] },
          { eyebrow: "Option B", name: "Specialised stack", tag: "A thin set of focused tools with one declared canonical source.", meta: [["Model", "Multiple tools"], ["Surface", "Email + per-tool"], ["Scales to", "15+ engagements"], ["Risk", "Distributed"]] },
        ].map((o, i) => (
          <div key={i} className="option-card" style={{ padding: 20 }}>
            <div className="oc-eyebrow">{o.eyebrow}</div>
            <h2 className="oc-name" style={{ fontSize: 22 }}>{o.name}</h2>
            <p className="oc-tagline">{o.tag}</p>
            <dl className="oc-meta" style={{ gridTemplateColumns: "1fr 1fr", gap: "10px 16px", fontSize: 12 }}>
              {o.meta.map(([k, v], j) => (
                <React.Fragment key={j}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        ))}
      </section>

      {/* Decision criteria — collapsed list */}
      <section style={{ padding: "32px 20px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Decision criteria</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 14px" }}>What to weigh, in order.</h2>
        <div className="criteria">
          {[
            ["01", "Solo operation reality", "Will you realistically grow past one operator?", "High"],
            ["02", "Active clients", "Workspaces handle few; stacks handle many.", "High"],
            ["03", "Source of truth", "Where canonical state lives.", "High"],
            ["04", "Client surface", "What clients actually see.", "Medium"],
            ["05", "Switching cost", "One big migration vs many small ones.", "Medium"],
          ].map(([n, name, desc, w], i) => (
            <div key={i} className="crit-row" style={{ gridTemplateColumns: "28px 1fr auto", padding: "14px 16px" }}>
              <span className="crit-n">{n}</span>
              <div>
                <div className="crit-name" style={{ fontSize: 15 }}>{name}</div>
                <div className="crit-desc" style={{ fontSize: 13 }}>{desc}</div>
              </div>
              <span className="crit-weight">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile-safe comparison: criterion-grouped */}
      <section style={{ padding: "32px 20px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Side-by-side</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 16px" }}>How each model behaves.</h2>
        <div className="mcompare">
          {rows.map(([c, a, b], i) => (
            <div className="mcompare-row" key={i}>
              <div className="mcompare-crit">{c}</div>
              <div className="mcompare-grid">
                <div className="mcompare-cell">
                  <div className="opt">Workspace</div>
                  {a}
                </div>
                <div className="mcompare-cell">
                  <div className="opt">Stack</div>
                  {b}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best for / Not best for — stacked */}
      <section style={{ padding: "32px 20px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="eyebrow">Workspace fit</div>
        <div className="bestfor-card good" style={{ padding: 18 }}>
          <div className="bf-eyebrow">Best for</div>
          <div className="bf-title">When the workspace model fits</div>
          <ul>
            <li>1–5 active engagements at a time.</li>
            <li>Clients want shared visibility.</li>
            <li>Staying solo for the next 12 months.</li>
          </ul>
        </div>
        <div className="bestfor-card bad" style={{ padding: 18 }}>
          <div className="bf-eyebrow">Not best for</div>
          <div className="bf-title">When it breaks</div>
          <ul>
            <li>8+ concurrent engagements.</li>
            <li>Clients refuse a portal.</li>
          </ul>
        </div>

        <div className="eyebrow" style={{ marginTop: 8 }}>Stack fit</div>
        <div className="bestfor-card good" style={{ padding: 18 }}>
          <div className="bf-eyebrow">Best for</div>
          <div className="bf-title">When the stack model fits</div>
          <ul>
            <li>6+ engagements, thin client surfaces.</li>
            <li>One strong tool per phase already in place.</li>
            <li>Adding a VA within 12 months.</li>
          </ul>
        </div>
        <div className="bestfor-card bad" style={{ padding: 18 }}>
          <div className="bf-eyebrow">Not best for</div>
          <div className="bf-title">When it breaks</div>
          <ul>
            <li>No declared source of truth yet.</li>
            <li>Under three completed client cycles.</li>
          </ul>
        </div>
      </section>

      {/* Recommendation logic — stacked */}
      <section style={{ padding: "32px 20px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Recommendation</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 14px" }}>If you match, choose…</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            ["1–5 active engagements, clients want visibility.", "Workspace", "Skip stack composition until 6 concurrent."],
            ["6+ engagements, email-led clients, one strong phase.", "Stack", "Declare your strongest tool canonical."],
            ["Under three live clients.", "Defer", "Stay in email + one project doc."],
          ].map(([cond, then, note], i) => (
            <div key={i} style={{ border: "1px solid var(--rule)", background: "var(--paper)", padding: 16 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>If</div>
              <div style={{ font: "500 15px/1.4 var(--serif)", color: "var(--ink)", marginBottom: 10 }}>{cond}</div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Then</div>
              <div style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)" }}><strong style={{ color: "var(--ink)" }}>{then}.</strong> {note}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "32px 20px" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Next steps</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            ["Workflow", "Declaring your source of truth"],
            ["Blueprint", "Solo freelancer lean-budget stack"],
            ["Template", "Client tooling notice clause"],
            ["Glossary", "Source of truth"],
            ["FAQ", "Do I need a CRM if I have a workspace?"],
          ].map(([t, n], i) => (
            <li key={i} style={{ padding: "12px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)" }}>
              <div className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>{t}</div>
              <a href="#" style={{ font: "500 15px/1.35 var(--serif)", color: "var(--ink)" }}>{n}</a>
            </li>
          ))}
        </ul>

        <div className="meta" style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)", lineHeight: 1.7 }}>
          By SoloOpsGuide Editorial · Updated 2026-05-06 · Reviewed 2026-05-14 · Next review 2026-08-14.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.ComparisonMobile = ComparisonMobile;
