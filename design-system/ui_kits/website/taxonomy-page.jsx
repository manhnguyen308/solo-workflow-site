/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — Taxonomy / Tag listing screen
   Maps to: layouts/_default/taxonomy.html + terms.html
   Requires: React (global), loaded after index.html main script
   ──────────────────────────────────────────────────────────── */

/* ─── Local design tokens (scoped to this file) ─── */
const TXF = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const TXC = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b", soft:"#526172",
  border:"rgba(226,232,240,1)", borderHov:"rgba(203,213,225,1)",
  bg:"#fafbfc", bgSoft:"#f8fafc", card:"#ffffff",
  brand:"#0f8b8d", brandDp:"#0f766e", brandTint:"#ccfbf1",
  amber:"#b8823f", amberSf:"#fff3e3", amberDk:"#926227",
};
const txWrap  = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };
const txPanel = { padding:"1rem 1.05rem", border:`1px solid ${TXC.border}`, borderRadius:"14px", background:TXC.bgSoft, fontSize:"14px", lineHeight:1.65, color:TXC.ink2, fontFamily:TXF };

/* ─── Type → color + tint (matches the rest of the kit) ─── */
const TX_TYPE = {
  Workflow:    { fg:"#0f766e", tint:"#ccfbf1" },
  Blueprint:   { fg:"#1d6fa4", tint:"#dbeafe" },
  Comparison:  { fg:"#9a6b33", tint:"#ffedd5" },
  Template:    { fg:"#0f766e", tint:"#ccfbf1" },
  Checklist:   { fg:"#0f766e", tint:"#e0f7f1" },
  FAQ:         { fg:"#475569", tint:"#e2e8f0" },
  Glossary:    { fg:"#475569", tint:"#e2e8f0" },
};

/* ─── Real data for /tags/client-approval/ ───
   Chosen because "client approval" cuts cleanly across all six page types —
   it is the strongest demonstration of why a taxonomy page is worth maintaining. */
const TAG_PAGES = [
  { type:"Workflow",  hub:"Client Workflow Systems",  href:"/workflows/milestone-delivery-workflow-for-solo-service-businesses/",
    title:"Milestone Delivery Workflow for Solo Service Businesses",
    summary:"Build review, approval, and acceptance into the delivery sequence — so milestones close on a named decision, not on silence.",
    date:"Jan 2, 2025", read:"9 min" },
  { type:"Workflow",  hub:"Client Workflow Systems",  href:"/workflows/change-request-workflow-for-freelancers-and-consultants/",
    title:"Change Request Workflow for Freelancers and Consultants",
    summary:"Route mid-project change requests through a named approval owner before the scope shifts or new work begins.",
    date:"Dec 6, 2024", read:"7 min" },
  { type:"FAQ",       hub:"FAQ",                      href:"/faq/what-counts-as-client-approval-before-billing-or-the-next-stage-starts/",
    title:"What Counts as Client Approval Before Billing or the Next Stage Starts?",
    summary:"How to recognise a valid approval signal — and which kinds of responses do not count as approval, even when they feel like one.",
    date:"Nov 20, 2024", read:"4 min" },
  { type:"FAQ",       hub:"FAQ",                      href:"/faq/what-should-i-do-when-a-client-has-not-approved-or-rejected-deliverables/",
    title:"What Should I Do When a Client Has Not Approved or Rejected Deliverables?",
    summary:"How to move a stalled review loop forward without forcing a decision or damaging the working relationship.",
    date:"Nov 14, 2024", read:"4 min" },
  { type:"Glossary",  hub:"Glossary",                 href:"/glossary/approval-owner/",
    title:"Approval Owner",
    summary:"The named person with actual authority to move a deliverable forward — not the person who simply expresses a preference.",
    date:"Oct 28, 2024", read:"2 min" },
  { type:"Checklist", hub:"Templates & Checklists",   href:"/templates/milestone-acceptance-checklist/",
    title:"Milestone Acceptance Checklist",
    summary:"A trigger-moment checklist for closing a delivery cleanly — version reference, approval owner, dated acceptance line.",
    date:"Oct 12, 2024", read:"3 min" },
  { type:"Template",  hub:"Templates & Checklists",   href:"/templates/deliverable-approval-email-template/",
    title:"Deliverable Approval Email Template",
    summary:"Plain-English email asking for a dated, version-referenced sign-off — engineered to make ambiguous responses rare.",
    date:"Sep 30, 2024", read:"2 min" },
];

/* ─── Adjacent tags this taxonomy page links out to ─── */
const ADJACENT_TAGS = [
  { slug:"intake",            label:"Intake",            count:5 },
  { slug:"milestone-delivery",label:"Milestone delivery",count:6 },
  { slug:"billing",           label:"Billing",           count:4 },
  { slug:"scope-change",      label:"Scope change",      count:3 },
  { slug:"closeout",          label:"Project closeout",  count:3 },
];

/* ─── Cluster hubs the page links back to ─── */
const TAG_HUBS = [
  { label:"Client workflow systems",   href:"/client-workflow-systems/",   note:"Start here when the lifecycle still feels loose." },
  { label:"Templates & checklists",    href:"/templates-checklists/",      note:"Execution assets for live trigger moments." },
  { label:"Software stack blueprints", href:"/software-stack-blueprints/", note:"Lean tool models once the workflow is clear." },
  { label:"Workflow comparisons",      href:"/workflow-comparisons/",      note:"One bounded operating decision at a time." },
];

/* ─── A sparse / low-count tag, rendered alongside the main one to document
   how a thin taxonomy page should behave. This is the production answer to
   "what happens when a tag only has one or two pages?" ─── */
const SPARSE_TAG = {
  slug:"approval-disputes",
  label:"Approval disputes",
  intro:"Only one page is filed under this tag today. Open the page, then return to the broader 'Client approval' tag or the FAQ hub if it does not resolve the blocker.",
  pages:[
    { type:"FAQ", title:"What Should I Do When a Client Disputes an Approved Deliverable?",
      summary:"How to handle a retroactive dispute after a milestone was already signed off.",
      href:"/faq/client-disputes-approved-deliverable/", date:"Aug 18, 2024", read:"4 min" },
  ],
};

/* ─── Small helpers ─── */
function TxEyebrow({ children }) {
  return <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TXC.amber, margin:"0 0 0.85rem", fontFamily:TXF }}>{children}</p>;
}
function TxTypePill({ type }) {
  const c = TX_TYPE[type] || TX_TYPE.Workflow;
  return (
    <span style={{ display:"inline-flex", alignItems:"center", height:"22px", padding:"0 0.55rem", borderRadius:"999px", background:c.tint, color:c.fg, fontSize:"11px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", fontFamily:TXF }}>{type}</span>
  );
}
function TxBreadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily:TXF, fontSize:"13px", color:TXC.muted, marginBottom:"0.8rem" }}>
      <ol style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.4rem" }}>
        {items.map((it,i) => (
          <li key={i} style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", margin:0 }}>
            {i > 0 && <span aria-hidden="true" style={{ color:"#94a3b8" }}>/</span>}
            {it.href ? (
              <a href={it.href} style={{ color:TXC.muted, textDecoration:"none" }}>{it.label}</a>
            ) : (
              <span aria-current="page" style={{ color:TXC.ink, fontWeight:600 }}>{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ─── Listing row — list-style (not card grid), to read as an editorial index, not a thin archive dump ─── */
function TagListRow({ page }) {
  const [hov, setHov] = React.useState(false);
  return (
    <li>
      <a href={page.href} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
        style={{
          display:"grid",
          gridTemplateColumns:"minmax(0,1fr) auto",
          gap:"1rem",
          padding:"1.15rem 1.35rem",
          border:`1px solid ${hov?TXC.borderHov:TXC.border}`,
          borderRadius:"14px",
          background:TXC.card,
          textDecoration:"none",
          boxShadow: hov ? "0 6px 18px rgba(15,23,42,0.06)" : "0 1px 2px rgba(15,23,42,0.04)",
          transform: hov ? "translateY(-1px)" : "none",
          transition:"all 160ms ease",
          fontFamily:TXF,
        }}>
        <div style={{ minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.55rem", flexWrap:"wrap", marginBottom:"0.45rem" }}>
            <TxTypePill type={page.type} />
            <span style={{ fontSize:"12px", color:TXC.muted, fontWeight:500 }}>{page.hub}</span>
          </div>
          <h3 style={{ margin:"0 0 0.35rem", fontSize:"17px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.3, color:TXC.ink, fontFamily:TXF }}>{page.title}</h3>
          <p style={{ margin:"0 0 0.55rem", fontSize:"14px", lineHeight:1.6, color:TXC.soft }}>{page.summary}</p>
          <p style={{ margin:0, fontSize:"12.5px", color:TXC.muted }}>
            <span>Updated {page.date}</span>
            <span aria-hidden="true" style={{ padding:"0 0.5rem", color:"#cbd5e1" }}>•</span>
            <span>{page.read} read</span>
          </p>
        </div>
        <span style={{ alignSelf:"center", fontSize:"13px", fontWeight:500, color:TXC.brandDp, whiteSpace:"nowrap" }}>Open page →</span>
      </a>
    </li>
  );
}

/* ─── Adjacent tag chip ─── */
function AdjacentTagChip({ tag }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={`/tags/${tag.slug}/`} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"inline-flex", alignItems:"center", gap:"0.4rem",
        height:"30px", padding:"0 0.75rem",
        border:`1px solid ${hov ? TXC.brand : TXC.border}`,
        borderRadius:"999px",
        background: hov ? TXC.brandTint : TXC.card,
        color: hov ? TXC.brandDp : TXC.ink2,
        fontSize:"13px", fontWeight:500, textDecoration:"none",
        transition:"all 160ms ease", fontFamily:TXF,
      }}>
      <span>#{tag.label}</span>
      <span style={{ fontSize:"11px", color: hov ? TXC.brandDp : TXC.muted, fontWeight:600 }}>{tag.count}</span>
    </a>
  );
}

/* ─── Hub rail row ─── */
function HubRailRow({ hub }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={hub.href} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"grid",
        gridTemplateColumns:"minmax(0,1fr) auto",
        gap:"0.75rem",
        padding:"1rem 1.1rem",
        border:`1px solid ${hov?TXC.borderHov:TXC.border}`,
        borderRadius:"14px",
        background: hov ? TXC.bgSoft : TXC.card,
        textDecoration:"none",
        transition:"all 160ms ease",
        fontFamily:TXF,
      }}>
      <div style={{ minWidth:0 }}>
        <span style={{ display:"block", fontSize:"15px", fontWeight:600, letterSpacing:"-0.01em", color:TXC.ink, marginBottom:"0.2rem" }}>{hub.label}</span>
        <span style={{ display:"block", fontSize:"13px", lineHeight:1.55, color:TXC.muted }}>{hub.note}</span>
      </div>
      <span style={{ alignSelf:"center", fontSize:"13px", fontWeight:500, color:TXC.brandDp, whiteSpace:"nowrap" }}>Open hub →</span>
    </a>
  );
}

/* ────────────────────────────────────
   TAXONOMY (single-tag) PAGE
   ──────────────────────────────────── */
function TaxonomyPage({ onNavigate }) {
  // Group pages by type for clearer scanning — keeps a long index from reading as a flat archive
  const byType = React.useMemo(() => {
    const order = ["Workflow", "Comparison", "Blueprint", "Template", "Checklist", "FAQ", "Glossary"];
    const groups = {};
    for (const p of TAG_PAGES) (groups[p.type] = groups[p.type] || []).push(p);
    return order.filter(t => groups[t]).map(t => [t, groups[t]]);
  }, []);

  return (
    <div style={{ background:TXC.bg, fontFamily:TXF }}>
      <div style={{ ...txWrap, padding:"2.5rem 2rem 5rem" }}>

        {/* ─── Section hero — 2-col grid matching the rest of the kit ─── */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.24fr) minmax(260px,0.76fr)", gap:"1.5rem", marginBottom:"2.5rem" }}>

          {/* Left: context + listing intro */}
          <div style={{ padding:"2rem", border:`1px solid ${TXC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <TxBreadcrumb items={[
              { label:"Home", href:"/" },
              { label:"Tags",  href:"/tags/" },
              { label:"Client approval" },
            ]} />
            <TxEyebrow>Tag · Topic</TxEyebrow>
            <h1 style={{ fontSize:"clamp(1.9rem,3.8vw,2.8rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:"0.85rem", textWrap:"balance", fontFamily:TXF }}>
              Client approval guides
            </h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:TXC.ink2, maxWidth:"38rem", margin:"0 0 0.85rem", fontFamily:TXF }}>
              Workflow, FAQ, glossary, and execution pages that touch the same operating question: when is a client response a real approval, and how should it be wired into delivery, scope changes, and billing?
            </p>
            <p style={{ fontSize:"15px", lineHeight:1.65, color:TXC.ink2, margin:"0 0 1.25rem", fontFamily:TXF }}>
              Use this index when the active blocker is an ambiguous sign-off — not when the broader lifecycle still feels loose. If more than one stage feels broken, the right entry point is the anchor workflow, not this tag.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.5rem" }}>
              <span style={{ display:"inline-flex", alignItems:"center", height:"26px", padding:"0 0.7rem", borderRadius:"999px", background:TXC.brandTint, color:TXC.brandDp, fontSize:"12px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>
                #client-approval
              </span>
              <span style={{ fontSize:"13px", color:TXC.muted }}>{TAG_PAGES.length} guides · spans 4 clusters</span>
            </div>
          </div>

          {/* Right: why-this-tag note + stat + adjacent-tag chips */}
          <aside style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:TXC.muted, margin:"0 0 0.1rem", fontFamily:TXF }}>Start here</p>
            <div style={txPanel}>
              <strong style={{ display:"block", marginBottom:"0.4rem", color:TXC.ink }}>Use this tag as a cross-cluster index.</strong>
              Tag pages cut across clusters. Hubs go deep on one cluster. Open the tag when the question is operational and recurring — open the hub when the workflow itself still needs structure.
            </div>
            <div style={{ padding:"1rem 1.05rem", border:`1px solid ${TXC.border}`, borderRadius:"14px", background:TXC.bgSoft }}>
              <span style={{ display:"block", fontSize:"2rem", fontWeight:700, color:TXC.ink, lineHeight:1, fontFamily:TXF }}>{TAG_PAGES.length}</span>
              <p style={{ fontSize:"14px", color:TXC.ink2, margin:"0.2rem 0 0", fontFamily:TXF }}>pages tagged client-approval</p>
            </div>
            <div style={{ padding:"1.05rem", border:`1px solid ${TXC.border}`, borderRadius:"14px", background:TXC.card }}>
              <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:TXC.muted, margin:"0 0 0.55rem", fontFamily:TXF }}>Adjacent tags</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.45rem" }}>
                {ADJACENT_TAGS.map(t => <AdjacentTagChip key={t.slug} tag={t} />)}
              </div>
            </div>
          </aside>
        </div>

        {/* ─── Listing — grouped by page type ─── */}
        <div style={{ marginBottom:"2.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TXC.amber, margin:"0 0 0.4rem", fontFamily:TXF }}>All pages with this tag</p>
          <h2 style={{ fontSize:"28px", fontWeight:600, letterSpacing:"-0.04em", marginBottom:"0.4rem", color:TXC.ink, fontFamily:TXF }}>Open the page that matches the surface you are working on</h2>
          <p style={{ color:TXC.muted, fontSize:"16px", margin:"0 0 1.75rem", fontFamily:TXF }}>Workflow pages frame the operating sequence. FAQ pages handle bounded blockers. Glossary clarifies one term. Templates and checklists give you the execution asset.</p>

          {byType.map(([type, pages]) => (
            <section key={type} style={{ marginBottom:"1.75rem" }}>
              <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:"0.85rem" }}>
                <h3 style={{ fontSize:"14px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:TXC.ink, margin:0, fontFamily:TXF }}>{type} pages</h3>
                <span style={{ fontSize:"12.5px", color:TXC.muted, fontFamily:TXF }}>{pages.length} {pages.length === 1 ? "page" : "pages"}</span>
              </div>
              <ul style={{ listStyle:"none", margin:0, padding:0, display:"grid", gap:"0.85rem" }}>
                {pages.map((p,i) => <TagListRow key={i} page={p} />)}
              </ul>
            </section>
          ))}
        </div>

        {/* ─── Hub rail — return to broader clusters ─── */}
        <div style={{ padding:"1.75rem", border:`1px solid ${TXC.border}`, borderRadius:"16px", background:TXC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", marginBottom:"2.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TXC.amber, margin:"0 0 0.4rem", fontFamily:TXF }}>If the tag is not the right entry point</p>
          <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:TXC.ink, margin:"0 0 0.35rem", lineHeight:1.25, fontFamily:TXF }}>Return to a cluster hub instead</h2>
          <p style={{ fontSize:"14.5px", color:TXC.muted, margin:"0 0 1.25rem", lineHeight:1.6, fontFamily:TXF }}>
            Tags are useful for one recurring operating question. When the underlying workflow still feels loose, a hub is a stronger starting point than any tag.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"0.85rem" }}>
            {TAG_HUBS.map(h => <HubRailRow key={h.href} hub={h} />)}
          </div>
        </div>

        {/* ─── Low-count tag state — documented inline, not a separate dead end ─── */}
        <div style={{ marginTop:"3rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TXC.amber, margin:"0 0 0.4rem", fontFamily:TXF }}>Pattern · Sparse tag state</p>
          <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:TXC.ink, margin:"0 0 0.35rem", lineHeight:1.25, fontFamily:TXF }}>How a low-count tag page should behave</h2>
          <p style={{ fontSize:"14.5px", color:TXC.muted, margin:"0 0 1.25rem", lineHeight:1.6, maxWidth:"54rem", fontFamily:TXF }}>
            When a tag only carries one or two pages, the page should still earn its existence: name the scope honestly, route to the broader tag or hub, and avoid the "nothing here" dead end.
          </p>

          <div style={{ padding:"1.5rem 1.75rem", border:`1px dashed ${TXC.borderHov}`, borderRadius:"16px", background:"linear-gradient(180deg,#fff,#f8fafc)" }}>
            <TxBreadcrumb items={[
              { label:"Home", href:"/" },
              { label:"Tags", href:"/tags/" },
              { label:SPARSE_TAG.label },
            ]} />
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"baseline", justifyContent:"space-between", gap:"0.75rem", marginBottom:"0.4rem" }}>
              <h3 style={{ fontSize:"22px", fontWeight:700, letterSpacing:"-0.03em", color:TXC.ink, margin:0, fontFamily:TXF }}>{SPARSE_TAG.label}</h3>
              <span style={{ fontSize:"12px", color:TXC.muted, fontFamily:TXF }}>1 page · narrow scope</span>
            </div>
            <p style={{ fontSize:"15px", lineHeight:1.65, color:TXC.ink2, margin:"0 0 1.1rem", maxWidth:"48rem", fontFamily:TXF }}>{SPARSE_TAG.intro}</p>

            <ul style={{ listStyle:"none", margin:"0 0 1.1rem", padding:0, display:"grid", gap:"0.85rem" }}>
              {SPARSE_TAG.pages.map((p,i) => (
                <TagListRow key={i} page={{ ...p, hub:"FAQ" }} />
              ))}
            </ul>

            <div style={{ padding:"1rem 1.1rem", border:`1px solid ${TXC.border}`, borderRadius:"12px", background:TXC.bgSoft, fontSize:"14px", lineHeight:1.6, color:TXC.ink2, fontFamily:TXF }}>
              <strong style={{ display:"block", marginBottom:"0.35rem", color:TXC.ink }}>If this tag does not resolve the blocker</strong>
              Open the broader{" "}
              <a href="/tags/client-approval/" style={{ color:TXC.brandDp, fontWeight:600, textDecoration:"none", borderBottom:`1px solid ${TXC.brandTint}` }}>#client-approval</a>{" "}
              tag for the full cross-cluster index, or go to the{" "}
              <a href="/faq/" style={{ color:TXC.brandDp, fontWeight:600, textDecoration:"none", borderBottom:`1px solid ${TXC.brandTint}` }}>FAQ hub</a>{" "}
              for routing back to a stronger guide.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Export to window for index.html App ─── */
Object.assign(window, {
  TaxonomyPage,
});
