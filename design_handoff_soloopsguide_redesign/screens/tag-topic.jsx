/* Tag / topic destination page (desktop + mobile)
   Three demos: a well-populated topic ("Approvals"), and a sparse-state topic ("Subcontracting"). */

const TAG_APPROVALS = {
  slug: "approvals",
  eyebrow: "Topic",
  title: "Approvals",
  lede: "Approval — the moment a deliverable is formally accepted — is where engagements quietly fall apart. This topic gathers everything on the site that addresses how approvals are scheduled, named, written down, and recovered when they drift.",
  stats: [
    ["Items in topic", "24"],
    ["Reading paths", "Review control · Approval discipline"],
    ["Last reviewed", "2026-04-08"],
    ["Related tags", "Scope · Sign-off · Reviews"],
  ],
  groups: [
    {
      key: "workflow",
      h: "Workflows",
      desc: "Process per phase of one engagement. Start here if you have a live approval problem.",
      items: [
        { num: "WF-08", title: "Scheduling the approval window", summary: "How to fix the approval slot at kickoff and what to do when it slips. Includes the fallback rule and the re-baseline trigger.", meta: ["8 min read", "Phase · Review", "Updated 2026-04-08"], date: "2026-04-08" },
        { num: "WF-09", title: "The reviewer-of-record clause", summary: "Why approvals fail when sign-off is verbal or routed through the wrong person. The clause we put in agreements, and how we explain it.", meta: ["6 min read", "Phase · Agreement", "Updated 2026-03-21"], date: "2026-03-21" },
        { num: "WF-14", title: "Written approval format", summary: "A four-line written format both sides actually use. Plain-English, paste-friendly, dated.", meta: ["5 min read", "Phase · Review", "Updated 2026-03-02"], date: "2026-03-02" },
        { num: "WF-22", title: "Recovering a stalled approval", summary: "Three escalation steps when an approval window has passed and the next phase can't start.", meta: ["7 min read", "Phase · Review", "Updated 2026-02-11"], date: "2026-02-11" },
      ],
    },
    {
      key: "template",
      h: "Templates & Checklists",
      desc: "Copyable artefacts used inside the workflows above. Adapt and parametrise for your engagement.",
      items: [
        { num: "TPL-12", title: "Reviewer-of-record clause", summary: "Agreement clause naming the decision-maker, the approval window, and the fallback rule.", meta: ["Template", "Paste · 1 paragraph", "Updated 2026-04-08"], date: "2026-04-08" },
        { num: "TPL-13", title: "Written approval format", summary: "Four-line plain-text format reviewers respond with. Carries the decision, scope, and date.", meta: ["Template", "Paste · 4 lines", "Updated 2026-03-21"], date: "2026-03-21" },
        { num: "CHK-04", title: "Pre-approval checklist", summary: "What needs to be ready before you send a deliverable to the reviewer. Eight checks.", meta: ["Checklist", "8 items", "Updated 2026-03-02"], date: "2026-03-02" },
        { num: "TPL-19", title: "Approval-window slip note", summary: "A short, calm message to send when the reviewer misses the agreed approval window.", meta: ["Template", "Paste · 3 lines", "Updated 2026-02-11"], date: "2026-02-11" },
      ],
    },
    {
      key: "comparison",
      h: "Comparisons",
      desc: "Bounded model decisions. Pick one if you're still deciding how approvals should work for your engagement type.",
      items: [
        { num: "CMP-03", title: "Synchronous vs asynchronous approval", summary: "When a scheduled call beats a written sign-off, and when the opposite is true. Sided.", meta: ["Comparison", "2 options", "Updated 2026-03-21"], date: "2026-03-21" },
        { num: "CMP-07", title: "Single reviewer vs reviewer panel", summary: "Trade-off between a single named decision-maker and a small panel. Sided toward single, with conditions.", meta: ["Comparison", "2 options", "Updated 2026-02-26"], date: "2026-02-26" },
      ],
    },
    {
      key: "glossary",
      h: "Glossary",
      desc: "Narrow definitions. Use these to pin down language inside an agreement.",
      items: [
        { num: "GL-04", title: "Reviewer of record", summary: "The single named person empowered to approve a deliverable on behalf of the client.", meta: ["Glossary", "Phase · Review"], date: "2026-04-08" },
        { num: "GL-11", title: "Approval window", summary: "The pre-agreed time interval inside which the reviewer of record is committed to respond.", meta: ["Glossary", "Phase · Review"], date: "2026-03-21" },
        { num: "GL-18", title: "Fallback approval", summary: "The pre-agreed action that is triggered automatically when an approval window passes.", meta: ["Glossary", "Phase · Review"], date: "2026-03-02" },
      ],
    },
    {
      key: "faq",
      h: "FAQ",
      desc: "Quick blockers, narrow scope, routed back to the relevant workflow.",
      items: [
        { num: "FAQ-12", title: "What if the reviewer goes silent?", summary: "Three escalation steps, an automatic re-baseline, and when to pause the engagement.", meta: ["FAQ", "Topic · Approvals"], date: "2026-02-11" },
        { num: "FAQ-17", title: "Can verbal sign-off be enforceable?", summary: "Generally no, and what to do at the next agreement renewal to fix it.", meta: ["FAQ", "Topic · Approvals"], date: "2026-01-28" },
      ],
    },
    {
      key: "paths",
      h: "Reading paths",
      desc: "Cross-hub sequences. Use one if approvals are a recurring rather than one-off problem.",
      items: [
        { num: "RP-02", title: "Review control", summary: "Six-step sequence to fix drifting reviews — scheduled window, named decision-maker, written approval, fallback, re-baseline trigger.", meta: ["Reading path", "6 steps · ~50 min"], date: "2026-04-08" },
        { num: "RP-03", title: "Approval discipline", summary: "Four-step sequence focused narrowly on getting sign-off in a usable format.", meta: ["Reading path", "4 steps · ~30 min"], date: "2026-03-21" },
      ],
    },
  ],
  related: [
    { name: "Scope", count: "31 items" },
    { name: "Reviews", count: "18 items" },
    { name: "Sign-off", count: "12 items" },
    { name: "Change orders", count: "9 items" },
    { name: "Re-baseline", count: "7 items" },
    { name: "Kickoff", count: "22 items" },
  ],
};

const TAG_SUBCONTRACT = {
  slug: "subcontracting",
  eyebrow: "Topic",
  title: "Subcontracting",
  lede: "When a solo operator hands part of a deliverable to another solo operator under their own agreement. Light coverage so far — we publish new pages on this topic as we encounter recurring questions.",
  stats: [
    ["Items in topic", "3"],
    ["Reading paths", "—"],
    ["Last reviewed", "2026-03-02"],
    ["Related tags", "Capacity · Margin · Agreements"],
  ],
  sparse: true,
  groups: [
    {
      key: "workflow",
      h: "Workflows",
      desc: "Process per phase of one engagement.",
      items: [
        { num: "WF-31", title: "Bringing in a second solo operator", summary: "How to scope and brief a one-time subcontract without taking on hiring overhead. Includes the back-to-back clause.", meta: ["6 min read", "Phase · Delivery", "Updated 2026-03-02"], date: "2026-03-02" },
      ],
    },
    {
      key: "template",
      h: "Templates & Checklists",
      desc: "Copyable artefacts used inside the workflow above.",
      items: [
        { num: "TPL-31", title: "Back-to-back subcontract clause", summary: "Short clause that flows obligations from the client agreement through to the subcontractor without surprises.", meta: ["Template", "Paste · 2 paragraphs", "Updated 2026-03-02"], date: "2026-03-02" },
      ],
    },
    {
      key: "faq",
      h: "FAQ",
      desc: "Quick blockers, narrow scope.",
      items: [
        { num: "FAQ-29", title: "Do I have to tell the client I'm subcontracting?", summary: "Usually yes, and how to phrase it without losing the engagement. Routed back to the workflow above.", meta: ["FAQ", "Topic · Subcontracting"], date: "2026-03-02" },
      ],
    },
  ],
  related: [
    { name: "Capacity", count: "14 items" },
    { name: "Margin", count: "8 items" },
    { name: "Agreements", count: "26 items" },
    { name: "Scope", count: "31 items" },
  ],
};

window.TAG_APPROVALS = TAG_APPROVALS;
window.TAG_SUBCONTRACT = TAG_SUBCONTRACT;

const TagRow = ({ it, i }) => (
  <div className="tag-row">
    <div className="t-num">{it.num}</div>
    <div>
      <h3 className="t-title"><a href="#">{it.title}</a></h3>
      <p className="t-summary">{it.summary}</p>
      <div className="t-meta">
        {it.meta.map((m, j) => (
          <React.Fragment key={j}>
            {j > 0 && <span className="dot"></span>}
            <span>{m}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="t-end">
      <span className="date">{it.date}</span>
      <a className="open" href="#">Open →</a>
    </div>
  </div>
);

const TagRowMobile = ({ it }) => (
  <div className="tag-row mobile">
    <div className="t-num">{it.num}</div>
    <h3 className="t-title"><a href="#">{it.title}</a></h3>
    <p className="t-summary">{it.summary}</p>
    <div className="t-meta">
      {it.meta.map((m, j) => (
        <React.Fragment key={j}>
          {j > 0 && <span className="dot"></span>}
          <span>{m}</span>
        </React.Fragment>
      ))}
    </div>
    <div className="t-end">
      <span className="date">{it.date}</span>
      <a className="open" href="#">Open →</a>
    </div>
  </div>
);

const TagPageDesktop = ({ data }) => {
  const totalItems = data.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="sog" style={{ width: 1280, background: "var(--paper)" }}>
      <SiteHeader />

      <div style={{ padding: "16px 56px 0", maxWidth: 1280 }}>
        <Breadcrumbs items={["Topics", data.title]} />
      </div>

      <header className="tag-header">
        <div className="stack">
          <div>
            <div className="eyebrow">{data.eyebrow} · {totalItems} items across {data.groups.length} content types</div>
            <h1>{data.title}</h1>
            <p className="lede">{data.lede}</p>
          </div>
          <div>
            <dl className="tag-stats">
              {data.stats.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <dt>{k}</dt>
                  <dd className={k === "Last reviewed" ? "mono" : ""}>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {data.sparse && (
        <section style={{ paddingTop: 32 }}>
          <div className="sparse-state">
            <div className="se-eyebrow">Sparse topic · light coverage</div>
            <h2>This topic has {totalItems} published items.</h2>
            <p>
              That's deliberate. We only publish a page when we have a workflow that closes a real loop, not to fill out a topic page. If you're here looking for more on subcontracting, try one of the related topics below, or write to SoloOpsGuide Editorial with the specific question.
            </p>
            <div className="alts">
              <a href="#"><div className="ak">Topic</div><div className="an">Capacity</div></a>
              <a href="#"><div className="ak">Topic</div><div className="an">Agreements</div></a>
              <a href="#"><div className="ak">Reading path</div><div className="an">Delivery consistency</div></a>
              <a href="#"><div className="ak">FAQ</div><div className="an">Operator capacity questions</div></a>
            </div>
          </div>
        </section>
      )}

      {data.groups.map((g, gi) => (
        <section key={gi} className="tag-section">
          <div className="tag-group-head">
            <div>
              <h2 className="gh-name">{g.h}</h2>
              <p className="gh-desc">{g.desc}</p>
            </div>
            <div className="gh-count">{String(g.items.length).padStart(2, "0")} {g.items.length === 1 ? "item" : "items"}</div>
          </div>
          <div>
            {g.items.map((it, i) => <TagRow key={i} it={it} i={i} />)}
          </div>
        </section>
      ))}

      <section className="related-topics">
        <div className="lhs">
          <div className="h">Adjacent</div>
          <h2>Related topics</h2>
          <p>Topics that overlap with {data.title}. Most operators end up reading two or three of these together.</p>
        </div>
        <div className="rhs">
          {data.related.map((r, i) => (
            <a key={i} href="#">
              <div className="n">{r.name}</div>
              <div className="c">{r.count}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "24px 56px 56px", maxWidth: 1280 }}>
        <div className="meta" style={{ lineHeight: 1.7, maxWidth: 720 }}>
          Maintained by SoloOpsGuide Editorial. Topic pages are reviewed each quarter; items appear here when their primary workflow is tagged with the topic. See the <a href="#">Editorial policy</a> for how topics are scoped.
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

const TagPageMobile = ({ data }) => {
  const totalItems = data.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="sog" style={{ width: 390, background: "var(--paper)" }}>
      <MobileHeader />

      <div style={{ padding: "16px 20px 0" }}>
        <Breadcrumbs items={["Topics", data.title]} />
      </div>

      <header className="tag-header mobile">
        <div className="stack">
          <div>
            <div className="eyebrow">{data.eyebrow} · {totalItems} items</div>
            <h1>{data.title}</h1>
            <p className="lede">{data.lede}</p>
          </div>
          <div>
            <dl className="tag-stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {data.stats.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <dt>{k}</dt>
                  <dd className={k === "Last reviewed" ? "mono" : ""}>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {data.sparse && (
        <section style={{ paddingTop: 20 }}>
          <div className="sparse-state mobile">
            <div className="se-eyebrow">Sparse topic</div>
            <h2>This topic has {totalItems} published items.</h2>
            <p>
              Try one of the adjacent topics, or write to SoloOpsGuide Editorial with the specific question.
            </p>
            <div className="alts">
              <a href="#"><div className="ak">Topic</div><div className="an">Capacity</div></a>
              <a href="#"><div className="ak">Topic</div><div className="an">Agreements</div></a>
              <a href="#"><div className="ak">Reading path</div><div className="an">Delivery consistency</div></a>
              <a href="#"><div className="ak">FAQ</div><div className="an">Operator capacity</div></a>
            </div>
          </div>
        </section>
      )}

      {data.groups.map((g, gi) => (
        <section key={gi} className="tag-section mobile">
          <div className="tag-group-head" style={{ gridTemplateColumns: "1fr", gap: 8 }}>
            <div>
              <h2 className="gh-name" style={{ fontSize: 22 }}>{g.h}</h2>
              <p className="gh-desc">{g.desc}</p>
            </div>
            <div className="gh-count">{String(g.items.length).padStart(2, "0")} {g.items.length === 1 ? "item" : "items"}</div>
          </div>
          <div>
            {g.items.map((it, i) => <TagRowMobile key={i} it={it} />)}
          </div>
        </section>
      ))}

      <section className="related-topics mobile">
        <div className="lhs">
          <div className="h">Adjacent</div>
          <h2>Related topics</h2>
          <p>Topics that overlap with {data.title}.</p>
        </div>
        <div className="rhs">
          {data.related.map((r, i) => (
            <a key={i} href="#">
              <div className="n">{r.name}</div>
              <div className="c">{r.count}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ padding: "16px 20px 20px" }}>
        <div className="meta" style={{ lineHeight: 1.7 }}>
          Maintained by SoloOpsGuide Editorial. Topics reviewed each quarter.
        </div>
      </section>

      <div style={{ padding: 20, borderTop: "1px solid var(--rule)", background: "var(--paper-2)", textAlign: "center" }}>
        <div className="meta">© 2026 SoloOpsGuide</div>
      </div>
    </div>
  );
};

window.TagPageDesktop = TagPageDesktop;
window.TagPageMobile = TagPageMobile;
