/* Trust pages — mobile primitive
   Reuses TRUST_PAGES content from screens/trust-pages.jsx */

const TrustPageMobile = ({ slug }) => {
  const page = window.TRUST_PAGES[slug];
  const related = window.trustRelated(page.slug);

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Trust", page.title]} />
      </div>

      <div className="trust-shell mobile">
        <main className="trust-main">
          <header className="trust-header">
            <div className="eyebrow">{page.eyebrow}</div>
            <h1>{page.title}</h1>
            <p className="lede">{page.lede}</p>
          </header>

          <div className="trust-prose">
            {page.sections.map((s, i) => (
              <section key={i} id={`s-${i + 1}`}>
                <h2>{s.h}</h2>
                <TrustBody items={s.body} />
              </section>
            ))}
          </div>

          <div className="related-trust">
            <div className="h">Other trust pages</div>
            <div className="rl">
              {related.map((r, i) => (
                <a key={i} href={`#${r.slug}`}>
                  <div className="n">{r.name}</div>
                  <div className="d">{r.desc}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="review-note">
            <span className="label">Editorial note</span>
            <span className="body">
              Maintained by <strong>SoloOpsGuide Editorial</strong>. Reviewed on a quarterly cadence. Live inbox + dates confirmed in the footer at launch.
            </span>
            <span className="pos">{page.slug} · v3</span>
          </div>
        </main>
      </div>

      <div style={{ height: 24 }}></div>
      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.TrustPageMobile = TrustPageMobile;
