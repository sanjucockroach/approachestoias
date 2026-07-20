import { ArrowRight, BarChart3, BookMarked, CalendarDays, PenTool } from "lucide-react";
import { Reveal } from "@/components/reveal";

const products = [
  {
    icon: BookMarked,
    name: "Daily Prelims Capsule",
    verb: "Revise",
    copy: "A focused daily recall routine.",
  },
  {
    icon: BarChart3,
    name: "Mains Answer Tracker",
    verb: "Write",
    copy: "A visible loop for practice and feedback.",
  },
  {
    icon: PenTool,
    name: "Essay Builder Kit",
    verb: "Structure",
    copy: "Frameworks and cues for stronger essays.",
  },
  {
    icon: CalendarDays,
    name: "Current Affairs Digest",
    verb: "Connect",
    copy: "A weekly bridge from events to syllabus.",
  },
];

export function Products() {
  return (
    <section id="products" className="section-shell-lg border-y border-hairline bg-surface-1" aria-labelledby="products-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">Learning products</p>
          <h2 id="products-heading" className="display-lg mt-4 text-ink">
            Useful study behaviours, made easier to repeat.
          </h2>
          <p className="lead mx-auto mt-5 max-w-[50ch]">
            Each product has one clear job: help an aspirant revise, write, structure, or connect.
          </p>
        </Reveal>

        <div className="product-gallery mt-14">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.name} delay={index * 0.04} className="bg-canvas">
                <article className="product-panel">
                  <div className="product-panel-orbit" aria-hidden="true" />
                  <Icon className="relative z-10 h-7 w-7 text-primary" strokeWidth={1.7} aria-hidden="true" />
                  <p className="relative z-10 mt-16 text-xs font-semibold text-primary">{product.verb}</p>
                  <h3 className="relative z-10 mt-3 max-w-[15ch] text-2xl font-semibold tracking-[-1px] text-ink">
                    {product.name}
                  </h3>
                  <p className="relative z-10 mt-3 max-w-[32ch] text-sm leading-6 text-ink-muted">
                    {product.copy}
                  </p>
                  <span className="product-panel-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 text-center">
          <a href="/products" className="button button-secondary">
            Explore all products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
