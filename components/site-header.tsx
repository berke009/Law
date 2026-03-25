"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          Ahmet Can Erendor
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-muted">
          <Link
            href="#about"
            className="relative transition-colors hover:text-foreground"
          >
            <span className="relative z-10">About</span>
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            />
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
