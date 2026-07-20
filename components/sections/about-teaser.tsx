import { ArrowRight, Compass, Handshake, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";

const values = [
  {
    icon: Target,
    title: "Precise",
    copy: "The syllabus, learner, and classroom need come before the format.",
  },
  {
    icon: Handshake,
    title: "Collaborative",
    copy: "Clear ownership and direct feedback keep the work academically coherent.",
  },
  {
    icon: Compass,
    title: "Purposeful",
    copy: "Technology earns its place only when it improves learning or delivery.",
  },
];

export function AboutTeaser() {
  return (
    <section id="about" className="section-shell-lg bg-canvas" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-[0.92fr_1.08fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">How we think</p>
          <h2 id="about-heading" className="display-lg mt-4 max-w-[15ch] text-ink">
            Better infrastructure should make better teaching possible.
          </h2>
          <a href="/about" className="button button-quiet mt-7">
            Read our approach
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <div>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.04} className="principle-row">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.7} aria-hidden="true" />
                <h3 className="font-semibold tracking-[-0.4px] text-ink">{value.title}</h3>
                <p className="text-sm leading-6 text-ink-muted">{value.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
