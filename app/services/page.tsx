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
import { ConversionBand } from "@/components/conversion-band";
import { Footer } from "@/components/footer";
import { GalleryVisual } from "@/components/gallery-visual";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrustBar } from "@/components/trust-bar";

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
      "Commission editorial summaries, answer frameworks, topic research, and syllabus-linked content around your academic calendar.",
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
      "Plan publishing, quizzes, doubt prompts, announcements, and community engagement without burdening your core team.",
    outputs: ["Content calendar", "Quiz formats", "Community engagement"],
  },
  {
    icon: Globe,
    title: "Institute websites",
    statement: "Make your academy clear, credible, and easy to contact.",
    details:
      "Static, mobile-first websites with focused architecture, search-ready metadata, and direct enquiry pathways.",
    outputs: ["Fast static pages", "Search foundations", "Lead pathways"],
  },
  {
    icon: Lightbulb,
    title: "Unique products",
    statement: "Add useful study tools without adding noise.",
    details:
      "Offer revision capsules, writing trackers, essay frameworks, and other tools designed around repeatable study behaviours.",
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
        />
        <TrustBar />

        <section className="section-shell bg-canvas">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">Built around the pressure point</p>
            <h2 className="display-lg mt-4 text-ink">
              The academy workflow comes before the service bundle.
            </h2>
            <p className="lead mx-auto mt-5 max-w-[50ch]">
              We identify what is slowing the academic system down, then design the smallest useful engagement around it.
            </p>
          </Reveal>
        </section>

        {services.map((service, index) => (
          <section key={service.title} className="gallery-band">
            <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
              <Reveal className={index % 2 ? "md:order-2" : ""}>
                <p className="eyebrow">{String(index + 1).padStart(2, "0")} / 06</p>
                <h2 className="display-lg mt-4 max-w-[16ch] text-ink">{service.statement}</h2>
                <p className="lead mt-5 max-w-[48ch]">{service.details}</p>
                <ul className="mt-7 border-t border-hairline">
                  {service.outputs.map((output) => (
                    <li key={output} className="border-b border-hairline py-3 text-sm text-ink-muted">
                      {output}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="button button-quiet mt-6">
                  Discuss {service.title.toLowerCase()}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>
              <Reveal delay={0.05} className={index % 2 ? "md:order-1" : ""}>
                <GalleryVisual
                  icon={service.icon}
                  code={String(index + 1).padStart(2, "0")}
                  label={`Abstract illustration for ${service.title}`}
                />
              </Reveal>
            </div>
          </section>
        ))}

        <section className="section-shell-lg bg-canvas">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Working rhythm</p>
              <h2 className="display-lg mt-4 max-w-[12ch] text-ink">Simple enough to stay clear.</h2>
            </Reveal>
            <ol>
              {[
                ["Understand", "Map the current workflow and the real constraint."],
                ["Design", "Define the smallest useful service system and outputs."],
                ["Deliver", "Work in clear review cycles with visible ownership."],
              ].map(([title, copy], index) => (
                <Reveal key={title} delay={index * 0.04} className="principle-row">
                  <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
                  <strong className="font-semibold text-ink">{title}</strong>
                  <span className="text-sm leading-6 text-ink-muted">{copy}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <ConversionBand
          title="Bring us the operational bottleneck."
          body="We will identify the right capability, define a useful scope, and make the next step clear."
          context="solving an academy operations challenge"
        />
      </main>
      <Footer />
    </>
  );
}
