# GitHub And Cloudflare Entry

This repo is meant to be the public deployment repo, separate from OpenClaw.

## GitHub

Create a GitHub repository:

```text
aster-forge-site
```

Then run from this folder:

```powershell
git remote add origin https://github.com/<your-account>/aster-forge-site.git
git branch -M main
git push -u origin main
```

Git Bash is also fine for the same commands. Keep the repo static/public-safe;
do not push the OpenClaw production repository as the Pages source.

Use the shared Edge login if GitHub asks for account confirmation. Do not copy
cookies or tokens into this repo.

## Cloudflare Pages

Recommended production path:

1. Workers & Pages
2. Create application
3. Pages
4. Connect to Git
5. Pick `aster-forge-site`
6. Build command: empty
7. Build output directory: `/`
8. Add custom domain: `aster-forge.com`

Fallback:

```powershell
npx wrangler login --browser=false
npx wrangler pages deploy . --project-name aster-forge
```

When `--browser=false` prints an authorization URL, open it in the shared Edge
profile, not Chrome. After approval, rerun the deploy command from this folder.
