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

**GitHub:** Create an empty public repository `ahmet-can-erendor-law` under the `berke009` account (no README/license from the GitHub UI). From this directory:

```bash
git remote add origin https://github.com/berke009/ahmet-can-erendor-law.git
git push -u origin main
```

Use a PAT with `repo` scope (or GitHub CLI) if prompted. The automation PAT used in Paperclip did not include repository creation; the board may need to create the remote once.

**Vercel:** *Add New Project* → import the GitHub repo → framework *Next.js*, install/build commands default to `pnpm` if detected, or set build to `pnpm build`. Deploy via the Vercel dashboard or Cursor’s Vercel MCP once the repo exists.
