# Ahmet Can Erendor Attorneys-at-Law — web

Minimal Next.js marketing site: hero, about, contact, and directory references. Copy source: `docs/website-copy.md` (PAFAAA-25).

## Develop

```bash
pnpm install
pnpm dev
```

Production check:

```bash
pnpm build
```

## Deploy

**GitHub:** Source of truth is **[berke009/Law](https://github.com/berke009/Law)** (`main`). Clone via SSH:

```bash
git clone git@github.com:berke009/Law.git
```

or HTTPS with credentials as usual.

**Vercel:** *Add New Project* → import **Law** from GitHub → framework *Next.js*, build `pnpm build`. Use the Vercel dashboard or Cursor’s Vercel MCP. Headless deploy from Paperclip requires a `VERCEL_TOKEN` in the agent environment.
