/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — Tags master index screen
   Maps to: layouts/_default/terms.html (the /tags/ root, one level
   above the per-tag taxonomy.html surface).

   Voice + structure rules (production):
     • Alphabetical, grouped by first letter — not a keyword cloud
     • Each row shows tag name, page count, optional short topic hint
     • Discovery support: hub rail (better starting point for broad nav)
     • Thin tags either omitted from this index or routed via the
       sparse-tag pattern documented on the per-tag screen
   Requires: React (global), loaded after index.html main script
   ──────────────────────────────────────────────────────────── */

/* ─── Local design tokens (scoped to this file) ─── */
const TIF = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const TIC = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b", soft:"#526172",
  border:"rgba(226,232,240,1)", borderHov:"rgba(203,213,225,1)",
  bg:"#fafbfc", bgSoft:"#f8fafc", card:"#ffffff",
  brand:"#0f8b8d", brandDp:"#0f766e", brandTint:"#ccfbf1",
  amber:"#b8823f", amberSf:"#fff3e3", amberDk:"#926227",
};
const tiWrap = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };

/* ─── Tag corpus ───
   Modeled on real cross-cluster operating topics. Counts reflect a
   realistic site shape: a handful of cornerstone tags (5–9 pages),
   a wider middle (3–4 pages), and a few smaller scopes (2 pages).
   No tags with count < 2 are rendered in the index — those are
   either omitted entirely or noindex'd, per the safeguards below.

   Each tag carries:
     • slug   — URL fragment for /tags/<slug>/
     • label  — sentence-case display name (NOT the raw slug)
     • count  — page count across all clusters
     • hint   — short topic hint (≤ ~64 chars). Optional.
*/
const TI_TAGS = [
  { slug:"billing",            label:"Billing",                count:4, hint:"Invoicing rhythm, late-payment recovery, payment trigger points." },
  { slug:"change-requests",    label:"Change requests",        count:3, hint:"Mid-project scope shifts and how they get approved." },
  { slug:"client-approval",    label:"Client approval",        count:7, hint:"What counts as a real sign-off across delivery, billing, and scope." },
  { slug:"client-workflow",    label:"Client workflow",        count:9, hint:"End-to-end lifecycle topics, not stage-specific." },
  { slug:"closeout",           label:"Closeout",               count:3, hint:"Final delivery, handover, and project-end housekeeping." },
  { slug:"contracts",          label:"Contracts",              count:3, hint:"Engagement agreement basics for solo operators." },
  { slug:"delivery",           label:"Delivery",               count:5, hint:"Active delivery operations once kickoff is settled." },
  { slug:"intake",             label:"Intake",                 count:5, hint:"Qualification, scope discovery, and inquiry-to-proposal handoff." },
  { slug:"invoicing",          label:"Invoicing",              count:4, hint:"Invoice issuing rules — separate from billing strategy." },
  { slug:"kickoff",            label:"Kickoff",                count:4, hint:"Post-signature setup before first delivery." },
  { slug:"lean-stack",         label:"Lean stack",             count:4, hint:"Smallest reliable tool set for solo operations." },
  { slug:"milestone-delivery", label:"Milestone delivery",     count:6, hint:"Reviewing, accepting, and closing individual milestones." },
  { slug:"offboarding",        label:"Offboarding",            count:3, hint:"Clean exit, asset return, and final communication." },
  { slug:"onboarding",         label:"Onboarding",             count:5, hint:"Starting a confirmed engagement on a structured footing." },
  { slug:"pricing",            label:"Pricing",                count:3, hint:"Pricing as an operating choice, not a marketing tactic." },
  { slug:"project-handoff",    label:"Project handoff",        count:3, hint:"Transferring ownership at the end of an engagement." },
  { slug:"proposals",          label:"Proposals",              count:3, hint:"What a proposal must commit to before kickoff is allowed." },
  { slug:"qualification",      label:"Qualification",          count:2, hint:"Filtering inquiries before they enter intake." },
  { slug:"scope-change",       label:"Scope change",           count:3, hint:"Recognising scope drift and resetting the engagement." },
  { slug:"silent-clients",     label:"Silent clients",         count:2, hint:"Routing non-response without forcing a decision." },
  { slug:"software-stack",     label:"Software stack",         count:5, hint:"Tool selection topics across categories and stages." },
  { slug:"status-updates",     label:"Status updates",         count:3, hint:"Cadence and shape of routine client communication." },
  { slug:"templates",          label:"Templates",              count:6, hint:"Cross-cluster references to execution-asset pages." },
];

/* ─── Cluster hubs the page links over to ─── */
const TI_HUBS = [
  { label:"Client workflow systems",   href:"/client-workflow-systems/",   note:"Stage-by-stage workflow guides — the most common starting point." },
  { label:"Templates & checklists",    href:"/templates-checklists/",      note:"Execution assets keyed to live trigger moments." },
  { label:"Software stack blueprints", href:"/software-stack-blueprints/", note:"Lean tool models, once the workflow is settled." },
  { label:"Workflow comparisons",      href:"/workflow-comparisons/",      note:"One bounded operating decision at a time." },
  { label:"Glossary",                  href:"/glossary/",                  note:"When one unclear term is the only blocker." },
  { label:"FAQ",                       href:"/faq/",                       note:"Narrow setup questions that send you back to a stronger guide." },
];

/* ─── Small helpers ─── */
function TiEyebrow({ children }) {
  return <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TIC.amber, margin:"0 0 0.85rem", fontFamily:TIF }}>{children}</p>;
}

function TiBreadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily:TIF, fontSize:"13px", color:TIC.muted, marginBottom:"0.8rem" }}>
      <ol style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.4rem" }}>
        {items.map((it,i) => (
          <li key={i} style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", margin:0 }}>
            {i > 0 && <span aria-hidden="true" style={{ color:"#94a3b8" }}>/</span>}
            {it.href ? (
              <a href={it.href} style={{ color:TIC.muted, textDecoration:"none" }}>{it.label}</a>
            ) : (
              <span aria-current="page" style={{ color:TIC.ink, fontWeight:600 }}>{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ─── Tag row — compact "index" form, deliberately NOT a chip cloud ─── */
function TagIndexRow({ tag, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  const handleClick = (e) => {
    if (onNavigate) { e.preventDefault(); onNavigate("taxonomy"); }
  };
  return (
    <li>
      <a href={`/tags/${tag.slug}/`} onClick={handleClick}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
        style={{
          display:"grid",
          gridTemplateColumns:"minmax(0,1fr) auto",
          alignItems:"center",
          gap:"1rem",
          padding:"0.85rem 1.1rem",
          border:`1px solid ${hov?TIC.borderHov:TIC.border}`,
          borderRadius:"12px",
          background: hov ? TIC.bgSoft : TIC.card,
          textDecoration:"none",
          transition:"all 140ms ease",
          fontFamily:TIF,
        }}>
        <div style={{ minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"baseline", flexWrap:"wrap", gap:"0.55rem", marginBottom: tag.hint ? "0.18rem" : 0 }}>
            <span style={{ fontSize:"15px", fontWeight:600, color:TIC.ink, letterSpacing:"-0.01em", whiteSpace:"nowrap" }}>
              <span aria-hidden="true" style={{ color:TIC.muted, marginRight:"0.1rem", fontWeight:500 }}>#</span>{tag.slug}
            </span>
            <span style={{ fontSize:"12.5px", color:TIC.muted, fontWeight:500, whiteSpace:"nowrap" }}>{tag.label}</span>
          </div>
          {tag.hint && (
            <p style={{ margin:0, fontSize:"13.5px", lineHeight:1.55, color:TIC.soft }}>{tag.hint}</p>
          )}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"0.65rem", flexShrink:0 }}>
          <span style={{
            display:"inline-flex", alignItems:"center", justifyContent:"center",
            minWidth:"2rem", height:"22px", padding:"0 0.55rem",
            borderRadius:"999px",
            background:TIC.brandTint, color:TIC.brandDp,
            fontSize:"12px", fontWeight:700, letterSpacing:"0.02em",
            fontFamily:TIF,
          }}>{tag.count}</span>
          <span aria-hidden="true" style={{ fontSize:"13px", color:hov?TIC.brandDp:TIC.muted, fontWeight:500 }}>→</span>
        </div>
      </a>
    </li>
  );
}

/* ─── Hub rail row (matches taxonomy-page.jsx pattern) ─── */
function TiHubRow({ hub }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={hub.href} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        display:"grid",
        gridTemplateColumns:"minmax(0,1fr) auto",
        gap:"0.75rem",
        padding:"1rem 1.1rem",
        border:`1px solid ${hov?TIC.borderHov:TIC.border}`,
        borderRadius:"14px",
        background: hov ? TIC.bgSoft : TIC.card,
        textDecoration:"none",
        transition:"all 160ms ease",
        fontFamily:TIF,
      }}>
      <div style={{ minWidth:0 }}>
        <span style={{ display:"block", fontSize:"15px", fontWeight:600, letterSpacing:"-0.01em", color:TIC.ink, marginBottom:"0.2rem" }}>{hub.label}</span>
        <span style={{ display:"block", fontSize:"13px", lineHeight:1.55, color:TIC.muted }}>{hub.note}</span>
      </div>
      <span style={{ alignSelf:"center", fontSize:"13px", fontWeight:500, color:TIC.brandDp, whiteSpace:"nowrap" }}>Open hub →</span>
    </a>
  );
}

/* ─── Group tags by first letter ───
   Returns an ordered [letter, tags[]] array. The letter is uppercase.
   Within each letter, tags stay alphabetised by slug (the input is
   already sorted in TI_TAGS — we keep that contract here). */
function groupTagsAlphabetically(tags) {
  const map = new Map();
  for (const tag of tags) {
    const letter = (tag.slug[0] || "?").toUpperCase();
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter).push(tag);
  }
  return Array.from(map.entries()).sort((a,b) => a[0].localeCompare(b[0]));
}

/* ────────────────────────────────────
   TAGS MASTER INDEX PAGE  (/tags/)
   ──────────────────────────────────── */
function TagsIndexPage({ onNavigate }) {
  const groups = React.useMemo(() => groupTagsAlphabetically(TI_TAGS), []);
  const totalPages = React.useMemo(() => TI_TAGS.reduce((n,t) => n + t.count, 0), []);
  const letters = groups.map(([l]) => l);

  return (
    <div style={{ background:TIC.bg, fontFamily:TIF }}>
      <div style={{ ...tiWrap, padding:"2.5rem 2rem 5rem" }}>

        {/* ─── Header — 2-col grid matching the rest of the kit ─── */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.24fr) minmax(260px,0.76fr)", gap:"1.5rem", marginBottom:"2.5rem" }}>

          {/* Left: breadcrumb + intro */}
          <div style={{ padding:"2rem", border:`1px solid ${TIC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <TiBreadcrumb items={[
              { label:"Home", href:"/" },
              { label:"Tags" },
            ]} />
            <TiEyebrow>Topic index</TiEyebrow>
            <h1 style={{ fontSize:"clamp(1.9rem,3.8vw,2.8rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:"0.85rem", textWrap:"balance", fontFamily:TIF }}>
              Tags
            </h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:TIC.ink2, maxWidth:"42rem", margin:"0 0 0.85rem", fontFamily:TIF }}>
              Tags group related workflow, template, FAQ, glossary, comparison, and blueprint pages around the same operating question. Open a tag when one recurring question keeps surfacing across multiple stages or clusters.
            </p>
            <p style={{ fontSize:"15px", lineHeight:1.65, color:TIC.ink2, margin:"0 0 1.25rem", maxWidth:"42rem", fontFamily:TIF }}>
              Tags are a <em>topic index</em>, not primary navigation. If the broader workflow still feels loose, a cluster hub is a stronger starting point — see the hub list on the right. Use tags for cross-cluster discovery, not for browsing the whole site.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.5rem" }}>
              <span style={{ display:"inline-flex", alignItems:"center", height:"26px", padding:"0 0.7rem", borderRadius:"999px", background:TIC.brandTint, color:TIC.brandDp, fontSize:"12px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>
                /tags/
              </span>
              <span style={{ fontSize:"13px", color:TIC.muted }}>{TI_TAGS.length} tags · {totalPages} tagged pages</span>
            </div>
          </div>

          {/* Right: "Start with a hub instead" rail */}
          <aside style={{ display:"grid", gap:"0.6rem", alignContent:"start", padding:"1.5rem", border:`1px solid ${TIC.border}`, borderRadius:"16px", background:TIC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:TIC.brandDp, margin:0, fontFamily:TIF }}>Start with a hub instead</p>
            <p style={{ fontSize:"13.5px", lineHeight:1.6, color:TIC.muted, margin:"0 0 0.5rem", fontFamily:TIF }}>
              Hubs are better starting points for broad navigation. Tags are better for cross-topic discovery once you already know the question.
            </p>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"grid", gap:"0.45rem" }}>
              {TI_HUBS.map(h => (
                <li key={h.href} style={{ margin:0 }}>
                  <a href={h.href} style={{
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"0.6rem 0.75rem",
                    border:`1px solid ${TIC.border}`,
                    borderRadius:"10px",
                    background:TIC.bgSoft,
                    color:TIC.ink, textDecoration:"none",
                    fontSize:"14px", fontWeight:500, letterSpacing:"-0.01em",
                    fontFamily:TIF,
                  }}>
                    <span>{h.label}</span>
                    <span aria-hidden="true" style={{ color:TIC.brandDp, fontSize:"13px" }}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* ─── Jump-to-letter rail ─── */}
        <nav aria-label="Jump to letter" style={{
          display:"flex", flexWrap:"wrap", gap:"0.35rem", alignItems:"center",
          padding:"0.6rem 0.85rem",
          border:`1px solid ${TIC.border}`,
          borderRadius:"12px",
          background:TIC.card,
          marginBottom:"1.75rem",
          fontFamily:TIF,
        }}>
          <span style={{ fontSize:"11.5px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:TIC.muted, marginRight:"0.55rem" }}>Jump to</span>
          {letters.map(l => (
            <a key={l} href={`#tag-letter-${l}`} style={{
              display:"inline-flex", alignItems:"center", justifyContent:"center",
              minWidth:"1.85rem", height:"1.85rem", padding:"0 0.4rem",
              borderRadius:"8px",
              background:TIC.bgSoft, color:TIC.ink2,
              fontSize:"13px", fontWeight:600, textDecoration:"none",
              border:`1px solid ${TIC.border}`,
            }}>{l}</a>
          ))}
        </nav>

        {/* ─── Alphabetical listing ─── */}
        <div style={{ marginBottom:"2.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TIC.amber, margin:"0 0 0.4rem", fontFamily:TIF }}>All tags · A–Z</p>
          <h2 style={{ fontSize:"28px", fontWeight:600, letterSpacing:"-0.04em", marginBottom:"0.4rem", color:TIC.ink, fontFamily:TIF }}>The full topic index</h2>
          <p style={{ color:TIC.muted, fontSize:"16px", margin:"0 0 1.5rem", maxWidth:"54rem", fontFamily:TIF }}>
            Counts reflect total pages across all clusters. Tags with only a single page are either omitted from this index or routed via the sparse-tag pattern documented below.
          </p>

          {groups.map(([letter, tags]) => (
            <section key={letter} id={`tag-letter-${letter}`} style={{ marginBottom:"1.5rem", scrollMarginTop:"96px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"3rem minmax(0,1fr)", gap:"1rem", alignItems:"start" }}>
                <div style={{ position:"sticky", top:"104px" }}>
                  <span style={{
                    display:"inline-flex", alignItems:"center", justifyContent:"center",
                    width:"2.5rem", height:"2.5rem",
                    borderRadius:"12px",
                    background:TIC.bgSoft,
                    border:`1px solid ${TIC.border}`,
                    color:TIC.ink,
                    fontSize:"17px", fontWeight:700, letterSpacing:"-0.02em",
                    fontFamily:TIF,
                  }}>{letter}</span>
                </div>
                <ul style={{ listStyle:"none", margin:0, padding:0, display:"grid", gap:"0.6rem" }}>
                  {tags.map(tag => <TagIndexRow key={tag.slug} tag={tag} onNavigate={onNavigate} />)}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* ─── Hub rail — repeat the "start with a hub" message with full descriptions ─── */}
        <div style={{ padding:"1.75rem", border:`1px solid ${TIC.border}`, borderRadius:"16px", background:TIC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", marginBottom:"2.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TIC.amber, margin:"0 0 0.4rem", fontFamily:TIF }}>If a tag is not the right entry point</p>
          <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:TIC.ink, margin:"0 0 0.35rem", lineHeight:1.25, fontFamily:TIF }}>Start with a hub instead</h2>
          <p style={{ fontSize:"14.5px", color:TIC.muted, margin:"0 0 1.25rem", lineHeight:1.6, maxWidth:"54rem", fontFamily:TIF }}>
            Tags route across clusters around one recurring question. Hubs go vertically deep on one cluster — they are the right surface when the lifecycle itself still needs structure, not when a single operating question keeps recurring.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"0.85rem" }}>
            {TI_HUBS.map(h => <TiHubRow key={h.href} hub={h} />)}
          </div>
        </div>

        {/* ─── Safeguards — documented inline, not hidden in the README ─── */}
        <div style={{ marginTop:"3rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TIC.amber, margin:"0 0 0.4rem", fontFamily:TIF }}>Pattern · Avoiding thin tags</p>
          <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:TIC.ink, margin:"0 0 0.35rem", lineHeight:1.25, fontFamily:TIF }}>What this index intentionally does not do</h2>
          <p style={{ fontSize:"14.5px", color:TIC.muted, margin:"0 0 1.25rem", lineHeight:1.6, maxWidth:"54rem", fontFamily:TIF }}>
            The fastest way for a tag index to lose its value is to fill it with keyword-stuffed, one-page tags that route to dead-end archives. The kit treats tags as an editorial routing surface, not an SEO surface.
          </p>

          <ul style={{ listStyle:"none", margin:0, padding:0, display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"0.85rem" }}>
            {[
              {
                head:"No keyword stuffing",
                body:"A tag exists only when it helps readers discover related content across more than one cluster. \"Every word the article mentions\" is not a tag.",
              },
              {
                head:"Thin tags are noindexed",
                body:"Tags with fewer than 2 pages are removed from this index. If a one-page tag must exist (e.g. a holding scope), the per-tag page is noindex'd and links to the broader tag.",
              },
              {
                head:"No flat keyword cloud",
                body:"Tags are grouped alphabetically with a short topic hint and a real page count — not as a font-sized cloud or undifferentiated chip wall.",
              },
              {
                head:"Hubs over tags for broad nav",
                body:"For \"where do I even start?\" the index sends readers up to a cluster hub. Tags are second-level routing, not the first stop.",
              },
            ].map(item => (
              <li key={item.head} style={{
                padding:"1.1rem 1.25rem",
                border:`1px solid ${TIC.border}`,
                borderRadius:"14px",
                background:TIC.card,
                fontFamily:TIF,
              }}>
                <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:TIC.brandDp, margin:"0 0 0.4rem" }}>{item.head}</p>
                <p style={{ margin:0, fontSize:"14px", lineHeight:1.6, color:TIC.ink2 }}>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

/* ─── Export to window for index.html App ─── */
Object.assign(window, {
  TagsIndexPage,
});
