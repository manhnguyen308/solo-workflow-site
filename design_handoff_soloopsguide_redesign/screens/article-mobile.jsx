/* Article — workflow article (mobile) */

const ArticleMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["Workflows", "Approvals"]} />
    </div>

    <div style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Workflow · Approvals</div>
      <h1 style={{ font: "500 30px/1.18 var(--serif)", letterSpacing: "-0.01em", margin: "0 0 12px" }}>
        Fixing slow client approvals without nagging
      </h1>
      <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
        Replace ad-hoc check-ins with a scheduled approval window, a single decision-maker, and a fallback rule.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        <Chip kind="phase">Approvals</Chip>
        <Chip>9 min read</Chip>
      </div>

      <div className="meta" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--rule-2)" }}>
        By <span style={{ color: "var(--ink)" }}>SoloOpsGuide Editorial</span> · Updated 2026-05-12
      </div>
    </div>

    {/* Collapsible TOC */}
    <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className="label">On this page · 6 sections</div>
      <span style={{ font: "500 13px/1 var(--sans)", color: "var(--accent)" }}>Expand</span>
    </div>

    {/* Path progress */}
    <div style={{ padding: "20px 20px 0" }}>
      <PathProgress path="Review control" step={3} total={6} current="Slow approvals" />
    </div>

    {/* Prose */}
    <article className="prose" style={{ padding: "16px 20px", fontSize: 17, lineHeight: 1.65 }}>
      <p>
        Approval delays are rarely about the work. They are about the absence of a process the client understands. The fix is structural: replace the implied review with a <strong>scheduled approval window</strong>, name a <strong>single decision-maker</strong>, and publish a <strong>fallback rule</strong>.
      </p>

      <h2 style={{ font: "500 24px/1.22 var(--serif)", margin: "32px 0 12px", letterSpacing: "-0.005em" }}>Why approvals stall</h2>
      <p>
        Most stalls trace to one of three causes: the reviewer is not the decision-maker, the deliverable lacks a clear prompt, or the timeline contains no review slot at all.
      </p>

      <Callout kind="use" title="When to use this workflow">
        Recurring deliverables, review delays over 20%. Best on retainers and multi-phase work.
      </Callout>

      <h2 style={{ font: "500 24px/1.22 var(--serif)", margin: "32px 0 12px", letterSpacing: "-0.005em" }}>The approval window</h2>
      <p>
        Announced at the start of the engagement, not at the moment of delivery. 72 hours floor, 5 business days ceiling.
      </p>

      <Checklist
        title="Approval window setup"
        items={[
          { text: "Define the window length in the proposal.", done: true },
          { text: "Name the decision-maker by role.", done: true },
          { text: "Publish the fallback rule.", done: false },
          { text: "Add the window to the project calendar.", done: false },
        ]}
      />

      <TemplateBlock
        title="Approval request"
        body={`Subject: Approval needed — {Project}

Attached is {Deliverable} for your review.

Window: {72 hours}.
Decision-maker: {Role}.
Fallback: proceed as drafted.

Reply: Approved / With notes / Revise.`}
      />
    </article>

    {/* Next steps */}
    <div style={{ padding: "8px 20px 32px" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Next on this path</div>
      <a href="#" style={{ display: "block", border: "1px solid var(--rule)", padding: 16, color: "var(--ink)", marginBottom: 12 }}>
        <div className="eyebrow" style={{ marginBottom: 6, color: "var(--ink-3)" }}>Step 04</div>
        <div className="h3">Handling revision rounds without scope creep</div>
      </a>
      <a href="#" style={{ display: "block", border: "1px solid var(--rule)", padding: 16, color: "var(--ink)" }}>
        <div className="eyebrow" style={{ marginBottom: 6, color: "var(--ink-3)" }}>Related template</div>
        <div className="h3">Approval window — proposal clause</div>
      </a>

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          By SoloOpsGuide Editorial · Updated 2026-05-12 · Reviewed 2026-05-14 · Next review 2026-08-14.
        </div>
      </div>
    </div>

    <div style={{ padding: "20px", borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.ArticleMobile = ArticleMobile;
