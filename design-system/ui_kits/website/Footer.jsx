// SoloOpsGuide — Footer.jsx
// Dark navy footer: brand intro, 3 nav columns, bottom bar

function Footer() {
  const resources = [
    { name: "Workflows", url: "/workflows/" },
    { name: "Blueprints", url: "/guides/" },
    { name: "Comparisons", url: "/comparisons/" },
    { name: "Templates", url: "/templates/" },
    { name: "Glossary", url: "/glossary/" },
    { name: "FAQ", url: "/faq/" },
  ];
  const about = [
    { name: "About", url: "/about/" },
    { name: "Contact", url: "/contact/" },
    { name: "Editorial Policy", url: "/editorial-policy/" },
    { name: "Content Policy", url: "/content-policy/" },
  ];
  const legal = [
    { name: "Privacy Policy", url: "/privacy-policy/" },
    { name: "Disclaimer", url: "/disclaimer/" },
    { name: "Terms", url: "/terms/" },
  ];

  const colStyle = { display: "flex", flexDirection: "column", gap: "0.65rem" };
  const linkStyle = { color: "rgba(226,234,239,0.72)", textDecoration: "none", fontSize: "14px" };
  const headStyle = { color: "#ffffff", fontSize: "14px", fontWeight: 600, marginBottom: "0.35rem" };

  return (
    <footer style={{ background: "#0f172a", borderTop: "none", marginTop: 0, color: "#94a3b8" }}>
      <div style={{ width: "min(1280px, calc(100vw - 2rem))", margin: "0 auto", padding: "4rem 2rem 2rem" }}>
        {/* 4-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand intro */}
          <div>
            <a href="/" style={{ display: "inline-block", marginBottom: "0.75rem", textDecoration: "none" }}>
              <span style={{ color: "#ffffff", fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em" }}>SoloOpsGuide</span>
            </a>
            <p style={{ color: "rgba(226,234,239,0.72)", fontSize: "14px", lineHeight: 1.7, maxWidth: "280px", margin: "0 0 1rem" }}>
              Workflow-first editorial guidance for freelancers, consultants, and solo operators who want clearer client operations.
            </p>
            <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>© {new Date().getFullYear()} SoloOpsGuide. All rights reserved.</p>
          </div>

          {/* Resources */}
          <div>
            <p style={headStyle}>Resources</p>
            <ul style={{ ...colStyle, listStyle: "none", margin: 0, padding: 0 }}>
              {resources.map(l => <li key={l.name}><a href={l.url} style={linkStyle}>{l.name}</a></li>)}
            </ul>
          </div>

          {/* About */}
          <div>
            <p style={headStyle}>About</p>
            <ul style={{ ...colStyle, listStyle: "none", margin: 0, padding: 0 }}>
              {about.map(l => <li key={l.name}><a href={l.url} style={linkStyle}>{l.name}</a></li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p style={headStyle}>Legal</p>
            <ul style={{ ...colStyle, listStyle: "none", margin: 0, padding: 0 }}>
              {legal.map(l => <li key={l.name}><a href={l.url} style={linkStyle}>{l.name}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: "2rem", borderTop: "1px solid rgba(30,41,59,1)", flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{ color: "#64748b", fontSize: "13px", margin: 0, maxWidth: "540px" }}>
            Built as an independent editorial resource for solo operators who value clarity, boundaries, and useful judgment over complexity.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[{ n: "RSS Feed", u: "/index.xml" }, { n: "Contact", u: "/contact/" }, { n: "Editorial Policy", u: "/editorial-policy/" }].map(l => (
              <a key={l.n} href={l.u} style={{ color: "#64748b", fontSize: "13px", textDecoration: "none" }}>{l.n}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
