"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="border-t border-line bg-white px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-10 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-[2.15rem] md:leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Legal advice grounded in the real world.
        </motion.h2>
        <div className="space-y-8 text-base leading-relaxed text-muted md:text-lg">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
          >
            We built this practice for leaders who cannot afford slow, abstract
            answers. Av. Ahmet Can Erendor works alongside management teams,
            founders, and boards—translating complex regulation and risk into
            decisions you can make on a Tuesday morning. The goal is not more
            paper; it is momentum with defensibility.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.75,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            Traditional firms often optimise for hierarchy and delay. We
            optimise for clarity, pace, and partnership. That means proactive
            signals when the landscape shifts, early alignment between legal and
            commercial stakeholders, and advice that respects how deals,
            disputes, and digital products actually get built. When you instruct
            us, you gain a counsel who treats your outcomes as the brief—not the
            process.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
