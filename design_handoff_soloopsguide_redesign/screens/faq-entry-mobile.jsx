/* FAQ Entry — "How long should an approval window be?" (mobile) */

const FAQEntryMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["FAQ", "Approvals", "Approval window length"]} />
    </div>

    {/* Header */}
    <section style={{ padding: "16px 20px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
        <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>FAQ</span>
        <Chip kind="phase">Approvals and reviews</Chip>
      </div>
      <h1 style={{ font: "500 30px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 10px" }}>
        How long should an approval window be?
      </h1>
      <p style={{ font: "400 16px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
        The window is the fixed period in which a client commits to reviewing and responding. Length is one of three parameters that decide whether the structure works at all.
      </p>
      <div className="meta" style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--rule-2)" }}>
        Reviewed 2026-05-14 · 5 min · By SoloOpsGuide Editorial
      </div>
    </section>

    {/* Direct answer */}
    <section style={{ padding: "20px 20px 0" }}>
      <div className="faq-answer" style={{ padding: "18px 20px" }}>
        <div className="label">Direct answer</div>
        <div className="body" style={{ fontSize: 18 }}>
          <strong>72 business hours</strong> is the practical floor. <strong>Five business days</strong> is the ceiling. Pick the shortest one your client realistically meets, publish it in the proposal, reference it in every deliverable email.
        </div>
      </div>
    </section>

    {/* Prose */}
    <section style={{ padding: "20px 20px 0" }}>
      <article className="prose" style={{ fontSize: 17, lineHeight: 1.65 }}>
        <h2 style={{ fontSize: 22, margin: "8px 0 10px" }}>Why this length</h2>
        <p>
          A 72-hour window is short enough that the client cannot context-switch away from the project, and fits inside the same working week. A five-day ceiling exists because beyond that, the window functions as a phase, not a wait.
        </p>

        <h2 style={{ fontSize: 22, margin: "20px 0 10px" }}>When to use the floor (72h)</h2>
        <ul>
          <li>Fixed-scope projects under six weeks.</li>
          <li>Single named decision-maker.</li>
          <li>The window is on the critical path.</li>
        </ul>

        <h2 style={{ fontSize: 22, margin: "16px 0 10px" }}>When to use the ceiling (5 days)</h2>
        <ul>
          <li>Multi-stakeholder sign-off.</li>
          <li>Strategy or research deliverables.</li>
          <li>Next phase is not blocked.</li>
        </ul>

        <Callout kind="not-use" title="Don't extend after delivery">
          The window is set at kickoff, not at delivery. If the original was wrong, raise it as a re-baseline at the next phase boundary instead.
        </Callout>

        <h2 style={{ fontSize: 22, margin: "20px 0 10px" }}>Example</h2>
        <p>
          A solo designer ships a milestone on Monday. The proposal names a 72-hour window and a "proceed as drafted" fallback by Thursday 17:00. The deliverable email restates both. Notes arrive Thursday morning; the window held.
        </p>

        <TemplateBlock
          title="Approval-window clause — excerpt"
          body={`Approval window: {72 business hours} from delivery.
Decision-maker: {Role}.
Fallback: If no written response by {Date + window}, proceed as drafted.`}
        />
      </article>
    </section>

    {/* Related */}
    <section style={{ padding: "24px 20px 0" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Related</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {[
          ["Workflow", "Fixing slow client approvals without nagging"],
          ["Workflow", "Handling revision rounds without scope creep"],
          ["Template", "Approval-window proposal clause"],
          ["Glossary", "Approval window"],
          ["Glossary", "Fallback rule"],
          ["FAQ", "What if the client misses the window?"],
        ].map(([t, n], i) => (
          <li key={i} style={{ padding: "12px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)" }}>
            <div className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>{t}</div>
            <a href="#" style={{ font: "500 15px/1.35 var(--serif)", color: "var(--ink)" }}>{n}</a>
          </li>
        ))}
      </ul>
    </section>

    {/* More in topic */}
    <section style={{ padding: "24px 20px 0" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>More in this topic</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <li><a href="#" style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)" }}>What if the client misses the window?</a></li>
        <li><a href="#" style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)" }}>How many revision rounds is reasonable?</a></li>
        <li><a href="#" style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)" }}>Can I treat silence as approval?</a></li>
      </ul>
      <a href="#" style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)", display: "inline-block", marginTop: 12 }}>All 11 in Approvals →</a>
    </section>

    {/* Editorial meta */}
    <section style={{ padding: "24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Editorial note</div>
      <div className="meta" style={{ lineHeight: 1.7 }}>
        Maintained by SoloOpsGuide Editorial. Reviewed 2026-05-14 · next 2026-08-14. Operating practice, not legal advice. FAQ schema exposed for legitimate structured-data use.
      </div>
    </section>

    <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.FAQEntryMobile = FAQEntryMobile;
