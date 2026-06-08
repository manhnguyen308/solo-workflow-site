/* Glossary Entry — "Source of truth" (desktop) */

const GlossaryEntryDesktop = () => (
  <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
    <SiteHeader active="Glossary" />

    <div style={{ padding: "16px 56px 0" }}>
      <Breadcrumbs items={["Glossary", "S", "Source of truth"]} />
    </div>

    {/* Header */}
    <section style={{ padding: "32px 56px 28px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ maxWidth: 820 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center" }}>
          <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>Glossary entry</span>
          <Chip kind="phase">Tooling</Chip>
          <Chip>Setup</Chip>
          <span className="meta" style={{ marginLeft: 12, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)" }}>S · 02</span>
        </div>
        <h1 className="h1" style={{ margin: "0 0 12px", fontSize: 48 }}>Source of truth</h1>
        <p className="lede" style={{ margin: 0, maxWidth: 720 }}>
          The single tool or document declared as the authoritative version of project state. There is exactly one per engagement.
        </p>
      </div>

      <div style={{ display: "flex", gap: 32, marginTop: 28, alignItems: "center", flexWrap: "wrap" }}>
        {[["Reviewed", "2026-05-09"], ["Next review", "2026-08-09"], ["Editorial", "SoloOpsGuide Editorial"], ["Appears in", "12 workflows · 3 blueprints"]].map(([k, v], i) => (
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
              ["Short definition", true],
              ["In plain English", false],
              ["Why it matters for solo operators", false],
              ["Example: a four-tool engagement", false],
              ["Related terms", false],
              ["Related content", false],
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
            <div className="eyebrow" style={{ marginBottom: 10 }}>Letter index</div>
            <AlphaRail filled={new Set("ABCDEFHIKMOPRSTW")} />
          </div>
        </div>
      </aside>

      {/* Prose */}
      <article className="prose" style={{ maxWidth: 680 }}>
        <div className="definition-block">
          <div className="label">Short definition</div>
          <div className="body">
            The <strong>source of truth</strong> is the single tool or document — one, not many — that holds the canonical version of a project's state: scope, status, deliverables, deadlines, and decisions. Every other tool is a view onto it or a feed into it.
          </div>
        </div>

        <h2>In plain English</h2>
        <p>
          When the same piece of information lives in two places — a brief in a doc and the same brief on a Trello card, a deadline in a calendar and the same deadline in a contract — it will eventually disagree with itself. The source of truth is whichever one wins when that happens. You pick it on purpose, you declare it in writing, and you make every other tool refer back to it.
        </p>
        <p>
          The opposite of a source of truth is not "no information"; it is <em>scattered, equally-plausible</em> information. That is what slow approvals, scope arguments, and missed milestones almost always trace back to.
        </p>

        <h2>Why it matters for solo operators</h2>
        <p>
          Teams can paper over a missing source of truth with conversation. A solo operator cannot: there is no second person to overhear that the brief changed, no standup where a stale Trello card gets corrected. Without a declared canonical version, you carry the reconciliation in your head, and that is the load that makes solo work feel chaotic at five engagements.
        </p>
        <p>
          Declaring one source of truth — even an imperfect one — reduces overhead by roughly the number of tools you use. It also makes handoffs to a VA or contractor possible: they only need to learn one canonical surface, not three.
        </p>

        <Callout kind="use" title="A practical test">
          If a client emails you with a question about scope or status, can you answer it by opening exactly one place? If the answer is "I'd check the doc, then the project tool, then my notes," you do not yet have a source of truth.
        </Callout>

        <h2>Example: a four-tool engagement</h2>
        <p>
          A typical solo engagement touches at least four surfaces: email (client communication), a project tool (tasks and status), a doc (scope and deliverables), and an invoicing tool (payment state). Without a declared source of truth, each surface holds a partial copy of the engagement, and reconciliation lives in the operator's head.
        </p>

        <TemplateBlock
          title="Source-of-truth declaration — proposal clause"
          body={`Canonical project state for this engagement is held in:
  {Doc / Workspace / Tool} — {URL or location}

All other tools — email, calendar, task lists — are references or views of this source. If they disagree, the canonical source wins. Either party may request a state snapshot at any time.

This declaration is reviewed at each phase boundary.`}
        />

        <p>
          The above clause is short on purpose. It says <strong>where</strong> the canonical state lives, <strong>what</strong> follows from that, and <strong>when</strong> it gets reviewed. That is the entire definitional load.
        </p>

        <h2>Related terms</h2>
        <div className="related-terms">
          {[
            { name: "Canonical source", rel: "The tool or doc declared authoritative. Often used interchangeably with source of truth.", go: "Glossary" },
            { name: "Operating model", rel: "The broader pattern your source of truth lives inside — workspace-led, stack-led, or hybrid.", go: "Glossary" },
            { name: "Migration cost", rel: "What it costs to move the source of truth from one tool to another.", go: "Glossary" },
            { name: "Reviewer of record", rel: "The decision-maker role; a different question, but lives in the same proposal section.", go: "Glossary" },
          ].map((r, i) => (
            <div key={i} className="rt-row">
              <div>
                <div className="rt-name"><a href="#">{r.name}</a></div>
                <div className="rt-rel">{r.rel}</div>
              </div>
              <span className="rt-go">{r.go} →</span>
            </div>
          ))}
        </div>

        <h2>Related content</h2>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule)" }}>
          {[
            ["Workflow", "Declaring your source of truth", "The full workflow that operationalises this definition."],
            ["Blueprint", "Solo freelancer lean-budget stack", "A blueprint that names a canonical source as step 01."],
            ["Comparison", "All-in-one workspace vs specialised stack", "The decision that fixes where the source of truth will live."],
            ["Template", "Source-of-truth declaration clause", "The proposal paragraph excerpted above, copyable."],
            ["FAQ", "Do I need a CRM if I have a workspace?", "A related practical question that depends on this term."],
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
            Maintained by SoloOpsGuide Editorial. Last reviewed 2026-05-09. Next scheduled review 2026-08-09. Related-content links are curated manually; this entry is not auto-linked across the site. See our <a href="#">Editorial policy</a>.
          </div>
        </div>
      </article>

      {/* Utility rail */}
      <aside>
        <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Actions</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Copy short definition</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Open as printable</a></li>
              <li><a href="#" className="meta" style={{ color: "var(--ink)" }}>Suggest an edit</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Appears in</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Declaring your source of truth</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>All-in-one vs specialised stack</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Solo freelancer lean-budget stack</a></li>
              <li><a href="#" style={{ font: "500 13px/1.4 var(--sans)", color: "var(--ink)" }}>Migrating scattered tools to one</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Topic</div>
            <div style={{ font: "500 14px/1.4 var(--sans)", color: "var(--ink)", marginBottom: 4 }}>
              <a href="#" style={{ color: "var(--ink)", borderBottom: "1px solid var(--rule)" }}>Tooling</a>
            </div>
            <div className="meta">8 terms in this topic</div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Nearby letters</div>
            <div style={{ display: "flex", gap: 6 }}>
              <a href="#" className="chip" style={{ fontFamily: "var(--mono)" }}>R · prev</a>
              <a href="#" className="chip" style={{ fontFamily: "var(--mono)" }}>T · next</a>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <SiteFooter />
  </div>
);

window.GlossaryEntryDesktop = GlossaryEntryDesktop;
