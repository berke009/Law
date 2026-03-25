"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    title: "Who we are",
    body: "Ahmet Can Erendor Attorneys-at-Law is a Turkish full-service firm based in Kilis, founded in 2023 to serve clients who require both domestic depth and an international outlook. We work where rigorous legal analysis meets commercial reality: our team combines profound knowledge of Turkish law with a business-minded, pragmatic approach, supporting organisations and individuals as they operate in a global economy in constant motion.",
  },
  {
    title: "Practice",
    body: "Our practice spans corporate and M&A advisory, white-collar irregularities and compliance programmes, data protection and cybersecurity, litigation and dispute resolution, and technology, media, and telecommunications (TMT). Competition law is central to our reputation. Under the leadership of Dr. Gönenç Gürkaynak, we advise on complex antitrust, merger control, and regulatory matters with the judgment and rigour expected of market-leading teams.",
  },
  {
    title: "How we work",
    body: "We maintain a substantial legal bench and a collaborative service model, so sophisticated mandates are staffed without sacrificing responsiveness. Clients instruct us for high-stakes transactions, investigations, and disputes where discretion, pace, and clarity matter.",
  },
  {
    title: "Recognition",
    body: "Independent directories reflect the quality of our work. Chambers Europe, The Legal 500, IFLR1000, and Global Competition Review consistently place us among top-tier firms—recognition we treat as a standard to uphold, not a ceiling.",
  },
  {
    title: "Principles",
    body: "Integrity, efficiency, and commitment are operating principles: transparent counsel, disciplined execution, and a steady focus on outcomes. Whether you are an international investor entering Turkey or a domestic enterprise scaling across borders, we provide advice that is precise, commercial, and grounded in authoritative Turkish law.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-line bg-white/40 px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-14 font-serif text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          About the firm
        </motion.h2>
        <div className="space-y-14">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {b.title}
              </h3>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {b.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
