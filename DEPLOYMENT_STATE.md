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
repo, runs public repo boundary QA, commits/pushes changes, deploys to
Cloudflare Pages, and checks the live URLs. By default it also runs the
shared-Edge visual QA screenshot pass after live URL and asset verification.

Dry verification without committing, pushing, or deploying:

```powershell
npm run site:aster:deploy:dry
```

Optional post-deploy visual QA only:

```powershell
npm run site:aster:visual-qa
```

## Boundary

This repo is public-safe only. Do not add OpenClaw internals, prompts, DNA,
private images, lead data, account data, or marketplace reports.
