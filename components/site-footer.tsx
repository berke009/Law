"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <motion.footer
      id="careers"
      className="border-t border-line bg-white px-6 py-16 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-foreground">
            Av. Ahmet Can Erendor
          </p>
          <p className="mt-2 text-sm text-muted">
            Clarity. Judgment. Momentum.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Quick links
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-foreground">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/#careers" className="hover:text-foreground">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Legal
          </p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Legal Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-5xl border-t border-line pt-8 text-xs text-muted">
        Copyright © 2026 Av. Ahmet Can Erendor. All rights reserved.
      </div>
    </motion.footer>
  );
}
