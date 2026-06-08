/* Template / Checklist page (desktop) */

const TemplateDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="Templates" />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Templates", "Approvals", "Approval window — proposal clause"]} />
    </div>

    {/* Header — distinct from article: shows artifact type prominently */}
    <section style={{ padding: "32px 56px 40px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600, padding: "8px 10px" }}>Template</span>
            <Chip kind="phase">Approvals</Chip>
            <Chip>Proposal</Chip>
            <Chip>Plain text</Chip>
          </div>
          <h1 className="h1" style={{ margin: "0 0 16px", maxWidth: 720 }}>
            Approval window — proposal clause
          </h1>
          <p className="lede" style={{ margin: 0, maxWidth: 640 }}>
            A short clause to paste into your proposal that defines the review window, the decision-maker, and the fallback rule. Used inside the <a href="#">Slow approvals</a> workflow.
          </p>
        </div>
        <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 32 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            <li style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16 }}>
              <span className="eyebrow">Length</span><span className="label">~80 words</span>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16 }}>
              <span className="eyebrow">Variables</span><span className="label">5 placeholders</span>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16 }}>
              <span className="eyebrow">Updated</span><span className="label">2026-05-10</span>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16 }}>
              <span className="eyebrow">Reviewed</span><span className="label">2026-05-14</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Body */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 56, padding: "40px 56px" }}>
      <div style={{ maxWidth: 760 }}>
        {/* When pair */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <Callout kind="use" title="When to use this">
            You are writing a proposal for any engagement with recurring deliverables, and you want approval expectations defined before the project starts.
          </Callout>
          <Callout kind="not-use" title="When not to use this">
            One-off projects under two weeks. Clients who have requested async review with no deadline — scope the delay into the timeline instead.
          </Callout>
        </div>

        {/* Template */}
        <TemplateBlock
          title="Clause — paste into your proposal"
          body={`Approvals.

For each {Deliverable}, the Client will review and respond within {72 business hours} of delivery. The named decision-maker for this engagement is the {Role}. A backup approver, {Backup Role}, may sign in their absence.

If no written response is received within the window, the deliverable is considered approved as drafted and the project will proceed to the next phase. Either party may revise this window in writing with at least one week's notice.`}
        />

        {/* Variables */}
        <div style={{ margin: "32px 0" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Variables to replace</div>
          <table className="simple">
            <thead>
              <tr><th>Placeholder</th><th>What to insert</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td><code style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{"{Deliverable}"}</code></td><td>The unit of work being reviewed</td><td>Design milestone</td></tr>
              <tr><td><code style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{"{72 business hours}"}</code></td><td>Your approval window length</td><td>3 business days</td></tr>
              <tr><td><code style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{"{Role}"}</code></td><td>Decision-maker role on the client side</td><td>Director of Marketing</td></tr>
              <tr><td><code style={{ fontFamily: "var(--mono)", fontSize: 13 }}>{"{Backup Role}"}</code></td><td>Co-signer for absences</td><td>Head of Brand</td></tr>
            </tbody>
          </table>
        </div>

        {/* How to use */}
        <h2 className="h2" style={{ margin: "40px 0 16px", font: "500 26px/1.2 var(--serif)" }}>How to use this clause</h2>

        <div style={{ display: "grid", gridTemplateColumns: "32px 1fr", rowGap: 20 }}>
          {[
            ["01", "Confirm the decision-maker by role before you write the proposal. If the client cannot name one, raise it as a kickoff risk."],
            ["02", "Set the window length conservatively. 72 hours is the floor; longer windows are easier to honour than to enforce."],
            ["03", "Paste the clause into the Terms section of your proposal, not as a sub-bullet under Scope."],
            ["04", "Reference the clause by name in your first deliverable email, so the client knows the rule is now active."],
            ["05", "Renegotiate in writing if the client misses the window twice. Don't shorten silently and don't extend silently."],
          ].map(([n, t], i) => (
            <React.Fragment key={i}>
              <div style={{ font: "500 14px/1.5 var(--mono)", color: "var(--ink-3)" }}>{n}</div>
              <div style={{ font: "400 17px/1.55 var(--serif)" }}>{t}</div>
            </React.Fragment>
          ))}
        </div>

        {/* Pre-flight checklist */}
        <Checklist
          title="Before you paste this in"
          items={[
            { text: "Decision-maker confirmed by role (not by name).", done: true },
            { text: "Window length agreed verbally with the client.", done: true },
            { text: "Backup approver named in the kickoff doc.", done: false },
            { text: "Window added to the project calendar.", done: false },
            { text: "Linked from your standard proposal template.", done: false },
          ]}
        />

        {/* Related */}
        <div style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Used inside</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
            {[
              ["Workflow", "Fixing slow client approvals without nagging"],
              ["Workflow", "Handling revision rounds without scope creep"],
              ["Blueprint", "Two-day kickoff for productized services"],
              ["Reading path", "Review control"],
            ].map(([type, t], i) => (
              <li key={i} style={{ borderBottom: "1px solid var(--rule-2)", padding: "14px 0", display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 24, alignItems: "baseline" }}>
                <span className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, color: "var(--ink-2)" }}>{type}</span>
                <a href="#" style={{ font: "500 16px/1.4 var(--serif)", color: "var(--ink)" }}>{t}</a>
                <span style={{ color: "var(--accent)", font: "500 13px/1 var(--sans)" }}>Open →</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next step */}
        <div style={{ marginTop: 32, padding: 24, border: "1px solid var(--rule)", background: "var(--paper)" }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Next step</div>
          <div className="h3" style={{ marginBottom: 6 }}>Pair this with the deliverable email template</div>
          <p style={{ font: "400 15px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>
            The clause defines the rule. The email applies it every time you ship a deliverable.
          </p>
          <a href="#" style={{ font: "500 14px/1 var(--sans)", color: "var(--accent)" }}>Open template →</a>
        </div>

        <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
          <div className="meta" style={{ lineHeight: 1.7 }}>
            Written by SoloOpsGuide Editorial. Last updated 2026-05-10. Reviewed 2026-05-14. Next scheduled review 2026-08-14.
          </div>
        </div>
      </div>

      {/* Action rail */}
      <aside>
        <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ border: "1px solid var(--rule)", padding: 20, background: "var(--paper)" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Actions</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button className="btn" style={{ width: "100%", justifyContent: "center" }}>Copy clause</button>
              <button className="btn ghost" style={{ width: "100%", justifyContent: "center" }}>Open as plain text</button>
              <button className="btn ghost" style={{ width: "100%", justifyContent: "center" }}>Download .md</button>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>This template belongs to</div>
            <a href="#" style={{ font: "500 15px/1.4 var(--sans)", color: "var(--ink)", borderBottom: "1px solid var(--rule)" }}>Approvals workflow</a>
            <div className="meta" style={{ marginTop: 4 }}>And the Review control reading path.</div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Other approval templates</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Deliverable email</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Revision-round cap</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Reviewer-of-record clause</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

    <SiteFooter />
  </div>
);

window.TemplateDesktop = TemplateDesktop;
