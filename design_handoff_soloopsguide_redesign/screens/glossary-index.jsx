/* Glossary Index — A–Z reference (desktop) */

const GLOSSARY_DATA = [
  { L: "A", desc: "Approval, access, async — agreement-shaped vocabulary.", terms: [
    { name: "Approval window", sum: "A fixed period during which the client commits to reviewing a deliverable and responding in writing.", topic: "Approvals", phase: "Approvals" },
    { name: "Acceptance criteria", sum: "Pre-agreed conditions that define when a deliverable is considered complete.", topic: "Scope", phase: "Delivery" },
    { name: "Access list", sum: "The written record of which tools, accounts, and credentials the engagement requires before kickoff.", topic: "Kickoff", phase: "Kickoff" },
    { name: "Async kickoff", sum: "A kickoff completed without a live meeting, using a structured intake doc and a written commitment.", topic: "Kickoff", phase: "Kickoff" },
  ]},
  { L: "B", desc: "Billing & blueprint vocabulary.", terms: [
    { name: "Billing milestone", sum: "A phase boundary that triggers an invoice, regardless of whether deliverables are accepted.", topic: "Payment", phase: "Payment" },
    { name: "Blueprint", sum: "A complete software stack composition for a single operating model — roles, tools, sequence, maintenance.", topic: "Tooling", phase: "Setup" },
  ]},
  { L: "C", desc: "Client-facing structures and contract surfaces.", terms: [
    { name: "Cadence", sum: "The fixed rhythm at which a recurring action — invoice, status update, review — is sent.", topic: "Communication", phase: "Delivery" },
    { name: "Canonical source", sum: "The single tool or document declared as the authoritative version of project state.", topic: "Tooling", phase: "Setup" },
    { name: "Checkpoint email", sum: "A short, scheduled message confirming engagement state at a fixed point in the timeline.", topic: "Communication", phase: "Delivery" },
    { name: "Closeout", sum: "The end-of-engagement phase: final delivery, archive, off-boarding, and final invoice.", topic: "Closeout", phase: "Closeout" },
  ]},
  { L: "D", desc: "Deliverables, decisions, defaults.", terms: [
    { name: "Decision-maker", sum: "The single named role with authority to approve a deliverable. Not the same as the recipient.", topic: "Approvals", phase: "Approvals" },
    { name: "Deliverable", sum: "A discrete, named artefact handed to the client at a defined point in the timeline.", topic: "Delivery", phase: "Delivery" },
    { name: "Deposit", sum: "A payment received before work begins on a phase. Different from a retainer.", topic: "Payment", phase: "Payment" },
  ]},
  { L: "E", desc: "", terms: [
    { name: "Engagement", sum: "A single, scoped relationship with one client, with a defined start and end.", topic: "Structure", phase: "Kickoff" },
    { name: "Editorial review", sum: "The internal date-stamped check that confirms a document is current and accurate.", topic: "Editorial", phase: "Maintenance" },
  ]},
  { L: "F", desc: "", terms: [
    { name: "Fallback rule", sum: "A published default that triggers if the client does not respond inside an approval window.", topic: "Approvals", phase: "Approvals" },
    { name: "Fixed-scope project", sum: "An engagement priced and contracted against a defined deliverable, not against time.", topic: "Scope", phase: "Kickoff" },
  ]},
  { L: "H", desc: "", terms: [
    { name: "Handoff", sum: "The structured transfer of files, accesses, and context to the client at closeout.", topic: "Closeout", phase: "Closeout" },
  ]},
  { L: "I", desc: "", terms: [
    { name: "Intake document", sum: "A structured form used in async or low-touch kickoffs to capture scope and constraints.", topic: "Kickoff", phase: "Kickoff" },
    { name: "Invoice cadence", sum: "The fixed schedule on which invoices are issued, independent of milestone state.", topic: "Payment", phase: "Payment" },
  ]},
  { L: "K", desc: "", terms: [
    { name: "Kickoff", sum: "The first phase of an engagement: agreements, access, schedule, and the first deliverable confirmed.", topic: "Kickoff", phase: "Kickoff" },
  ]},
  { L: "M", desc: "Maintenance and migration.", terms: [
    { name: "Maintenance cadence", sum: "The schedule on which tooling, templates, and documentation are reviewed independent of any client.", topic: "Operations", phase: "Maintenance" },
    { name: "Migration cost", sum: "The total time and risk of moving canonical state from one tool to another.", topic: "Tooling", phase: "Setup" },
  ]},
  { L: "O", desc: "", terms: [
    { name: "Operating model", sum: "The overall pattern of how a solo operator runs work: workspace-led, stack-led, or hybrid.", topic: "Tooling", phase: "Setup" },
  ]},
  { L: "P", desc: "Phase, proposal, path — the structural words.", terms: [
    { name: "Phase", sum: "A named segment of an engagement with its own deliverables, decision points, and invoices.", topic: "Structure", phase: "Delivery" },
    { name: "Proposal clause", sum: "A short, reusable contract paragraph covering one operating rule — windows, rounds, fallbacks.", topic: "Contracts", phase: "Kickoff" },
    { name: "Productized service", sum: "A service offered with a fixed scope, fixed price, and a fixed delivery sequence.", topic: "Structure", phase: "Kickoff" },
  ]},
  { L: "R", desc: "Review, retainer, recovery.", terms: [
    { name: "Retainer", sum: "A recurring engagement priced against availability or output volume rather than discrete deliverables.", topic: "Structure", phase: "Payment" },
    { name: "Revision round", sum: "One pre-agreed cycle of client edits on a deliverable. Counts against a cap, not against time.", topic: "Approvals", phase: "Approvals" },
    { name: "Reviewer of record", sum: "The named role responsible for approval, declared in writing before delivery begins.", topic: "Approvals", phase: "Kickoff" },
    { name: "Reading path", sum: "A sequenced set of workflows, templates and comparisons addressing one operator problem.", topic: "Editorial", phase: "Reference" },
  ]},
  { L: "S", desc: "Sources, scope, setup.", terms: [
    { name: "Scope", sum: "The defined boundary of work for an engagement. The thing that creep eats.", topic: "Scope", phase: "Kickoff" },
    { name: "Source of truth", sum: "The single tool or document that holds the canonical project state. There is exactly one.", topic: "Tooling", phase: "Setup" },
    { name: "Stack", sum: "A composed set of focused tools, one per phase, with one declared canonical source.", topic: "Tooling", phase: "Setup" },
    { name: "Setup sequence", sum: "The ordered set of steps to bring a blueprint live, each with prerequisites and outputs.", topic: "Tooling", phase: "Setup" },
  ]},
  { L: "T", desc: "", terms: [
    { name: "Template", sum: "A copyable, parametrised artefact — email, clause, doc — reused across engagements.", topic: "Templates", phase: "Reference" },
  ]},
  { L: "W", desc: "", terms: [
    { name: "Workspace", sum: "A single, all-in-one environment covering projects, docs, tasks and client views.", topic: "Tooling", phase: "Setup" },
    { name: "Workflow", sum: "A short process guide for one phase of one engagement, scoped to a single fix.", topic: "Editorial", phase: "Reference" },
  ]},
];

const ALL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphaRail = ({ filled, mobile }) => (
  <div className={`alpha-rail${mobile ? " mobile" : ""}`}>
    {ALL_LETTERS.map(L => (
      <a key={L} href={`#L-${L}`} className={`a-link ${filled.has(L) ? "" : "empty"}`}>{L}</a>
    ))}
  </div>
);

window.AlphaRail = AlphaRail;
window.GLOSSARY_DATA = GLOSSARY_DATA;

const GlossaryIndexDesktop = () => {
  const filled = new Set(GLOSSARY_DATA.map(g => g.L));
  const totalTerms = GLOSSARY_DATA.reduce((n, g) => n + g.terms.length, 0);

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader active="Glossary" />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["Glossary"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Reference · {totalTerms} terms across {GLOSSARY_DATA.length} letters</div>
            <h1 className="h-display" style={{ margin: "0 0 16px" }}>Glossary</h1>
            <p className="lede" style={{ margin: 0, maxWidth: 620 }}>
              Plain-English definitions for the vocabulary used across SoloOpsGuide. Each entry has a short summary here and a full explanation, an example, and links to relevant workflows and templates on its own page.
            </p>
          </div>
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>How to use this</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px" }}>
              Use the A–Z rail to jump. Filter by topic to narrow the list. Click any term for its full entry. Terms are written for solo operators — group definitions and team-specific edge cases are noted only where they change the behaviour.
            </p>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Editorial</div>
            <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              Reviewed quarterly. Each entry shows its own last-reviewed date.
            </p>
          </div>
        </div>
      </section>

      {/* Filter / search row */}
      <section style={{ padding: "20px 56px", borderBottom: "1px solid var(--rule)", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
        <div className="eyebrow">Filter by topic</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["All 43", "Approvals 5", "Kickoff 5", "Payment 3", "Scope 3", "Tooling 8", "Structure 4", "Communication 2", "Editorial 3"].map((c, i) => (
            <span key={i} className={`chip ${i === 0 ? "solid" : ""}`} style={i === 0 ? { color: "var(--ink)", fontWeight: 600 } : {}}>{c}</span>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
          <div className="filter-input">
            <span>Find a term…</span>
            <span className="k">/</span>
          </div>
        </div>
      </section>

      {/* Sticky A–Z jump rail */}
      <section style={{ padding: "16px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)", display: "flex", alignItems: "center", gap: 24, position: "sticky", top: 0, zIndex: 2 }}>
        <div className="eyebrow">Jump to letter</div>
        <AlphaRail filled={filled} />
        <span className="meta" style={{ marginLeft: "auto", fontFamily: "var(--mono)", fontSize: 12 }}>
          {GLOSSARY_DATA.length} active · {26 - GLOSSARY_DATA.length} empty
        </span>
      </section>

      {/* Letter sections */}
      {GLOSSARY_DATA.map((g, gi) => (
        <section key={g.L} id={`L-${g.L}`} style={{ padding: "48px 56px", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 56, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 80 }}>
              <div className="glossary-letter" style={{ flexDirection: "column", alignItems: "flex-start", gap: 6, borderBottom: 0, paddingBottom: 0 }}>
                <div className="L">{g.L}</div>
                <div className="count">{g.terms.length} term{g.terms.length === 1 ? "" : "s"}</div>
              </div>
              {g.desc && (
                <p style={{ font: "400 13px/1.55 var(--sans)", color: "var(--ink-2)", margin: "16px 0 0" }}>{g.desc}</p>
              )}
            </div>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {g.terms.map((t, ti) => (
                <div key={ti} className="term-row">
                  <div>
                    <h3 className="term-name"><a href="#">{t.name}</a></h3>
                    <p className="term-summary">{t.sum}</p>
                    <div className="term-tags">
                      <Chip kind="phase">{t.phase}</Chip>
                      <Chip>{t.topic}</Chip>
                    </div>
                  </div>
                  <div className="term-end">
                    <span className="pos">{g.L}·{String(ti + 1).padStart(2, "0")}</span>
                    <a href="#" className="go">Read entry →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-link to FAQ + reading paths */}
      <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Cross-reference</div>
            <h2 className="h2" style={{ margin: 0 }}>Looking for a question, not a term?</h2>
          </div>
          <div>
            <p style={{ font: "400 17px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px", maxWidth: 580 }}>
              The Glossary defines vocabulary. The FAQ answers practical questions about applying it. The two cross-link manually where one helps the other.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse the FAQ →</a>
              <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse reading paths →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial meta */}
      <section style={{ padding: "32px 56px 56px" }}>
        <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
          Maintained by SoloOpsGuide Editorial. Glossary reviewed quarterly; the next sweep is 2026-08-14. Individual entries show their own last-reviewed date. New terms are added when they appear in three or more workflows or templates. See our <a href="#">Editorial policy</a> for revision rules.
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

window.GlossaryIndexDesktop = GlossaryIndexDesktop;
