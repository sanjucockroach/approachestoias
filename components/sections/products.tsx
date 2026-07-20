import {
  ArrowRight,
  BarChart3,
  BookMarked,
  CalendarDays,
  PenTool,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const products = [
  {
    icon: BookMarked,
    name: "Daily Prelims Capsule",
    copy: "A short daily revision format designed to make recall a habit.",
    featured: true,
  },
  {
    icon: BarChart3,
    name: "Mains Answer Tracker",
    copy: "A structured loop for writing practice, feedback, and reflection.",
  },
  {
    icon: PenTool,
    name: "Essay Builder Kit",
    copy: "Themes, frameworks, and evaluation cues for stronger essay practice.",
  },
  {
    icon: CalendarDays,
    name: "Current Affairs Digest",
    copy: "A ready-to-use weekly bridge between important events and the syllabus.",
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="border-y border-hairline bg-canvas-soft px-4 py-20 md:px-6 md:py-32"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2
            id="products-heading"
            className="max-w-[17ch] text-[38px] font-bold leading-[1.06] tracking-[-2px] text-ink md:text-[52px] md:tracking-[-2.6px]"
          >
            Useful products, not more study clutter.
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-8 text-ink-muted">
            Each product is built around a repeatable study behaviour: revise,
            write, connect, or review.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            const spans = index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-6";
            return (
              <Reveal
                key={product.name}
                delay={index * 0.05}
                className={spans}
              >
                <article
                  className={`product-tile h-full ${product.featured ? "featured" : ""}`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-7 w-7 ${product.featured ? "text-on-primary" : "text-primary"}`}
                    strokeWidth={1.8}
                  />
                  <div className="absolute inset-x-6 bottom-6 z-10">
                    <h3 className="max-w-[18ch] text-2xl font-semibold tracking-[-1px]">
                      {product.name}
                    </h3>
                    <p
                      className={`mt-3 max-w-[42ch] text-sm leading-6 ${
                        product.featured
                          ? "text-on-primary/80"
                          : "text-ink-muted"
                      }`}
                    >
                      {product.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <a href="/products" className="button button-secondary">
            Explore all products
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
