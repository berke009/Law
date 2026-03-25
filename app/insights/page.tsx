import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function InsightsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-28">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Insights
        </p>
        <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight">
          Hub launching soon
        </h1>
        <p className="mb-8 text-muted leading-relaxed">
          Full articles and filters will live here. For now, explore the latest
          highlights on the homepage or reach out to discuss a topic.
        </p>
        <Link
          href="/#insights"
          className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Back to homepage highlights
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
