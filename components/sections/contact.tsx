import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { CONTACT_EMAIL, TELEGRAM_URL, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const methods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    copy: "Quick briefs and first conversations.",
    href: whatsappUrl("working together"),
  },
  {
    icon: Mail,
    title: "Email",
    copy: "Detailed requirements and documents.",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Send,
    title: "Telegram",
    copy: "Updates and community information.",
    href: TELEGRAM_URL,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell-lg border-t border-hairline bg-surface-1" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow">Begin with the challenge</p>
          <h2 id="contact-heading" className="display-lg mt-4 text-ink">
            You do not need a perfect brief to start.
          </h2>
          <p className="lead mx-auto mt-5 max-w-[52ch]">
            Share what is difficult today. We will help shape a practical next step.
          </p>
        </Reveal>

        <div className="mt-14">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Reveal key={method.title} delay={index * 0.04}>
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-row"
                >
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="font-semibold tracking-[-0.4px] text-ink">{method.title}</h3>
                  <p className="text-sm leading-6 text-ink-muted">{method.copy}</p>
                  <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
