# Day 13 Final Deployment Checklist

- Production baseURL confirmed
  Use `SITE_URL` for the custom production domain, or let Cloudflare fall back to `CF_PAGES_URL`
- Contact details confirmed
  Replace the launch note on the Contact page with the real monitored inbox before public release
- Hugo build passed
  `tools/hugo/hugo.exe --minify --gc --baseURL <deploy-url>`
- Trust pages present
  About, Contact, Editorial Policy, Privacy Policy, Terms
- Homepage and hubs checked
  Homepage, Workflows hub, Blueprints hub, Comparisons hub
- Launch-critical pages checked
  workflow anchor, stack blueprint, comparison page, onboarding checklist
- Output ready
  canonical, Open Graph, and contact output verified in built HTML
- Cloudflare settings ready
  build command `bash tools/build-cloudflare.sh`, output directory `public`, `HUGO_VERSION=0.159.2`, and `SITE_URL` configured if using a custom domain
