"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
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
    <section className="relative min-h-[92vh] overflow-hidden px-6 pt-28 pb-24 md:px-8">
      {/* UX: stand-in for slow video — editorial still + drift; swap for <video> when asset exists */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#1a1f2e]"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "hero-drift 28s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/85 via-[#0f172a]/55 to-background" />
      </div>

      <div className="relative mx-auto max-w-3xl text-white">
        <motion.p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Av. Ahmet Can Erendor · Istanbul, Türkiye
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.h1
            variants={item}
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.35rem]"
          >
            Lawyers who understand your business
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
          >
            Strategic, modern legal counsel shaped around your sector—clear
            advice, disciplined execution, and judgment you can stake decisions
            on.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center bg-white px-6 text-sm font-semibold text-[#0f172a] transition-opacity hover:opacity-90"
            >
              Speak to Our Team
            </a>
            <a
              href="#services"
              className="inline-flex min-h-11 items-center justify-center border border-white/35 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Explore Our Sectors
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
