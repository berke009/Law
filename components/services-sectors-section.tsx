"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

const services = [
  {
    name: "Corporate & Commercial",
    body: "From structuring transactions to negotiating critical terms, we help you close with confidence—allocation of risk documented, regulators considered, and operational reality reflected in the paperwork.",
  },
  {
    name: "IT & Technology Law",
    body: "We support product launches, platform agreements, and data-heavy operations so innovation ships with contracts, privacy, and IP positions that match how the business actually runs.",
  },
  {
    name: "Dispute Resolution",
    body: "When positions diverge, we focus on resolution paths that protect reputation and cash—whether that is disciplined negotiation, arbitration, or litigation conducted with precision.",
  },
  {
    name: "Real Estate & Projects",
    body: "We align legal structure with timelines and counterparties across development, leasing, and project finance—reducing friction where complexity typically accumulates.",
  },
];

const sectors = [
  {
    name: "Technology & Innovation",
    body: "Counsel for scaling digital products, vendor ecosystems, and regulated data flows—so roadmap speed and legal posture stay aligned.",
  },
  {
    name: "Financial Services",
    body: "Support across governance, contracts, and regulatory interfaces where trust and timing are as important as the clause work.",
  },
  {
    name: "Real Estate & Infrastructure",
    body: "Transaction and project counsel for stakeholders who need certainty on title, permits, leasing, and long-dated capital structures.",
  },
  {
    name: "Healthcare & Life Sciences",
    body: "Risk-aware guidance where clinical, commercial, and compliance realities intersect—without smothering innovation.",
  },
];

type Tab = "service" | "sector";

export function ServicesSectorsSection() {
  const [tab, setTab] = useState<Tab>("service");
  const baseId = useId();
  const tabIds = { service: `${baseId}-tab-service`, sector: `${baseId}-tab-sector` };
  const panelId = `${baseId}-panel`;

  const items = tab === "service" ? services : sectors;

  return (
    <section
      id="services"
      className="border-t border-line bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-10 font-serif text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          How We Can Help
        </motion.h2>

        <div
          role="tablist"
          aria-label="Browse by service or sector"
          className="mb-12 flex gap-2 border-b border-line"
        >
          {(
            [
              ["service", "By Service"],
              ["sector", "By Sector"],
            ] as const
          ).map(([key, label]) => {
            const selected = tab === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                id={tabIds[key]}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                className={`relative -mb-px px-4 py-3 text-sm font-semibold transition-colors ${
                  selected ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
                onClick={() => setTab(key)}
              >
                {label}
                {selected ? (
                  <motion.span
                    layoutId="services-tabline"
                    className="absolute inset-x-2 bottom-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div id={panelId} role="tabpanel" aria-labelledby={tabIds[tab]}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="grid gap-8 md:grid-cols-2"
            >
              {items.map((s) => (
                <article
                  key={s.name}
                  className="border border-line bg-white/50 p-8"
                >
                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted md:text-base">
                    {s.body}
                  </p>
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    Learn more about {s.name}
                  </a>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
