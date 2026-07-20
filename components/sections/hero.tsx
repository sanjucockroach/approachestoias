import { ArrowRight, MessageCircle } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden border-b border-hairline bg-canvas px-4 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="blueprint-field" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100dvh-11rem)] max-w-[1200px] items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy relative z-10">
          <p className="text-sm font-semibold text-primary">
            UPSC and Beyond
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-[12ch] text-[48px] font-bold leading-[1.01] tracking-[-2.4px] text-ink sm:text-[58px] md:text-[72px] md:tracking-[-2.8px]"
          >
            Build a stronger IAS academy.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-8 text-ink-muted">
            Content, educators, community, websites, and learning products in
            one focused partnership.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl("building a stronger academy")}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Start on WhatsApp
            </a>
            <a href="/services" className="button button-secondary">
              Explore services
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hero-visual relative h-[330px] min-w-0 border border-hairline bg-canvas-soft md:h-[520px]">
          <HeroScene className="absolute inset-0" />
          <div className="absolute bottom-4 left-4 border-l-2 border-primary bg-canvas/90 px-3 py-2 backdrop-blur-sm">
            <p className="text-xs font-semibold text-ink">One connected system</p>
            <p className="mt-0.5 text-xs text-ink-muted">Plan. Teach. Grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
