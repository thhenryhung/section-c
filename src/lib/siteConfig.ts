/**
 * Single source of truth for everything that's specific to *this* section, not
 * to the codebase. A section forking this repo should only need to edit this
 * file (plus the ~7 brand hex values in src/index.css, which Tailwind's CSS-only
 * `@theme` block can't import from here — see the comment there) to make the
 * site their own.
 *
 * `wrangler.toml` (KV namespace id, Cloudflare project name) and
 * `.github/workflows/deploy.yml`'s `vars.DATA_REPO`/`vars.CLOUDFLARE_PROJECT`
 * stay hand-edited on fork too — TOML/YAML can't import a TS module.
 */

export const siteConfig = {
  orgName: 'Section C',
  tagline: 'HBS MBA Class of 2028',
  description: 'A private directory and social hub for HBS MBA 2028 Section C.',
  tabs: [
    { to: '/directory', label: 'Directory' },
    { to: '/calendar', label: 'Calendar' },
    { to: '/social', label: 'Social' },
    { to: '/know-everyone', label: 'Just for fun' },
  ],
  // TODO: set to whoever will actually own the section-c / section-c-data
  // GitHub repos before deploying — carried over from section-j as a placeholder.
  github: { owner: 'thhenryhung', repo: 'section-c' },
  cloudflare: { pagesProject: 'section-c' },
} as const

export type SiteConfig = typeof siteConfig
