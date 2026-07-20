import type { Metadata } from "next";
import {
  ArrowUpRight,
  BarChart3,
  BookMarked,
  CalendarDays,
  PenTool,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { ConversionBand } from "@/components/conversion-band";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Practical UPSC revision, answer-writing, essay, and current affairs products for aspirants and IAS coaching institutes.",
  alternates: { canonical: "/products" },
};

const products = [
  {
    icon: BookMarked,
    name: "Daily Prelims Capsule",
    action: "Revise",
    copy: "A focused daily format that turns high-frequency facts and concepts into a sustainable recall routine.",
    use: "Daily revision and batch engagement",
  },
  {
    icon: BarChart3,
    name: "Mains Answer Tracker",
    action: "Write",
    copy: "A structured practice system for logging answers, reviewing feedback, and seeing where the next improvement belongs.",
    use: "Answer-writing programmes and mentorship",
  },
  {
    icon: PenTool,
    name: "Essay Builder Kit",
    action: "Structure",
    copy: "Themes, argument patterns, examples, and evaluation cues that help aspirants build stronger essays with intention.",
    use: "Essay classes and self-practice",
  },
  {
    icon: CalendarDays,
    name: "Current Affairs Digest",
    action: "Connect",
    copy: "A weekly bridge from important events to GS topics, classroom discussion, and answer-ready context.",
    use: "Current affairs programmes and publishing",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="Our Products"
          title="Study tools built around useful habits."
          description="Products for revision, writing, synthesis, and reflection, ready for aspirants or your academy programme."
          context="your learning products"
          index="04"
        />
        <TrustBar />

        <section className="bg-canvas px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="max-w-3xl">
              <h2 className="max-w-[17ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                The format follows the learning behaviour.
              </h2>
              <p className="mt-5 max-w-[58ch] text-lg leading-8 text-ink-muted">
                Every product has one clear job. It should make practice easier
                to start and progress easier to understand.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Reveal key={product.name} delay={(index % 2) * 0.05}>
                    <article
                      className={`relative min-h-[380px] overflow-hidden border border-hairline p-7 md:p-9 ${
                        index === 0 ? "bg-primary text-on-primary" : "bg-surface-1 text-ink"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-6">
                        <Icon
                          className={`h-8 w-8 ${
                            index === 0 ? "text-on-primary" : "text-primary"
                          }`}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                        <span
                          className={`font-mono text-xs font-medium ${
                            index === 0 ? "text-on-primary/70" : "text-primary"
                          }`}
                        >
                          {product.action}
                        </span>
                      </div>
                      <div className="absolute inset-x-7 bottom-7 z-10 md:inset-x-9 md:bottom-9">
                        <h3 className="max-w-[14ch] text-[30px] font-semibold leading-[1.08] tracking-[-1.4px]">
                          {product.name}
                        </h3>
                        <p
                          className={`mt-4 max-w-[48ch] text-sm leading-6 ${
                            index === 0 ? "text-on-primary/80" : "text-ink-muted"
                          }`}
                        >
                          {product.copy}
                        </p>
                        <p
                          className={`mt-6 border-t pt-4 text-xs font-medium ${
                            index === 0
                              ? "border-on-primary/25 text-on-primary/75"
                              : "border-hairline text-ink-subtle"
                          }`}
                        >
                          Best for: {product.use}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline bg-surface-1 px-4 py-20 md:px-6 md:py-24">
          <Reveal className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <h2 className="max-w-[16ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                Need a product shaped for your programme?
              </h2>
              <p className="mt-5 max-w-[54ch] text-lg leading-8 text-ink-muted">
                We can adapt the content depth, cadence, and delivery format
                around your batch and faculty workflow.
              </p>
            </div>
            <div className="border-l-2 border-primary bg-canvas p-7">
              <p className="text-sm font-semibold text-ink">Custom product brief</p>
              <p className="mt-3 text-sm leading-6 text-ink-muted">
                Share the subject, audience, study behaviour, and delivery
                cadence. We will turn it into a practical product outline.
              </p>
              <a href="/contact" className="button button-secondary mt-6">
                Share a product idea
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>

        <ConversionBand
          title="Put a useful product inside your next batch."
          body="Ask for samples, discuss an existing product, or brief a custom format for your academy."
          context="products for an upcoming batch"
        />
      </main>
      <Footer />
    </>
  );
}
