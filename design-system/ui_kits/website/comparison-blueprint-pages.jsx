/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — Comparison & Blueprint pages
   Requires: React (global), loaded after index.html main script
   Mirrors:
     content/workflow-comparisons/*.md  (page_type = "comparison")
     content/software-stack-blueprints/*.md  (page_type = "guide", section = blueprint)
   ──────────────────────────────────────────────────────────── */

/* ─── Local tokens ─── */
const CF = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const CP = '"Lora",Georgia,"Times New Roman",serif';
const CC = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b",
  border:"rgba(226,232,240,1)", borderHov:"rgba(203,213,225,1)",
  bg:"#fafbfc", bgSoft:"#f8fafc", card:"#ffffff",
  brand:"#0f8b8d", brandDp:"#0f766e",
  amber:"#b8823f", amberSf:"#fff3e3", amberDk:"#926227",
  comparison:"#9a6b33", blueprint:"#1d6fa4",
};
const cWrap = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };

/* ─── Shared block components ─── */

function CEyebrow({ children }) {
  return <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:CC.amber, margin:"0 0 0.85rem", fontFamily:CF }}>{children}</p>;
}
function CPill({ children, variant="teal" }) {
  const v = { teal:{background:"#ccfbf1",color:CC.brandDp}, slate:{background:"#f1f5f9",color:"#64748b"}, amber:{background:CC.amberSf,color:CC.amberDk}, blue:{background:"#dbeafe",color:"#1d4ed8"}, copper:{background:"rgba(184,130,63,0.12)",color:CC.amberDk} };
  return <span style={{ display:"inline-flex", alignItems:"center", padding:"0.35rem 0.72rem", borderRadius:"999px", fontSize:"12px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", fontFamily:CF, ...v[variant] }}>{children}</span>;
}
function CAsideCard({ label, body, variant="default", accent=CC.brandDp }) {
  const bg = variant==="soft" ? "linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,1))" : variant==="muted" ? CC.bgSoft : CC.card;
  return (
    <div style={{ padding:"1.25rem", border:`1px solid ${CC.border}`, borderRadius:"14px", background:bg, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontSize:"14px", lineHeight:1.65, fontFamily:CF }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:accent, margin:"0 0 0.4rem" }}>{label}</p>
      <p style={{ color:CC.ink2, margin:0 }}>{body}</p>
    </div>
  );
}

/* ─── ProseTable — comparison/criteria table with mobile-safe horizontal scroll ─── */
function ProseTable({ headers, rows, columnEmphasis = [] }) {
  return (
    <div style={{ margin:"1.35rem 0", border:`1px solid ${CC.border}`, borderRadius:"14px", background:CC.card, overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
      <table style={{ width:"100%", borderCollapse:"collapse", fontFamily:CF, fontSize:"14.5px", minWidth:"540px" }}>
        <thead>
          <tr>
            {headers.map((h,i)=>(
              <th key={i} style={{ padding:"0.85rem 1rem", textAlign:"left", borderBottom:`1px solid ${CC.border}`, background:CC.bgSoft, color:"#475569", fontSize:"12px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,ri)=>(
            <tr key={ri} style={{ borderBottom: ri===rows.length-1 ? "none" : `1px solid ${CC.border}` }}>
              {row.map((cell,ci)=>(
                <td key={ci} style={{ padding:"0.85rem 1rem", color: ci===0 ? CC.ink : "#334155", fontWeight: ci===0 ? 600 : (columnEmphasis[ci] ? 500 : 400), verticalAlign:"top", lineHeight:1.55 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── ModelCard — single option in a comparison (Model 1 / Model 2 / Model 3) ─── */
function ModelCard({ label, title, fields, accent = CC.brandDp }) {
  return (
    <article style={{ padding:"1.5rem", border:`1px solid ${CC.border}`, borderLeft:`3px solid ${accent}`, borderRadius:"14px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:CF }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:accent, margin:"0 0 0.35rem" }}>{label}</p>
      <h3 style={{ fontSize:"19px", fontWeight:600, letterSpacing:"-0.02em", color:CC.ink, margin:"0 0 1rem", lineHeight:1.28 }}>{title}</h3>
      <dl style={{ margin:0, display:"flex", flexDirection:"column", gap:"0.7rem" }}>
        {fields.map((f,i)=>(
          <div key={i}>
            <dt style={{ fontSize:"12px", fontWeight:600, color:CC.muted, letterSpacing:"0.03em", textTransform:"uppercase", marginBottom:"0.2rem" }}>{f.label}</dt>
            <dd style={{ margin:0, fontSize:"14px", lineHeight:1.6, color:CC.ink2 }}>{f.body}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/* ─── BestForBlock — two-column "Best for / Not best for" ─── */
function BestForBlock({ bestFor, notBestFor }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"1rem", margin:"1.5rem 0", fontFamily:CF }}>
      <div style={{ padding:"1.25rem", border:`1px solid ${CC.border}`, borderRadius:"14px", background:CC.bgSoft }}>
        <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:CC.brandDp, margin:"0 0 0.6rem" }}>Best for</p>
        <ul style={{ margin:0, paddingLeft:"1.25rem", fontSize:"14px", lineHeight:1.65, color:CC.ink2 }}>{bestFor.map((item,i)=><li key={i}>{item}</li>)}</ul>
      </div>
      <div style={{ padding:"1.25rem", border:`1px solid ${CC.border}`, borderRadius:"14px", background:CC.bgSoft }}>
        <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:CC.amberDk, margin:"0 0 0.6rem" }}>Not best for</p>
        <ul style={{ margin:0, paddingLeft:"1.25rem", fontSize:"14px", lineHeight:1.65, color:CC.ink2 }}>{notBestFor.map((item,i)=><li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  );
}

/* ─── DecisionShortcut — recommendation bullets ─── */
function DecisionShortcut({ items }) {
  return (
    <div style={{ padding:"1.35rem 1.5rem", border:`1px solid ${CC.border}`, borderLeft:`3px solid ${CC.brandDp}`, borderRadius:"14px", background:"linear-gradient(180deg,rgba(15,139,141,0.04),rgba(255,255,255,1))", margin:"1.5rem 0", fontFamily:CF }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:CC.brandDp, margin:"0 0 0.6rem" }}>Practical shortcut</p>
      <ul style={{ margin:0, paddingLeft:"1.25rem", fontSize:"14.5px", lineHeight:1.7, color:CC.ink2 }}>
        {items.map((item,i)=><li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

/* ─── BlueprintTier — single stage tier card ─── */
function BlueprintTier({ tag, title, lead, mustHave, avoid, accent = CC.blueprint }) {
  return (
    <article style={{ padding:"1.5rem", border:`1px solid ${CC.border}`, borderRadius:"14px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:CF }}>
      <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.4rem" }}>
        <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"0.15rem 0.55rem", borderRadius:"6px", background:`${accent}1a`, color:accent, fontSize:"11px", fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase" }}>{tag}</span>
      </div>
      <h3 style={{ fontSize:"18px", fontWeight:600, letterSpacing:"-0.02em", color:CC.ink, margin:"0 0 0.5rem", lineHeight:1.28 }}>{title}</h3>
      <p style={{ fontSize:"14px", lineHeight:1.65, color:CC.ink2, margin:"0 0 0.9rem" }}>{lead}</p>
      <p style={{ fontSize:"12px", fontWeight:700, color:CC.muted, letterSpacing:"0.06em", textTransform:"uppercase", margin:"0 0 0.35rem" }}>Must-have categories</p>
      <ul style={{ margin:"0 0 0.85rem", paddingLeft:"1.15rem", fontSize:"13.5px", lineHeight:1.65, color:CC.ink2 }}>{mustHave.map((m,i)=><li key={i}>{m}</li>)}</ul>
      {avoid && (
        <p style={{ fontSize:"13px", lineHeight:1.55, color:CC.muted, margin:"0.5rem 0 0", paddingTop:"0.75rem", borderTop:`1px solid ${CC.border}` }}>
          <strong style={{ color:CC.amberDk, fontWeight:600 }}>Avoid for now:</strong> {avoid}
        </p>
      )}
    </article>
  );
}

/* ─── PrincipleList — non-negotiable lean stack principles ─── */
function PrincipleList({ items, accent = CC.blueprint }) {
  return (
    <ol style={{ listStyle:"none", padding:0, margin:"1.5rem 0", display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"0.85rem", fontFamily:CF }}>
      {items.map((item,i)=>(
        <li key={i} style={{ display:"flex", gap:"0.85rem", padding:"1rem 1.1rem", border:`1px solid ${CC.border}`, borderRadius:"12px", background:CC.bgSoft }}>
          <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:`${accent}1a`, color:accent, fontSize:"12px", fontWeight:700, flexShrink:0 }}>{i+1}</span>
          <span style={{ fontSize:"14px", lineHeight:1.55, color:CC.ink, fontWeight:500, fontFamily:CF }}>{item}</span>
        </li>
      ))}
    </ol>
  );
}

/* ─── SetupSequence — numbered implementation steps with optional links ─── */
function SetupSequence({ steps, accent = CC.blueprint }) {
  return (
    <ol style={{ listStyle:"none", padding:0, margin:"1.5rem 0", fontFamily:CF }}>
      {steps.map((step,i)=>(
        <li key={i} style={{ display:"flex", gap:"1rem", padding:"1rem 0", borderBottom: i===steps.length-1 ? "none" : `1px solid ${CC.border}` }}>
          <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:"32px", height:"32px", borderRadius:"50%", background:`${accent}14`, color:accent, fontSize:"13px", fontWeight:700, flexShrink:0 }}>{i+1}</span>
          <div style={{ flex:1, paddingTop:"4px" }}>
            <p style={{ margin:0, fontSize:"15px", lineHeight:1.6, color:CC.ink2 }}>
              {step.title}
              {step.link && <a href="#" onClick={e=>e.preventDefault()} style={{ marginLeft:"0.35rem", color:accent, fontWeight:500, textDecoration:"none" }}> → {step.link}</a>}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ─── NextStepLinkBlock — linked list of best-next pages by outcome ─── */
function NextStepLinkBlock({ items, accent = CC.brandDp }) {
  return (
    <div style={{ padding:"1.5rem", border:`1px solid ${CC.border}`, borderRadius:"14px", background:"linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,1))", margin:"1.5rem 0", fontFamily:CF }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:CC.brandDp, margin:"0 0 0.85rem" }}>Next step by outcome</p>
      <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"0.65rem" }}>
        {items.map((item,i)=>(
          <li key={i} style={{ display:"flex", gap:"0.65rem", fontSize:"14.5px", lineHeight:1.55, color:CC.ink2 }}>
            <span style={{ color:CC.muted, flexShrink:0 }}>↳</span>
            <span><strong style={{ color:CC.ink, fontWeight:600 }}>{item.cond}</strong> — <a href="#" onClick={e=>e.preventDefault()} style={{ color:accent, fontWeight:500, textDecoration:"none" }}>{item.dest}</a></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── UtilityPanel — comparison & blueprint variants ─── */
function CompUtilityPanel({ type = "comparison" }) {
  const cfg = {
    comparison: { kicker:"Decision criteria", heading:"Use comparison pages to resolve one operating question", left:{h:"Judge by",items:["System-of-record fit","Coordination overhead","Constraints imposed on your workflow"]}, right:{h:"Avoid",body:"Do not treat these like broad software reviews. The useful outcome is a clear next decision, not a feature checklist with no workflow context."} },
    blueprint:  { kicker:"Implementation notes", heading:"Prefer the smallest stack shape that runs reliably", left:{h:"Pressure-test by",items:["Can you name what each tool owns?","Can you find current client status in one place?","Can you explain the upgrade trigger out loud?"]}, right:{h:"Why this matters",body:"Most stack pain is shape, not feature depth. Lean does not mean cheap — it means clear ownership and no duplicated truth. Add categories only when a real recurring bottleneck makes the need visible."} },
  };
  const c = cfg[type] || cfg.comparison;
  return (
    <div style={{ marginTop:"2rem", padding:"1.5rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:CF }}>
      <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:CC.amber, margin:"0 0 0.5rem" }}>{c.kicker}</p>
      <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:CC.ink, margin:"0 0 1rem", lineHeight:1.2 }}>{c.heading}</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"1.5rem" }}>
        <div>
          <h3 style={{ fontSize:"14.5px", fontWeight:600, color:CC.ink, margin:"0 0 0.6rem" }}>{c.left.h}</h3>
          <ul style={{ paddingLeft:"1.25rem", margin:0, color:CC.ink2, fontSize:"14px", lineHeight:1.7 }}>{c.left.items.map((item,i)=><li key={i}>{item}</li>)}</ul>
        </div>
        <div>
          <h3 style={{ fontSize:"14.5px", fontWeight:600, color:CC.ink, margin:"0 0 0.6rem" }}>{c.right.h}</h3>
          <p style={{ fontSize:"14px", lineHeight:1.65, color:CC.ink2, margin:0 }}>{c.right.body}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Mini related card (reused from glossary file pattern) ─── */
function CMiniCard({ title, type="Workflow", summary }) {
  const media = {
    Workflow:   "linear-gradient(135deg,rgba(15,139,141,0.26),rgba(8,92,110,0.78))",
    Blueprint:  "linear-gradient(135deg,rgba(31,112,149,0.22),rgba(17,38,52,0.78))",
    Comparison: "linear-gradient(135deg,rgba(184,130,63,0.26),rgba(104,78,54,0.72))",
    Asset:      "linear-gradient(135deg,rgba(15,139,141,0.18),rgba(184,130,63,0.42))",
    Glossary:   "linear-gradient(135deg,rgba(65,87,106,0.2),rgba(17,38,52,0.68))",
  };
  const clr = { Workflow:CC.brandDp, Blueprint:CC.blueprint, Comparison:CC.comparison, Asset:CC.brandDp, Glossary:"#475569" };
  const [hov, setHov] = React.useState(false);
  return (
    <article onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ overflow:"hidden", borderRadius:"14px", background:CC.bgSoft, cursor:"pointer", border:`1px solid ${hov?CC.borderHov:CC.border}`, boxShadow:hov?"0 8px 20px rgba(15,23,42,0.08)":"0 1px 2px rgba(15,23,42,0.04)", transform:hov?"translateY(-1px)":"none", transition:"all 160ms ease", fontFamily:CF }}>
      <div style={{ aspectRatio:"16/9", background:media[type]||media.Workflow }}></div>
      <div style={{ padding:"1rem" }}>
        <p style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", color:clr[type]||CC.brandDp, margin:"0 0 0.4rem" }}>{type}</p>
        <h3 style={{ fontSize:"15px", fontWeight:600, lineHeight:1.3, letterSpacing:"-0.02em", color:CC.ink, margin:"0 0 0.5rem" }}>{title}</h3>
        {summary && <p style={{ fontSize:"12.5px", lineHeight:1.55, color:CC.muted, margin:"0 0 0.6rem" }}>{summary}</p>}
        <span style={{ fontSize:"13px", fontWeight:500, color:CC.brandDp }}>Read page →</span>
      </div>
    </article>
  );
}

function CRelatedPanel({ items }) {
  return (
    <div style={{ marginTop:"2rem", padding:"1.5rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:CF }}>
      <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:CC.amber, margin:"0 0 0.4rem" }}>Continue the system</p>
      <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:CC.ink, margin:"0 0 0.25rem", lineHeight:1.2 }}>Related reading</h2>
      <p style={{ fontSize:"14px", color:CC.muted, margin:"0 0 1.25rem" }}>Move to the adjacent page that helps you act on this decision from another angle.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:"1rem" }}>
        {items.map((item,i)=><CMiniCard key={i} {...item} />)}
      </div>
    </div>
  );
}

/* ────────────────────────────────────
   COMPARISON PAGE
   maps to: layouts/_default/single.html  +  content/workflow-comparisons/*.md
   ──────────────────────────────────── */
function ComparisonPage({ onNavigate }) {
  return (
    <div style={{ background:CC.bg, fontFamily:CF }}>
      <div style={{ ...cWrap, padding:"2rem 2rem 5rem" }}>

        {/* Article header grid */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.16fr) minmax(260px,0.84fr)", gap:"1.5rem", marginBottom:"1.75rem" }}>
          <div style={{ padding:"2.2rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <CEyebrow>Workflow Comparisons</CEyebrow>
            <h1 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, maxWidth:"18ch", margin:"0 0 0.6rem", color:CC.ink, textWrap:"balance" }}>CRM vs Project Management Tool for Client Workflows</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:CC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>This is not a "which app is best" article. It is an operating-model decision about where active client truth should live — in lead tracking and pipeline (CRM-first) or in delivery, tasks, and milestones (PM-first).</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"1.25rem" }}>
              <CPill variant="copper">Comparison</CPill>
              <CPill variant="teal">Decision guide</CPill>
              <CPill variant="slate">Updated Mar 18, 2026</CPill>
            </div>
            <div style={{ aspectRatio:"16/9", borderRadius:"12px", background:"linear-gradient(135deg,rgba(184,130,63,0.26),rgba(104,78,54,0.72))", overflow:"hidden" }}></div>
          </div>

          <aside style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <CAsideCard label="Use this page for" body="Deciding where active client truth should live — CRM-first, PM-first, or hybrid — before adding more tools to the stack." />
            <CAsideCard label="Section hub" body="Use the Workflow Comparisons hub if you need the broader decision-cluster view before narrowing to one comparison." />
            <CAsideCard label="Best next move" body="After this page, open the lean stack blueprint to apply the chosen model to a real operating stack." variant="soft" />
            <CAsideCard label="Page type" body="Comparison page with one bounded operational decision, not a software feature roundup." variant="muted" />
          </aside>
        </div>

        {/* Reading layout */}
        <div style={{ width:"min(100%,940px)", padding:"2.2rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
          <div style={{ maxWidth:"720px" }}>

            <h2 style={{ fontSize:"27px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.22, marginBottom:"1.1rem", color:CC.ink }}>Decision context — what you are actually choosing</h2>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>You are choosing where the truth about client work lives — CRM-first (lifecycle and follow-up), PM-first (delivery execution), or hybrid (both with explicit boundaries). Narrower tool comparisons only make sense once this system-center choice is clear.</p>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>If your process fails because client context gets lost between lead, delivery, and billing, your main issue is usually <strong>system-of-record mismatch</strong>. This decision shapes where handoffs, updates, and next actions are maintained across the whole lifecycle.</p>

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>The three operating models</h3>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:"1rem", margin:"1.25rem 0 1.75rem" }}>
              <ModelCard label="Model 1" title="CRM-first" accent={CC.brandDp} fields={[
                { label:"Best for",      body:"High lead volume, multiple opportunities per month, long sales cycles." },
                { label:"Strengths",     body:"Pipeline visibility, follow-up ownership." },
                { label:"Tradeoffs",     body:"Delivery tracking may be weak unless documented elsewhere." },
                { label:"Failure mode",  body:"Clients won but delivery execution becomes scattered." },
              ]} />
              <ModelCard label="Model 2" title="PM-first" accent={CC.blueprint} fields={[
                { label:"Best for",      body:"Low-to-medium lead volume, delivery-heavy business, repeatable scope." },
                { label:"Strengths",     body:"Milestones, dependencies, and deliverables easier to track." },
                { label:"Tradeoffs",     body:"Pre-sale and opportunity tracking can be limited." },
                { label:"Failure mode",  body:"Weak lead qualification and inconsistent follow-up before kickoff." },
              ]} />
              <ModelCard label="Model 3" title="Hybrid" accent={CC.comparison} fields={[
                { label:"Best for",      body:"Both active pipeline and multi-project delivery, equally complex." },
                { label:"Strengths",     body:"Strongest visibility across full lifecycle." },
                { label:"Tradeoffs",     body:"Higher admin overhead and integration complexity." },
                { label:"Failure mode",  body:"Duplicated data, inconsistent ownership, process confusion." },
              ]} />
            </div>

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Criteria matrix</h3>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"0.5rem" }}>Compare on what shapes the stack, not on feature counts:</p>
            <ProseTable
              headers={["Criteria", "CRM-first", "PM-first", "Hybrid"]}
              rows={[
                ["Pipeline clarity",     "Strong", "Limited", "Strong"],
                ["Delivery execution",   "Medium", "Strong",  "Strong"],
                ["Admin overhead",       "Medium", "Low",     "High"],
                ["Setup complexity",     "Medium", "Low",     "High"],
                ["Best early-stage fit", "If lead-heavy", "If delivery-heavy", "Rarely"],
              ]}
            />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>A practical shortcut for choosing</h3>
            <DecisionShortcut items={[
              <span><strong>CRM-first</strong> if you lose more revenue before kickoff than after kickoff.</span>,
              <span><strong>PM-first</strong> if most friction appears after the work starts.</span>,
              <span><strong>Hybrid</strong> only if both problems are persistently true and you can name the ownership boundary in one sentence.</span>,
            ]} />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Choose this if</h3>
            <BestForBlock
              bestFor={[
                "You can name where pipeline truth should live today",
                "You can describe what changes the moment a deal closes",
                "You can maintain the chosen system without daily reconciliation",
              ]}
              notBestFor={[
                "The lifecycle itself is still fuzzy",
                "You are tempted to add both CRM and PM before any process is documented",
                "Hybrid sounds advanced but you cannot describe the ownership boundary",
              ]}
            />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Next step by outcome</h3>
            <NextStepLinkBlock items={[
              { cond:"If you chose CRM-first", dest:"How to Build a Client Intake and Qualification Workflow" },
              { cond:"If you chose PM-first",  dest:"Client Onboarding Workflow for Freelancers and Consultants" },
              { cond:"If you chose Hybrid",    dest:"Software Stack Blueprint: Solo Freelancer (Lean Budget)" },
              { cond:"For any model",          dest:"Software Stack Blueprint: Solo Freelancer (Lean Budget)" },
            ]} />

            <CompUtilityPanel type="comparison" />
            <CRelatedPanel items={[
              { title:"Software Stack Blueprint: Solo Freelancer (Lean Budget)", type:"Blueprint", summary:"Apply the chosen operating model to a real stack shape." },
              { title:"All-in-One Workspace vs Specialized Stack", type:"Comparison", summary:"Once system center is set, choose whether to stay consolidated." },
              { title:"System of Record", type:"Glossary", summary:"The definition behind this decision — read this if the term is fuzzy." },
            ]} />

          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────
   BLUEPRINT PAGE
   maps to: layouts/_default/single.html  +  content/software-stack-blueprints/*.md
   ──────────────────────────────────── */
function BlueprintPage({ onNavigate }) {
  return (
    <div style={{ background:CC.bg, fontFamily:CF }}>
      <div style={{ ...cWrap, padding:"2rem 2rem 5rem" }}>

        {/* Article header grid */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.16fr) minmax(260px,0.84fr)", gap:"1.5rem", marginBottom:"1.75rem" }}>
          <div style={{ padding:"2.2rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <CEyebrow>Software Stack Blueprints</CEyebrow>
            <h1 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, maxWidth:"18ch", margin:"0 0 0.6rem", color:CC.ink, textWrap:"balance" }}>Software Stack Blueprint: Solo Freelancer (Lean Budget)</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:CC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>A staged stack blueprint for solo operators who want the smallest reliable tool setup. The standard is not most powerful — it is clear enough to maintain alone and lean enough to upgrade only when the workflow demands it.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"1.25rem" }}>
              <CPill variant="blue">Blueprint</CPill>
              <CPill variant="teal">Decision guide</CPill>
              <CPill variant="slate">Updated Mar 12, 2026</CPill>
            </div>
            <div style={{ aspectRatio:"16/9", borderRadius:"12px", background:"linear-gradient(135deg,rgba(31,112,149,0.22),rgba(17,38,52,0.78))", overflow:"hidden" }}></div>
          </div>

          <aside style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <CAsideCard label="Use this page for" body="Defining the smallest reliable stack shape by business stage — after the workflow is clear and the system-of-record question is settled." accent={CC.blueprint} />
            <CAsideCard label="Section hub" body="Use the Software Stack Blueprints hub if you need the broader cluster view before going narrower." accent={CC.blueprint} />
            <CAsideCard label="Best next move" body="After this page, open CRM vs PM if the operating model is still unclear, or the intake workflow to put the stack into practice." variant="soft" accent={CC.blueprint} />
            <CAsideCard label="Page type" body="Blueprint page with operational stack guidance, not a software roundup." variant="muted" accent={CC.blueprint} />
          </aside>
        </div>

        {/* Reading layout */}
        <div style={{ width:"min(100%,940px)", padding:"2.2rem", border:`1px solid ${CC.border}`, borderRadius:"16px", background:CC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
          <div style={{ maxWidth:"720px" }}>

            <h2 style={{ fontSize:"27px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.22, marginBottom:"1.1rem", color:CC.ink }}>Lean stack principles (non-negotiable)</h2>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"0.5rem" }}>Most freelancers do not fail because they chose the wrong tool. They fail because they buy too much software before their workflow is stable. These four rules apply at every stage:</p>
            <PrincipleList items={[
              "One system of record for active client work.",
              "One place for communication history per client.",
              "Billing tied to milestones, not memory.",
              "No tool purchase without a workflow bottleneck it solves.",
            ]} />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>What this blueprint assumes</h3>
            <ul style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>
              <li>You are the main operator.</li>
              <li>Client work moves through a repeatable sequence, even if services vary.</li>
              <li>You want to keep the stack lean until recurring pressure justifies expansion.</li>
              <li>You care more about reliability than feature depth for its own sake.</li>
            </ul>

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Stage-based stack tiers</h3>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"0.5rem" }}>Match the tier to the current active-client load, not to a future scenario you have not validated yet.</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:"1rem", margin:"1.25rem 0 1.75rem" }}>
              <BlueprintTier tag="Starter" title="0–5 active clients" lead="You need reliability, not customization." mustHave={["Intake + qualification capture","Work tracking","File/docs storage","Invoicing","Scheduling/comms"]} avoid="automation suites, advanced reporting, multi-tool syncing layers." />
              <BlueprintTier tag="Stable" title="5–15 active clients" lead="You need predictable handoffs and cleaner visibility." mustHave={["Better pipeline visibility","Template library for recurring work","Light automation for repetitive status updates"]} avoid="cross-tool integration unless one specific handoff is repeatedly failing." />
              <BlueprintTier tag="Scaling" title="15+ active clients or retainers" lead="You need coordination consistency and lower admin drag." mustHave={["Role-based workflows","Cross-project dashboards","Integration tooling (only after core process is stable)"]} avoid="adopting enterprise patterns before the smaller stack is consistently reliable." />
            </div>

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Category decision table</h3>
            <ProseTable
              headers={["Category","Starter default","Upgrade trigger","Overbuying warning"]}
              rows={[
                ["System of record", "PM-first or simple CRM",         "Too many missed follow-ups or hidden handoffs", "Buying both CRM and PM before clear need"],
                ["Documentation",   "Shared docs + template folder",   "Repeated onboarding friction",                  "Over-structuring docs no one reuses"],
                ["Scheduling",      "Basic booking + calendar sync",   "High no-show rate",                              "Paying for advanced routing you do not use"],
                ["Billing",         "Simple invoicing with reminders", "Payment delays beyond terms",                    "Layering finance tools before process discipline"],
                ["Automation",      "Mostly manual checklists",        "Same action repeated weekly",                    "Automating unstable processes"],
              ]}
            />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>When this blueprint fits — and when it does not</h3>
            <BestForBlock
              bestFor={[
                "You operate solo and want the smallest reliable setup",
                "You already know which category should hold active client truth",
                "You can describe one current bottleneck the next upgrade should solve",
              ]}
              notBestFor={[
                "The lifecycle itself is still unclear — start with the workflow anchor",
                "You are still deciding CRM-first vs PM-first — open that comparison first",
                "You manage a team of 3+ — this blueprint optimizes for solo coordination",
              ]}
            />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Setup sequence</h3>
            <p style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"0.5rem" }}>Use this order — each step assumes the prior one is settled enough to commit to.</p>
            <SetupSequence steps={[
              { title:"Validate your stage against the workflow anchor page.",        link:"Freelance Client Workflow System" },
              { title:"Choose the system-of-record model.",                            link:"CRM vs Project Management Tool" },
              { title:"Implement intake discipline before adding tools.",              link:"Client Intake and Qualification Workflow" },
              { title:"Compare delivery workspace options if PM-first.",               link:"Notion vs ClickUp for Solo Client Delivery" },
              { title:"Document system-of-record rules so ownership stays clear.",     link:"System-of-Record Rules Worksheet" },
              { title:"Run a weekly review for 30 days before automating anything.",   link:"Weekly Client Operations Checklist" },
            ]} accent={CC.blueprint} />

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Maintenance caveats</h3>
            <ul style={{ fontFamily:CP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>
              <li>Re-run the category decision table once per quarter — most overbuying happens between formal stack reviews.</li>
              <li>Delay any automation until the manual process has worked cleanly for several cycles.</li>
              <li>If the stack already feels fragmented, do not add tools — open the migration guide first.</li>
            </ul>

            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:CC.ink }}>Next step by outcome</h3>
            <NextStepLinkBlock items={[
              { cond:"If the system-of-record question is still open", dest:"CRM vs Project Management Tool for Client Workflows" },
              { cond:"If the stack already feels fragmented",          dest:"How to Migrate from Scattered Tools to One Workflow System" },
              { cond:"If buying pressure is the real issue",           dest:"How to Choose a Software Stack Without Overbuying Tools" },
              { cond:"If ownership feels vague between tools",         dest:"System-of-Record Rules Worksheet for Solo Operators" },
            ]} accent={CC.blueprint} />

            <CompUtilityPanel type="blueprint" />
            <CRelatedPanel items={[
              { title:"CRM vs Project Management Tool for Client Workflows", type:"Comparison", summary:"Decide where active client truth should live before locking in the stack." },
              { title:"How to Migrate from Scattered Tools to One Workflow System", type:"Blueprint", summary:"For when the current stack is already too fragmented to clean up from memory." },
              { title:"Stack Audit / Consolidation Worksheet", type:"Asset", summary:"Document the current stack before changing anything." },
            ]} />

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Export to window ─── */
Object.assign(window, {
  ComparisonPage,
  BlueprintPage,
  CompUtilityPanel,
  ModelCard,
  BestForBlock,
  BlueprintTier,
  PrincipleList,
  SetupSequence,
  NextStepLinkBlock,
  DecisionShortcut,
  ProseTable,
});
