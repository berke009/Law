"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/#careers", label: "Careers" },
] as const;

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          Av. Ahmet Can Erendor
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm font-medium text-muted"
          aria-label="Primary"
        >
          {links.map((l) => (
            <Link
              key={l.href + l.label}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-sm border border-foreground/15 px-3 py-1.5 text-foreground transition-colors hover:bg-foreground/5"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
