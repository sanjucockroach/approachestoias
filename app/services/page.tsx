import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Globe,
  Lightbulb,
  MessageCircle,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { ConversionBand } from "@/components/conversion-band";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "UPSC study materials, content, educators, Telegram management, institute websites, and aspirant products for IAS coaching academies.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: BookOpen,
    title: "Study materials",
    statement: "Give every classroom a dependable academic base.",
    details:
      "Curated notes, compilations, practice material, and revision resources aligned to syllabus priorities and your teaching plan.",
    outputs: ["Current affairs support", "Subject modules", "Test resources"],
  },
  {
    icon: FileText,
    title: "Content on demand",
    statement: "Publish the right explanation at the right moment.",
    details:
      "Commission focused editorial summaries, answer-writing frameworks, topic research, and syllabus-linked content for your schedule.",
    outputs: ["Editorial briefs", "Answer frameworks", "Topic research"],
  },
  {
    icon: Users,
    title: "Expert educators",
    statement: "Strengthen your faculty bench where it matters.",
    details:
      "Find experienced educators across GS, essay, ethics, and optional subjects, matched to the format and academic requirement.",
    outputs: ["Subject specialists", "Flexible formats", "Academic matching"],
  },
  {
    icon: MessageCircle,
    title: "Telegram management",
    statement: "Turn a channel into a useful learning rhythm.",
    details:
      "Plan and manage publishing, quizzes, doubt prompts, announcements, and community engagement without burdening your core team.",
    outputs: ["Content calendar", "Quiz formats", "Community engagement"],
  },
  {
    icon: Globe,
    title: "Institute websites",
    statement: "Make your academy clear, credible, and easy to contact.",
    details:
      "Static, mobile-first websites with focused content architecture, search-ready metadata, and direct enquiry pathways.",
    outputs: ["Fast static pages", "Search foundations", "Lead pathways"],
  },
  {
    icon: Lightbulb,
    title: "Unique products",
    statement: "Add useful study tools without adding noise.",
    details:
      "Offer revision capsules, writing trackers, essay frameworks, and other practical products designed around repeatable study behaviours.",
    outputs: ["Revision tools", "Writing systems", "Custom concepts"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="Our Services"
          title="The operating layer behind better coaching."
          description="Use one capability or combine them into a dependable system for content, teaching, community, and growth."
          context="your services"
          index="06"
        />
        <TrustBar />

        <section className="bg-canvas px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="max-w-3xl">
              <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                Choose the pressure point. We build around it.
              </h2>
              <p className="mt-5 max-w-[60ch] text-lg leading-8 text-ink-muted">
                Every engagement starts with the academy workflow, not a
                pre-packed bundle.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal
                    key={service.title}
                    delay={(index % 2) * 0.05}
                    className="bg-canvas"
                  >
                    <article className="min-h-[350px] p-6 md:p-9">
                      <div className="flex items-center justify-between gap-4">
                        <Icon
                          className="h-7 w-7 text-primary"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-sm text-ink-subtle">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-10 text-2xl font-semibold tracking-[-1px] text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-[36ch] text-lg font-medium leading-7 text-ink">
                        {service.statement}
                      </p>
                      <p className="mt-4 max-w-[52ch] text-sm leading-6 text-ink-muted">
                        {service.details}
                      </p>
                      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-hairline pt-5">
                        {service.outputs.map((output) => (
                          <li
                            key={output}
                            className="text-xs font-medium text-ink-muted"
                          >
                            {output}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline bg-surface-1 px-4 py-20 md:px-6 md:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
              <h2 className="max-w-[12ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                A simple working rhythm.
              </h2>
              <ol className="border-t border-hairline">
                {[
                  ["Understand", "Map the current workflow and the real constraint."],
                  ["Design", "Define the smallest useful service system and outputs."],
                  ["Deliver", "Work in clear review cycles with visible ownership."],
                ].map(([title, copy], index) => (
                  <li
                    key={title}
                    className="grid gap-3 border-b border-hairline py-6 sm:grid-cols-[48px_130px_1fr]"
                  >
                    <span className="font-mono text-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="font-semibold text-ink">{title}</strong>
                    <span className="text-sm leading-6 text-ink-muted">{copy}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <a href="/contact" className="button button-secondary mt-10">
              Plan an engagement
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <ConversionBand
          title="Bring us the operational bottleneck."
          body="We will help identify the right capability, define a useful scope, and make the next step clear."
          context="solving an academy operations challenge"
        />
      </main>
      <Footer />
    </>
  );
}
