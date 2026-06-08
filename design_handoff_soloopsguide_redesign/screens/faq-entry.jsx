/* FAQ Entry — "How long should an approval window be?" (desktop) */

const FAQEntryDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["FAQ", "Approvals and reviews", "How long should an approval window be?"]} />
    </div>

    {/* Header */}
    <section style={{ padding: "32px 56px 28px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: 820 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center", flexWrap: "wrap" }}>
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>FAQ</span>
          <Chip kind="phase">Approvals and reviews</Chip>
          <Chip>Approvals</Chip>
          <span className="meta" style={{ marginLeft: 12, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)" }}>Q · 02 · 02</span>
        </div>
        <h1 className="h1" style={{ margin: "0 0 12px", fontSize: 42, maxWidth: 880 }}>
          How long should an approval window be?
        </h1>
        <p className="lede" style={{ margin: 0, maxWidth: 720 }}>
          The window is the fixed period in which a client commits to reviewing a deliverable and responding in writing. Length is one of three parameters that decide whether the structure works at all.
        </p>
      </div>

      <div style={{ display: "flex", gap: 32, marginTop: 28, alignItems: "center", flexWrap: "wrap" }}>
        {[["Reviewed", "2026-05-14"], ["Next review", "2026-08-14"], ["Editorial", "SoloOpsGuide Editorial"], ["Reading time", "5 min"]].map(([k, v], i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 1, height: 32, background: "var(--rule)" }}></div>}
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{k}</div>
              <div className="label">{v}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>

    {/* Body */}
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 220px", gap: 56, padding: "48px 56px" }}>
      {/* TOC */}
      <aside>
        <div style={{ position: "sticky", top: 24 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>On this entry</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, borderLeft: "1px solid var(--rule)" }}>
            {[
              ["Direct answer", true],
              ["Why this length", false],
              ["When to use the floor", false],
              ["When to use the ceiling", false],
              ["Example: a phase-end review", false],
              ["Related", false],
            ].map(([t, active], i) => (
              <li key={i} style={{
                font: "400 13px/1.4 var(--sans)",
                color: active ? "var(--ink)" : "var(--ink-2)",
                paddingLeft: 12,
                marginLeft: -1,
                borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                fontWeight: active ? 600 : 400,
              }}>{t}</li>
            ))}
          </ul>

          <div style={{ marginTop: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Topic</div>
            <div style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)", marginBottom: 4 }}>
              <a href="#" style={{ color: "var(--ink)", borderBottom: "1px solid var(--rule)" }}>Approvals and reviews</a>
            </div>
            <div className="meta">11 questions in this topic</div>
          </div>
        </div>
      </aside>

      {/* Prose */}
      <article className="prose" style={{ maxWidth: 680 }}>
        <div className="faq-answer">
          <div className="label">Direct answer</div>
          <div className="body">
            <strong>72 business hours</strong> is the practical floor. <strong>Five business days</strong> is the practical ceiling. Pick the shortest one your client realistically meets, publish it in the proposal, and reference it in every deliverable email.
          </div>
        </div>

        <h2>Why this length</h2>
        <p>
          A 72-hour window is short enough that the client cannot context-switch away from the project entirely. It also fits inside the same working week, which means the next phase can be planned with confidence. Shorter than 72 hours is technically possible but breaks for any client with regular travel, multi-stakeholder review, or board involvement.
        </p>
        <p>
          A five-day ceiling exists because beyond that, the window functions as a phase, not a wait. If you need a week, scope the week as a review phase in the timeline and adjust the milestone payment to match.
        </p>

        <h2>When to use the floor (72 business hours)</h2>
        <ul>
          <li>Fixed-scope projects under six weeks total.</li>
          <li>Engagements with a single named decision-maker who is your primary contact.</li>
          <li>Phases where the next deliverable cannot start without this approval — i.e., the window is on the critical path.</li>
        </ul>

        <h2>When to use the ceiling (five business days)</h2>
        <ul>
          <li>Reviews that require multi-stakeholder sign-off (e.g., a board, a legal team).</li>
          <li>Strategy or research deliverables where the client benefits from re-reading.</li>
          <li>Engagements where the next phase is not blocked — i.e., you can move in parallel.</li>
        </ul>

        <Callout kind="not-use" title="Don't extend the window after delivery">
          The window is set at kickoff, not at delivery. Extending it in response to "I just need a few more days" reframes the entire structure as negotiable. If the original window was wrong, raise it as a re-baseline at a phase boundary instead.
        </Callout>

        <h2>Example: a phase-end review</h2>
        <p>
          A solo designer ships a phase-end milestone on a Monday afternoon. The proposal names a 72-business-hour approval window and a fallback of "proceed as drafted" if there's no written response by Thursday at 17:00. The deliverable email restates both. On Thursday morning, the client sends notes; the window has held. The fallback was never invoked, but its existence is what removed the open-ended wait.
        </p>

        <TemplateBlock
          title="Approval-window clause — proposal excerpt"
          body={`Approval window: {72 business hours} from delivery email.
Decision-maker: {Role}.
Fallback: If we have no written response by {Date + window}, we will proceed as drafted.

This window is set at kickoff. To change it, raise a re-baseline at the next phase boundary.`}
        />

        <h2>Related</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
          {[
            ["Workflow", "Fixing slow client approvals without nagging", "The full workflow this question is an excerpt of."],
            ["Workflow", "Handling revision rounds without scope creep", "The companion structure: how many rounds, not how long each one is."],
            ["Template", "Approval-window proposal clause", "The clause excerpted above, copyable."],
            ["Glossary", "Approval window", "Short definition with no example."],
            ["Glossary", "Fallback rule", "The other half of the approval-window pair."],
            ["FAQ", "What do I do when a client misses an approval window?", "The next question in this topic."],
          ].map(([type, t, d], i) => (
            <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "14px 0", display: "grid", gridTemplateColumns: "100px 1fr auto", gap: 20, alignItems: "baseline" }}>
              <span style={{ font: "600 11px/1.4 var(--sans)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-2)" }}>{type}</span>
              <div>
                <a href="#" style={{ font: "500 17px/1.35 var(--serif)", color: "var(--ink)", letterSpacing: "-0.005em" }}>{t}</a>
                <p style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-2)", margin: "4px 0 0" }}>{d}</p>
              </div>
              <span style={{ color: "var(--accent)", font: "500 13px/1 var(--sans)" }}>Open →</span>
            </li>
          ))}
        </ul>

        {/* Editorial meta */}
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Editorial note</div>
          <div className="meta" style={{ lineHeight: 1.7 }}>
            Maintained by SoloOpsGuide Editorial. Last reviewed 2026-05-14. Next scheduled review 2026-08-14. This answer reflects operating practice for solo operators and small service businesses; it is not legal, financial, or tax advice. Related links are curated manually. This page exposes FAQ structured-data markup for legitimate use; see our <a href="#">Editorial policy</a>.
          </div>
        </div>
      </article>

      {/* Utility rail */}
      <aside>
        <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Actions</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Copy direct answer</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Copy clause excerpt</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Open as printable</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Suggest an edit</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>More in this topic</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>What if the client misses the window?</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>How many revision rounds is reasonable?</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Can I treat silence as approval?</a></li>
            </ul>
            <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)", display: "inline-block", marginTop: 12 }}>All 11 →</a>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>On a reading path</div>
            <div style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)", marginBottom: 4 }}>
              <a href="#" style={{ color: "var(--ink)", borderBottom: "1px solid var(--rule)" }}>Review control</a>
            </div>
            <div className="meta">Step 03 of 06</div>
          </div>
        </div>
      </aside>
    </div>

    <SiteFooter />
  </div>
);

window.FAQEntryDesktop = FAQEntryDesktop;
