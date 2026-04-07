# Measurement and Operations Setup

This repo now supports optional measurement, Search Console verification, and future monetization signals without enabling any third-party service by default.

## What exists in the repo

- Page identity is exposed consistently through `body` data attributes:
  - `data-page-kind`
  - `data-page-section`
  - `data-page-type`
  - `data-page-role`
  - `data-page-priority`
  - `data-page-trust`
  - `data-page-path`
- Matching page identity meta tags are emitted in `layouts/partials/head.html`.
- Major navigation, card, hub, and CTA links expose `data-track-*` attributes for lightweight click tracking.
- `layouts/partials/site-script.html` publishes a small tracking bridge:
  - dispatches `soloopsguide:track` events on `document`
  - exposes `window.SoloOpsGuide.track(name, props)`
  - forwards events automatically to `gtag`, `plausible`, or `umami` if one of those providers is configured

## Config locations

All measurement-related config lives in `config.toml`.

### Search Console

Set:

```toml
[params.searchConsole]
  googleSiteVerification = "your-token-here"
```

This outputs:

```html
<meta name="google-site-verification" content="...">
```

### Analytics

Set one provider at a time under:

```toml
[params.measurement]
  enabled = true
  provider = ""
  googleAnalyticsId = ""
  plausibleDomain = ""
  plausibleScript = "https://plausible.io/js/script.js"
  umamiWebsiteId = ""
  umamiScript = ""
```

Supported providers:

- `google-analytics`
- `plausible`
- `umami`

Examples:

```toml
[params.measurement]
  enabled = true
  provider = "google-analytics"
  googleAnalyticsId = "G-XXXXXXXXXX"
```

```toml
[params.measurement]
  enabled = true
  provider = "plausible"
  plausibleDomain = "soloopsguide.com"
```

```toml
[params.measurement]
  enabled = true
  provider = "umami"
  umamiWebsiteId = "your-website-id"
  umamiScript = "https://your-umami-domain/script.js"
```

## Monetization-related config

No ads are enabled in the repo.

If AdSense is added later, set:

```toml
[params.monetization]
  adsensePublisherId = "ca-pub-XXXXXXXXXXXXXXXX"
  affiliateDisclosuresReady = true
```

Current behavior:

- `adsensePublisherId` only adds the account meta tag for verification/readiness.
- It does not inject ad units or change the layout.

## Manual external setup still required

- Create and verify the Search Console property.
- Submit the live sitemap in Search Console.
- Create the analytics property/account for the chosen provider.
- Update `content/privacy-policy/_index.md` if the final analytics or ad stack materially changes the data practices described there.
- If ads or affiliate links are introduced, update trust/policy pages before enabling them.

## Suggested early monitoring views

- Homepage and section hubs by `data-page-role`
- Priority pages by `data-page-priority="true"`
- Trust pages by `data-page-trust="true"`
- CTA, hub, and card clicks by `data-track-location`
- Search usage via `site_search_submit`

## Main implementation files

- `config.toml`
- `layouts/partials/head.html`
- `layouts/partials/site-script.html`
- `layouts/partials/header.html`
- `layouts/partials/footer.html`
- `layouts/partials/page-card.html`
- `layouts/_default/baseof.html`
