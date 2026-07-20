import { ArrowRight, MessageCircle } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="hero-stage" aria-labelledby="hero-heading">
      <HeroScene className="hero-art" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-copy relative z-10 mx-auto flex min-h-[100dvh] max-w-[820px] flex-col items-center justify-center px-4 pb-16 pt-24 text-center md:px-6">
        <p className="eyebrow">UPSC and Beyond</p>
        <h1 id="hero-heading" className="display-xl mt-5 max-w-[15ch] text-ink">
          The operating system behind serious IAS coaching.
        </h1>
        <p className="lead mt-6 max-w-[48ch]">
          Content, educators, community, websites, and learning products,
          designed as one coherent academic system.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
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
            Explore the system
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
