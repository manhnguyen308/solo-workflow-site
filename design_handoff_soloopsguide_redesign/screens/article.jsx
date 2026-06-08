/* Article — workflow article (desktop) */

const ArticleDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="Workflows" />

    {/* Breadcrumbs */}
    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Workflows", "Approvals", "Fixing slow client approvals"]} />
    </div>

    {/* Hero / page header */}
    <div style={{ padding: "32px 56px 24px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: 760 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Workflow · Approvals phase</div>
        <h1 className="h1" style={{ margin: "0 0 16px" }}>
          Fixing slow client approvals without nagging
        </h1>
        <p className="lede" style={{ margin: 0, maxWidth: 680 }}>
          A practical workflow for solo operators whose projects stall at the review step. Replace ad-hoc check-ins with a scheduled approval window, a single decision-maker, and a fallback rule.
        </p>
      </div>

      <div style={{ display: "flex", gap: 32, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Written by</div>
          <div className="label">SoloOpsGuide Editorial</div>
        </div>
        <div style={{ width: 1, height: 32, background: "var(--rule)" }}></div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Updated</div>
          <div className="label">2026-05-12</div>
        </div>
        <div style={{ width: 1, height: 32, background: "var(--rule)" }}></div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Reviewed</div>
          <div className="label">2026-05-14</div>
        </div>
        <div style={{ width: 1, height: 32, background: "var(--rule)" }}></div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Reading time</div>
          <div className="label">9 min</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <Chip kind="phase">Approvals</Chip>
          <Chip>Client work</Chip>
          <Chip>Scope</Chip>
        </div>
      </div>
    </div>

    {/* Body: 3-column with TOC + prose + utility */}
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 220px", gap: 56, padding: "48px 56px" }}>
      {/* TOC */}
      <aside>
        <div style={{ position: "sticky", top: 24 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>On this page</div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, borderLeft: "1px solid var(--rule)" }}>
            {[
              ["Why approvals stall", true],
              ["The approval window", false],
              ["One decision-maker", false],
              ["The fallback rule", false],
              ["A copyable email", false],
              ["When this fails", false],
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
        </div>
      </aside>

      {/* Prose */}
      <article className="prose" style={{ maxWidth: 660 }}>
        <PathProgress path="Review control" step={3} total={6} current="Fixing slow client approvals" />

        <p>
          Approval delays are rarely about the work. They are about the absence of a process the client understands. The fix is structural: replace the implied review with a <strong>scheduled approval window</strong>, name a <strong>single decision-maker</strong>, and publish a <strong>fallback rule</strong> for what happens when neither is honoured.
        </p>

        <p>
          This page assumes you already send deliverables on a regular cadence. If you don't, start with <a href="#">Delivery consistency</a> first.
        </p>

        <h2>Why approvals stall</h2>
        <p>
          Most stalls trace to one of three causes: the reviewer is not actually the decision-maker, the deliverable lacks a clear decision prompt, or the timeline contains no review slot at all. Each has a different fix, and conflating them is what makes "just send a polite reminder" so unreliable.
        </p>

        <Callout kind="use" title="When to use this workflow">
          You have at least one recurring deliverable per engagement, and review delays are extending project timelines by more than 20%. Works best on retainers and multi-phase projects.
        </Callout>

        <Callout kind="not-use" title="When not to use this workflow">
          One-off projects under two weeks, or engagements where the client has explicitly chosen async review with no deadline. In those cases, scope the delay into the timeline instead.
        </Callout>

        <h2>The approval window</h2>
        <p>
          An approval window is a fixed period during which the client commits to reviewing and responding. It is announced at the start of the engagement, not requested at the moment of delivery. A 72-hour window is the practical floor; five business days is the practical ceiling.
        </p>

        <Checklist
          title="Approval window setup"
          items={[
            { text: "Define the window length in the proposal (e.g. 72 business hours).", done: true },
            { text: "Name the decision-maker by role, not by name.", done: true },
            { text: "Publish the fallback rule in writing.", done: false },
            { text: "Add the window to the project calendar before kickoff.", done: false },
            { text: "Reference the window in every deliverable email.", done: false },
          ]}
        />

        <h2>A copyable email</h2>
        <p>
          The exact wording matters less than consistency. Reuse the same template for every deliverable so the structure becomes familiar to the client.
        </p>

        <TemplateBlock
          title="Approval request — deliverable email"
          body={`Subject: Approval needed — {Project} {Milestone} — by {Date}

Hi {Client},

Attached is {Deliverable} for your review.

Approval window: {72 business hours} from this email.
Decision-maker: {Role}.
Fallback: If we have no written response by {Date + window}, we will proceed as drafted.

Please reply with one of:
  · Approved
  · Approved with notes (listed inline)
  · Needs revision (with specific items)

— {You}`}
        />

        <h2>When this fails</h2>
        <p>
          Two failure modes recur. First, the decision-maker is not the person on the email; the fix is to require a co-signer in the kickoff doc. Second, the client treats the fallback as adversarial; the fix is to reframe it as a default during the proposal, not as an escalation during the project.
        </p>

        <hr />

        {/* Next steps */}
        <div className="eyebrow" style={{ marginBottom: 16 }}>Next on this path</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <a href="#" style={{ border: "1px solid var(--rule)", padding: 20, color: "var(--ink)", display: "block" }}>
            <div className="eyebrow" style={{ marginBottom: 8, color: "var(--ink-3)" }}>Step 04</div>
            <div className="h3" style={{ marginBottom: 6 }}>Handling revision rounds without scope creep</div>
            <div className="meta">Read next →</div>
          </a>
          <a href="#" style={{ border: "1px solid var(--rule)", padding: 20, color: "var(--ink)", display: "block" }}>
            <div className="eyebrow" style={{ marginBottom: 8, color: "var(--ink-3)" }}>Related template</div>
            <div className="h3" style={{ marginBottom: 6 }}>Approval window — proposal clause</div>
            <div className="meta">Copyable clause →</div>
          </a>
        </div>

        {/* Editorial meta */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Editorial</div>
          <div className="meta" style={{ lineHeight: 1.7 }}>
            Written by SoloOpsGuide Editorial. Last updated 2026-05-12. Reviewed 2026-05-14. Next scheduled review 2026-08-14.
            See our <a href="#">Editorial policy</a> for how we revise and date content.
          </div>
        </div>
      </article>

      {/* Utility rail */}
      <aside>
        <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Actions</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Copy all templates</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Open as printable</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Save to reading list</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Related templates</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Approval window clause</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Deliverable email</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Revision-round limit</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>This article belongs to</div>
            <div style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)", marginBottom: 4 }}>
              <a href="#" style={{ color: "var(--ink)", borderBottom: "1px solid var(--rule)" }}>Review control</a>
            </div>
            <div className="meta">A 6-step reading path</div>
          </div>
        </div>
      </aside>
    </div>

    <SiteFooter />
  </div>
);

window.ArticleDesktop = ArticleDesktop;
