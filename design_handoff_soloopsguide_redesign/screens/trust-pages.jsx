/* Trust pages — shared content + desktop primitive
   Six variants: about · editorial · content · contact · disclaimer · terms
   Shared layout, variant content. Role-based wording only. */

/* Placeholder dating + inbox.
   These values are illustrative inside the UI kit only — they are never to ship
   to production as-is. The review-note footer always renders them with a leading
   "Sample" label so reviewers do not mistake them for live dates.
   See README → "Placeholder email & date guidance". */
const TRUST_REVIEWED = "Updated quarterly";
const TRUST_NEXT_REVIEW = "Next review in 3 months";
const TRUST_EMAIL = "[Editorial inbox — confirm before launch]";

const TRUST_PAGES = {
  about: {
    slug: "about",
    eyebrow: "Trust · About",
    title: "About SoloOpsGuide",
    lede: "A workflow-first editorial site for freelancers, consultants, and solo operators. We document how client work runs end-to-end — written, dated, and reviewed in the open.",
    sections: [
      {
        h: "What this site is",
        body: [
          { kind: "p", text: "SoloOpsGuide is a free reading resource. It exists for one job: to make the work of running a solo client business — the inquiry, the kickoff, the review cycle, the invoice, the close — visibly more legible and less ad-hoc." },
          { kind: "p", text: "Everything published here is editorial. There is no product to buy, no course, no coaching call, no community subscription. The site is organised as four hubs (Workflows, Blueprints, Comparisons, Templates) plus reading paths that route across them." },
        ],
      },
      {
        h: "Who it is for",
        body: [
          { kind: "p", text: "Solo and very-small operators who already do the work. Freelance designers, developers, writers, consultants, video editors, fractional operators, independent agencies of one or two." },
          { kind: "p", text: "The writing assumes you understand your craft. The gap it tries to close is the operational one — the part of the business that is not the work itself." },
        ],
      },
      {
        h: "How content is organised",
        body: [
          { kind: "pe", k: "Workflows", v: "Full-lifecycle process per phase of one engagement." },
          { kind: "pe", k: "Blueprints", v: "Whole-stack compositions, end-to-end." },
          { kind: "pe", k: "Comparisons", v: "Bounded tool-or-model decisions." },
          { kind: "pe", k: "Templates", v: "Copyable assets used inside live processes." },
          { kind: "pe", k: "Reading paths", v: "Cross-hub sequences that close one specific operator loop." },
        ],
      },
      {
        h: "Who maintains it",
        body: [
          { kind: "p", text: "SoloOpsGuide is written and maintained by a small editorial group operating under the role name “SoloOpsGuide Editorial.” We do not publish bylines, personal bios, photos, or LinkedIn-style credential lists. That is a deliberate choice: the value of a published workflow does not change with the name attached to it." },
          { kind: "p", text: "Where individual judgement matters — a decision recommendation, a take on a comparison, a removal — the page makes that judgement explicit and dates it." },
        ],
      },
      {
        h: "How the site is funded",
        body: [
          { kind: "p", text: "Display advertising, served through Google AdSense. Ad placements are kept outside reading flow and never replace editorial content. We do not run sponsored articles, paid placements, or “best-of” rankings reordered by partnership." },
          { kind: "p", text: "Some outbound links to third-party tools may be affiliate links. Where they are, the comparison page says so. Affiliate relationships do not change which tool is recommended or how it is described." },
        ],
      },
      {
        h: "What this site is not",
        body: [
          { kind: "ul", items: [
            "Not a consulting business or done-for-you service.",
            "Not a course platform or membership.",
            "Not a coaching brand. We do not coach.",
            "Not a directory of professionals.",
            "Not a substitute for legal, accounting, or tax advice. See the Disclaimer.",
          ]},
        ],
      },
    ],
  },

  editorial: {
    slug: "editorial-policy",
    eyebrow: "Trust · Editorial Policy",
    title: "Editorial policy",
    lede: "How content is researched, written, reviewed, dated, and revised. Plain-English standards we hold every published page to.",
    sections: [
      {
        h: "Scope of coverage",
        body: [
          { kind: "p", text: "We cover client operations end-to-end: inquiry, scoping, kickoff, agreement, review, approval, delivery, invoicing, change, recovery, and close. Adjacent topics (positioning, pricing strategy, broader business planning) are out of scope unless they materially affect operations." },
          { kind: "p", text: "We do not cover topics where we cannot apply reliable judgement: tax filing, jurisdiction-specific labour or contract law, accounting standards, or financial advice. Where these touch a workflow, we name the boundary and route you outward." },
        ],
      },
      {
        h: "Research and sources",
        body: [
          { kind: "p", text: "Most pages are written from working experience operating client engagements over multiple years. Where a page references a third-party tool, pricing, or product feature, we verify directly from the vendor on the date listed in the page meta. Pricing and feature claims are restated, not copied, and dated explicitly." },
          { kind: "p", text: "Where we cite a study, statistic, or external article, we link the original source. Sources are not used as authority by themselves; they are used to show our work." },
        ],
      },
      {
        h: "Review and approval",
        body: [
          { kind: "p", text: "Every published page is reviewed by at least one second reader on SoloOpsGuide Editorial before it goes live. Reviews check four things: the workflow is operable as written, the language is plain, the dating is accurate, and the page is honest about scope and limits." },
          { kind: "p", text: "Reviewers operate under the role name “SoloOpsGuide Editorial.” We do not list individual reviewer names. If you need to address a specific reviewer for a complaint, see the Contact page." },
        ],
      },
      {
        h: "Dating and versioning",
        body: [
          { kind: "pe", k: "Published", v: "The date the page first went live." },
          { kind: "pe", k: "Last reviewed", v: "The most recent date the page passed an editorial review, even if no text changed." },
          { kind: "pe", k: "Last revised", v: "The most recent date the substantive text changed." },
          { kind: "p", text: "Every workflow, blueprint, comparison, and template carries all three. Pages reviewed more than nine months ago show a quiet stale-content note until they are re-reviewed." },
        ],
      },
      {
        h: "Corrections",
        body: [
          { kind: "p", text: "If we get something wrong, we correct it in place and note what changed at the bottom of the page. We do not silently rewrite. A summary of significant changes across the site is published quarterly." },
        ],
      },
      {
        h: "Editorial tooling",
        body: [
          { kind: "p", text: "Editorial tooling may support drafting, formatting, and QA passes. Final editorial responsibility — accuracy, scope, tone, and the decision to publish — stays with SoloOpsGuide Editorial. No published page is the unedited output of any tool." },
        ],
      },
      {
        h: "What we will not publish",
        body: [
          { kind: "ul", items: [
            "Invented testimonials, case studies, or client quotes.",
            "Fabricated statistics or unsourced claims.",
            "Authority-by-association (logos, awards, vanity affiliations).",
            "“Best of” rankings reordered by commercial relationships.",
            "Doorway pages, listicles, or content shaped only for search.",
          ]},
        ],
      },
    ],
  },

  content: {
    slug: "content-policy",
    eyebrow: "Trust · Content Policy",
    title: "Content policy",
    lede: "The substantive limits of what SoloOpsGuide publishes — what we cover, what we don't, and how we handle authority claims, testimonials, and outside content.",
    sections: [
      {
        h: "Practical scope",
        body: [
          { kind: "p", text: "Operational guidance for one person running client work. Process, written agreements, approval discipline, invoicing cadence, stack hygiene, project recovery. The unit of value is a workflow that closes a real loop, not an idea." },
        ],
      },
      {
        h: "Not a substitute for",
        body: [
          { kind: "ul", items: [
            "Legal advice. Contract language samples are starting points, not enforceable instruments.",
            "Tax or accounting advice. Invoicing patterns are operational, not fiscal.",
            "Therapy or coaching. We do not address mindset, motivation, or interpersonal coaching.",
            "Hiring or employment-law guidance. Subcontract patterns are illustrative.",
          ]},
        ],
      },
      {
        h: "Authority and credentials",
        body: [
          { kind: "p", text: "SoloOpsGuide does not claim consulting credentials, certifications, or industry awards. We do not publish photos of staff, named bios, or LinkedIn-style profiles. Where individual judgement is exercised — a recommendation, a removal, an opinion — the page says so and dates it, but it does not attach a personal name." },
          { kind: "p", text: "The credibility of a workflow is in whether it works for a reader, not in whose name is on it." },
        ],
      },
      {
        h: "Testimonials and named clients",
        body: [
          { kind: "p", text: "We do not run testimonials, success stories, or named-client case studies. The site has no clients in the consulting sense. Scenarios in workflows are composites drawn from general patterns; they do not describe any specific engagement." },
        ],
      },
      {
        h: "Affiliate and sponsored content",
        body: [
          { kind: "p", text: "Some links to third-party tools may carry affiliate codes. Where they do, the comparison page says so in the meta. Affiliate relationships never change a recommendation or its description. We do not run sponsored posts, paid placements, or guest articles." },
        ],
      },
      {
        h: "Inclusive language",
        body: [
          { kind: "p", text: "We write to a working solo operator without assumptions about industry, gender, location, or background. We avoid metaphors that exclude readers without prior context, motivational rhetoric, and any phrasing that implies a single correct way to run a business." },
        ],
      },
      {
        h: "Removals and reader requests",
        body: [
          { kind: "p", text: "If you believe a published page misrepresents your business, tool, or work, write to SoloOpsGuide Editorial with the specific page and the specific claim. We will respond, evaluate, and correct or remove as appropriate. We will not remove pages because of competitive disagreement, ranking concerns, or general dislike of a position." },
        ],
      },
    ],
  },

  contact: {
    slug: "contact",
    eyebrow: "Trust · Contact",
    title: "Contact",
    lede: "How to reach SoloOpsGuide Editorial. One inbox, modest response time, narrow scope.",
    sections: [
      {
        h: "One inbox",
        body: [
          { kind: "p", text: "All written contact goes to a single editorial inbox that reaches SoloOpsGuide Editorial. The live address is published in the site footer and on the contact card in the aside — kept out of the prose here so it can be confirmed in one place before launch." },
          { kind: "callout", label: "Editorial inbox", text: "The address is monitored on weekdays only. Two-week response window. See the aside contact field for the current placeholder until the live inbox is wired up." },
          { kind: "p", text: "We do not run a contact form, a chat widget, or a public phone number. We do not maintain a press line." },
        ],
      },
      {
        h: "What we respond to",
        body: [
          { kind: "ul", items: [
            "Corrections to specific pages — please include the page URL and the specific claim.",
            "Tool, pricing, or feature updates from vendors we cite.",
            "Removal requests covered by the Content policy.",
            "Republication or citation requests covered by the Terms.",
          ]},
        ],
      },
      {
        h: "What we do not respond to",
        body: [
          { kind: "ul", items: [
            "Consulting, coaching, or done-for-you work inquiries. SoloOpsGuide does not offer client services.",
            "Sponsorship, paid placement, or guest-post pitches.",
            "Speaking, podcast, or interview invitations under the SoloOpsGuide name.",
            "Workflow-design help for a specific engagement. The site is not a service desk.",
          ]},
        ],
      },
      {
        h: "Response time",
        body: [
          { kind: "p", text: "Editorial replies within two weeks where it replies at all. Many messages are read but not acknowledged. If your message is a correction, we will reply with a yes/no and a published change where applicable; if your message is out of scope (per the list above), we may not reply." },
        ],
      },
      {
        h: "Reporting an error",
        body: [
          { kind: "p", text: "Use the subject line “Correction —” followed by the page slug. Include the exact quote you believe is wrong, what you believe is correct, and your reasoning or source. Corrections handled per the Editorial policy." },
        ],
      },
    ],
  },

  disclaimer: {
    slug: "disclaimer",
    eyebrow: "Trust · Disclaimer",
    title: "Disclaimer",
    lede: "Educational content. General patterns. Not legal, financial, or tax advice. Read this once before relying on any specific page.",
    sections: [
      {
        h: "What this site is, in plain terms",
        body: [
          { kind: "p", text: "SoloOpsGuide is a free, freely-readable editorial website. The pages are reading material — workflows, comparisons, templates, glossary entries, and FAQs — written for an informed adult solo operator." },
          { kind: "p", text: "Nothing on the site is personalised. It does not know your jurisdiction, your contracts, your clients, your tax situation, or your engagement terms. It cannot make a decision for you, and it is not written with your specific facts in mind." },
        ],
      },
      {
        h: "Not advice",
        body: [
          { kind: "ul", items: [
            "Not legal advice. Contract clauses, agreement samples, and approval language are illustrative wording. Have your own counsel review anything you intend to put under a client's signature.",
            "Not financial, tax, or accounting advice. Invoicing cadence, deposit structures, and pricing patterns are operational, not fiscal.",
            "Not regulated or licensed advice in any jurisdiction.",
          ]},
        ],
      },
      {
        h: "No professional engagement",
        body: [
          { kind: "p", text: "Reading SoloOpsGuide does not create a professional, advisory, fiduciary, or consulting relationship between you and SoloOpsGuide Editorial. We are not your lawyer, accountant, consultant, or coach." },
        ],
      },
      {
        h: "Examples and scenarios",
        body: [
          { kind: "p", text: "Scenarios used in workflows and comparisons are composites — patterns drawn from general experience. They are not descriptions of specific engagements, real clients, or named businesses. Resemblance to any actual matter is coincidental." },
        ],
      },
      {
        h: "Third-party tools and prices",
        body: [
          { kind: "p", text: "Where we describe a third-party tool, its features, or its price, that description is accurate to the verification date listed on the page. Tools change. Prices change. Verify with the vendor before making a purchasing decision." },
        ],
      },
      {
        h: "Limitation of liability",
        body: [
          { kind: "p", text: "The site is provided “as is.” To the maximum extent permitted by law, SoloOpsGuide is not liable for any loss arising from reliance on its content, including but not limited to lost revenue, missed deadlines, contract disputes, or tool migrations gone sideways." },
        ],
      },
    ],
  },

  privacy: {
    slug: "privacy-policy",
    eyebrow: "Trust · Privacy Policy",
    title: "Privacy policy",
    lede: "What SoloOpsGuide may collect, what it does with it, and what choices you have. Plain English, practical, and honest about what is and is not running today.",
    sections: [
      {
        h: "What this policy covers",
        body: [
          { kind: "p", text: "This policy describes information that may be collected when you read, search, or contact SoloOpsGuide. It is written for the editorial site at the SoloOpsGuide domain and does not cover third-party sites the site links to." },
          { kind: "p", text: "It is written in plain English. It is not a legal contract; where formal compliance language matters for your situation, consult a qualified adviser." },
        ],
      },
      {
        h: "Information that may be collected",
        body: [
          { kind: "pe", k: "Reading activity", v: "Aggregate pages viewed, referring source, browser type, approximate region. Used to understand which workflows readers actually use." },
          { kind: "pe", k: "Search queries", v: "What you type into the site search box, in aggregate. Used to spot gaps in coverage." },
          { kind: "pe", k: "Contact messages", v: "The contents of any email you send to the editorial inbox, plus your reply address." },
          { kind: "p", text: "SoloOpsGuide does not run user accounts, password logins, or member profiles. There is no user database to compromise." },
        ],
      },
      {
        h: "Analytics",
        body: [
          { kind: "p", text: "The site uses privacy-respecting analytics to count visits and understand how readers move between hubs. Where possible, IP addresses are truncated and visitors are not linked across sessions. Analytics output is reviewed in aggregate — not at the individual visitor level." },
          { kind: "p", text: "We do not sell analytics data and we do not share it with advertisers as personal information." },
        ],
      },
      {
        h: "Cookies and similar storage",
        body: [
          { kind: "p", text: "The site may set a small number of cookies or use local storage for the following purposes:" },
          { kind: "ul", items: [
            "Remembering whether you have dismissed a banner or chosen a reading-mode preference.",
            "Aggregate analytics, as described above.",
            "Affiliate-link attribution, where outbound links use affiliate codes.",
            "Display advertising, if and when advertising is enabled in future.",
          ]},
          { kind: "p", text: "The site does not currently use cookies for advertising or remarketing. If that changes, this section will be updated and the change will be reflected in the policy date below." },
        ],
      },
      {
        h: "Affiliate links",
        body: [
          { kind: "p", text: "Some outbound links to third-party tools may carry affiliate codes. Where a page uses affiliate links, the page meta says so explicitly. Affiliate clicks may set a cookie that tells the vendor SoloOpsGuide referred the visit; the vendor's own privacy policy governs what they do with that." },
          { kind: "p", text: "Affiliate relationships do not change which tool is recommended or how it is described." },
        ],
      },
      {
        h: "Display advertising",
        body: [
          { kind: "p", text: "Display advertising is not enabled on SoloOpsGuide at the time of writing." },
          { kind: "p", text: "If display advertising is enabled later — for example via an ad network such as Google AdSense — this section will be updated to describe what ad slots exist, what the ad network may collect, and how to opt out. Ad placements will follow the documented safe-zone diagram: never above the fold in the reading column, never styled to look like editorial content, and never sticky at the bottom of the screen." },
        ],
      },
      {
        h: "Third-party links",
        body: [
          { kind: "p", text: "SoloOpsGuide frequently links to third-party tools, vendors, and reference material. Once you leave the SoloOpsGuide domain, the destination site's privacy practices apply — not this policy. Vendors change their privacy practices on their own schedule; we cannot speak to them." },
        ],
      },
      {
        h: "Emails and contact messages",
        body: [
          { kind: "p", text: "If you write to the editorial inbox, your message and reply address are stored by the underlying mail provider. Messages are read by SoloOpsGuide Editorial only and are not used for marketing." },
          { kind: "p", text: "Editorial does not maintain a newsletter list. If a newsletter is introduced later, this policy will be updated before any reader is added to it." },
        ],
      },
      {
        h: "Your choices",
        body: [
          { kind: "ul", items: [
            "Block or clear cookies in your browser — the site will continue to work without them, with the small caveat that dismissed banners may reappear.",
            "Use a browser-level Do Not Track or Global Privacy Control signal — analytics is configured to respect these where the provider supports them.",
            "Write to the editorial inbox to ask whether any specific message you sent is still on file, and to request its deletion.",
          ]},
          { kind: "p", text: "SoloOpsGuide does not currently support a self-serve data-export workflow. We do not claim formal GDPR or CCPA compliance — the practical commitments above are what is in place today. If your situation requires formal compliance, please raise it explicitly when you write in." },
        ],
      },
      {
        h: "Updates to this policy",
        body: [
          { kind: "p", text: "This policy will change when the site's data practices change — most likely if analytics, advertising, or contact tooling moves. Substantive changes are summarised in the quarterly editorial update. The dating block below shows when this page was last reviewed." },
        ],
      },
      {
        h: "Contact about privacy",
        body: [
          { kind: "p", text: "Privacy questions go to the same editorial inbox documented on the Contact page. Use the subject line \u201cPrivacy \u2014\u201d so the message is routed correctly." },
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    eyebrow: "Trust · Terms",
    title: "Terms of use",
    lede: "Plain-English rules for using SoloOpsGuide. Short, readable, written for solo operators.",
    sections: [
      {
        h: "Acceptance",
        body: [
          { kind: "p", text: "By reading SoloOpsGuide, you accept these terms together with the Disclaimer and the Content policy. If you do not accept them, do not use the site." },
        ],
      },
      {
        h: "Permitted use",
        body: [
          { kind: "ul", items: [
            "Personal and internal business reading.",
            "Quoting short passages with attribution and a link to the source page.",
            "Linking to SoloOpsGuide pages from your own site, newsletter, or client communication.",
            "Copying templates and checklists into your own client engagements (see “Templates” below).",
          ]},
        ],
      },
      {
        h: "Not permitted",
        body: [
          { kind: "ul", items: [
            "Republishing whole pages or extended sections on another site, with or without attribution.",
            "Bulk scraping or model-training crawls without prior written permission.",
            "Repackaging SoloOpsGuide content into a paid product, course, or membership.",
            "Removing attribution or modifying dated review notes when quoting.",
          ]},
        ],
      },
      {
        h: "Attribution",
        body: [
          { kind: "p", text: "Cite as: SoloOpsGuide — “Page title” — soloopsguide.example/page-slug — last reviewed YYYY-MM-DD. The review date matters more than the publication date." },
        ],
      },
      {
        h: "Templates and checklists",
        body: [
          { kind: "p", text: "Templates and checklists published on the site are intended to be copied into your own engagements. You may adapt, edit, and parametrise them for your work. You may not republish them as-is on another site or sell them as part of a template product." },
        ],
      },
      {
        h: "Intellectual property",
        body: [
          { kind: "p", text: "Page text, structure, illustrations, and the SoloOpsGuide name are the property of SoloOpsGuide Editorial. Tool names, product names, and screenshots are the property of their respective owners and used here for reference and comparison." },
        ],
      },
      {
        h: "No warranty",
        body: [
          { kind: "p", text: "The site is provided “as is” without warranty of accuracy, fitness for a particular purpose, or non-infringement. See the Disclaimer for the full limitation." },
        ],
      },
      {
        h: "Changes to these terms",
        body: [
          { kind: "p", text: "These terms may change. The current version is dated below. Substantive changes are summarised in the quarterly editorial update." },
        ],
      },
    ],
  },
};

window.TRUST_PAGES = TRUST_PAGES;
window.TRUST_REVIEWED = TRUST_REVIEWED;
window.TRUST_NEXT_REVIEW = TRUST_NEXT_REVIEW;

/* Cross-link list: all trust pages except current */
function trustRelated(currentSlug) {
  return Object.values(TRUST_PAGES)
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      slug: p.slug,
      name: p.title,
      desc: ({
        about: "What this site is, who maintains it, how it's funded.",
        "editorial-policy": "How pages are researched, reviewed, and dated.",
        "content-policy": "What we publish, what we won't, how we handle removals.",
        "privacy-policy": "What is collected, analytics, cookies, ads, your choices.",
        contact: "One inbox. Two-week response. Narrow scope.",
        disclaimer: "Not legal, financial, or tax advice. The boundary.",
        terms: "Use, attribution, no-warranty, intellectual property.",
      })[p.slug],
    }));
}

/* Render a single section body item */
const TrustBody = ({ items }) => (
  <React.Fragment>
    {items.map((it, i) => {
      if (it.kind === "p") return <p key={i}>{it.text}</p>;
      if (it.kind === "ul") return (
        <ul key={i}>{it.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
      );
      if (it.kind === "pe") return (
        <div className="pe" key={i}>
          <span className="k">{it.k}</span>
          <span className="v">{it.v}</span>
        </div>
      );
      if (it.kind === "callout") return (
        <div className="policy-callout" key={i}>
          <div className="pc-label">{it.label}</div>
          <div className="pc-body"><p>{it.text}</p></div>
        </div>
      );
      return null;
    })}
  </React.Fragment>
);

/* Desktop trust page primitive — takes one page-content object */
const TrustPageDesktop = ({ slug }) => {
  const page = TRUST_PAGES[slug];
  const related = trustRelated(page.slug);

  return (
    <div className="sog" style={{ background: "var(--paper)" }}>
      <SiteHeader />

      <div style={{ padding: "16px 56px 0", maxWidth: 1120, margin: "0 auto" }}>
        <Breadcrumbs items={["Trust", page.title]} />
      </div>

      <div className="trust-shell">
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
              Maintained by <strong>SoloOpsGuide Editorial</strong>. Reviewed on a quarterly cadence — the dating block in the aside shows the most recent and next scheduled review. Substantive changes across the site are summarised in the quarterly editorial update.
            </span>
            <span className="pos">{page.slug} · v3</span>
          </div>
        </main>

        <aside className="trust-aside">
          <div className="trust-toc">
            <div className="h">On this page</div>
            <ol>
              {page.sections.map((s, i) => (
                <li key={i} className={i === 0 ? "active" : ""}>
                  <a href={`#s-${i + 1}`}>{s.h}</a>
                </li>
              ))}
            </ol>
            <dl className="aside-meta">
              <dt>Last reviewed</dt>
              <dd>{TRUST_REVIEWED}</dd>
              <dt>Next review</dt>
              <dd>{TRUST_NEXT_REVIEW}</dd>
              <dt>Maintained by</dt>
              <dd style={{ fontFamily: "var(--sans)", color: "var(--ink-2)", fontSize: 12 }}>SoloOpsGuide Editorial</dd>
              <dt>Contact</dt>
              <dd style={{ fontFamily: "var(--sans)", color: "var(--ink-2)", fontSize: 12 }}>{TRUST_EMAIL}</dd>
            </dl>
          </div>
        </aside>
      </div>

      <div style={{ height: 56 }}></div>
      <SiteFooter />
    </div>
  );
};

window.TrustPageDesktop = TrustPageDesktop;
window.TrustBody = TrustBody;
window.trustRelated = trustRelated;
