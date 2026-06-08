/* Shared components for SoloOpsGuide UI Kit */

const SiteHeader = ({ active }) => (
  <header className="site-header">
    <div className="brand"><span className="dot"></span>SoloOpsGuide</div>
    <nav>
      {["Workflows", "Blueprints", "Comparisons", "Templates", "Glossary"].map(n => (
        <a key={n} href="#" className={active === n ? "active" : ""}>{n}</a>
      ))}
    </nav>
    <div className="tools">
      <div className="search">
        <span>Search the guide…</span>
        <span className="k">/</span>
      </div>
    </div>
  </header>
);

const MobileHeader = () => (
  <div className="mobile-header">
    <div className="brand"><span className="dot"></span>SoloOpsGuide</div>
    <div className="menu">Menu</div>
  </div>
);

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="grid">
      <div>
        <div style={{ font: "600 17px/1 var(--sans)", marginBottom: 12, display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ width: 8, height: 8, background: "var(--accent)", display: "inline-block" }}></span>
          SoloOpsGuide
        </div>
        <p className="colophon">
          A practical operating manual for solo business owners. Workflows, blueprints, comparisons, and templates — written, reviewed, and dated.
        </p>
      </div>
      <div>
        <h5>Hubs</h5>
        <ul>
          <li><a href="#">Workflows</a></li>
          <li><a href="#">Blueprints</a></li>
          <li><a href="#">Comparisons</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Glossary</a></li>
        </ul>
      </div>
      <div>
        <h5>Reading paths</h5>
        <ul>
          <li><a href="#">Kickoff reliability</a></li>
          <li><a href="#">Delivery consistency</a></li>
          <li><a href="#">Payment control</a></li>
          <li><a href="#">Scope control</a></li>
          <li><a href="#">Stack cleanup</a></li>
        </ul>
      </div>
      <div>
        <h5>About</h5>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Editorial policy</a></li>
          <li><a href="#">Content policy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Legal</h5>
        <ul>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom">
      <span>© 2026 SoloOpsGuide. Practical, dated, revised.</span>
      <span>v1 · Last site review 2026-05-18</span>
    </div>
  </footer>
);

const Breadcrumbs = ({ items }) => (
  <div className="meta" style={{ display: "flex", gap: 8, alignItems: "center" }}>
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span style={{ color: "var(--ink-3)" }}>›</span>}
        {i < items.length - 1
          ? <a href="#" style={{ color: "var(--ink-2)" }}>{it}</a>
          : <span style={{ color: "var(--ink-3)" }}>{it}</span>}
      </React.Fragment>
    ))}
  </div>
);

const Chip = ({ children, kind = "" }) => <span className={`chip ${kind}`}>{children}</span>;

const Callout = ({ kind = "", title, children }) => (
  <div className={`callout ${kind}`}>
    <div className="title">{title}</div>
    <div className="body">{children}</div>
  </div>
);

const TemplateBlock = ({ title, body }) => (
  <div className="template-block">
    <div className="tb-head">
      <div className="tb-title">{title}</div>
      <div className="tb-actions">
        <button>Copy</button>
        <button>Open as plain text</button>
      </div>
    </div>
    <div className="tb-body">{body}</div>
  </div>
);

const Checklist = ({ title, items, count }) => (
  <div className="checklist">
    <div className="cl-title">
      <span>{title}</span>
      <span style={{ color: "var(--ink-3)", fontFamily: "var(--mono)", letterSpacing: 0 }}>
        {count || `${items.filter(i => i.done).length} / ${items.length}`}
      </span>
    </div>
    <ol>
      {items.map((it, i) => (
        <li key={i}>
          <span className={`box ${it.done ? "checked" : ""}`}></span>
          <span>{it.text}</span>
        </li>
      ))}
    </ol>
  </div>
);

const PathPicker = ({ items }) => (
  <div className="path-picker">
    <div className="pp-head">
      <div className="pp-title">Reading paths</div>
      <div className="pp-q">What's broken right now?</div>
    </div>
    <div className="pp-grid">
      {items.map((it, i) => (
        <div className="pp-item" key={i}>
          <span className="pp-num">{String(i + 1).padStart(2, "0")}</span>
          <span className="pp-name">
            {it.title}
            <span className="sub">{it.sub}</span>
          </span>
          <span className="pp-arrow">→</span>
        </div>
      ))}
    </div>
  </div>
);

const PathProgress = ({ path, step, total, current }) => (
  <div className="path-progress">
    <div className="lhs">
      <div className="eye">On the reading path</div>
      <div className="name"><a href="#">{path}</a> · {current}</div>
    </div>
    <div className="pos">{String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
  </div>
);

/* PageCard — homepage / hub shelf / related-content rows.
   Replaces the archived gradient PageCard with a system-toned
   card on the cream + navy editorial palette. See .page-card in
   styles.css for the full spec. */
const PageCard = ({
  type = "Workflow",
  date,                      // ISO string preferred, e.g. "2025-01-02"
  title,
  summary,
  descriptor,                // "How-to", "Decision guide", "Checklist", etc.
  readLabel = "Read article →",
  href = "#",
  mobile = false,
}) => (
  <a className={`page-card${mobile ? " mobile" : ""}`} href={href}>
    <div className="pc-media">
      <span className="pc-key">{type}</span>
    </div>
    <div className="pc-body">
      <div className="pc-meta">
        <span className="pc-type">{type}</span>
        {date ? <span className="pc-date">{date}</span> : null}
      </div>
      <h3 className="pc-title">{title}</h3>
      <p className="pc-summary">{summary}</p>
      <div className="pc-foot">
        <span className="pc-descriptor">{descriptor}</span>
        <span className="pc-read">{readLabel}</span>
      </div>
    </div>
  </a>
);

Object.assign(window, {
  SiteHeader, MobileHeader, SiteFooter, Breadcrumbs, Chip, Callout,
  TemplateBlock, Checklist, PathPicker, PathProgress, PageCard,
});