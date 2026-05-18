// SoloOpsGuide — Header.jsx
// Sticky site header: brand mark, primary nav, search bar, CTA button.
// Matches production .site-header / .nav-open / data-nav-toggle / .header-actions pattern.

function Header({ activePage = "" }) {
  const [navOpen, setNavOpen] = React.useState(false);

  // Inject the responsive CSS once (so this component works standalone).
  React.useEffect(() => {
    if (document.getElementById("sog-site-header-css")) return;
    const css = document.createElement("style");
    css.id = "sog-site-header-css";
    css.textContent = `
      .site-header .nav-toggle { display: none; }
      @media (max-width: 820px) {
        .site-header .header-top { flex-wrap: wrap !important; gap: 0.75rem !important; }
        .site-header .nav-toggle {
          display: inline-flex; align-items: center; justify-content: center;
          width: 2.75rem; height: 2.75rem; padding: 0;
          border: 1px solid rgba(226,232,240,1); border-radius: 10px;
          background: #ffffff; color: #0f172a; cursor: pointer; flex-shrink: 0;
          font-family: inherit;
        }
        .site-header .nav-toggle:hover { background: #f8fafc; }
        .site-header .nav-toggle:focus-visible { outline: 2px solid #0d9488; outline-offset: 2px; }
        .site-header .nav-toggle .bars,
        .site-header .nav-toggle .bars::before,
        .site-header .nav-toggle .bars::after {
          display: block; width: 18px; height: 2px; background: currentColor;
          border-radius: 2px; transition: transform 160ms ease, opacity 160ms ease;
        }
        .site-header .nav-toggle .bars { position: relative; }
        .site-header .nav-toggle .bars::before { content: ""; position: absolute; left: 0; top: -6px; }
        .site-header .nav-toggle .bars::after  { content: ""; position: absolute; left: 0; top:  6px; }
        .site-header.nav-open .nav-toggle .bars { background: transparent; }
        .site-header.nav-open .nav-toggle .bars::before { transform: translateY(6px) rotate(45deg); }
        .site-header.nav-open .nav-toggle .bars::after  { transform: translateY(-6px) rotate(-45deg); }

        .site-header .brand-tagline { display: none !important; }

        .site-header .header-actions {
          display: none !important; flex: 1 1 100% !important; width: 100%;
          flex-direction: column !important; align-items: stretch !important;
          gap: 0.25rem !important; padding-bottom: 0.75rem;
        }
        .site-header.nav-open .header-actions { display: flex !important; }
        .site-header.nav-open .header-actions nav { flex: 1 1 auto !important; width: 100%; }
        .site-header.nav-open .header-actions nav ul {
          flex-direction: column !important; align-items: stretch !important;
          gap: 0 !important; width: 100%;
        }
        .site-header.nav-open .header-actions nav li { width: 100%; }
        .site-header.nav-open .header-actions nav a {
          width: 100%; height: 2.75rem !important; padding: 0 0.85rem !important;
          border-radius: 8px;
        }
        .site-header.nav-open .header-actions .header-cta {
          width: 100%; justify-content: center;
          margin-top: 0.5rem; padding-top: 0.75rem;
          border-top: 1px solid rgba(226,232,240,1); border-radius: 10px;
          background: transparent !important; color: #0d9488 !important;
          box-shadow: none;
        }
        .site-header.nav-open .header-actions .header-cta::after { content: " →"; }
      }
    `;
    document.head.appendChild(css);
  }, []);

  // Close on Escape, and on resize up past mobile breakpoint
  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setNavOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setNavOpen(false); };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("resize", onResize); window.removeEventListener("keydown", onKey); };
  }, []);

  const navLinks = [
    { name: "Blueprints",  url: "/software-stack-blueprints/" },
    { name: "Comparisons", url: "/workflow-comparisons/" },
    { name: "Templates",   url: "/templates-checklists/" },
    { name: "Glossary",    url: "/glossary/" },
    { name: "FAQ",         url: "/faq/" },
  ];

  return (
    <header className={"site-header" + (navOpen ? " nav-open" : "")} style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#ffffff",
      borderBottom: "1px solid rgba(226,232,240,0.8)",
      backdropFilter: "blur(16px)",
    }}>
      <div style={{ width: "min(1280px, calc(100vw - 2rem))", margin: "0 auto", padding: "0 2rem" }}>
        {/* Top row: brand + toggle + (nav + CTA) */}
        <div className="header-top" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.1rem 0" }}>
          {/* Brand */}
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.9rem", textDecoration: "none", flexShrink: 0 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "2.85rem", height: "2.85rem", borderRadius: "16px",
              background: "linear-gradient(145deg, #0f8b8d, #0b6d71)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 10px 24px rgba(15,23,42,0.08)",
            }}>
              <svg viewBox="0 0 64 64" width="26" height="26" fill="none" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="52" height="52" rx="16"></rect>
                <path d="M20 23h24M20 32h18M20 41h24"></path>
                <path d="M42 20l6 6-6 6"></path>
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#0f172a", fontSize: "22px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>SoloOpsGuide</span>
              <span className="brand-tagline" style={{ color: "#64748b", fontSize: "13px", lineHeight: 1.35, marginTop: "1px" }}>Workflow-first guidance for solo operators</span>
            </span>
          </a>

          {/* Mobile-only nav toggle */}
          <button
            type="button"
            className="nav-toggle"
            data-nav-toggle
            aria-expanded={navOpen}
            aria-controls="site-nav"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen(v => !v)}
            style={{ marginLeft: "auto" }}
          >
            <span className="bars" aria-hidden="true"></span>
          </button>

          {/* Nav + CTA — production .header-actions */}
          <div id="site-nav" className="header-actions" style={{ display: "flex", alignItems: "center", flex: "1 1 auto", justifyContent: "flex-end", gap: "1.25rem" }}>
            <nav aria-label="Primary">
              <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      aria-current={activePage === link.url ? "page" : undefined}
                      style={{
                        fontSize: "15px", color: activePage === link.url ? "#0f172a" : "#334155",
                        textDecoration: "none", fontWeight: activePage === link.url ? 600 : 400,
                      }}
                    >{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="header-cta" href="/client-workflow-systems/" style={{
              display: "inline-flex", alignItems: "center", minHeight: "2.75rem",
              padding: "0 1.25rem", borderRadius: "10px",
              background: "#0d9488", color: "#fff",
              fontSize: "15px", fontWeight: 500, textDecoration: "none",
              whiteSpace: "nowrap",
            }}>Explore workflows</a>
          </div>
        </div>

        {/* Search bar */}
        <div className="header-search" style={{ paddingBottom: "1.25rem" }}>
          <div style={{ position: "relative", maxWidth: "600px" }}>
            <span style={{
              position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
              width: "16px", height: "16px", border: "2px solid #94a3b8", borderRadius: "50%",
              pointerEvents: "none",
            }}>
              <span style={{
                position: "absolute", right: "-5px", bottom: "-5px",
                width: "6px", height: "2px", background: "#94a3b8",
                borderRadius: "999px", transform: "rotate(45deg)", display: "block",
              }}></span>
            </span>
            <input
              type="search"
              placeholder="Search workflows, blueprints, comparisons, and assets..."
              aria-label="Search"
              style={{
                width: "100%", minHeight: "3.125rem", padding: "0 1rem 0 2.75rem",
                border: "1px solid rgba(226,232,240,1)", borderRadius: "10px",
                background: "#f8fafc", color: "#334155", fontSize: "15px",
                fontFamily: "inherit", outline: "none",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header });
