# GitHub And Cloudflare Entry

This repo is meant to be the public deployment repo, separate from OpenClaw.

## GitHub

Current repository:

```text
https://github.com/rexxu024-arch/aster-forge-site
```

If this repo is restored on a new machine, reconnect it from this folder:

```powershell
git remote add origin https://github.com/rexxu024-arch/aster-forge-site.git
git branch -M main
git push -u origin main
```

Git Bash is also fine for the same commands. Keep the repo static/public-safe;
do not push the OpenClaw production repository as the Pages source.

Use the shared Edge login if GitHub asks for account confirmation. Do not copy
cookies or tokens into this repo.

## Cloudflare Pages

The live project is:

```text
aster-forge
```

Active domains:

```text
https://aster-forge.com
https://www.aster-forge.com
https://aster-forge.pages.dev
```

Fresh Cloudflare dashboard readback — 2026-09-26:

- Existing Pages project: `aster-forge`
- Existing production branch: `main`
- Current state: **No Git connection**
- Available control: **Settings → Git repository → Connect**

Required Git-route setup, without creating a replacement project or moving domains:

1. Open the existing `aster-forge` Pages project.
2. Select **Settings → Git repository → Connect**.
3. Authorize or select `rexxu024-arch/aster-forge-site` only.
4. Retain `main` as the production branch. This is a static site: no build command and root output directory.
5. Verify a harmless Git commit produces a successful Cloudflare production deployment before treating the route as operational.

Until that connection is visibly confirmed, GitHub pushes are source-history updates only.

## Current stable release path

Until the Git connection is explicitly validated in production, use this release sequence:

1. Commit and push the public-safe change to `main` with a professional message.
2. Run `npx wrangler whoami` to verify the intended Cloudflare account.
3. Run `npx wrangler pages deploy . --project-name aster-forge --branch main` from this repository.
4. Verify the production deployment record, custom domain, critical route redirect, and public assets.

This retains the existing `aster-forge` Pages project and its domain bindings. It is not a fallback upload; it is the present production release route. Git-triggered deployment becomes the replacement only after the repository connection succeeds and a Git commit creates a verified production deployment.
