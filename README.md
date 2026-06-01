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

Recommended deploy command:

```powershell
npx wrangler pages deploy . --project-name aster-forge
```

GitHub/Cloudflare connection:

1. Create a GitHub repo named `aster-forge-site`.
2. Push this folder to that repo.
3. In Cloudflare Pages, create a Pages project from that GitHub repo.
4. Build command: leave empty.
5. Build output directory: `/`.
6. Custom domain: `aster-forge.com`.
