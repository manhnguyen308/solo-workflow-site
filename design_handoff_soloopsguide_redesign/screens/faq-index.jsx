/* FAQ Index — practical questions, clustered by topic (desktop) */

const FAQ_DATA = [
  { topic: "Client kickoff", desc: "Setting up an engagement so it doesn't slip in week one.", count: 14, items: [
    { q: "What's the minimum I need from a client before week one?", a: "A signed proposal, written access list, and one named decision-maker. Everything else can wait.", date: "2026-05-12" },
    { q: "Do I need a kickoff call if the engagement is small?", a: "Not if the deliverable is fixed-scope and under two weeks. Use a structured intake doc instead.", date: "2026-05-05" },
    { q: "How do I handle a client who won't name a decision-maker?", a: "Make the proposal explicit: 'reviewer of record defaults to {role}' and require co-sign at kickoff.", date: "2026-05-10" },
    { q: "Should I share my workspace with the client at kickoff?", a: "Only if your operating model includes a shared surface. Otherwise share a deliverable cadence, not a workspace.", date: "2026-04-28" },
  ]},
  { topic: "Approvals and reviews", desc: "Replacing implied review cycles with explicit ones.", count: 11, items: [
    { q: "How long should an approval window be?", a: "72 business hours is the practical floor. Five business days is the ceiling. Anything more should be a phase, not a wait.", date: "2026-05-14" },
    { q: "What do I do when a client misses an approval window?", a: "Trigger the fallback rule you published at kickoff. Do not negotiate the fallback after the fact — that's the whole point of the rule.", date: "2026-05-08" },
    { q: "How many revision rounds is reasonable?", a: "Two rounds covers most fixed-scope deliverables. Cap explicitly in the proposal; treat additional rounds as separately-scoped work.", date: "2026-04-30" },
    { q: "Can I treat silence as approval?", a: "Only if you published it as the fallback at kickoff. Never retroactively.", date: "2026-04-18" },
  ]},
  { topic: "Scope control", desc: "Keeping the engagement inside its agreed boundary.", count: 9, items: [
    { q: "What's the simplest scope-change process for solo work?", a: "Acknowledge the request, name it as out-of-scope, propose it as a change order with a price and a new timeline. Don't argue eligibility; just propose.", date: "2026-05-09" },
    { q: "How do I decline a small request gracefully?", a: "Decline the scope, not the relationship. Offer a written change order, even when the change is small — the friction is the point.", date: "2026-04-22" },
    { q: "When should I re-baseline a scope mid-engagement?", a: "When more than 20% of the original scope has drifted, or when a phase boundary makes the original obsolete. Re-baseline in writing.", date: "2026-04-15" },
  ]},
  { topic: "Payment and invoicing", desc: "Reducing the gap between invoice and deposit.", count: 12, items: [
    { q: "Should I invoice before or after a milestone?", a: "Before. Invoice opens the phase, deposit lands during the work. Invoicing after a milestone makes payment terms a negotiation about whether the milestone is finished.", date: "2026-05-11" },
    { q: "What payment terms should a solo operator use?", a: "Net 7 for retainers, net 14 for fixed-scope phases, deposit-first for new clients. Anything longer compounds risk for one person.", date: "2026-05-02" },
    { q: "How do I escalate a late invoice politely?", a: "Three messages, fixed spacing, no emotional escalation. The escalation is the cadence, not the wording.", date: "2026-04-25" },
    { q: "Should I charge late fees?", a: "Only if your contract names them and you'll actually apply them. An unenforced late fee is worse than none.", date: "2026-04-12" },
  ]},
  { topic: "Software stacks", desc: "Choosing and maintaining the tools you actually run on.", count: 10, items: [
    { q: "Do I need a CRM if I have a workspace?", a: "Probably not. A workspace covers contacts and pipeline for most solo operators up to ~30 active clients per year.", date: "2026-05-06" },
    { q: "What's the smallest stack a solo consultant can run on?", a: "Email, one doc tool, one invoicing tool, one canonical project surface. Everything else is convenience.", date: "2026-05-01" },
    { q: "How often should I review my stack?", a: "Twice a year, on a calendar date, not when something feels broken. Drift compounds otherwise.", date: "2026-04-20" },
    { q: "Should I trust a single workspace as my source of truth?", a: "Yes — if you accept the concentration risk and have a quarterly export routine. The risk isn't the tool; it's not having an export.", date: "2026-04-08" },
  ]},
  { topic: "Templates and checklists", desc: "Building reusable artefacts that survive past one engagement.", count: 8, items: [
    { q: "How many templates is too many?", a: "More than you actually reread. Most solo operators max out at around 12 active templates before maintenance breaks down.", date: "2026-05-03" },
    { q: "Should templates have variables or be edited each time?", a: "Variables for anything that changes per engagement; edits for tone. Don't variablise tone — it ages into AI-shaped prose.", date: "2026-04-27" },
    { q: "How often should I re-review my templates?", a: "Quarterly, alongside your stack review. Date-stamp every template; retire any not used in 12 months.", date: "2026-04-11" },
  ]},
];

window.FAQ_DATA = FAQ_DATA;

const FAQIndexDesktop = () => {
  const totalQ = FAQ_DATA.reduce((n, t) => n + t.count, 0);

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader />

      <div style={{ padding: "16px 56px 0" }}>
        <Breadcrumbs items={["FAQ"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Reference · {totalQ} questions across {FAQ_DATA.length} topics</div>
            <h1 className="h-display" style={{ margin: "0 0 16px" }}>FAQ</h1>
            <p className="lede" style={{ margin: 0, maxWidth: 620 }}>
              Practical questions about running a solo operation, clustered by the part of an engagement they touch. Each question has a short answer here and a longer explanation, an example, and related workflows on its own page.
            </p>
          </div>
          <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>How this is organised</div>
            <p style={{ font: "400 15px/1.6 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px" }}>
              Questions are grouped by topic, not stacked as one long list. Each entry is dated and reviewed. We don't claim expert authority — answers reflect operating practice we've seen work for solo operators, with the edge cases stated openly.
            </p>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Editorial</div>
            <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: 0 }}>
              Reviewed quarterly. Each entry shows its own last-reviewed date and links to the workflows or templates that go deeper.
            </p>
          </div>
        </div>
      </section>

      {/* Filter / search row */}
      <section style={{ padding: "20px 56px", borderBottom: "1px solid var(--rule)", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
        <div className="eyebrow">Filter by topic</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>All {totalQ}</span>
          {FAQ_DATA.map((t, i) => <Chip key={i}>{t.topic} {t.count}</Chip>)}
        </div>
        <div style={{ marginLeft: "auto" }}>
          <div className="filter-input">
            <span>Find a question…</span>
            <span className="k">/</span>
          </div>
        </div>
      </section>

      {/* Topic groups */}
      {FAQ_DATA.map((t, ti) => (
        <section key={ti} style={{ padding: "48px 56px", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 24 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Topic · {String(ti + 1).padStart(2, "0")} · {t.count} questions</div>
              <h2 style={{ font: "500 32px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 12px" }}>{t.topic}</h2>
              <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-2)", margin: 0 }}>{t.desc}</p>
              <div style={{ marginTop: 16 }}>
                <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>See all {t.count} →</a>
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {t.items.map((q, qi) => (
                <div key={qi} className="faq-row">
                  <div className="faq-topic">{t.topic}</div>
                  <div>
                    <h3 className="faq-q"><a href="#">{q.q}</a></h3>
                    <p className="faq-a-preview">{q.a}</p>
                    <div className="meta" style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)" }}>
                      Reviewed {q.date}
                    </div>
                  </div>
                  <a href="#" className="faq-go">Open →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-link */}
      <section style={{ padding: "56px 56px", borderBottom: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Cross-reference</div>
            <h2 className="h2" style={{ margin: 0 }}>Not finding your question?</h2>
          </div>
          <div>
            <p style={{ font: "400 17px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 16px", maxWidth: 580 }}>
              The FAQ answers practical questions. If you need a definition, the Glossary is the right hub; if you need a step-by-step, follow the Workflows.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse the Glossary →</a>
              <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Browse Workflows →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial meta */}
      <section style={{ padding: "32px 56px 56px" }}>
        <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
          Maintained by SoloOpsGuide Editorial. FAQ reviewed quarterly; next sweep 2026-08-14. We do not represent the answers here as legal, financial, or tax advice. They reflect operating practice we have observed for solo operators and small service businesses. See our <a href="#">Editorial policy</a> and <a href="#">Content policy</a> for revision rules. Entries are marked up with FAQ schema for legitimate structured-data use.
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

window.FAQIndexDesktop = FAQIndexDesktop;
