import type { Metadata } from "next";
import { Compass, Handshake, Layers3, Target } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { ConversionBand } from "@/components/conversion-band";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Approaches to IAS, a services and products company focused on stronger infrastructure for the UPSC coaching ecosystem.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Target,
    title: "Start with the learning outcome",
    copy: "The syllabus and aspirant need shape the deliverable before format or technology enters the conversation.",
  },
  {
    icon: Handshake,
    title: "Work as one team",
    copy: "Clear ownership, direct feedback, and a shared academic direction produce better work than a distant vendor relationship.",
  },
  {
    icon: Layers3,
    title: "Connect the system",
    copy: "Content, educators, community, products, and the website should reinforce one another, not operate as isolated activities.",
  },
  {
    icon: Compass,
    title: "Keep the next step clear",
    copy: "Good infrastructure reduces ambiguity for faculty, operations teams, and aspirants.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="We make ambitious teaching easier to deliver."
          description="Approaches to IAS builds the content, people, systems, and products that support a serious UPSC academy."
          context="the team and approach"
          index="IAS"
        />
        <TrustBar />

        <section className="bg-canvas px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <p className="text-sm font-semibold text-primary">Our premise</p>
              <h2 className="mt-4 max-w-[12ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                Coaching quality depends on what supports the classroom.
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="border-t border-hairline pt-7">
              <p className="max-w-[54ch] text-xl leading-9 tracking-[-0.35px] text-ink">
                Great educators should not have to spend their best hours
                rebuilding notes, chasing operations, or managing fragmented
                digital channels.
              </p>
              <p className="mt-6 max-w-[62ch] text-base leading-7 text-ink-muted">
                We bring those moving parts into a more coherent system. The
                result is not infrastructure for its own sake. It is more time
                for teaching, a clearer learner experience, and an academy that
                can grow without losing academic intent.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-hairline bg-surface-1 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <h2 className="max-w-[14ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                Four principles guide the work.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Reveal
                    key={principle.title}
                    delay={(index % 2) * 0.05}
                    className="bg-canvas"
                  >
                    <article className="min-h-[280px] p-7 md:p-9">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-primary"
                        strokeWidth={1.8}
                      />
                      <h3 className="mt-10 max-w-[18ch] text-2xl font-semibold tracking-[-1px] text-ink">
                        {principle.title}
                      </h3>
                      <p className="mt-4 max-w-[48ch] text-sm leading-6 text-ink-muted">
                        {principle.copy}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-canvas px-4 py-20 md:px-6 md:py-28">
          <Reveal className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="border-l-2 border-primary pl-6 md:pl-9">
              <p className="text-sm font-semibold text-primary">UPSC and Beyond</p>
              <h2 className="mt-4 max-w-[13ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                The exam is specific. The capability is broader.
              </h2>
            </div>
            <p className="max-w-[56ch] text-lg leading-8 text-ink-muted">
              The habits behind good UPSC preparation, clarity, judgement,
              synthesis, and disciplined practice, remain valuable beyond one
              examination. That belief sits inside our name and our work.
            </p>
          </Reveal>
        </section>

        <ConversionBand
          title="Build with a team that understands the ecosystem."
          body="Start with your academy's current challenge. We will help turn it into a clear, useful engagement."
          context="working with the Approaches to IAS team"
        />
      </main>
      <Footer />
    </>
  );
}
