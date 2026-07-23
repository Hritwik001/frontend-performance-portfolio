import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="tango-hero relative isolate overflow-hidden">
      <div className="tango-hero__glow tango-hero__glow--one" />
      <div className="tango-hero__glow tango-hero__glow--two" />
      <div className="tango-hero__lines" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid min-h-[720px] items-center gap-12 py-28 lg:min-h-[810px] lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
          <div className="animate-enter">
            <p className="tango-kicker"><Sparkles size={15} /> Argentina, wherever you are</p>
            <h1 className="tango-display mt-7 max-w-3xl text-6xl leading-[0.88] sm:text-7xl lg:text-[6.8rem]">
              Find the rhythm <em>that finds you.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
              My Tango Events brings the world&apos;s milongas, festivals, and workshops into one beautifully considered place.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a className="tango-button" href="#features">Download the app <ArrowDownRight size={18} /></a>
              <a className="tango-link" href="#organizers">For organizers <span>→</span></a>
            </div>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-[var(--ink-muted)]">
              <span className="flex items-center gap-2"><MapPin size={15} className="text-[var(--gold)]" /> Events across the globe</span>
              <span>Made for dancers, by dancers</span>
            </div>
          </div>

          <div className="tango-orbit animate-enter animate-enter--late" aria-label="Abstract tango-inspired visual">
            <div className="tango-orbit__ring tango-orbit__ring--outer" />
            <div className="tango-orbit__ring tango-orbit__ring--inner" />
            <div className="tango-orbit__arc" />
            <div className="tango-orbit__disc" />
            <div className="tango-orbit__note"><span>Tonight</span><strong>Milonga nights</strong><small>Near you · Worldwide</small></div>
            <div className="tango-orbit__flourish">T</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
