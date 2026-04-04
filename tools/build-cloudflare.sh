#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${SITE_URL:-${CF_PAGES_URL:-}}"

if [ -z "$BASE_URL" ]; then
  echo "Missing SITE_URL or CF_PAGES_URL for Hugo baseURL." >&2
  exit 1
fi

hugo --minify --gc --baseURL "$BASE_URL"
