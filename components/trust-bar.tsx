import { TRUST_SIGNALS } from "@/lib/site";

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <section
      className={`border-y border-hairline bg-canvas ${className}`}
      aria-label="Why academies choose Approaches to IAS"
    >
      <div className="mx-auto grid max-w-[1200px] divide-y divide-hairline px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-6">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.value} className="px-2 py-7 md:px-8 md:py-8">
            <p className="text-lg font-semibold tracking-[-0.7px] text-ink">
              {signal.value}
            </p>
            <p className="mt-2 max-w-[30ch] text-sm leading-6 text-ink-muted">
              {signal.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
