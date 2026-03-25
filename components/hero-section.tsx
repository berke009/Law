"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] px-6 pt-28 pb-20 md:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Attorneys-at-Law · Kilis
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1
            variants={item}
            className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]"
          >
            Sophisticated Turkish counsel for a global practice
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Ahmet Can Erendor Attorneys-at-Law delivers sophisticated Turkish
            legal counsel from Kilis to clients worldwide. Founded on integrity,
            efficiency, and commitment, we pair deep knowledge of Turkish law
            with pragmatic, business-oriented advice for international and
            domestic mandates. Our firm is recognised for excellence across
            corporate law, M&amp;A, compliance, disputes, data protection, and
            TMT, with competition law leadership guided by Dr. Gönenç
            Gürkaynak. Chambers Europe, The Legal 500, IFLR1000, and GCR rank us
            among the top tier.
          </motion.p>
          <motion.div variants={item}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-accent pb-0.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              Begin a conversation
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
