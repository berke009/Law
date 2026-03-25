"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-8"
    >
      <motion.div
        className="mx-auto max-w-3xl border border-line bg-background/60 p-10 md:p-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className="mb-4 font-serif text-2xl font-semibold md:text-3xl">
          Instruct the firm
        </h2>
        <p className="mb-8 max-w-xl text-muted leading-relaxed">
          For new mandates and confidential enquiries, please contact the firm
          through your preferred professional channel. We respond with care and
          discretion.
        </p>
        <p className="text-sm text-muted">
          <span className="font-medium text-foreground">
            Ahmet Can Erendor Attorneys-at-Law
          </span>
          <br />
          Kilis, Türkiye
        </p>
      </motion.div>
    </section>
  );
}
