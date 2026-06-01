# Public Image Asset Policy

The public site should look strong enough to win trust, but it is not the full
asset warehouse.

## Put Here

- public-safe hero/gallery/showcase images
- compressed or web-sized proof images that still look premium
- selected top-tier samples that demonstrate taste and delivery capability
- source-aware proof examples only when legally/publicly safe

## Keep Private

- full-resolution delivery packs
- unreleased best product families
- prompt/DNA/training ledgers
- private family/client images
- scraped merchant source images without explicit public permission
- lead lists, account screenshots, and marketplace data

## Scaling Plan

Small v0 site:

- keep images in `assets/` and commit them here
- current package is small enough for Cloudflare Pages

Larger gallery:

- move public image delivery to Cloudflare Images or R2
- keep a public image manifest with stable `Asset_ID`, role, alt text, and URL
- keep original/private/high-res files in OpenClaw or the external SSD, not here

Rule of thumb: the site can show the capability. It should not publish the
factory, the private inventory, or the complete product package.
