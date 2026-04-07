# SoloOpsGuide Go-Live Checklist

Use this as the final launch checklist after repo-side fixes are complete.

## Final content and trust checks

- Confirm the public contact method in `content/contact/_index.md` once a monitored inbox exists.
- Re-read the homepage, About, Contact, Editorial Policy, Content Policy, Privacy Policy, Disclaimer, and Terms pages in the built site.
- Confirm cornerstone pages are the ones you want featured from each hub.

## Technical launch checks

- Build locally with `tools/hugo/hugo.exe --minify --gc --baseURL https://soloopsguide.com/`.
- Confirm canonical URLs, Open Graph images, and favicon render correctly on the production domain.
- Verify `robots.txt`, `sitemap.xml`, and `index.xml` are live after deploy.
- Confirm the production `SITE_URL` is set correctly in Cloudflare Pages.
- Confirm `HUGO_VERSION=0.159.2` in the deployment environment.

## Search and measurement

- Add the site to Google Search Console and submit the production sitemap.
- Add analytics only if the final privacy-policy wording matches the tools being used.
- If ads or affiliate relationships are added, update trust and policy pages before enabling them.

## Domain and production checks

- Confirm HTTPS, primary-domain redirect behavior, and `www` vs non-`www` preference.
- Check the homepage, one hub page, one single page, one glossary page, one FAQ page, and one trust page on desktop and mobile after deploy.
- Verify social-share previews for the homepage and at least two cornerstone pages.

## Manual post-deploy sweep

- Test header navigation, footer links, search form, and major CTAs on the live site.
- Spot-check internal links from homepage to cornerstone pages and from cornerstone pages back to supporting pages.
- Confirm there are no stale caches serving old metadata or old CSS after deployment.

## Current known external/manual blocker

- A monitored public contact method still needs to be published before launch if direct correction or partnership contact is expected.
