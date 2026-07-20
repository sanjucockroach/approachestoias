import { Check } from "lucide-react";
import { TRUST_SIGNALS } from "@/lib/site";

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <section
      className={`border-y border-hairline bg-canvas ${className}`}
      aria-label="Why academies choose Approaches to IAS"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-hairline px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-6">
        {TRUST_SIGNALS.map((signal) => (
          <div
            key={signal.value}
            className="grid min-h-28 grid-cols-[24px_1fr] content-center gap-x-3 px-2 py-6 md:px-6"
          >
            <Check
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 text-primary"
              strokeWidth={2}
            />
            <div>
              <p className="font-semibold tracking-[-0.3px] text-ink">
                {signal.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                {signal.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
