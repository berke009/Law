"use client";

import { motion } from "framer-motion";

const helpOptions = [
  "Transaction",
  "Dispute",
  "Technology & data",
  "Real estate",
  "Other",
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--navy)] px-6 py-24 text-white md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div>
            <h2 className="mb-4 font-serif text-3xl font-semibold md:text-4xl">
              Ready to start the conversation?
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--navy-muted)]">
              Whether you are navigating a complex transaction or need strategic
              counsel, we are here to help.
            </p>
            <div className="space-y-4 text-sm text-[var(--navy-muted)]">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Main office
                </span>
                [Insert street, district], Istanbul, Türkiye
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Email
                </span>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href="mailto:contact@erendorlaw.com"
                >
                  contact@erendorlaw.com
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Phone
                </span>
                [Insert +90 …]
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  LinkedIn
                </span>
                <a
                  className="text-white underline-offset-4 hover:underline"
                  href="#"
                >
                  [Insert profile URL]
                </a>
              </p>
            </div>
          </div>

          <form
            className="space-y-5 border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Name
                <input
                  className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                  name="name"
                  type="text"
                  autoComplete="name"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Company
                <input
                  className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Email
                <input
                  className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Phone
                <input
                  className="mt-2 w-full border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </label>
            </div>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              How can we help?
              <select
                className="mt-2 w-full border border-white/15 bg-[#0b1222] px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                name="topic"
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                {helpOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Message
              <textarea
                className="mt-2 min-h-[120px] w-full resize-y border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-accent focus:ring-1"
                name="message"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-white py-3 text-sm font-semibold text-[var(--navy)] transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
            >
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
