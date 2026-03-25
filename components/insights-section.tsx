"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "AI procurement and liability: what boards should ask before signing",
    teaser:
      "A practical checklist for governing generative tools, vendor contracts, and human oversight without stalling adoption.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  },
  {
    title: "Corporate compliance in 2026: from policies to proof",
    teaser:
      "Why regulators and counterparties increasingly expect evidence of operational compliance—not slide decks.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  },
  {
    title: "Modern dispute resolution: speed, confidentiality, and narrative",
    teaser:
      "How early case framing and parallel settlement tracks change outcomes before the first hearing.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
  },
];

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="border-t border-line bg-background px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-12 font-serif text-3xl font-semibold tracking-tight md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Latest Insights &amp; Legal Updates
        </motion.h2>

        <div className="mb-12 flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="min-w-[min(100%,280px)] flex-1 border border-line bg-white/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-line">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 85vw"
                  role="presentation"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{p.teaser}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Link
            href="/insights"
            className="inline-flex min-h-11 items-center justify-center border border-foreground/15 bg-transparent px-6 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            Visit the Insights Hub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
