import type { Metadata } from "next";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { Reveal } from "@/components/reveal";
import {
  CONTACT_EMAIL,
  TELEGRAM_URL,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Approaches to IAS about UPSC study materials, educators, Telegram management, institute websites, or learning products.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    label: "Start a quick conversation",
    detail: "Share the academy, requirement, and preferred timeline.",
    href: whatsappUrl("working together"),
  },
  {
    icon: Mail,
    title: "Email",
    label: CONTACT_EMAIL,
    detail: "Send a detailed brief, proposal request, or supporting document.",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Send,
    title: "Telegram",
    label: "@approachestoias",
    detail: "Connect with the channel for updates and community information.",
    href: TELEGRAM_URL,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Start with what needs to work better."
          description="Share the challenge, the academy context, and the outcome you need. A polished brief can come later."
          context="an academy requirement"
          index="01"
        />
        <TrustBar />

        <section className="bg-canvas px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="max-w-3xl">
              <h2 className="max-w-[16ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] text-ink md:text-[48px]">
                Choose the easiest way to begin.
              </h2>
              <p className="mt-5 max-w-[56ch] text-lg leading-8 text-ink-muted">
                We can discuss a single deliverable, an ongoing service, or a
                connected system across multiple capabilities.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Reveal
                    key={method.title}
                    delay={index * 0.05}
                    className="bg-canvas"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex min-h-[310px] flex-col p-7 md:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <Icon
                          aria-hidden="true"
                          className="h-7 w-7 text-primary"
                          strokeWidth={1.8}
                        />
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-5 w-5 text-primary"
                        />
                      </div>
                      <div className="mt-auto pt-12">
                        <h3 className="text-2xl font-semibold tracking-[-1px] text-ink">
                          {method.title}
                        </h3>
                        <p className="mt-3 break-words text-sm font-semibold text-primary">
                          {method.label}
                        </p>
                        <p className="mt-4 text-sm leading-6 text-ink-muted">
                          {method.detail}
                        </p>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary px-4 py-20 text-on-primary md:px-6 md:py-24">
          <Reveal className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="max-w-[12ch] text-[36px] font-bold leading-[1.08] tracking-[-2px] md:text-[48px]">
              A useful first message includes:
            </h2>
            <ul className="border-t border-on-primary/25">
              {[
                "Your academy or programme",
                "The current operational or academic challenge",
                "The service or product you are considering",
                "Any important date or delivery window",
              ].map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-on-primary/25 py-5 text-sm leading-6 text-on-primary/85"
                >
                  <span className="font-mono text-on-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
