import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TrustBar } from "@/components/trust-bar";
import { CONTACT_EMAIL, TELEGRAM_URL, whatsappUrl } from "@/lib/site";

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
    label: "+91 76208 11812",
    detail: "Best for a quick requirement brief and first conversation.",
    href: whatsappUrl("working together"),
  },
  {
    icon: Mail,
    title: "Email",
    label: CONTACT_EMAIL,
    detail: "Best for a detailed brief, proposal request, or supporting document.",
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
        />
        <TrustBar />

        <section className="section-shell-lg bg-canvas">
          <div className="mx-auto max-w-[1100px]">
            <Reveal className="max-w-[700px]">
              <p className="eyebrow">Choose the easiest route</p>
              <h2 className="display-lg mt-4 text-ink">A conversation can begin in one line.</h2>
              <p className="lead mt-5 max-w-[52ch]">
                Discuss a single deliverable, an ongoing service, or a connected system across multiple capabilities.
              </p>
            </Reveal>

            <div className="mt-12">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Reveal key={method.title} delay={index * 0.04}>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="contact-row"
                    >
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.7} aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold tracking-[-0.4px] text-ink">{method.title}</h3>
                        <p className="mt-1 break-words text-sm font-semibold text-primary">{method.label}</p>
                      </div>
                      <p className="text-sm leading-6 text-ink-muted">{method.detail}</p>
                      <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline bg-surface-1 section-shell-lg">
          <Reveal className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Make the first message useful</p>
              <h2 className="display-lg mt-4 max-w-[13ch] text-ink">Four details are enough to begin.</h2>
            </div>
            <ol>
              {[
                "Your academy or programme",
                "The academic or operational challenge",
                "The service or product you are considering",
                "Any important date or delivery window",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 0.03} className="principle-row">
                  <span className="capability-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold text-ink">{item}</span>
                  <span className="text-sm text-ink-muted">Include what you know. We can shape the rest together.</span>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
