import type { Metadata } from "next";
import { ArrowUpRight, BarChart3, BookMarked, CalendarDays, PenTool } from "lucide-react";
import { ConversionBand } from "@/components/conversion-band";
import { Footer } from "@/components/footer";
import { GalleryVisual } from "@/components/gallery-visual";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrustBar } from "@/components/trust-bar";

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
    copy: "A structured practice system for logging answers, reviewing feedback, and locating the next improvement.",
    use: "Answer-writing programmes and mentorship",
  },
  {
    icon: PenTool,
    name: "Essay Builder Kit",
    action: "Structure",
    copy: "Themes, argument patterns, examples, and evaluation cues for stronger essays built with intention.",
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
        />
        <TrustBar />

        <section className="section-shell bg-canvas">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">One job per product</p>
            <h2 className="display-lg mt-4 text-ink">The format follows the learning behaviour.</h2>
            <p className="lead mx-auto mt-5 max-w-[50ch]">
              Practice should be easier to start, and progress should be easier to understand.
            </p>
          </Reveal>
        </section>

        {products.map((product, index) => (
          <section key={product.name} className="gallery-band">
            <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
              <Reveal className={index % 2 ? "md:order-2" : ""}>
                <p className="eyebrow">{product.action}</p>
                <h2 className="display-lg mt-4 max-w-[14ch] text-ink">{product.name}</h2>
                <p className="lead mt-5 max-w-[46ch]">{product.copy}</p>
                <p className="mt-7 border-t border-hairline pt-4 text-sm text-ink-muted">
                  <strong className="font-semibold text-ink">Best for:</strong> {product.use}
                </p>
                <a href="/contact" className="button button-quiet mt-6">
                  Ask about this product
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Reveal>
              <Reveal delay={0.05} className={index % 2 ? "md:order-1" : ""}>
                <GalleryVisual
                  icon={product.icon}
                  code={String(index + 1).padStart(2, "0")}
                  label={`Abstract illustration for ${product.name}`}
                />
              </Reveal>
            </div>
          </section>
        ))}

        <section className="section-shell-lg bg-canvas">
          <Reveal className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="eyebrow">Custom product brief</p>
              <h2 className="display-lg mt-4 max-w-[16ch] text-ink">Need a format shaped for your programme?</h2>
              <p className="lead mt-5 max-w-[52ch]">
                We can adapt the content depth, cadence, and delivery around your batch and faculty workflow.
              </p>
            </div>
            <div className="border-l border-primary pl-6 md:pl-8">
              <p className="text-sm leading-6 text-ink-muted">
                Share the subject, audience, study behaviour, and delivery cadence. We will turn it into a practical outline.
              </p>
              <a href="/contact" className="button button-secondary mt-6">
                Share a product idea
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
