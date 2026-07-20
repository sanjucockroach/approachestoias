import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  CONTACT_EMAIL,
  NAV_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
  TELEGRAM_URL,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-hairline bg-surface-1 px-4 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-12 md:px-6 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 border-b border-hairline pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt=""
                width={40}
                height={40}
              />
              <span className="font-semibold tracking-[-0.4px] text-ink">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 max-w-[34ch] text-sm leading-6 text-ink-muted">
              {SITE_TAGLINE}. Services and learning products made for the UPSC
              coaching ecosystem.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink-muted hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Connect</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 flex min-h-11 items-center gap-2 text-sm text-ink-muted hover:text-ink"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 text-sm text-ink-muted hover:text-ink"
            >
              Telegram
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <p>Built for fast, accessible, static delivery.</p>
        </div>
      </div>
    </footer>
  );
}
