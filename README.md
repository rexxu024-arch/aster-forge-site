# Aster Forge Public Site

This repository is the sanitized public website package for Aster Forge.

It is intentionally separate from the OpenClaw production/factory repository.
Only public-safe static files and public-safe presentation images belong here.

Do not add:

- API keys, `.env`, credentials, cookies, tokens, or account exports
- OpenClaw scripts, crawlers, review CSVs, prompts, DNA files, or training data
- private family/client images
- full saleable product-art packs or high-resolution delivery files
- lead lists, contact data, marketplace dashboards, or internal reports

Deployment target:

- Cloudflare Pages project: `aster-forge`
- Domain: `https://aster-forge.com`
- GitHub: `https://github.com/rexxu024-arch/aster-forge-site`

Deployment route:

- Canonical source: `https://github.com/rexxu024-arch/aster-forge-site`, branch `main`.
- Intended production control plane: Cloudflare Pages Git integration on the existing `aster-forge` project.
- Custom domains `aster-forge.com` and `www.aster-forge.com` stay attached to that project.

Fresh dashboard readback — 2026-09-26:

- The existing Pages project exposes **Settings → Git repository → Connect**, but no repository is linked yet.
- Until that one-time connection is completed, a GitHub push is source control only; it does not update the live domain.
- The current approved production path is Cloudflare Pages Direct Upload to this existing project, following a GitHub commit. It preserves the active domains and has a verified deployment history. A future Git connection can replace the final Direct Upload step only after a successful proof deployment.
