// SoloOpsGuide — PageCard.jsx
// Reusable content card used in hub pages, homepage grids, related panels

const PAGE_CARD_THEMES = {
  workflow: {
    media: "linear-gradient(135deg, rgba(15,139,141,0.26), rgba(8,92,110,0.78))",
    typeColor: "#0f766e",
    linkLabel: "Read workflow",
  },
  blueprint: {
    media: "linear-gradient(135deg, rgba(31,112,149,0.22), rgba(17,38,52,0.78))",
    typeColor: "#1d6fa4",
    linkLabel: "Open blueprint",
  },
  comparison: {
    media: "linear-gradient(135deg, rgba(184,130,63,0.26), rgba(104,78,54,0.72))",
    typeColor: "#9a6b33",
    linkLabel: "Read comparison",
  },
  template: {
    media: "linear-gradient(135deg, rgba(15,139,141,0.18), rgba(184,130,63,0.42))",
    typeColor: "#0f766e",
    linkLabel: "Open asset",
  },
  glossary: {
    media: "linear-gradient(135deg, rgba(65,87,106,0.2), rgba(17,38,52,0.68))",
    typeColor: "#475569",
    linkLabel: "View term",
  },
  faq: {
    media: "linear-gradient(135deg, rgba(65,87,106,0.2), rgba(17,38,52,0.68))",
    typeColor: "#475569",
    linkLabel: "View answer",
  },
};

function PageCard({ title, summary, type = "workflow", tag, date = "Jan 2, 2025", featured = false, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  const theme = PAGE_CARD_THEMES[type] || PAGE_CARD_THEMES.workflow;
  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(203,213,225,1)" : "rgba(226,232,240,1)"}`,
        borderRadius: "16px",
        background: "#f8fafc",
        boxShadow: hovered ? "0 10px 24px rgba(15,23,42,0.08)" : "0 1px 2px rgba(15,23,42,0.04)",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
        cursor: onClick ? "pointer" : "default",
        display: "grid",
      }}
    >
      {/* Media */}
      <div style={{
        aspectRatio: "16/9",
        background: theme.media,
        position: "relative",
        overflow: "hidden",
      }}></div>

      {/* Body */}
      <div style={{ display: "grid", gap: "0.85rem", padding: featured ? "1.75rem" : "1.5rem" }}>
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: theme.typeColor }}>
            {typeLabel}
          </span>
          <span style={{ fontSize: "13px", color: "#64748b" }}>{date}</span>
        </div>

        {/* Title */}
        <h3 style={{
          margin: 0, fontSize: featured ? "22px" : "18px",
          fontWeight: 600, lineHeight: 1.28, letterSpacing: "-0.03em", color: "#0f172a",
        }}>{title}</h3>

        {/* Summary */}
        {summary && (
          <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.65, color: "#475569" }}>{summary}</p>
        )}

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {tag && (
            <span style={{
              display: "inline-flex", alignItems: "center", padding: "0.22rem 0.55rem",
              border: "1px solid rgba(226,232,240,1)", borderRadius: "999px",
              background: "#fff", color: "#475569", fontSize: "12px", fontWeight: 600,
            }}>{tag}</span>
          )}
          <span style={{ marginLeft: "auto", fontSize: "14px", fontWeight: 500, color: "#0f766e" }}>
            {theme.linkLabel}
          </span>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { PageCard, PAGE_CARD_THEMES });
