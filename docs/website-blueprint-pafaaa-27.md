# Website blueprint — Brodies-inspired tone (PAFAAA-27)

**Tone:** Human-centric, authoritative yet approachable, jargon-free, forward-thinking, commercially aware.  
**Vibe:** Sleek, modern, premium — business and real-world problems, not “dusty law books.”  
**Firm:** Av. Ahmet Can Erendor · **Location:** Istanbul, Türkiye (adjust if board confirms otherwise).

This file is the copy + UX specification for developers. The live site in `app/` and `components/` implements the same structure.

---

## Section 1: The Dynamic Hero (Above the Fold)

**UX / UI note for developer:** Prefer a subtle, slow-moving background treatment (e.g. looped city skyline or modern office video at low contrast, with a readable text scrim). If video is deferred, use a large-format still or CSS motion gradient behind the scrim so the block still feels “cinematic.” Primary and secondary CTAs must remain visible at all breakpoints.

# Lawyers who understand your business

**Subheadline:** Av. Ahmet Can Erendor provides strategic, modern legal counsel shaped around your sector—clear advice, disciplined execution, and judgment you can stake decisions on.

- **Primary CTA (button):** Speak to Our Team → anchors to `#contact`
- **Secondary CTA (button):** Explore Our Sectors → anchors to `#services`

---

## Section 2: The Modern Philosophy / “Why Us”

**UX / UI note:** Clean white (or near-white) canvas, bold serif for the H2, generous line length (~65–75 characters), no clutter—let typography carry authority.

## Legal advice grounded in the real world.

We built this practice for leaders who cannot afford slow, abstract answers. Av. Ahmet Can Erendor works alongside management teams, founders, and boards—translating complex regulation and risk into decisions you can make on a Tuesday morning. The goal is not more paper; it is momentum with defensibility.

Traditional firms often optimise for hierarchy and delay. We optimise for clarity, pace, and partnership. That means proactive signals when the landscape shifts, early alignment between legal and commercial stakeholders, and advice that respects how deals, disputes, and digital products actually get built. When you instruct us, you gain a counsel who treats your outcomes as the brief—not the process.

---

## Section 3: What We Do (Services & Sectors Grid)

**UX / UI note:** Two-tab pattern (desktop and mobile): **Tab 1 — By Service**, **Tab 2 — By Sector**. Use clear tab affordances (underline or pill), keyboard-accessible `role="tablist"`, and a responsive grid (1 column mobile, 2×2 tablet/desktop). Each card: H3, 1–2 sentence outcome-led copy, text link “Learn more about [X]” (can route to `#contact` until detail pages exist).

## How We Can Help

### By Service — grid (4)

### Corporate & Commercial

From structuring transactions to negotiating critical terms, we help you close with confidence—allocation of risk documented, regulators considered, and operational reality reflected in the paperwork.

**CTA:** Learn more about Corporate & Commercial

### IT & Technology Law

We support product launches, platform agreements, and data-heavy operations so innovation ships with contracts, privacy, and IP positions that match how the business actually runs.

**CTA:** Learn more about IT & Technology Law

### Dispute Resolution

When positions diverge, we focus on resolution paths that protect reputation and cash—whether that is disciplined negotiation, arbitration, or litigation conducted with precision.

**CTA:** Learn more about Dispute Resolution

### Real Estate & Projects

We align legal structure with timelines and counterparties across development, leasing, and project finance—reducing friction where complexity typically accumulates.

**CTA:** Learn more about Real Estate & Projects

### By Sector — grid (4)

### Technology & Innovation

**CTA:** Learn more about Technology & Innovation

### Financial Services

**CTA:** Learn more about Financial Services

### Real Estate & Infrastructure

**CTA:** Learn more about Real Estate & Infrastructure

### Healthcare & Life Sciences

**CTA:** Learn more about Healthcare & Life Sciences

---

## Section 4: Meet Av. Ahmet Can Erendor (The Leader)

**UX / UI note:** Split layout: high-quality portrait (editorial crop, neutral background) on one side; typographic column on the other. At mobile stack, image first or headline first based on art direction—default: headline first for readability.

## Driven by strategy. Defined by results.

Av. Ahmet Can Erendor advises founders, boards, and investors on matters where law, regulation, and commercial strategy intersect. His practice blends rigorous technical command with plain-spoken counsel—helping clients move from diagnosis to decision without unnecessary delay. He is known for structuring complex transactions, guiding technology-led growth, and resolving high-stakes disputes with disciplined preparation and a measured courtroom presence.

Educated and trained in leading institutions, he combines international perspective with deep familiarity with local markets across Türkiye and beyond. Clients value his responsiveness, intellectual honesty, and ability to align legal advice with measurable business outcomes. Whether the mandate is a cross-border acquisition, a regulatory inquiry, a compliance programme redesign, or a bet-the-company dispute, he builds enduring partnerships anchored in clarity, pace, and discretion.

- **CTA (button):** View Full Profile & Accolades → may anchor to `#contact` until a profile route exists

---

## Section 5: The Insights Hub (Blog & Thought Leadership)

**UX / UI note:** Horizontal carousel or swipe row on mobile; three editorial cards with consistent image ratio (16:9 or 3:2), title, one-line teaser, subtle hover lift. Reserve space for publication date when CMS is connected.

## Latest Insights & Legal Updates

1. **AI procurement and liability: what boards should ask before signing** — A practical checklist for governing generative tools, vendor contracts, and human oversight without stalling adoption.

2. **Corporate compliance in 2026: from policies to proof** — Why regulators and counterparties increasingly expect evidence of operational compliance—not slide decks.

3. **Modern dispute resolution: speed, confidentiality, and narrative** — How early case framing and parallel settlement tracks change outcomes before the first hearing.

- **CTA (button):** Visit the Insights Hub → anchors to `#insights` (scroll) until `/insights` exists

---

## Section 6: The Frictionless “Contact Us”

**UX / UI note:** Dark premium panel (deep navy or charcoal), high-contrast typography, compact form with generous tap targets. Mark required fields when backend is wired; until then, labels only.

## Ready to start the conversation?

Whether you are navigating a complex transaction or need strategic counsel, we are here to help.

**Contact placeholders**

- Main office address: `[Insert street, district, Istanbul, Türkiye]`
- Email: `contact@erendorlaw.com` (placeholder—confirm with firm)
- Phone: `[Insert +90 …]`
- LinkedIn: `[Insert profile URL]`

**Suggested form fields**

- Name  
- Company  
- Email  
- Phone  
- “How can we help?” (dropdown: Transaction / Dispute / Technology & data / Real estate / Other)  
- Message  

- **CTA (button):** Send Enquiry

---

## Section 7: The Comprehensive Footer

**UX / UI note:** Multi-column grid; maintain alignment on wide screens; collapse to stacked sections on mobile.

- **Column 1:** Firm wordmark / name + short tagline: *Clarity. Judgment. Momentum.*
- **Column 2 — Quick links:** Home, About, Services, Insights, Careers (anchors until routes exist)
- **Column 3 — Legal:** Privacy Policy, Cookie Policy, Terms of Use, Legal Disclaimer (placeholder `#` links until pages ship)

**Bottom bar:** Copyright © 2026 Av. Ahmet Can Erendor. All rights reserved.
