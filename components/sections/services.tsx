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
    description: "Syllabus-aware notes, tests, compilations, and revision resources.",
  },
  {
    icon: FileText,
    title: "Content on demand",
    description: "Editorial briefs, answer frameworks, and current affairs content.",
  },
  {
    icon: Users,
    title: "Expert educators",
    description: "Subject specialists selected around your academic requirement.",
  },
  {
    icon: MessageCircle,
    title: "Telegram management",
    description: "A useful publishing rhythm for quizzes, discussion, and updates.",
  },
  {
    icon: Globe,
    title: "Institute websites",
    description: "Fast, clear, search-ready websites that turn interest into enquiries.",
  },
  {
    icon: Lightbulb,
    title: "Unique products",
    description: "Purpose-built tools for revision, writing, and academic progress.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-shell-lg bg-canvas" aria-labelledby="services-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">One connected capability set</p>
          <h2 id="services-heading" className="display-lg mt-4 text-ink">
            Everything around the classroom can work as one system.
          </h2>
          <p className="lead mx-auto mt-5 max-w-[52ch]">
            Start with one pressure point or connect all six around a shared academic direction.
          </p>
        </Reveal>

        <div className="capability-list mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.03}>
                <a href="/services" className="capability-row group">
                  <span className="capability-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-3 font-semibold tracking-[-0.4px] text-ink">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} aria-hidden="true" />
                    {service.title}
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">{service.description}</span>
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
