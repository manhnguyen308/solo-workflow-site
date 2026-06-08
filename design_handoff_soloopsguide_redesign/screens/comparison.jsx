/* Workflow Comparison page (desktop) */

const ComparisonDesktop = () => {
  const criteria = [
    { n: "01", name: "Solo operation reality", desc: "Will you ever realistically grow past one operator? Tools that assume teams cost more and break differently.", w: "High" },
    { n: "02", name: "Number of active clients", desc: "Workspaces handle few, deeply-shared clients. Stacks handle many, lightly-shared ones.", w: "High" },
    { n: "03", name: "Source-of-truth ownership", desc: "Where does the canonical version of project state live? Conflicts here cause silent drift.", w: "High" },
    { n: "04", name: "Client-facing surface", desc: "Does the client see your workspace, your stack output, or neither?", w: "Medium" },
    { n: "05", name: "Switching cost", desc: "Workspaces have one painful migration. Stacks have many small ones spread over time.", w: "Medium" },
    { n: "06", name: "Monthly cost predictability", desc: "Workspaces scale by user. Stacks scale by surface count. Different failure modes.", w: "Low" },
  ];

  const tableRows = [
    { c: "Setup time", note: "Cold start to first usable project", a: "Half a day. One sign-up, one workspace template applied, all phases live.", b: "One to two weeks. Each tool configured separately, integrations wired by hand." },
    { c: "Source of truth", note: "Where canonical state lives", a: "The workspace itself. Every artifact has one home.", b: "Distributed across tools. You commit to one tool as canonical and accept drift in others." },
    { c: "Client visibility", note: "What the client sees", a: "A shared workspace view, or nothing. Both work, but you choose explicitly.", b: "Whatever each tool exposes. Usually email + a portal of some kind. Inconsistent surface." },
    { c: "Handling 10+ clients", note: "Multi-engagement scale", a: "Strains at 8–10 active engagements. Cross-project search degrades, navigation slows.", b: "Scales further. Each tool is purpose-built for its slice and degrades independently." },
    { c: "Migration cost", note: "If the choice goes wrong", a: "High but bounded. One export, one re-import, one client communication.", b: "Lower per tool, but you'll do it three or four times across the engagement's life." },
    { c: "Reliance on one vendor", note: "Concentration risk", a: "Total. Workspace going down means your operation goes down for the day.", b: "Distributed. One tool down rarely blocks all phases of all engagements." },
    { c: "Best client type", note: "Who fits this model", a: "Mature, process-aware clients who want shared visibility.", b: "Clients who want minimal surface area and just want to receive deliverables." },
    { c: "Monthly cost (solo)", note: "Indicative, exc. discounts", a: "$10–25, single seat", b: "$35–80, summed across active tools" },
  ];

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader active="Comparisons" />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["Comparisons", "Operating model", "All-in-one workspace vs specialised stack"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600, padding: "8px 10px" }}>Comparison</span>
              <Chip kind="phase">Operating model</Chip>
              <Chip>Tooling</Chip>
              <Chip>Solo &amp; small teams</Chip>
            </div>
            <h1 className="h1" style={{ margin: "0 0 16px", maxWidth: 780 }}>
              All-in-one workspace vs specialised stack
            </h1>
            <p className="lede" style={{ margin: 0, maxWidth: 660 }}>
              Two operating models for a solo business: run everything inside one workspace, or compose a thin stack of focused tools. The decision shapes how you onboard clients, where your source of truth lives, and what fails first under load.
            </p>
          </div>
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Written by", "SoloOpsGuide Editorial"],
                ["Updated", "2026-05-06"],
                ["Reviewed", "2026-05-14"],
                ["Next review", "2026-08-14"],
                ["Reading time", "11 min"],
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

      {/* Decision summary (high in the page) */}
      <section style={{ padding: "40px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 960 }}>
          <div className="decision-summary">
            <div className="ds-eyebrow">Decision summary</div>
            <div className="ds-body">
              If you run 1–5 engagements at a time and want a shared view with clients, choose <strong>an all-in-one workspace</strong>. If you run 6+ engagements with light client visibility and need each phase to scale independently, choose <strong>a specialised stack</strong>. Skip this decision entirely until you have three live clients.
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-side option cards */}
      <section style={{ padding: "32px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="option-card">
              <div className="oc-eyebrow">Option A</div>
              <h2 className="oc-name">All-in-one workspace</h2>
              <p className="oc-tagline">One environment that covers projects, docs, tasks, and client views in a single workspace.</p>
              <dl className="oc-meta">
                <dt>Operating model</dt><dd>One workspace, one source of truth.</dd>
                <dt>Client surface</dt><dd>Shared workspace view, or none.</dd>
                <dt>Scales to</dt><dd>~8 active engagements before strain.</dd>
                <dt>Concentration risk</dt><dd>High — one vendor.</dd>
              </dl>
            </div>
            <div className="option-card">
              <div className="oc-eyebrow">Option B</div>
              <h2 className="oc-name">Specialised stack</h2>
              <p className="oc-tagline">A thin set of focused tools, each owning one phase of work, with one declared canonical source.</p>
              <dl className="oc-meta">
                <dt>Operating model</dt><dd>Multiple tools, one declared canon.</dd>
                <dt>Client surface</dt><dd>Email + per-tool surfaces.</dd>
                <dt>Scales to</dt><dd>15+ engagements, with discipline.</dd>
                <dt>Concentration risk</dt><dd>Distributed.</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Decision criteria panel */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Decision criteria</div>
              <h2 className="h2" style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>What to weigh, in order.</h2>
              <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: "12px 0 0" }}>
                Weights are notional — they reflect how much each criterion typically moves the final decision for a solo operator.
              </p>
            </div>
            <div className="criteria">
              {criteria.map((c, i) => (
                <div key={i} className="crit-row">
                  <span className="crit-n">{c.n}</span>
                  <div>
                    <div className="crit-name">{c.name}</div>
                    <div className="crit-desc">{c.desc}</div>
                  </div>
                  <span className="crit-weight">{c.w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Side-by-side</div>
          <h2 className="h2" style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.2 }}>How each model behaves under load.</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Notes</th>
                <th className="opt">All-in-one workspace</th>
                <th className="opt">Specialised stack</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((r, i) => (
                <tr key={i}>
                  <td className="criterion">{r.c}</td>
                  <td className="note">{r.note}</td>
                  <td>{r.a}</td>
                  <td>{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Best for / Not best for pair */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Workspace</div>
              <div className="bestfor-pair" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                <div className="bestfor-card good">
                  <div className="bf-eyebrow">Best for</div>
                  <div className="bf-title">When the workspace model fits</div>
                  <ul>
                    <li>You run 1–5 active engagements at a time.</li>
                    <li>You want clients to see project state directly.</li>
                    <li>You value setup time over scaling headroom.</li>
                    <li>You expect to stay solo for the next 12 months.</li>
                  </ul>
                </div>
                <div className="bestfor-card bad">
                  <div className="bf-eyebrow">Not best for</div>
                  <div className="bf-title">When the workspace model breaks</div>
                  <ul>
                    <li>You routinely run 8+ concurrent engagements.</li>
                    <li>You serve clients who refuse to use a portal.</li>
                    <li>You need offline access during travel-heavy weeks.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Specialised stack</div>
              <div className="bestfor-pair" style={{ gridTemplateColumns: "1fr", gap: 16 }}>
                <div className="bestfor-card good">
                  <div className="bf-eyebrow">Best for</div>
                  <div className="bf-title">When the stack model fits</div>
                  <ul>
                    <li>You run 6+ engagements with thin shared surfaces.</li>
                    <li>You already own one strong tool per phase.</li>
                    <li>You want vendor risk distributed.</li>
                    <li>You will add a VA or contractor within 12 months.</li>
                  </ul>
                </div>
                <div className="bestfor-card bad">
                  <div className="bf-eyebrow">Not best for</div>
                  <div className="bf-title">When the stack model breaks</div>
                  <ul>
                    <li>You don't yet have a declared source of truth.</li>
                    <li>You haven't run three full client cycles.</li>
                    <li>You dislike maintaining integrations or routines.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation logic */}
      <section style={{ padding: "56px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 960 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Recommendation logic</div>
          <h2 className="h2" style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.2 }}>If you match these conditions, choose…</h2>
          <div className="reco">
            <div className="reco-row">
              <div className="reco-cell head"><div className="reco-eyebrow">If</div><div className="reco-cond">You are at 1–5 active engagements, clients want visibility, and you value start-up speed.</div></div>
              <div className="reco-cell head"><div className="reco-eyebrow">Then</div><div className="reco-then"><strong>All-in-one workspace.</strong> Skip stack composition until you hit 6 concurrent engagements.</div></div>
            </div>
            <div className="reco-row">
              <div className="reco-cell"><div className="reco-eyebrow">If</div><div className="reco-cond">You already run 6+ concurrent engagements, with email-led clients and one phase you handle well.</div></div>
              <div className="reco-cell"><div className="reco-eyebrow">Then</div><div className="reco-then"><strong>Specialised stack.</strong> Declare your strongest tool as canonical and add the rest deliberately.</div></div>
            </div>
            <div className="reco-row">
              <div className="reco-cell"><div className="reco-eyebrow">If</div><div className="reco-cond">You are under three live clients or unsure which phase is your bottleneck.</div></div>
              <div className="reco-cell"><div className="reco-eyebrow">Then</div><div className="reco-then"><strong>Defer the decision.</strong> Stay in email + one project doc until your real friction surfaces.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section style={{ padding: "56px 56px" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Next steps</div>
          <h2 className="h2" style={{ margin: "0 0 24px", fontSize: 28, lineHeight: 1.2 }}>Once you've decided, do these in order.</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
            {[
              ["Workflow", "Declaring your source of truth", "First operational decision, regardless of model."],
              ["Blueprint", "Solo freelancer lean-budget stack", "If you went with Option B and need a starting composition."],
              ["Workflow", "Migrating from scattered tools to one workflow system", "If you went with Option A and need to consolidate."],
              ["Template", "Client tooling notice — proposal clause", "Tell new clients which surface you'll use, before kickoff."],
              ["Glossary", "Source of truth", "Definition with the practical edge cases."],
              ["FAQ", "Do I need a CRM if I have a workspace?", "Short answer in the FAQ hub."],
            ].map(([type, t, d], i) => (
              <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "16px 0", display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 24, alignItems: "baseline" }}>
                <span className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, color: "var(--ink-2)" }}>{type}</span>
                <div>
                  <a href="#" style={{ font: "500 17px/1.35 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{t}</a>
                  <p style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)", margin: "4px 0 0" }}>{d}</p>
                </div>
                <span style={{ color: "var(--accent)", font: "500 13px/1 var(--sans)" }}>Open →</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Editorial meta */}
      <section style={{ padding: "0 56px 56px" }}>
        <div className="container-wide" style={{ maxWidth: 1080, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
          <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
            Written by SoloOpsGuide Editorial. Updated 2026-05-06. Reviewed 2026-05-14. Next scheduled review 2026-08-14. This comparison is not affiliate-driven and does not name specific products; vendor specifics shift faster than this page revises. See our <a href="#">Editorial policy</a> and <a href="#">Content policy</a> for how we revise comparisons.
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

window.ComparisonDesktop = ComparisonDesktop;
