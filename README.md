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

Current production deploy command:

```powershell
npx wrangler pages deploy . --project-name aster-forge
```

Current state:

- The public repo is pushed to GitHub for source history and portability.
- The live Cloudflare Pages project currently deploys through Wrangler Direct Upload.
- Custom domains `aster-forge.com` and `www.aster-forge.com` are active.
- If true Git-triggered continuous deployment becomes important, create a fresh Git-integrated Pages project or migrate intentionally; do not upload the OpenClaw factory repo.
