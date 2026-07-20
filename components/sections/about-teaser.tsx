import { ArrowRight, Compass, Handshake, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";

const values = [
  {
    icon: Target,
    title: "Precise",
    copy: "Every deliverable starts with the syllabus, the learner, and the actual classroom need.",
  },
  {
    icon: Handshake,
    title: "Collaborative",
    copy: "We work as an extension of the academy team, with clear ownership and practical feedback loops.",
  },
  {
    icon: Compass,
    title: "Purposeful",
    copy: "We choose formats and technology for learning value, not for novelty.",
  },
];

export function AboutTeaser() {
  return (
    <section
      id="about"
      className="bg-canvas px-4 py-20 md:px-6 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-semibold text-primary">How we think</p>
          <h2
            id="about-heading"
            className="mt-4 max-w-[14ch] text-[38px] font-bold leading-[1.06] tracking-[-2px] text-ink md:text-[52px] md:tracking-[-2.6px]"
          >
            Better infrastructure should improve teaching.
          </h2>
          <a href="/about" className="button button-primary mt-8">
            Read our approach
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="editorial-rule">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal
                key={value.title}
                delay={index * 0.05}
                className="grid gap-4 border-b border-hairline py-7 sm:grid-cols-[48px_150px_1fr] sm:items-start"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.8}
                />
                <h3 className="font-semibold tracking-[-0.3px] text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-6 text-ink-muted">{value.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
