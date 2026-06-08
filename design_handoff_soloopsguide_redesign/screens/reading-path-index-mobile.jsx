/* Reading Path Index — diagnostic surface (mobile) */

const ReadingPathIndexMobile = () => {
  const data = window.PATH_DATA;
  const totalPaths = data.clusters.reduce((n, c) => n + c.paths.length, 0);

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Reading paths"]} />
      </div>

      {/* Header */}
      <section style={{ padding: "16px 20px 24px", borderBottom: "1px solid var(--rule)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Diagnostic · {totalPaths} paths · {data.clusters.length} clusters</div>
        <h1 style={{ font: "500 34px/1.1 var(--serif)", letterSpacing: "-0.015em", margin: "0 0 12px" }}>Reading paths</h1>
        <p style={{ font: "400 16px/1.5 var(--serif)", color: "var(--ink-2)", margin: 0 }}>
          A short, ordered sequence designed to fix one specific operator problem. Start with the symptom, not the topic.
        </p>
      </section>

      {/* Diagnostic block */}
      <section style={{ padding: "20px 20px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Diagnostic</div>
        <h2 style={{ font: "500 24px/1.15 var(--serif)", letterSpacing: "-0.008em", margin: "0 0 8px" }}>What's broken right now?</h2>
        <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 14px" }}>
          Pick the symptom closest to your current friction.
        </p>
        <div className="symptom-grid mobile">
          {data.symptoms.map((s, i) => (
            <a key={i} className="sym" href="#" style={{ gridTemplateColumns: "26px 1fr auto" }}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div className="body">
                <div className="q" style={{ fontSize: 16 }}>{s.q}</div>
                <div className="a" style={{ fontSize: 12 }}>{s.area} · path: <strong>{s.path}</strong></div>
              </div>
              <span className="go">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Path clusters */}
      {data.clusters.map((c, ci) => (
        <section key={ci} style={{ padding: "24px 20px 0", borderTop: ci === 0 ? "none" : 0, marginTop: 0 }}>
          <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Cluster · {String(ci + 1).padStart(2, "0")} · {c.paths.length} path{c.paths.length === 1 ? "" : "s"}</div>
            <h2 style={{ font: "500 24px/1.15 var(--serif)", letterSpacing: "-0.012em", margin: "0 0 8px" }}>{c.name}</h2>
            <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 12px" }}>{c.desc}</p>

            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {c.paths.map((p, pi) => (
                <div key={pi} className="path-row mobile">
                  <div className="p-num">{String(ci + 1).padStart(2, "0")}·{String(pi + 1).padStart(2, "0")}</div>
                  <h3 className="p-title"><a href="#">{p.title}</a></h3>
                  <p className="p-symptom"><strong>Symptom</strong> &nbsp; {p.sym}</p>
                  <p className="p-outcome" style={{ fontSize: 14 }}>{p.out}</p>
                  <div className="p-types">
                    {p.types.map((t, i) => <Chip key={i} kind={i === 0 ? "phase" : ""}>{t}</Chip>)}
                  </div>
                  <div className="p-end" style={{ marginTop: 8 }}>
                    <dl className="p-stats" style={{ gridTemplateColumns: "auto auto auto auto" }}>
                      <dt>Steps</dt><dd>{p.steps}</dd>
                      <dt>Time</dt><dd>{p.time}</dd>
                    </dl>
                    <a href="#" className="p-begin">Begin →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cross-link to hubs */}
      <section style={{ padding: "32px 20px 24px", marginTop: 24, borderTop: "1px solid var(--rule)", background: "var(--paper-2)" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>If a path is the wrong shape</div>
        <h2 style={{ font: "500 22px/1.2 var(--serif)", margin: "0 0 8px" }}>Browse a hub instead.</h2>
        <p style={{ font: "400 14px/1.55 var(--sans)", color: "var(--ink-2)", margin: "0 0 14px" }}>
          If you'd rather work topically, each hub is a list of dated entries.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            ["Workflows", "62 entries"],
            ["Templates", "48 entries"],
            ["Blueprints", "12 entries"],
            ["Comparisons", "9 entries"],
          ].map(([n, c], i) => (
            <a key={i} href="#" style={{ display: "block", padding: "12px 14px", border: "1px solid var(--rule)", background: "var(--paper)", color: "var(--ink)" }}>
              <div className="eyebrow" style={{ marginBottom: 4, fontSize: 10 }}>Hub</div>
              <div style={{ font: "500 16px/1.25 var(--serif)", letterSpacing: "-0.005em", marginBottom: 4 }}>{n}</div>
              <div className="meta" style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--ink-3)" }}>{c}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "20px 20px" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          Maintained by SoloOpsGuide Editorial. Paths reviewed quarterly and re-sequenced when a step is added, removed or replaced.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.ReadingPathIndexMobile = ReadingPathIndexMobile;
