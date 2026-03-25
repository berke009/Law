"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LeaderSection() {
  return (
    <section
      id="profile"
      className="border-t border-line bg-white px-6 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          className="relative aspect-[4/5] w-full overflow-hidden bg-line"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
            alt="Professional portrait placeholder representing Av. Ahmet Can Erendor—replace with approved firm photography."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority={false}
          />
        </motion.div>
        <div>
          <motion.h2
            className="mb-8 font-serif text-3xl font-semibold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            Driven by strategy. Defined by results.
          </motion.h2>
          <motion.div
            className="space-y-5 text-base leading-relaxed text-muted md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.75,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <p>
              Av. Ahmet Can Erendor advises founders, boards, and investors on
              matters where law, regulation, and commercial strategy intersect.
              His practice blends rigorous technical command with plain-spoken
              counsel—helping clients move from diagnosis to decision without
              unnecessary delay. He is known for structuring complex
              transactions, guiding technology-led growth, and resolving
              high-stakes disputes with disciplined preparation and a measured
              courtroom presence.
            </p>
            <p>
              Educated and trained in leading institutions, he combines
              international perspective with deep familiarity with local markets
              across Türkiye and beyond. Clients value his responsiveness,
              intellectual honesty, and ability to align legal advice with
              measurable business outcomes. Whether the mandate is a cross-border
              acquisition, a regulatory inquiry, a compliance programme redesign,
              or a bet-the-company dispute, he builds enduring partnerships
              anchored in clarity, pace, and discretion.
            </p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center border border-foreground/15 bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              View Full Profile &amp; Accolades
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
