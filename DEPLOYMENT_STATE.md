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
- Current mode: Wrangler Direct Upload
- Custom domain DNS:
  - `aster-forge.com` CNAME -> `aster-forge.pages.dev`
  - `www.aster-forge.com` CNAME -> `aster-forge.pages.dev`

## Update Flow

Run from `C:\AIprojects\openclaw_difi`:

```powershell
python .\Brand_Site\ClawVisuals\tools\deploy_public_site.py --message "Update Aster Forge public site"
```

This runs public asset QA, rebuilds the sanitized public package, syncs this
repo, commits/pushes changes, deploys to Cloudflare Pages, and checks the live
URLs.

## Boundary

This repo is public-safe only. Do not add OpenClaw internals, prompts, DNA,
private images, lead data, account data, or marketplace reports.
