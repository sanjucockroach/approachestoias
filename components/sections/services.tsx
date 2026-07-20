import {
  ArrowRight,
  BookOpen,
  FileText,
  Globe,
  Lightbulb,
  MessageCircle,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    icon: BookOpen,
    title: "Study materials",
    description:
      "Syllabus-aware notes, compilations, test support, and revision resources prepared for serious classroom use.",
  },
  {
    icon: FileText,
    title: "Content on demand",
    description:
      "Editorial summaries, answer frameworks, topic research, and current affairs content matched to your calendar.",
  },
  {
    icon: Users,
    title: "Expert educators",
    description:
      "Subject specialists for GS, essay, ethics, and optional papers, selected around your academic requirement.",
  },
  {
    icon: MessageCircle,
    title: "Telegram management",
    description:
      "A managed publishing rhythm for quizzes, discussions, announcements, and aspirant engagement.",
  },
  {
    icon: Globe,
    title: "Institute websites",
    description:
      "Fast, accessible, search-ready websites built to explain your offer and turn interest into enquiries.",
  },
  {
    icon: Lightbulb,
    title: "Unique products",
    description:
      "Practical study tools that give aspirants a clearer way to revise, practise, and track progress.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-canvas px-4 py-20 md:px-6 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">What we do</p>
          <h2
            id="services-heading"
            className="mt-4 max-w-[18ch] text-[38px] font-bold leading-[1.06] tracking-[-2px] text-ink md:text-[52px] md:tracking-[-2.6px]"
          >
            Six capabilities. One academic direction.
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-8 text-ink-muted">
            Choose a focused service or connect the pieces into one reliable
            operating system for your academy.
          </p>
        </Reveal>

        <div className="mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <a href="/services" className="service-row group">
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-3">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span className="font-semibold tracking-[-0.3px] text-ink">
                      {service.title}
                    </span>
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">
                    {service.description}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden h-5 w-5 text-primary md:block"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
