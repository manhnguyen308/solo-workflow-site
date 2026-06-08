/* Glossary Entry — "Source of truth" (mobile) */

const GlossaryEntryMobile = () => (
  <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
    <MobileHeader />

    <div style={{ padding: "16px 20px 0" }}>
      <Breadcrumbs items={["Glossary", "S", "Source of truth"]} />
    </div>

    {/* Header */}
    <section style={{ padding: "16px 20px 20px", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
        <span className="chip solid" style={{ color: "var(--ink)", fontWeight: 600 }}>Glossary entry</span>
        <Chip kind="phase">Tooling</Chip>
        <span className="meta" style={{ marginLeft: 4, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)" }}>S · 02</span>
      </div>
      <h1 style={{ font: "500 34px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 12px" }}>Source of truth</h1>
      <p style={{ font: "400 17px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
        The single tool or document declared as the authoritative version of project state. There is exactly one per engagement.
      </p>
      <div className="meta" style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--rule-2)" }}>
        Reviewed 2026-05-09 · Appears in 12 workflows · 3 blueprints
      </div>
    </section>

    {/* Body */}
    <section style={{ padding: "20px 20px 0" }}>
      <div className="definition-block" style={{ padding: "18px 20px", marginBottom: 20 }}>
        <div className="label">Short definition</div>
        <div className="body" style={{ fontSize: 18 }}>
          The <strong>source of truth</strong> is the single tool or document — one, not many — that holds the canonical version of a project's state.
        </div>
      </div>

      <article className="prose" style={{ fontSize: 17, lineHeight: 1.65 }}>
        <h2 style={{ fontSize: 22, margin: "8px 0 10px" }}>In plain English</h2>
        <p>
          When the same information lives in two places — a brief in a doc and on a card, a deadline in a calendar and a contract — it will eventually disagree with itself. The source of truth is whichever one wins.
        </p>

        <h2 style={{ fontSize: 22, margin: "20px 0 10px" }}>Why it matters for solo operators</h2>
        <p>
          Teams paper over a missing source of truth with conversation. A solo operator cannot — you carry the reconciliation in your head, and that load is what makes solo work feel chaotic at five engagements.
        </p>

        <Callout kind="use" title="A practical test">
          If a client asks about scope or status, can you answer by opening exactly one place? If not, you don't yet have one.
        </Callout>

        <h2 style={{ fontSize: 22, margin: "20px 0 10px" }}>Example: a four-tool engagement</h2>
        <p>
          A typical solo engagement touches email, a project tool, a doc, and an invoicing tool. Without a declared canon, each holds a partial copy and reconciliation lives in the operator's head.
        </p>

        <TemplateBlock
          title="Source-of-truth declaration — clause"
          body={`Canonical project state for this engagement is held in:
  {Doc / Workspace / Tool} — {URL}

All other tools — email, calendar, task lists — are references or views. If they disagree, the canonical source wins.`}
        />
      </article>
    </section>

    {/* Related terms */}
    <section style={{ padding: "24px 20px 0" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Related terms</div>
      <div className="related-terms" style={{ marginTop: 0 }}>
        {[
          ["Canonical source", "Often used interchangeably with source of truth."],
          ["Operating model", "The broader pattern — workspace-led, stack-led, or hybrid."],
          ["Migration cost", "What it costs to move the source of truth between tools."],
          ["Reviewer of record", "Lives in the same proposal section."],
        ].map(([n, r], i) => (
          <div key={i} className="rt-row" style={{ gridTemplateColumns: "1fr auto", padding: "12px 0" }}>
            <div>
              <div className="rt-name" style={{ fontSize: 16 }}><a href="#">{n}</a></div>
              <div className="rt-rel" style={{ fontSize: 12 }}>{r}</div>
            </div>
            <span className="rt-go">→</span>
          </div>
        ))}
      </div>
    </section>

    {/* Related content */}
    <section style={{ padding: "24px 20px 0" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Related content</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {[
          ["Workflow", "Declaring your source of truth"],
          ["Blueprint", "Solo freelancer lean-budget stack"],
          ["Comparison", "Workspace vs specialised stack"],
          ["Template", "Source-of-truth declaration clause"],
          ["FAQ", "Do I need a CRM if I have a workspace?"],
        ].map(([t, n], i) => (
          <li key={i} style={{ padding: "12px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-2)" }}>
            <div className="meta" style={{ textTransform: "uppercase", fontSize: 11, letterSpacing: "0.06em", fontWeight: 600, marginBottom: 4 }}>{t}</div>
            <a href="#" style={{ font: "500 15px/1.35 var(--serif)", color: "var(--ink)" }}>{n}</a>
          </li>
        ))}
      </ul>
    </section>

    {/* Nearby letters / editorial meta */}
    <section style={{ padding: "24px 20px 0" }}>
      <div className="eyebrow" style={{ marginBottom: 10 }}>Nearby letters</div>
      <div style={{ display: "flex", gap: 6 }}>
        <a href="#" className="chip" style={{ fontFamily: "var(--mono)" }}>R · prev</a>
        <a href="#" className="chip" style={{ fontFamily: "var(--mono)" }}>T · next</a>
      </div>
    </section>

    <section style={{ padding: "24px 20px" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Editorial note</div>
      <div className="meta" style={{ lineHeight: 1.7 }}>
        Maintained by SoloOpsGuide Editorial. Last reviewed 2026-05-09 · next 2026-08-09. Related-content links are curated manually.
      </div>
    </section>

    <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
      <div className="meta">© 2026 SoloOpsGuide</div>
    </div>
  </div>
);

window.GlossaryEntryMobile = GlossaryEntryMobile;
