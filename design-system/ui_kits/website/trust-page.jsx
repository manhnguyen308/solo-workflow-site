/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — Trust / About / Policy page
   Maps to: layouts/_default/list.html — no-pages branch
            content/{about,editorial-policy,content-policy,contact,disclaimer,terms}/_index.md

   This is the prose-only variant of the section hub layout used for
   site-information pages: About, Contact, Editorial Policy, Content
   Policy, Disclaimer, Terms. It uses the article header + aside
   structure but skips the utility panel and related grid that
   article pages get from page-type-block.html / related.html.
   ──────────────────────────────────────────────────────────── */

const TF = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const TP = '"Lora",Georgia,"Times New Roman",serif';
const TC = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b",
  border:"rgba(226,232,240,1)", bg:"#fafbfc", bgSoft:"#f8fafc",
  card:"#ffffff", brand:"#0f8b8d", brandDp:"#0f766e",
  amber:"#b8823f",
};
const tWrap = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };

/* ─── Trust page aside card (mirrors .article-aside-card) ─── */
function TrustAside({ label, body, variant="default" }) {
  const bg = variant==="soft"
    ? "linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,1))"
    : variant==="muted" ? TC.bgSoft : TC.card;
  return (
    <div style={{ padding:"1.35rem", border:`1px solid ${TC.border}`, borderRadius:"14px", background:bg, boxShadow:"0 1px 2px rgba(15,23,42,0.04)", fontFamily:TF }}>
      <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:TC.brandDp, margin:"0 0 0.5rem" }}>{label}</p>
      <p style={{ fontSize:"14px", lineHeight:1.65, color:TC.ink2, margin:0 }}>{body}</p>
    </div>
  );
}

/* ─── Tab selector for variant switching ─── */
function TrustVariantTabs({ value, onChange }) {
  const opts = [
    { id:"editorial", label:"Editorial Policy" },
    { id:"about",     label:"About" },
    { id:"contact",   label:"Contact" },
  ];
  return (
    <div style={{ display:"inline-flex", gap:"0.25rem", padding:"3px", border:`1px solid ${TC.border}`, borderRadius:"10px", background:TC.bgSoft, marginBottom:"1.5rem" }}>
      {opts.map(o=>(
        <button key={o.id} onClick={()=>onChange(o.id)} style={{ padding:"0.5rem 0.9rem", borderRadius:"7px", border:"none", background: value===o.id ? TC.card : "transparent", color: value===o.id ? TC.ink : TC.muted, fontSize:"13px", fontWeight: value===o.id ? 600 : 400, fontFamily:TF, cursor:"pointer", boxShadow: value===o.id ? "0 1px 2px rgba(15,23,42,0.06)" : "none", transition:"all 120ms ease" }}>{o.label}</button>
      ))}
    </div>
  );
}

/* ─── Prose section helpers ─── */
function TH2({ children }) {
  return <h2 style={{ fontSize:"26px", fontWeight:600, letterSpacing:"-0.03em", lineHeight:1.22, color:TC.ink, marginTop:"3rem", marginBottom:"1.05rem", paddingTop:"1.35rem", borderTop:`1px solid ${TC.border}`, fontFamily:TF }}>{children}</h2>;
}
function TP_para({ children }) {
  return <p style={{ fontFamily:TP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", marginBottom:"1.35rem" }}>{children}</p>;
}
function TUL({ children }) {
  return <ul style={{ fontFamily:TP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>{children}</ul>;
}
function TOL({ children }) {
  return <ol style={{ fontFamily:TP, fontSize:"16.75px", lineHeight:1.9, color:"#334155", paddingLeft:"1.5rem", marginBottom:"1.35rem" }}>{children}</ol>;
}

/* ─── Lightweight callout for important policy notes ─── */
function TCallout({ label, children }) {
  return (
    <div style={{ display:"flex", gap:"0.85rem", padding:"1.05rem 1.25rem", border:`1px solid ${TC.border}`, borderLeft:`3px solid ${TC.brandDp}`, borderRadius:"12px", background:"linear-gradient(180deg,rgba(15,139,141,0.04),rgba(255,255,255,1))", margin:"1.75rem 0", fontFamily:TF }}>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:TC.brandDp, margin:"0 0 0.4rem" }}>{label}</p>
        <div style={{ fontSize:"14px", lineHeight:1.7, color:TC.ink2, margin:0 }}>{children}</div>
      </div>
    </div>
  );
}

/* ─── Related-pages footer block (matches production "Related pages" h2 + list) ─── */
function TrustRelated({ items }) {
  return (
    <div style={{ marginTop:"3rem", paddingTop:"1.5rem", borderTop:`1px solid ${TC.border}`, fontFamily:TF }}>
      <h2 style={{ fontSize:"22px", fontWeight:600, letterSpacing:"-0.02em", color:TC.ink, margin:"0 0 0.85rem" }}>Related pages</h2>
      <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"0.55rem" }}>
        {items.map((it,i)=>(
          <li key={i} style={{ fontSize:"15px", lineHeight:1.6, color:TC.ink2 }}>
            <span style={{ color:TC.muted, marginRight:"0.4rem" }}>·</span>
            {it.lead}: <a href="#" onClick={e=>e.preventDefault()} style={{ color:TC.brandDp, fontWeight:500, textDecoration:"none" }}>{it.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Page content variants ─── */
const TRUST_VARIANTS = {
  editorial: {
    title: "Editorial Policy",
    summary: "How SoloOpsGuide approaches methodology, workflow-first recommendations, editorial judgment, updates, corrections, and monetization boundaries.",
    useFor: "Understanding how the site decides what to publish, how recommendations are framed, and where its editorial boundaries sit.",
    siteRole: "Support page that explains how the site works, how to evaluate the content, and how to use it responsibly.",
    related: [
      { lead:"Purpose and boundaries of the site", title:"Content Policy" },
      { lead:"Site overview and intended audience", title:"About" },
      { lead:"Contact and corrections routing",     title:"Contact" },
    ],
    body: "editorial",
  },
  about: {
    title: "About",
    summary: "Learn what SoloOpsGuide publishes, who it serves, and how freelancers and solo operators should use its workflow-first guidance.",
    useFor: "Getting oriented to who the site is for, what kind of guidance it publishes, and how to use it without getting pulled into the wrong layer too early.",
    siteRole: "Support page that explains the site's purpose, audience, and how readers should approach the content.",
    related: [
      { lead:"Editorial standards and methodology",    title:"Editorial Policy" },
      { lead:"Content boundaries and quality expectations", title:"Content Policy" },
      { lead:"Contact and corrections",                title:"Contact" },
      { lead:"Site terms and limitations",             title:"Disclaimer" },
    ],
    body: "about",
  },
  contact: {
    title: "Contact",
    summary: "How to reach SoloOpsGuide for corrections, broken routing, materially unclear recommendations, or other editorial feedback.",
    useFor: "Reaching the site about factual errors, broken routing, or unclear recommendation boundaries that materially affect the guidance.",
    siteRole: "Support page that explains where to send feedback and what kinds of issues are most useful to surface.",
    related: [
      { lead:"How updates and corrections are handled", title:"Editorial Policy" },
      { lead:"What the site publishes and who it serves", title:"About" },
      { lead:"Content boundaries and quality expectations", title:"Content Policy" },
    ],
    body: "contact",
  },
};

/* ─── Body content for each variant ─── */
function EditorialBody() {
  return (
    <>
      <TP_para>SoloOpsGuide is workflow-first. It does not publish generic tool lists without operational context, and it does not treat software choices as meaningful in isolation from the workflow they are meant to support.</TP_para>
      <TP_para>This page exists so readers can see how the site makes judgments, what kinds of content it tries to produce, and where its recommendations should be trusted or treated as deliberately bounded. The point is to make the site's judgment framework visible, not to sound neutral about everything.</TP_para>

      <TH2>Who this site is written for</TH2>
      <TP_para>SoloOpsGuide is written for freelancers, consultants, and solo service operators who need calmer systems for intake, delivery, approvals, billing, and tool decisions. It is not trying to be a general productivity publication or a software news site.</TP_para>

      <TH2>Core editorial principles</TH2>
      <TOL>
        <li>Workflow-first framing over tool-first promotion.</li>
        <li>Scenario-based guidance over abstract "best for everyone" claims.</li>
        <li>Practical next steps over content that ends at opinion.</li>
        <li>Tradeoff awareness over one-sided recommendations.</li>
        <li>Calm, implementation-focused language over hype.</li>
        <li>Clear page-role boundaries over content that tries to do everything at once.</li>
      </TOL>

      <TH2>What workflow-first means here</TH2>
      <TP_para>Workflow-first means the site answers these questions in order: what is the actual operating problem, where in the client lifecycle is it happening, is the next improvement a process fix or a stack-shape decision or one bounded tool choice, and what should the reader do next once that answer is clearer.</TP_para>
      <TP_para>That is different from generic software content, which often starts with product categories, features, or rankings before the operating problem is even named.</TP_para>

      <TCallout label="Editorial boundary">
        Recommendations on this site should also make clear what is <em>not</em> being decided. A good page helps a reader choose the next move without pretending one article can settle every adjacent system question.
      </TCallout>

      <TH2>Updates and corrections</TH2>
      <TP_para>SoloOpsGuide aims to keep cornerstone pages and key decision pages reasonably current, especially where changes in tools, workflow assumptions, or site structure materially affect the guidance.</TP_para>
      <TP_para>If a factual error, broken route, or unclear recommendation boundary is identified, the site corrects it when the issue is confirmed and materially relevant. Broad workflow and blueprint pages usually matter more than narrow support pages, so the most critical updates land there first.</TP_para>

      <TH2>Monetization and independence</TH2>
      <TP_para>If sponsorships, partnerships, or affiliate relationships are introduced, they should not override the site's scenario-based recommendation logic. Commercial relationships should be disclosed clearly where relevant. Editorial usefulness remains the primary standard.</TP_para>
      <TP_para>This means a page should still be willing to recommend a simpler, cheaper, or narrower setup when that is the better operational fit.</TP_para>

      <TH2>How to read the site well</TH2>
      <TUL>
        <li>Use the page that matches the actual bottleneck.</li>
        <li>Do not treat narrow guidance as universal advice.</li>
        <li>Prefer implementation pages when you already know the decision you need to make.</li>
        <li>Use policy and support pages to understand the site's methods and limits, not as substitutes for the operational guides.</li>
      </TUL>
    </>
  );
}

function AboutBody() {
  return (
    <>
      <TP_para>SoloOpsGuide is a workflow-first editorial resource for freelancers, consultants, and solo service operators who need clearer operating systems for client work.</TP_para>
      <TP_para>The site focuses on one practical problem: many solo businesses do not fail because they lack effort or software. They struggle because intake, handoffs, delivery, billing, approvals, and offboarding are held together loosely. SoloOpsGuide exists to make those operating decisions clearer through a focused set of editorial guides — not through endless browsing or software noise.</TP_para>

      <TH2>What SoloOpsGuide is</TH2>
      <TP_para>SoloOpsGuide is a structured editorial resource built around implementation guidance for solo operations. It is intentionally narrower than a general business site and more opinionated about sequence, ownership, handoffs, and operating clarity than a typical software-content site.</TP_para>
      <TUL>
        <li>Workflow anchors that map the full client path</li>
        <li>Stack blueprints that help readers choose simpler system shapes</li>
        <li>Scenario-based comparisons for bounded tool or model decisions</li>
        <li>Templates and checklists that support execution inside a live workflow</li>
        <li>Glossary and FAQ pages that remove friction around terminology and recurring setup questions</li>
      </TUL>

      <TH2>Who this site is for</TH2>
      <TP_para>The best fit is someone whose business is real enough to feel operational drag but still small enough that the workflow lives mostly inside one person's judgment. The site is built for readers who need stronger rules, better sequencing, and calmer tool decisions without pretending they are running a 20-person operation.</TP_para>
      <TUL>
        <li>Freelancers running client projects or retainers</li>
        <li>Consultants building a cleaner delivery and admin system</li>
        <li>Solo operators adding light support capacity without wanting a bloated stack</li>
        <li>Small service businesses that need clearer operating rules before adding more tools</li>
      </TUL>

      <TCallout label="Less useful for">
        Productized businesses built around self-serve checkout, larger agencies with dedicated operations teams, or readers looking for broad software news or trend commentary.
      </TCallout>

      <TH2>How to use the site well</TH2>
      <TUL>
        <li>Start with workflow pages when the client path itself feels messy or reactive.</li>
        <li>Move into stack blueprints when the sequence is mostly clear but the tools feel awkward or too heavy.</li>
        <li>Use comparisons when the open question is between two plausible systems, not when the workflow itself is still undefined.</li>
        <li>Use templates and checklists after the workflow rule is clear and you need a repeatable execution asset.</li>
        <li>Use glossary and FAQ pages to remove ambiguity quickly, then return to the deeper implementation page.</li>
      </TUL>

      <TH2>How the site approaches trust</TH2>
      <TP_para>The site aims to be useful by being specific, bounded, and transparent about what each page is for and what it is not meant to solve.</TP_para>
      <TUL>
        <li>Recommendations are framed around scenarios, not universal winners.</li>
        <li>Tradeoffs and failure modes are part of the guidance.</li>
        <li>Implementation pages should point readers to the next useful step.</li>
        <li>Support and policy pages exist to explain how the content should be evaluated and used.</li>
      </TUL>
      <TP_para>Trust on SoloOpsGuide should come from page purpose, judgment clarity, and operational usefulness — not from trying to sound bigger or more certain than the site really is.</TP_para>
    </>
  );
}

function ContactBody() {
  return (
    <>
      <TP_para>SoloOpsGuide is built to be useful for real operating decisions. The most valuable feedback usually surfaces factual errors, broken routing, or unclear recommendation boundaries — issues that materially affect how a reader uses the guidance.</TP_para>

      <TH2>When to reach out</TH2>
      <TUL>
        <li>A factual error inside a workflow, blueprint, or comparison page</li>
        <li>A broken internal route or a link that no longer matches its destination</li>
        <li>A recommendation boundary that reads as unclear or misleading in context</li>
        <li>A page that overlaps confusingly with another page in the same cluster</li>
      </TUL>

      <TCallout label="Not a personalized consulting channel">
        Contact is for editorial feedback about the site's content. It is not a substitute for personalized advice, legal or tax counsel, or one-on-one consulting. Use the operational pages for general guidance and a qualified professional for personal decisions.
      </TCallout>

      <TH2>How corrections are handled</TH2>
      <TP_para>Confirmed corrections that materially affect a cornerstone page are prioritized first. Smaller refinements to narrow support pages are made when the broader impact is understood. Some changes are deliberately deferred when they would expand the site's topic surface rather than sharpen what already exists.</TP_para>

      <TH2>How to write a useful correction</TH2>
      <TUL>
        <li>Name the page (URL or title) and the specific section</li>
        <li>State the claim or routing issue you believe is incorrect</li>
        <li>Briefly explain what the correct version should be</li>
        <li>Include context only if it changes the recommendation boundary</li>
      </TUL>

      <TH2>What is intentionally not on this page</TH2>
      <TP_para>SoloOpsGuide does not publish a public contact form on this prototype. In production, the form lives at the same route and routes to the editorial maintainer. Phone numbers, calendar links, and team bios are intentionally not included — the site is solo-operated and trust comes from the content rather than from manufactured institutional signals.</TP_para>
    </>
  );
}

/* ────────────────────────────────────
   TRUST PAGE  (variant-switching screen)
   ──────────────────────────────────── */
function TrustPage({ onNavigate }) {
  const [variant, setVariant] = React.useState("editorial");
  const cfg = TRUST_VARIANTS[variant];
  const Body = variant === "editorial" ? EditorialBody : variant === "about" ? AboutBody : ContactBody;

  return (
    <div style={{ background:TC.bg, fontFamily:TF }}>
      <div style={{ ...tWrap, padding:"2rem 2rem 5rem" }}>

        {/* Variant toggle — for the UI kit, lets the reviewer see all three trust shapes */}
        <TrustVariantTabs value={variant} onChange={setVariant} />

        {/* Article header (matches list.html no-pages branch: header-main + 2-card aside) */}
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1.16fr) minmax(260px,0.84fr)", gap:"1.5rem", marginBottom:"1.75rem" }}>
          <div style={{ padding:"2.2rem", border:`1px solid ${TC.border}`, borderRadius:"16px", background:"linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))", boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
            <p style={{ fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:TC.amber, margin:"0 0 0.85rem", fontFamily:TF }}>Site page</p>
            <h1 style={{ fontSize:"clamp(2rem,3.8vw,2.9rem)", fontWeight:700, letterSpacing:"-0.04em", lineHeight:1.1, maxWidth:"22ch", margin:"0 0 0.6rem", color:TC.ink, textWrap:"balance", fontFamily:TF }}>{cfg.title}</h1>
            <p style={{ fontSize:"17px", lineHeight:1.72, color:TC.ink2, maxWidth:"38rem", margin:0, fontFamily:TF }}>{cfg.summary}</p>
          </div>

          {/* Aside — production uses only 2 cards on the no-pages branch */}
          <aside style={{ display:"grid", gap:"1rem", alignContent:"start" }}>
            <TrustAside label="Use this page for" body={cfg.useFor} />
            <TrustAside label="Site role" body={cfg.siteRole} variant="soft" />
          </aside>
        </div>

        {/* Reading layout — prose only, no utility panel, no related grid */}
        <div style={{ width:"min(100%,940px)", padding:"2.2rem", border:`1px solid ${TC.border}`, borderRadius:"16px", background:TC.card, boxShadow:"0 1px 2px rgba(15,23,42,0.04)" }}>
          <div style={{ maxWidth:"720px" }}>
            <Body />
            <TrustRelated items={cfg.related} />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Export to window ─── */
Object.assign(window, { TrustPage });
