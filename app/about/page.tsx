import type { Metadata } from "next";
import { Compass, Handshake, Layers3, Target } from "lucide-react";
import { ConversionBand } from "@/components/conversion-band";
import { Footer } from "@/components/footer";
import { GalleryVisual } from "@/components/gallery-visual";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrustBar } from "@/components/trust-bar";

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
    copy: "Clear ownership, direct feedback, and shared academic direction produce better work than a distant vendor relationship.",
  },
  {
    icon: Layers3,
    title: "Connect the system",
    copy: "Content, educators, community, products, and the website should reinforce one another.",
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
        />
        <TrustBar />

        <section className="section-shell-lg bg-canvas">
          <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.78fr_1.22fr] md:gap-20">
            <Reveal>
              <p className="eyebrow">Our premise</p>
              <h2 className="display-lg mt-4 max-w-[13ch] text-ink">
                Coaching quality depends on what supports the classroom.
              </h2>
            </Reveal>
            <Reveal delay={0.05} className="border-t border-hairline pt-7">
              <p className="max-w-[52ch] text-xl leading-9 tracking-[-0.5px] text-ink">
                Great educators should not spend their best hours rebuilding notes, chasing operations, or managing fragmented channels.
              </p>
              <p className="lead mt-6 max-w-[58ch]">
                We bring those moving parts into a coherent system. The result is more time for teaching, a clearer learner experience, and growth without losing academic intent.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="gallery-band">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
            <Reveal>
              <GalleryVisual icon={Layers3} code="IAS" label="Connected academic system illustration" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="eyebrow">UPSC and Beyond</p>
              <h2 className="display-lg mt-4 max-w-[14ch] text-ink">The exam is specific. The capability is broader.</h2>
              <p className="lead mt-5 max-w-[48ch]">
                Clarity, judgement, synthesis, and disciplined practice remain valuable beyond one examination. That belief sits inside our name and our work.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-shell-lg bg-canvas">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="max-w-[620px]">
              <p className="eyebrow">The way we work</p>
              <h2 className="display-lg mt-4 text-ink">Four principles keep the system honest.</h2>
            </Reveal>
            <div className="mt-12">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Reveal key={principle.title} delay={index * 0.03} className="principle-row">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.7} aria-hidden="true" />
                    <h3 className="font-semibold tracking-[-0.4px] text-ink">{principle.title}</h3>
                    <p className="text-sm leading-6 text-ink-muted">{principle.copy}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <ConversionBand
          title="Build with a team that understands the ecosystem."
          body="Start with your academy's current challenge. We will turn it into a clear, useful engagement."
          context="working with the Approaches to IAS team"
        />
      </main>
      <Footer />
    </>
  );
}
