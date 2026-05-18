/* ─────────────────────────────────────────────────────────────
   SoloOpsGuide UI Kit — 404 Not Found
   Maps to: layouts/404.html

   Production goals (kept identical here):
   - Calm, editorial recovery page. Not playful, no "oops".
   - Help the reader move forward in one click:
       1. Search the site
       2. Re-enter via a cluster hub
       3. Drop into FAQ / Glossary if their blocker is narrow
   - Reuses existing kit primitives (Source Sans 3, teal/amber tokens,
     14–16px radii, the same card border + shadow vocabulary).
   ──────────────────────────────────────────────────────────── */

const NF_UI = '"Source Sans 3","Helvetica Neue",Arial,sans-serif';
const NF = {
  ink:"#0f172a", ink2:"#334155", muted:"#64748b",
  border:"rgba(226,232,240,1)",
  bg:"#fafbfc", bgSoft:"#f8fafc", card:"#ffffff",
  brand:"#0d9488", brandDp:"#0f766e", brandTint:"#ccfbf1",
  amber:"#b8823f",
};
const nfWrap = { width:"min(1280px,calc(100vw - 2rem))", margin:"0 auto", padding:"0 2rem" };

/* ─── Primary recovery cluster cards ─── */
const NF_RECOVERY = [
  {
    label: "Client Workflow Systems",
    url:   "/client-workflow-systems/",
    desc:  "Start here when leads, kickoff, delivery, billing, or handoffs feel loose. The anchor cluster.",
    cta:   "Open workflow systems",
    accent: "#0f766e",
  },
  {
    label: "Software Stack Blueprints",
    url:   "/software-stack-blueprints/",
    desc:  "Use these once the workflow is clear and the stack still feels heavier than the work requires.",
    cta:   "Open blueprints",
    accent: "#1d6fa4",
  },
  {
    label: "Workflow Comparisons",
    url:   "/workflow-comparisons/",
    desc:  "Open these when one bounded tool or system choice is blocking the next operational step.",
    cta:   "Open comparisons",
    accent: "#9a6b33",
  },
  {
    label: "Templates & Checklists",
    url:   "/templates-checklists/",
    desc:  "Use these after the rule is clear and you need an execution asset for a real trigger moment.",
    cta:   "Open templates",
    accent: "#0f766e",
  },
];

/* ─── Narrower secondary recovery links ─── */
const NF_NARROW = [
  { label: "Glossary", url: "/glossary/", desc: "One unclear term is blocking the next step." },
  { label: "FAQ",      url: "/faq/",      desc: "A narrow blocker that should send you back to a stronger guide." },
];

function NF_RecoveryCard({ label, url, desc, cta, accent, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={url}
      onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(url); } }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"flex", flexDirection:"column", gap:"0.7rem",
        padding:"1.5rem", borderRadius:"16px", textDecoration:"none",
        background: NF.card,
        border: `1px solid ${hov ? "#99f6e4" : NF.border}`,
        boxShadow: hov ? "0 10px 24px rgba(15,23,42,0.08)" : "0 1px 2px rgba(15,23,42,0.04)",
        transform: hov ? "translateY(-1px)" : "translateY(0)",
        transition: "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
        fontFamily: NF_UI,
        height: "100%",
      }}
    >
      <p style={{
        margin:0, fontSize:"11px", fontWeight:700, letterSpacing:"0.12em",
        textTransform:"uppercase", color: accent,
      }}>Start here</p>
      <h3 style={{
        margin:0, fontSize:"18px", fontWeight:600, lineHeight:1.3,
        letterSpacing:"-0.02em", color: NF.ink, fontFamily: NF_UI,
      }}>{label}</h3>
      <p style={{
        margin:0, fontSize:"14px", lineHeight:1.6, color: NF.ink2, flex:"1 1 auto",
      }}>{desc}</p>
      <span style={{
        marginTop:"0.35rem", paddingTop:"0.85rem",
        borderTop:`1px solid ${NF.border}`,
        fontSize:"14px", fontWeight:500, color: NF.brandDp,
      }}>{cta} →</span>
    </a>
  );
}

function NF_NarrowLink({ label, url, desc, onNavigate }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={url}
      onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(url); } }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        gap:"1rem", padding:"1rem 1.25rem", borderRadius:"12px", textDecoration:"none",
        background: NF.bgSoft,
        border: `1px solid ${hov ? "#cbd5e1" : NF.border}`,
        transition: "border-color 150ms ease, background 150ms ease",
        fontFamily: NF_UI,
      }}
    >
      <span style={{ display:"flex", flexDirection:"column", gap:"0.15rem" }}>
        <span style={{ fontSize:"15px", fontWeight:600, color: NF.ink, letterSpacing:"-0.01em" }}>{label}</span>
        <span style={{ fontSize:"13px", color: NF.muted, lineHeight:1.5 }}>{desc}</span>
      </span>
      <span style={{ fontSize:"14px", fontWeight:500, color: NF.brandDp, whiteSpace:"nowrap" }}>Open →</span>
    </a>
  );
}

function NotFoundPage({ onNavigate }) {
  // onNavigate here receives URLs; the App-level onNavigate expects screen ids.
  // We translate the most common ones; unknown URLs route back to home so the
  // kit never silently swallows a click.
  const handleNav = (url) => {
    if (!onNavigate) return;
    const map = {
      "/client-workflow-systems/":   "hub",
      "/software-stack-blueprints/": "blueprint",
      "/workflow-comparisons/":      "comparison",
      "/templates-checklists/":      "template",
      "/glossary/":                  "glossary-hub",
      "/faq/":                       "faq-hub",
      "/":                           "home",
      "search":                      "search",
    };
    onNavigate(map[url] || "home");
  };

  return (
    <div style={{ background: NF.bg, fontFamily: NF_UI }}>
      <div style={{ ...nfWrap, padding:"3rem 2rem 5rem" }}>

        {/* ─── Recovery hero ─── */}
        <section style={{
          padding:"2.5rem 2.2rem",
          border:`1px solid ${NF.border}`,
          borderRadius:"20px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",
          boxShadow:"0 1px 2px rgba(15,23,42,0.04)",
          marginBottom:"2rem",
        }}>
          <p style={{
            fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em",
            textTransform:"uppercase", color: NF.amber,
            margin:"0 0 0.85rem", fontFamily: NF_UI,
          }}>Error 404 · Page not found</p>

          <h1 style={{
            fontSize:"clamp(2rem, 4vw, 2.8rem)", fontWeight:700,
            letterSpacing:"-0.03em", lineHeight:1.1,
            color: NF.ink, margin:"0 0 1rem",
            textWrap:"balance", maxWidth:"22ch",
            fontFamily: NF_UI,
          }}>Page not found</h1>

          <p style={{
            fontSize:"17px", lineHeight:1.7, color: NF.ink2,
            maxWidth:"42rem", margin:"0 0 0.6rem",
          }}>
            The page you tried to open is not at this address. It may have been renamed, moved into a different cluster, or removed during an edit pass.
          </p>
          <p style={{
            fontSize:"15px", lineHeight:1.65, color: NF.muted,
            maxWidth:"42rem", margin:"0 0 1.75rem",
          }}>
            Use the search field below to look up a workflow, blueprint, comparison, or template — or re-enter the site through one of the cluster hubs.
          </p>

          {/* Search */}
          <form
            role="search"
            action="/search/"
            method="get"
            onSubmit={e => { e.preventDefault(); handleNav("search"); }}
            style={{ position:"relative", maxWidth:"560px", marginBottom:"0.5rem" }}
          >
            <label htmlFor="nf-search" style={{
              position:"absolute", width:1, height:1, padding:0, margin:-1,
              overflow:"hidden", clip:"rect(0 0 0 0)", whiteSpace:"nowrap", border:0,
            }}>Search the site</label>
            <span aria-hidden="true" style={{
              position:"absolute", left:"16px", top:"50%", transform:"translateY(-50%)",
              width:"16px", height:"16px", border:"2px solid #94a3b8", borderRadius:"50%",
              pointerEvents:"none",
            }}>
              <span style={{
                position:"absolute", right:"-5px", bottom:"-5px",
                width:"6px", height:"2px", background:"#94a3b8",
                borderRadius:"999px", transform:"rotate(45deg)", display:"block",
              }}></span>
            </span>
            <input
              id="nf-search"
              type="search"
              name="q"
              placeholder="Search workflows, blueprints, comparisons, and assets..."
              style={{
                width:"100%", height:"3.125rem",
                padding:"0 6.5rem 0 2.85rem",
                border:`1px solid ${NF.border}`, borderRadius:"12px",
                background:"#ffffff", color: NF.ink2, fontSize:"15px",
                fontFamily: NF_UI, outline:"none",
              }}
            />
            <button type="submit" style={{
              position:"absolute", right:"0.4rem", top:"50%", transform:"translateY(-50%)",
              display:"inline-flex", alignItems:"center", height:"2.4rem",
              padding:"0 1rem", borderRadius:"8px", border:"none",
              background: NF.brand, color:"#fff",
              fontSize:"14px", fontWeight:500, cursor:"pointer",
              fontFamily: NF_UI,
            }}>Search</button>
          </form>

          <p style={{
            fontSize:"13px", color: NF.muted, margin:"0.85rem 0 0",
          }}>
            If you arrived from a saved link, the page may have been renamed during an editorial revision.
          </p>
        </section>

        {/* ─── Recovery cluster grid ─── */}
        <section style={{ marginBottom:"2rem" }}>
          <p style={{
            fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em",
            textTransform:"uppercase", color: NF.amber, margin:"0 0 0.4rem",
          }}>Re-enter the site</p>
          <h2 style={{
            fontSize:"24px", fontWeight:600, letterSpacing:"-0.025em",
            color: NF.ink, margin:"0 0 0.4rem", fontFamily: NF_UI,
          }}>Start with the cluster closest to your problem</h2>
          <p style={{
            fontSize:"15px", color: NF.muted, margin:"0 0 1.5rem",
            maxWidth:"40rem",
          }}>
            Workflow-first: pick the workflow cluster first if the underlying process still feels loose. Move into stack or tool decisions only after the operating sequence is clear.
          </p>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
            gap:"1.25rem",
          }}>
            {NF_RECOVERY.map(r => (
              <NF_RecoveryCard key={r.label} {...r} onNavigate={handleNav} />
            ))}
          </div>
        </section>

        {/* ─── Narrower recovery ─── */}
        <section>
          <p style={{
            fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.16em",
            textTransform:"uppercase", color: NF.amber, margin:"0 0 0.4rem",
          }}>Narrower blockers</p>
          <h2 style={{
            fontSize:"20px", fontWeight:600, letterSpacing:"-0.02em",
            color: NF.ink, margin:"0 0 1rem", fontFamily: NF_UI,
          }}>One unclear term, or one narrow setup question</h2>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
            gap:"0.85rem",
          }}>
            {NF_NARROW.map(n => (
              <NF_NarrowLink key={n.label} {...n} onNavigate={handleNav} />
            ))}
          </div>

          <p style={{
            fontSize:"14px", color: NF.muted, lineHeight:1.65,
            margin:"1.75rem 0 0", maxWidth:"42rem",
          }}>
            Still cannot find it?{" "}
            <a
              href="/"
              onClick={e => { e.preventDefault(); handleNav("/"); }}
              style={{ color: NF.brandDp, textDecoration:"underline", textUnderlineOffset:"0.18em" }}
            >Return to the homepage</a>
            {" "}and use the choose-your-next-step block to find the right starting point.
          </p>
        </section>

      </div>
    </div>
  );
}

Object.assign(window, { NotFoundPage });
