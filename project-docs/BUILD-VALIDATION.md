# Build and Validation Reference

Read this when troubleshooting builds, validating changes, or checking Cloudflare deployment behavior. For normal daily passes, a build is not required unless a template, layout, config, or JS file changed.

## Standard build command

```
tools/hugo/v0.128.0/hugo.exe --gc --minify --baseURL https://soloopsguide.com/
```

## Environment note (Linux)

`tools/hugo/v0.128.0/hugo.exe` is a Windows PE32+ binary. It cannot execute on native Linux and returns:

```
Exec format error (os error 8)
```

When this happens: report the exact blocker, do not claim the build passed. Note it in TRACKER.md as "Hugo build: Windows PE binary on Linux, cannot execute." Mark the change as pure markdown/static-asset risk if no template, layout, config, or JS was changed.

If a system-installed Hugo is available: try `hugo --gc --minify --baseURL https://soloopsguide.com/` first.

## When a build IS required

- Any change to `layouts/`, `layouts/partials/`, `config.toml`, or Hugo output format configuration.
- Any change to `static/js/` or `static/css/`.
- Any new content section, archetype, or permalink rule change.
- Any time a Hugo template function or shortcode is used in new content.

## When a build IS NOT required

- Pure markdown content changes with no template or shortcode additions.
- Front matter edits only (title, description, slug, etc.).
- Static image additions to `static/images/`.
- Documentation-only changes (AGENT.md, TRACKER.md, project-docs/).

## Cloudflare Pages deployment

- Cloudflare builds from source using `bash tools/build-cloudflare.sh`.
- `public/` is generated output and must NOT be committed. `.gitignore` explicitly ignores `/public/`.
- Build environment variables: `HUGO_VERSION=0.159.2`, `SITE_URL=https://soloopsguide.com/`.
- If `SITE_URL` is not set, Cloudflare falls back to `CF_PAGES_URL`.

## Post-build validation checklist

When a build does run successfully:

- [ ] Page count: confirm expected count (currently ~84+ pages).
- [ ] No warnings or errors in Hugo output.
- [ ] `public/` reflects latest content (spot-check changed pages).
- [ ] Feature images render in `public/` at expected paths.
- [ ] No broken internal links visible in changed pages.
- [ ] `public/` remains ignored and untracked (`git status` clean).

## Reporting blocker language

When Hugo build cannot run:

> Hugo build: `tools/hugo/v0.128.0/hugo.exe` is a Windows PE binary and cannot execute on native Linux (`Exec format error`). Change is [pure markdown / template edit / etc.], build risk [negligible / significant].
