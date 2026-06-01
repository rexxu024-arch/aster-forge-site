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

Current production path:

```powershell
npx wrangler pages deploy . --project-name aster-forge --branch main
```

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

Important: the current project was created through Wrangler/Direct Upload.
Direct Upload is stable and simple, but it is not a Git-triggered Pages project.
Keep pushing this repo to GitHub for source backup, then deploy with Wrangler.

Optional future migration to Git-triggered Pages:

1. Workers & Pages
2. Create application
3. Pages
4. Connect to Git
5. Pick `aster-forge-site`
6. Build command: empty
7. Build output directory: `/`
8. Move custom domains only after the new Pages project is verified

Fallback:

```powershell
npx wrangler login --browser=false
npx wrangler pages deploy . --project-name aster-forge
```

When `--browser=false` prints an authorization URL, open it in the shared Edge
profile, not Chrome. After approval, rerun the deploy command from this folder.
