"use client";

import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.footer
      className="border-t border-line px-6 py-12 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-lg font-semibold">
            Ahmet Can Erendor Attorneys-at-Law
          </p>
          <p className="mt-1 text-sm text-muted">Kilis · Established 2023</p>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted md:text-right">
          Rankings and directory references: Chambers Europe, The Legal 500,
          IFLR1000, Global Competition Review.
        </p>
      </div>
    </motion.footer>
  );
}
