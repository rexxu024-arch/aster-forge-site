# Deployment State

Last updated by `sync_public_repo.py`.

## Live URLs

- https://aster-forge.com
- https://www.aster-forge.com
- https://aster-forge.pages.dev

## GitHub

- https://github.com/rexxu024-arch/aster-forge-site
- Branch: `main`

## Cloudflare

- Pages project: `aster-forge`
- Current mode (dashboard readback, 2026-09-26): Direct Upload project with **no Git connection**.
- Approved stable route: commit/push the canonical GitHub `main` source, then deploy that exact public repository to the existing `aster-forge` Pages project with Wrangler. This keeps the active domain bindings intact.
- Git-route readiness: the existing project exposes **Settings → Git repository → Connect**. Connect the canonical repository and keep production branch `main`; treat Git-triggered deployment as the replacement release path only after a verified production build.
- Custom domain DNS:
  - `aster-forge.com` CNAME -> `aster-forge.pages.dev`
  - `www.aster-forge.com` CNAME -> `aster-forge.pages.dev`

## Update Flow

1. Validate public-safe assets and static behavior locally.
2. Commit and push `main` in this repository with a professional, scope-specific message.
3. Run `npx wrangler whoami`, then deploy the exact repository snapshot with `npx wrangler pages deploy . --project-name aster-forge --branch main`.
4. Read Cloudflare's successful production deployment record.
5. Verify `https://aster-forge.com/`, the collection page, redirects, and core assets on the deployed domain.

If Git integration is later connected and shown to produce a successful build, replace step 3 with the Git-triggered deployment record. Until then, a GitHub push alone is not a production deployment.

## Boundary

This repo is public-safe only. Do not add OpenClaw internals, prompts, DNA,
private images, lead data, account data, or marketplace reports.
