/* Reading Path Index — diagnostic surface (desktop) */

const PATH_DATA = {
  symptoms: [
    { area: "Kickoff", q: "Client kickoff feels messy.", path: "Kickoff reliability" },
    { area: "Review", q: "Reviews keep drifting, no one signs off.", path: "Review control" },
    { area: "Approvals", q: "Approvals are unclear or unpredictable.", path: "Approval discipline" },
    { area: "Scope", q: "Scope keeps expanding, work keeps growing.", path: "Scope control" },
    { area: "Payment", q: "Payment readiness is uncertain.", path: "Payment control" },
    { area: "Inputs", q: "Client inputs are blocking the work.", path: "Input unblocking" },
    { area: "Delivery", q: "Delivery cadence is inconsistent.", path: "Delivery consistency" },
    { area: "Tools", q: "Tools are scattered across surfaces.", path: "Stack cleanup" },
    { area: "Ownership", q: "Ownership of project state is unclear.", path: "Source of truth" },
    { area: "Recovery", q: "A live project is going sideways.", path: "Project recovery" },
  ],
  clusters: [
    { name: "Engagement opening", desc: "Paths for the early phases — kickoff, intake, the first deliverable.", paths: [
      { title: "Kickoff reliability", sym: "Engagements slip in week one — agreements drift, access is missing, the first deliverable is late.", out: "A kickoff that closes with deliverables agreed, accesses verified, and the first work scheduled.", steps: 6, time: "~45 min", types: ["Workflow", "Template", "Checklist"] },
      { title: "Source of truth", sym: "Project state lives in too many places. Approvals stall because no one can answer 'is this the latest?'", out: "One declared canonical surface, one proposal clause, one quarterly audit routine.", steps: 5, time: "~35 min", types: ["Workflow", "Comparison", "Template"] },
    ]},
    { name: "Review & approval", desc: "Paths for engagements where the decision step is the bottleneck.", paths: [
      { title: "Review control", sym: "Reviews keep drifting — feedback arrives late, the next phase can't start, deadlines slip silently.", out: "A scheduled approval window, a named decision-maker, and a fallback rule the client agreed to at kickoff.", steps: 6, time: "~50 min", types: ["Workflow", "Template", "FAQ"] },
      { title: "Approval discipline", sym: "Sign-off is verbal, ambiguous, or routed through the wrong person.", out: "A reviewer-of-record clause and a written approval format both sides actually use.", steps: 4, time: "~30 min", types: ["Workflow", "Template"] },
      { title: "Scope control", sym: "The engagement expanded without anyone noticing. Revision rounds are unbounded.", out: "A revision cap, a change-order template, and a re-baseline trigger at phase boundaries.", steps: 5, time: "~40 min", types: ["Workflow", "Template", "Glossary"] },
    ]},
    { name: "Cashflow & payment", desc: "Paths that close the gap between work and money.", paths: [
      { title: "Payment control", sym: "Invoices land late. Deposits arrive after the phase is half done. Cashflow is unpredictable.", out: "Deposit-first phase structure, a fixed invoicing cadence, and a three-step late-invoice escalation.", steps: 5, time: "~35 min", types: ["Workflow", "Template", "FAQ"] },
    ]},
    { name: "Delivery & cadence", desc: "Paths for engagements that are running but inconsistent.", paths: [
      { title: "Delivery consistency", sym: "Deliverables arrive in different shapes, on different days, through different channels.", out: "A delivery template, a fixed weekly cadence, and a one-page status format.", steps: 4, time: "~25 min", types: ["Workflow", "Template", "Checklist"] },
      { title: "Input unblocking", sym: "The work is blocked on client inputs that never arrive.", out: "A short input list at kickoff, a 'paused engagement' clause, and a written unblock cadence.", steps: 4, time: "~25 min", types: ["Workflow", "Template"] },
    ]},
    { name: "Operating system", desc: "Paths for re-organising the way you run, between engagements.", paths: [
      { title: "Stack cleanup", sym: "Tools have drifted out of sync. The same information lives in three places and disagrees with itself.", out: "One declared canonical source, a stack-review checklist, and a quarterly maintenance cadence.", steps: 5, time: "~50 min", types: ["Workflow", "Comparison", "Blueprint", "Template"] },
    ]},
    { name: "Recovery", desc: "Paths for engagements that are already in trouble.", paths: [
      { title: "Project recovery", sym: "A live engagement is sideways — late, disputed, or stuck on a single decision.", out: "A re-baseline conversation, a re-priced phase, and a written agreement on the new shape.", steps: 6, time: "~60 min", types: ["Workflow", "Template", "FAQ"] },
    ]},
  ],
};

window.PATH_DATA = PATH_DATA;

const ReadingPathIndexDesktop = () => {
  const data = PATH_DATA;
  const totalPaths = data.clusters.reduce((n, c) => n + c.paths.length, 0);

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["Reading paths"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Diagnostic · {totalPaths} paths across {data.clusters.length} problem clusters</div>
            <h1 className="h-display" style={{ margin: "0 0 16px" }}>Reading paths</h1>
            <p className="lede" style={{ margin: 0, maxWidth: 620 }}>
              A reading path is a short, ordered sequence of workflows, templates and comparisons designed to fix one specific operator problem. Start with the symptom, not the topic.
            </p>
          </div>
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>How to use this</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px" }}>
              Pick the sentence below that matches what's actually broken right now. We'll route you to the path that closes that loop. Every path is dated and reviewed, and works without prior reading.
            </p>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Not sure?</div>
            <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              Start with <a href="#">Source of truth</a> or <a href="#">Kickoff reliability</a>. Both are foundational and link out to the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic block */}
      <section style={{ padding: "48px 56px 0" }}>
        <div className="container-wide" style={{ maxWidth: 1080 }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Diagnostic</div>
              <h2 className="h2" style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>What's broken right now?</h2>
              <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: "12px 0 0" }}>
                Pick the symptom closest to your current friction. The path on the right is the sequence that addresses it. There is overlap — most operators eventually run several.
              </p>
            </div>
            <div className="symptom-grid">
              {data.symptoms.map((s, i) => (
                <a key={i} className="sym" href="#">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <div className="body">
                    <div className="q">{s.q}</div>
                    <div className="a">Area: {s.area} · path: <strong>{s.path}</strong></div>
                  </div>
                  <span className="go">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Path clusters */}
      {data.clusters.map((c, ci) => (
        <section key={ci} style={{ padding: "56px 56px 0" }}>
          <div className="container-wide" style={{ maxWidth: 1080 }}>
            <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
              <div style={{ position: "sticky", top: 24 }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Cluster · {String(ci + 1).padStart(2, "0")} · {c.paths.length} path{c.paths.length === 1 ? "" : "s"}</div>
                <h2 style={{ font: "500 30px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 12px" }}>{c.name}</h2>
                <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>{c.desc}</p>
              </div>
              <div style={{ borderTop: "1px solid var(--rule)" }}>
                {c.paths.map((p, pi) => (
                  <div key={pi} className="path-row">
                    <div className="p-num">{String(ci + 1).padStart(2, "0")}·{String(pi + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="p-title"><a href="#">{p.title}</a></h3>
                      <p className="p-symptom"><strong>Symptom</strong> &nbsp; {p.sym}</p>
                      <p className="p-outcome">{p.out}</p>
                      <div className="p-types">
                        {p.types.map((t, i) => <Chip key={i} kind={i === 0 ? "phase" : ""}>{t}</Chip>)}
                      </div>
                    </div>
                    <div className="p-end">
                      <dl className="p-stats">
                        <dt>Steps</dt><dd>{p.steps}</dd>
                        <dt>Time</dt><dd>{p.time}</dd>
                      </dl>
                      <a href="#" className="p-begin">Begin path →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {ci < data.clusters.length - 1 && <div style={{ borderBottom: "1px solid var(--rule)", marginTop: 48 }}></div>}
        </section>
      ))}

      {/* Cross-link to hubs */}
      <section style={{ padding: "72px 56px 56px", borderTop: "1px solid var(--rule)", marginTop: 48, background: "var(--paper-2)" }}>
        <div className="container-wide" style={{ maxWidth: 1080, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>If a path is the wrong shape</div>
            <h2 className="h2" style={{ margin: 0 }}>Browse a hub instead.</h2>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "16px 0 0" }}>
              Reading paths cross hubs. If you'd rather work topically, each hub is a list of dated entries.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["Workflows", "Process per phase of one engagement.", "62 entries"],
              ["Templates & Checklists", "Copyable, parametrised artefacts.", "48 entries"],
              ["Blueprints", "Full stack compositions, end-to-end.", "12 entries"],
              ["Comparisons", "Operating-model and tool-category decisions.", "9 entries"],
            ].map(([n, d, c], i) => (
              <a key={i} href="#" style={{ display: "block", padding: "18px 20px", border: "1px solid var(--rule)", background: "var(--paper)", color: "var(--ink)" }}>
                <div className="eyebrow" style={{ marginBottom: 6 }}>Hub</div>
                <div style={{ font: "500 18px/1.25 var(--serif)", letterSpacing: "-0.005em", marginBottom: 6 }}>{n}</div>
                <div className="meta" style={{ fontSize: 13 }}>{d}</div>
                <div className="meta" style={{ fontSize: 12, marginTop: 8, fontFamily: "var(--mono)", color: "var(--ink-3)" }}>{c}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 56px 56px" }}>
        <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
          Maintained by SoloOpsGuide Editorial. Reading paths are reviewed quarterly and re-sequenced when a step is added, removed, or replaced. Symptoms reflect operator language we see repeatedly, not a comprehensive taxonomy. See our <a href="#">Editorial policy</a> for how paths are versioned.
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

window.ReadingPathIndexDesktop = ReadingPathIndexDesktop;
