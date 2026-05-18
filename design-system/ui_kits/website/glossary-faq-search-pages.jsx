/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — Glossary, FAQ & Search screens
   Requires: React (global), loaded after index.html main script
   ──────────────────────────────────────────────────────────── */

/* ─── Local design tokens (scoped to this file) ─── */
const GF = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const GP = '"Lora",Georgia,"Times New Roman",serif';
const GC = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b",
  border:"rgba(226,232,240,1)", borderHov:"rgba(203,213,225,1)",
  bg:"#fafbfc", bgSoft:"#f8fafc", card:"#ffffff",
  brand:"#0f8b8d", brandDp:"#0f766e",
  amber:"#b8823f", amberSf:"#fff3e3", amberDk:"#926227",
};
const gWrap = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };
const gAside = { padding:"1.25rem", border:`1px solid ${GC.border}`, borderRadius:"14px", background:GC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontSize:"14px", lineHeight:1.65, fontFamily:GF };

/* ─── Real site data ─── */
const GLOSSARY_TERMS = [
  { title:"System of Record",  summary:"The single tool that holds authoritative, current truth for a given category of information in your client operations.", dest:"/comparisons/crm-vs-project-management-tool-for-client-workflows/" },
  { title:"Workflow Handoff",  summary:"The defined moment when ownership of a stage outcome, decision, or input transfers from one owner to the next.", dest:"/workflows/proposal-to-contract-handoff-workflow-setup/" },
  { title:"Approval Owner",    summary:"The named person with actual authority to move a deliverable, change request, or milestone forward — not just the person who expresses a preference.", dest:"/workflows/change-request-workflow-for-freelancers-and-consultants/" },
  { title:"Next Action Owner", summary:"The person who holds the immediate next task in a workflow sequence — the one whose inaction blocks forward progress.", dest:"/workflows/client-status-update-workflow-for-freelancers-and-consultants/" },
  { title:"Client Dependency", summary:"A named input, decision, or access item the client must provide before the next stage can proceed cleanly.", dest:"/workflows/milestone-delivery-workflow-for-solo-service-businesses/" },
];

const FAQ_ITEMS = [
  { title:"Setting Up a Solo Service Workflow Stack",                                   summary:"Tool order, stack size, and setup sequence for solo operators building a lean client operations stack." },
  { title:"Reviewing and Maintaining a Solo Service Workflow System",                   summary:"How to run a recurring workflow review without overcomplicating the audit." },
  { title:"What Should I Do When a Client Goes Silent During Review?",                  summary:"How to respond when approval or feedback stalls mid-project without damaging the relationship." },
  { title:"What Should I Do When Required Client Inputs Are Late or Incomplete?",       summary:"How to keep delivery moving when missing access, assets, or decisions are blocking the next milestone." },
  { title:"What Counts as Client Approval Before Billing or the Next Stage Starts?",    summary:"How to recognize a valid approval signal and avoid billing disputes from ambiguous responses." },
  { title:"What Should I Do When a Client Does Not Respond to Final Project Closeout?", summary:"How to close a project cleanly when the client has gone quiet after all deliverables are settled." },
  { title:"What Should I Do When a Client Has Not Approved or Rejected Deliverables?",  summary:"How to move forward when deliverable review loops are stalled with no clear decision." },
];

const SEARCH_RESULTS = [
  { title:"Freelance Client Workflow System: Inquiry to Final Payment", type:"Workflow",    summary:"End-to-end operating sequence from inquiry through delivery, billing, and project close." },
  { title:"CRM vs Project Management Tool for Client Workflows",        type:"Comparison",  summary:"One bounded decision: which system should anchor client operations as the system of record." },
  { title:"Client Onboarding Workflow for Freelancers and Consultants", type:"Workflow",    summary:"How to align communication, access, assets, and kickoff scope after a client signs." },
  { title:"Software Stack Blueprint: Solo Freelancer (Lean Budget)",    type:"Blueprint",   summary:"A lean tool model for solo operators with clear stack boundaries and a single system of record." },
  { title:"Invoice and Payment Workflow Setup for Freelancers",         type:"Workflow",    summary:"Define your invoicing trigger, format, delivery method, and follow-up rules in one place." },
  { title:"System of Record",                                           type:"Glossary",    summary:"The single tool that holds authoritative current truth for a given category of information." },
];

const TYPE_CLR = { Workflow:"#0f766e", Blueprint:"#1d6fa4", Comparison:"#9a6b33", Glossary:"#475569", FAQ:"#475569", Asset:"#0f766e" };
const TYPE_MEDIA = {
  Workflow:   "linear-gradient(135deg,rgba(15,139,141,0.26),rgba(8,92,110,0.78))",
  Blueprint:  "linear-gradient(135deg,rgba(31,112,149,0.22),rgba(17,38,52,0.78))",
  Comparison: "linear-gradient(135deg,rgba(184,130,63,0.26),rgba(104,78,54,0.72))",
  Glossary:   "linear-gradient(135deg,rgba(65,87,106,0.2),rgba(17,38,52,0.68))",
  FAQ:        "linear-gradient(135deg,rgba(65,87,106,0.2),rgba(17,38,52,0.68))",
};

/* ─── Shared helpers ─── */
function GEyebrow({ children }) {
  return <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.85rem", fontFamily:GF }}>{children}</p>;
}
function GPill({ children, variant="teal" }) {
  const v = { teal:{background:"#ccfbf1",color:"#0f766e"}, slate:{background:"#f1f5f9",color:"#64748b"}, amber:{background:GC.amberSf,color:GC.amberDk} };
  return <span style={{ display:"inline-flex", alignItems:"center", padding:"0.35rem 0.72rem", borderRadius:"999px", fontSize:"12px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", fontFamily:GF, ...v[variant] }}>{children}</span>;
}
function GJourneyNote({ children }) {
  return <div style={{ padding:"1rem 1.05rem", border:`1px solid ${GC.border}`, borderRadius:"14px", background:GC.bgSoft, fontSize:"14px", lineHeight:1.65, color:GC.ink2, fontFamily:GF }}>{children}</div>;
}
function GStat({ count, label }) {
  return (
    <div style={{ padding:"1rem 1.05rem", border:`1px solid ${GC.border}`, borderRadius:"14px", background:GC.bgSoft }}>
      <span style={{ display:"block", fontSize:"2rem", fontWeight:700, color:GC.ink, lineHeight:1, fontFamily:GF }}>{count}</span>
      <p style={{ fontSize:"14px", color:GC.ink2, margin:"0.2rem 0 0", fontFamily:GF }}>{label}</p>
    </div>
  );
}
function GFeaturedLink({ label, title }) {
  return (
    <div style={{ padding:"1rem 1.05rem", border:`1px solid ${GC.border}`, borderRadius:"14px", background:GC.card }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:GC.muted, margin:"0 0 0.4rem", fontFamily:GF }}>{label}</p>
      <a href="#" style={{ fontSize:"14px", fontWeight:600, color:GC.ink, textDecoration:"none", fontFamily:GF }}>{title} →</a>
    </div>
  );
}

/* ─── UtilityPanel (page-type-block) ─── */
function UtilityPanel({ type = "workflow" }) {
  const cfg = {
    workflow:   { kicker:"Workflow checkpoints",   heading:"Keep the system usable under delivery pressure", left:{h:"Track these every time",items:["Named owner for each handoff","Required input before work moves forward","Observable output that marks the stage complete"]}, right:{h:"Why it matters",body:"Most workflow failure is not caused by weak effort. It comes from missing transitions, fuzzy ownership, and work moving before the previous stage is actually complete."} },
    comparison: { kicker:"Decision criteria",      heading:"Use comparison pages to resolve one operating question", left:{h:"Judge by",items:["System-of-record fit","Coordination overhead","Constraints imposed on your workflow"]}, right:{h:"Avoid",body:"Do not treat these like broad software reviews. The useful outcome is a clear next decision, not a feature checklist with no workflow context."} },
    template:   { kicker:"Implementation asset",   heading:"Use the checklist inside a live workflow, not in isolation", left:{h:"Best use pattern",items:["Run it against one real client","Trim anything that never happens","Attach it to a trigger in your process"]}, right:{h:"Expected result",body:"The page becomes part of your operating routine instead of another standalone document that looks useful but does not change the workflow."} },
    glossary:   { kicker:"In practice", heading:"Use definitions to sharpen decisions", body:"This term matters only when it improves how you design a workflow, choose a system of record, or clarify ownership. It should reduce ambiguity, not add jargon." },
    faq:        { kicker:"Quick answer", heading:"Use the answer to unblock the next move", body:"The right outcome for an FAQ is clarity plus a next implementation page. If you still feel stuck, the blocker is probably workflow design rather than the surface question." },
  };
  const c = cfg[type] || cfg.workflow;
  return (
    <div style={{ marginTop:"2rem", padding:"1.5rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:GC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:GF }}>
      <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.5rem" }}>{c.kicker}</p>
      <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:GC.ink, margin:"0 0 1rem", lineHeight:1.2 }}>{c.heading}</h2>
      {c.body ? (
        <p style={{ fontSize:"15px", lineHeight:1.65, color:GC.ink2, margin:0 }}>{c.body}</p>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
          <div>
            <h3 style={{ fontSize:"14.5px", fontWeight:600, color:GC.ink, margin:"0 0 0.6rem" }}>{c.left.h}</h3>
            <ul style={{ paddingLeft:"1.25rem", margin:0, color:GC.ink2, fontSize:"14px", lineHeight:1.7 }}>{c.left.items.map((item,i)=><li key={i}>{item}</li>)}</ul>
          </div>
          <div>
            <h3 style={{ fontSize:"14.5px", fontWeight:600, color:GC.ink, margin:"0 0 0.6rem" }}>{c.right.h}</h3>
            <p style={{ fontSize:"14px", lineHeight:1.65, color:GC.ink2, margin:0 }}>{c.right.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── MiniCard (compact page card for related panels) ─── */
function GMiniCard({ title, type="Workflow", summary }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ overflow:"hidden", borderRadius:"14px", background:GC.bgSoft, cursor:"pointer", border:`1px solid ${hov?GC.borderHov:GC.border}`, boxShadow:hov?"0 8px 20px rgba(15,23,42,0.08)":"0 1px 2px rgba(15,23,42,0.04)", transform:hov?"translateY(-1px)":"none", transition:"all 160ms ease", fontFamily:GF }}>
      <div style={{ aspectRatio:"16/9", background:TYPE_MEDIA[type]||TYPE_MEDIA.Workflow }}></div>
      <div style={{ padding:"1rem" }}>
        <p style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", color:TYPE_CLR[type]||GC.brandDp, margin:"0 0 0.4rem" }}>{type}</p>
        <h3 style={{ fontSize:"15px", fontWeight:600, lineHeight:1.3, letterSpacing:"-0.02em", color:GC.ink, margin:"0 0 0.5rem" }}>{title}</h3>
        {summary && <p style={{ fontSize:"12.5px", lineHeight:1.55, color:GC.muted, margin:"0 0 0.6rem" }}>{summary}</p>}
        <span style={{ fontSize:"13px", fontWeight:500, color:GC.brandDp }}>Read page →</span>
      </div>
    </article>
  );
}

/* ─── RelatedPanel ─── */
function RelatedPanel({ items }) {
  return (
    <div style={{ marginTop:"2rem", padding:"1.5rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:GC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:GF }}>
      <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.4rem" }}>Continue the system</p>
      <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.03em", color:GC.ink, margin:"0 0 0.25rem", lineHeight:1.2 }}>Related reading</h2>
      <p style={{ fontSize:"14px", color:GC.muted, margin:"0 0 1.25rem", fontFamily:GF }}>Move to the adjacent page that helps you tighten the same workflow from another angle.</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:"1rem" }}>
        {items.map((item,i)=><GMiniCard key={i} {...item} />)}
      </div>
    </div>
  );
}

/* ─── Article aside card ─── */
function GAsideCard({ label, body, variant="default" }) {
  const bg = variant==="soft" ? "linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,1))" : variant==="muted" ? GC.bgSoft : GC.card;
  return (
    <div style={{ ...gAside, background:bg }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:GC.brandDp, margin:"0 0 0.4rem" }}>{label}</p>
      <p style={{ color:GC.ink2, margin:0 }}>{body}</p>
    </div>
  );
}

/* ────────────────────────────────────
   GLOSSARY HUB PAGE
   ──────────────────────────────────── */
function GlossaryHubPage({ onNavigate }) {
  return (
    <div style={{ background:GC.bg, fontFamily:GF }}>
      <div style={{ ...gWrap, padding:"2.5rem 2rem 5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.24fr) minmax(260px,0.76fr)", gap:"1.5rem", marginBottom:"2.5rem" }}>
          <div style={{ padding:"2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <GEyebrow>Section hub</GEyebrow>
            <h1 style={{ fontSize:"clamp(1.9rem,3.8vw,2.8rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:"0.75rem", fontFamily:GF, textWrap:"balance" }}>Plain-English terms for clearer workflow decisions</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:GC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>Use this glossary when a term is actively blocking a decision. The goal is not vocabulary for its own sake — it is to remove ambiguity around ownership, handoffs, records, and workflow structure.</p>
            <p style={{ fontSize:"15px", lineHeight:1.65, color:GC.ink2, margin:"0 0 1.25rem" }}>Open one term, remove the ambiguity, then go directly to the linked workflow or comparison page.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              <GPill variant="teal">Glossary</GPill>
              <GPill variant="slate">Reference</GPill>
              <GPill variant="slate">Updated 2025</GPill>
            </div>
          </div>
          <div style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:GC.muted, margin:"0 0 0.15rem", fontFamily:GF }}>Start here</p>
            <GJourneyNote>
              <strong style={{ display:"block", marginBottom:"0.4rem", color:GC.ink }}>Use this hub as a curated starting point.</strong>
              Open the term that is actively blocking a decision. Read only long enough to remove the ambiguity, then leave for the linked implementation page.
            </GJourneyNote>
            <GStat count="5" label="terms in this hub" />
            <GFeaturedLink label="Best first term" title="System of Record" />
          </div>
        </div>

        <div style={{ marginBottom:"1.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.4rem", fontFamily:GF }}>All terms</p>
          <h2 style={{ fontSize:"28px", fontWeight:600, letterSpacing:"-0.04em", margin:"0 0 0.4rem", color:GC.ink, fontFamily:GF }}>Workflow vocabulary that affects decisions</h2>
          <p style={{ fontSize:"16px", color:GC.muted, margin:"0 0 1.5rem", fontFamily:GF }}>Open the term that is blocking progress. Leave for the linked workflow or comparison page as soon as it is clear.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"1.25rem" }}>
          {GLOSSARY_TERMS.map((term,i)=><TermCard key={i} term={term} onNavigate={onNavigate} />)}
        </div>
      </div>
    </div>
  );
}

function TermCard({ term, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article onClick={()=>onNavigate("glossary-term")} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ padding:"1.5rem", borderRadius:"16px", background:GC.card, cursor:"pointer", border:`1px solid ${hov?GC.borderHov:GC.border}`, boxShadow:hov?"0 8px 20px rgba(15,23,42,0.07)":"0 1px 2px rgba(15,23,42,0.04)", transform:hov?"translateY(-1px)":"none", transition:"all 160ms ease", fontFamily:GF }}>
      <p style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", color:"#475569", margin:"0 0 0.5rem" }}>Glossary</p>
      <h3 style={{ fontSize:"20px", fontWeight:600, letterSpacing:"-0.03em", color:GC.ink, margin:"0 0 0.6rem" }}>{term.title}</h3>
      <p style={{ fontSize:"14px", lineHeight:1.65, color:GC.ink2, margin:"0 0 1rem" }}>{term.summary}</p>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:"0.75rem", borderTop:`1px solid ${GC.border}` }}>
        <span style={{ fontSize:"12px", color:GC.muted }}>Affects: workflow design, tool choice</span>
        <span style={{ fontSize:"13px", fontWeight:500, color:GC.brandDp }}>View term →</span>
      </div>
    </article>
  );
}

/* ────────────────────────────────────
   GLOSSARY TERM PAGE
   ──────────────────────────────────── */
function GlossaryTermPage({ onNavigate }) {
  return (
    <div style={{ background:GC.bg, fontFamily:GF }}>
      <div style={{ ...gWrap, padding:"2rem 2rem 5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.16fr) minmax(260px,0.84fr)", gap:"1.5rem", marginBottom:"1.75rem" }}>
          <div style={{ padding:"2.2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <GEyebrow>Glossary</GEyebrow>
            <h1 style={{ fontSize:"clamp(2rem,3.8vw,2.9rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, maxWidth:"16ch", margin:"0 0 0.6rem", color:GC.ink, textWrap:"balance" }}>System of Record</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:GC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>The single tool that holds authoritative, current truth for a given category of information in your client operations.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              <GPill variant="teal">Glossary</GPill>
              <GPill variant="slate">Definition</GPill>
              <GPill variant="slate">Updated Jan 2, 2025</GPill>
            </div>
          </div>
          <div style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <GAsideCard label="Use this term for" body="When the main question is where active client truth should live — especially before deciding between a CRM and a project management tool." />
            <GAsideCard label="Section hub" body="Use the Glossary hub for a broader term reference before narrowing to one concept." />
            <GAsideCard label="Best next move" body="After this term, open the CRM vs PM comparison to apply the system-of-record concept to a real tool decision." variant="soft" />
            <GAsideCard label="Page type" body="Glossary term with a bounded definition and a linked implementation page." variant="muted" />
          </div>
        </div>
        <div style={{ width:"min(100%,940px)", padding:"2.2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:GC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
          <div style={{ maxWidth:"720px" }}>
            <h2 style={{ fontSize:"27px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.22, marginBottom:"1.1rem", color:GC.ink }}>What "system of record" means in practice</h2>
            <p style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>A system of record is not just the tool you use most often. It is the tool you treat as the single authoritative source of truth for a specific type of operational information. Most solo operators have more than one "home" for client status — which is what creates duplication, confusion, and handoff failure.</p>
            <p style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>For a freelancer managing 5–10 active clients, the most common systems of record are: a CRM for pipeline and client relationship history, a project management tool for task and milestone tracking, and an invoicing tool for billing records. The problem is not having three tools — it is not knowing which one is authoritative when there is a conflict.</p>
            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:GC.ink }}>Common failure patterns</h3>
            <ul style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>
              <li>Client status lives in both a CRM and a project tool, and the two never match</li>
              <li>Invoicing tool shows a different project close date than the PM tool</li>
              <li>Email threads hold approved scope that contradicts the signed proposal</li>
            </ul>
            <blockquote style={{ borderLeft:"4px solid rgba(20,184,166,0.22)", padding:"0.35rem 0 0.35rem 1rem", color:"#475569", fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, marginBottom:"1.35rem", fontStyle:"italic" }}>The system of record question is: if two tools disagree, which one is correct by rule?</blockquote>
            <UtilityPanel type="glossary" />
            <RelatedPanel items={[
              { title:"CRM vs Project Management Tool for Client Workflows", type:"Comparison", summary:"Apply the system-of-record concept to a real tool decision." },
              { title:"Workflow Handoff", type:"Glossary", summary:"What should transfer between stages in a clean operating sequence." },
              { title:"Freelance Client Workflow System", type:"Workflow", summary:"Map the full lifecycle before choosing where current truth lives." },
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────
   FAQ HUB PAGE
   ──────────────────────────────────── */
function FaqHubPage({ onNavigate }) {
  return (
    <div style={{ background:GC.bg, fontFamily:GF }}>
      <div style={{ ...gWrap, padding:"2.5rem 2rem 5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.24fr) minmax(260px,0.76fr)", gap:"1.5rem", marginBottom:"2.5rem" }}>
          <div style={{ padding:"2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <GEyebrow>Section hub</GEyebrow>
            <h1 style={{ fontSize:"clamp(1.9rem,3.8vw,2.8rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:"0.75rem", fontFamily:GF, textWrap:"balance" }}>Narrow answers for specific workflow blockers</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:GC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>Use this section for recurring setup questions that do not need a full guide. Each answer is a recommendation boundary — use it to unblock the next move, then go directly to the stronger linked guide.</p>
            <p style={{ fontSize:"15px", lineHeight:1.65, color:GC.ink2, margin:"0 0 1.25rem" }}>If more than one question looks relevant at the same time, the real problem is probably broader. Return to a cornerstone workflow, blueprint, or comparison page instead.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              <GPill variant="teal">FAQ</GPill>
              <GPill variant="slate">Support pages</GPill>
              <GPill variant="slate">Updated 2025</GPill>
            </div>
          </div>
          <div style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:GC.muted, margin:"0 0 0.15rem", fontFamily:GF }}>Start here</p>
            <GJourneyNote>
              <strong style={{ display:"block", marginBottom:"0.4rem", color:GC.ink }}>Use this hub as a routing layer.</strong>
              Open one FAQ page, get a recommendation boundary, then leave for the stronger workflow, blueprint, comparison, or template page linked from the answer.
            </GJourneyNote>
            <GStat count="7" label="answers in this hub" />
          </div>
        </div>

        <div style={{ marginBottom:"1.5rem" }}>
          <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.4rem", fontFamily:GF }}>All answers</p>
          <h2 style={{ fontSize:"28px", fontWeight:600, letterSpacing:"-0.04em", margin:"0 0 0.4rem", color:GC.ink, fontFamily:GF }}>Open the page that matches your current blocker</h2>
          <p style={{ fontSize:"16px", color:GC.muted, margin:"0 0 1.5rem", fontFamily:GF }}>If more than one looks relevant, the real blocker is probably broader — open the lifecycle workflow instead.</p>
        </div>
        <div style={{ display:"grid", gap:"0.85rem" }}>
          {FAQ_ITEMS.map((faq,i)=><FaqListItem key={i} faq={faq} onNavigate={onNavigate} />)}
        </div>
      </div>
    </div>
  );
}

function FaqListItem({ faq, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article onClick={()=>onNavigate("faq-article")} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ display:"flex", alignItems:"flex-start", gap:"1rem", padding:"1.1rem 1.25rem", border:`1px solid ${hov?"#0f766e":GC.border}`, borderRadius:"14px", background:GC.card, cursor:"pointer", boxShadow:hov?"0 6px 16px rgba(15,118,110,0.08)":"0 1px 2px rgba(15,23,42,0.04)", transform:hov?"translateY(-1px)":"none", transition:"all 150ms ease", fontFamily:GF }}>
      <span style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", borderRadius:"50%", background:"rgba(15,139,141,0.1)", color:GC.brandDp, fontSize:"12px", fontWeight:700, flexShrink:0, marginTop:"2px" }}>Q</span>
      <div style={{ flex:1 }}>
        <h3 style={{ fontSize:"16px", fontWeight:600, letterSpacing:"-0.01em", color:GC.ink, margin:"0 0 0.3rem", lineHeight:1.3 }}>{faq.title}</h3>
        <p style={{ fontSize:"13.5px", lineHeight:1.6, color:GC.muted, margin:0 }}>{faq.summary}</p>
      </div>
      <span style={{ fontSize:"13px", fontWeight:500, color:GC.brandDp, flexShrink:0, alignSelf:"center" }}>View →</span>
    </article>
  );
}

/* ────────────────────────────────────
   FAQ ARTICLE PAGE
   ──────────────────────────────────── */
function FaqArticlePage({ onNavigate }) {
  return (
    <div style={{ background:GC.bg, fontFamily:GF }}>
      <div style={{ ...gWrap, padding:"2rem 2rem 5rem" }}>
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.16fr) minmax(260px,0.84fr)", gap:"1.5rem", marginBottom:"1.75rem" }}>
          <div style={{ padding:"2.2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <GEyebrow>FAQ</GEyebrow>
            <h1 style={{ fontSize:"clamp(1.8rem,3.5vw,2.6rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, maxWidth:"22ch", margin:"0 0 0.6rem", color:GC.ink, textWrap:"balance" }}>What Counts as Client Approval Before Billing or the Next Stage Starts?</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:GC.ink2, maxWidth:"38rem", margin:"0 0 1.25rem" }}>How to recognize a valid approval signal and avoid billing disputes from ambiguous client responses.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
              <GPill variant="teal">FAQ</GPill>
              <GPill variant="teal">Implementation</GPill>
              <GPill variant="slate">Updated Jan 2, 2025</GPill>
            </div>
          </div>
          <div style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <GAsideCard label="Use this page for" body="When a client response has arrived but it is not clearly a formal approval — especially before issuing an invoice or starting the next project stage." />
            <GAsideCard label="Section hub" body="Use the FAQ hub if you need to see the full question set before picking one answer page." />
            <GAsideCard label="Best next move" body="After this page, open the Invoice and Payment Workflow Setup to connect the approval signal to a billing trigger." variant="soft" />
            <GAsideCard label="Page type" body="FAQ page with a bounded answer and a linked implementation page." variant="muted" />
          </div>
        </div>
        <div style={{ width:"min(100%,940px)", padding:"2.2rem", border:`1px solid ${GC.border}`, borderRadius:"16px", background:GC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
          <div style={{ maxWidth:"720px" }}>
            <h2 style={{ fontSize:"27px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.22, marginBottom:"1.1rem", color:GC.ink }}>The short answer</h2>
            <p style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>Client approval is valid when a named stakeholder with actual authority explicitly confirms acceptance of the deliverable in a durable, retrievable form. A vague "looks good" in a Slack message is not the same as a named sign-off tied to a specific deliverable version.</p>
            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:GC.ink }}>What counts as valid approval</h3>
            <ul style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>
              <li>Written confirmation from the named approval owner referencing the deliverable version</li>
              <li>Email reply with "approved," "signed off," or equivalent explicit language</li>
              <li>Signature on a milestone acceptance form or PDF</li>
            </ul>
            <h3 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", lineHeight:1.28, marginTop:"2.35rem", marginBottom:"0.9rem", color:GC.ink }}>What does not count</h3>
            <ul style={{ fontFamily:GP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>
              <li>Silence after sending the deliverable</li>
              <li>"Looks good" from someone who cannot actually approve</li>
              <li>Emoji reactions or thumbs-up in Slack or Teams</li>
            </ul>
            <UtilityPanel type="faq" />
            <RelatedPanel items={[
              { title:"Invoice and Payment Workflow Setup", type:"Workflow", summary:"Connect the approval signal directly to the billing trigger." },
              { title:"Approval Owner", type:"Glossary", summary:"Clarify who actually has authority to approve before billing starts." },
              { title:"Milestone Delivery Workflow", type:"Workflow", summary:"Build QA and approval checkpoints into the delivery sequence." },
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────
   SEARCH PAGE
   ──────────────────────────────────── */
function SearchPage({ onNavigate }) {
  const [query, setQuery] = React.useState("client workflow");
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filters = ["All","Workflows","Blueprints","Comparisons","Templates","Glossary","FAQ"];
  const typeMap = { Workflows:"Workflow", Blueprints:"Blueprint", Comparisons:"Comparison", Glossary:"Glossary", FAQ:"FAQ", Templates:"Asset" };
  const filtered = activeFilter==="All" ? SEARCH_RESULTS : SEARCH_RESULTS.filter(r => r.type === (typeMap[activeFilter]||activeFilter));

  return (
    <div style={{ background:GC.bg, fontFamily:GF }}>
      <div style={{ ...gWrap, padding:"2.5rem 2rem 5rem" }}>
        <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:GC.amber, margin:"0 0 0.75rem" }}>Search SoloOpsGuide</p>
        <div style={{ position:"relative", maxWidth:"680px", marginBottom:"1.25rem" }}>
          <span style={{ position:"absolute", left:"16px", top:"50%", transform:"translateY(-50%)", width:"18px", height:"18px", border:"2px solid #94a3b8", borderRadius:"50%", pointerEvents:"none", zIndex:1 }}>
            <span style={{ position:"absolute", right:"-5px", bottom:"-5px", width:"6px", height:"2px", background:"#94a3b8", borderRadius:"999px", transform:"rotate(45deg)", display:"block" }}></span>
          </span>
          <input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search workflows, blueprints, comparisons, and assets..." style={{ width:"100%", minHeight:"3.25rem", padding:"0 1rem 0 3rem", border:`1px solid ${GC.border}`, borderRadius:"12px", background:GC.card, color:GC.ink, fontSize:"16px", fontFamily:GF, outline:"none", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }} />
        </div>
        <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2rem" }}>
          {filters.map(f=>(
            <button key={f} onClick={()=>setActiveFilter(f)} style={{ padding:"0.4rem 0.9rem", borderRadius:"999px", border:`1px solid ${activeFilter===f?"#0f8b8d":GC.border}`, background:activeFilter===f?"#0f8b8d":"transparent", color:activeFilter===f?"#fff":GC.ink2, fontSize:"13px", fontWeight:activeFilter===f?600:400, fontFamily:GF, cursor:"pointer", transition:"all 120ms ease" }}>{f}</button>
          ))}
        </div>

        <p style={{ fontSize:"14px", color:GC.muted, marginBottom:"1.25rem" }}>
          <strong style={{ color:GC.ink }}>{filtered.length} result{filtered.length!==1?"s":""}</strong> for &ldquo;{query}&rdquo;
        </p>

        {filtered.length > 0 ? (
          <div style={{ display:"grid", gap:"0.85rem" }}>
            {filtered.map((result,i)=><SearchResultItem key={i} result={result} onNavigate={onNavigate} />)}
          </div>
        ) : (
          <div style={{ padding:"3rem 2rem", textAlign:"center", border:`1px solid ${GC.border}`, borderRadius:"16px", background:GC.card }}>
            <p style={{ fontSize:"17px", fontWeight:600, color:GC.ink, marginBottom:"0.5rem" }}>No results in this category</p>
            <p style={{ fontSize:"15px", color:GC.muted, margin:0 }}>Try "All" or browse by resource type from the homepage.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SearchResultItem({ result, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <article onClick={()=>onNavigate("article")} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ display:"grid", gridTemplateColumns:"112px 1fr", overflow:"hidden", border:`1px solid ${hov?GC.borderHov:GC.border}`, borderRadius:"14px", background:GC.card, cursor:"pointer", boxShadow:hov?"0 6px 18px rgba(15,23,42,0.08)":"0 1px 2px rgba(15,23,42,0.04)", transform:hov?"translateY(-1px)":"none", transition:"all 160ms ease" }}>
      <div style={{ background:TYPE_MEDIA[result.type]||TYPE_MEDIA.Workflow, flexShrink:0 }}></div>
      <div style={{ padding:"1.1rem 1.25rem", fontFamily:GF }}>
        <p style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.05em", textTransform:"uppercase", color:TYPE_CLR[result.type]||GC.brandDp, margin:"0 0 0.35rem" }}>{result.type}</p>
        <h3 style={{ fontSize:"17px", fontWeight:600, lineHeight:1.3, letterSpacing:"-0.02em", color:GC.ink, margin:"0 0 0.4rem" }}>{result.title}</h3>
        <p style={{ fontSize:"13.5px", lineHeight:1.6, color:GC.muted, margin:"0 0 0.6rem" }}>{result.summary}</p>
        <span style={{ fontSize:"13px", fontWeight:500, color:GC.brandDp }}>Read page →</span>
      </div>
    </article>
  );
}

/* ─── Export all to window ─── */
Object.assign(window, {
  GlossaryHubPage,
  GlossaryTermPage,
  FaqHubPage,
  FaqArticlePage,
  SearchPage,
  UtilityPanel,
  RelatedPanel,
});
