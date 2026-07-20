"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.svg"
            alt="Approaches to IAS"
            width={36}
            height={36}
            priority
          />
          <span className="text-sm font-semibold tracking-[-0.3px] text-ink sm:text-base">
            Approaches to IAS
          </span>
        </Link>

        <ul className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="button button-primary hidden md:inline-flex">
          Start a conversation
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-hairline bg-canvas text-ink md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={open ? "mobile-menu is-open" : "mobile-menu"}
      >
        <ul className="mx-auto grid max-w-[1200px] gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="flex min-h-11 items-center rounded-[4px] px-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
