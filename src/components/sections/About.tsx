import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return <section id="organizers" className="tango-organizers relative overflow-hidden py-24 sm:py-32">
    <Container className="relative z-10">
      <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <p className="tango-kicker">For organizers</p>
        <div><h2 className="tango-display text-5xl leading-[0.94] sm:text-6xl">Your event deserves <em>an audience in motion.</em></h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">Bring your milonga, festival, or workshop to the dancers searching for their next unforgettable night. My Tango Events makes it simple to be found.</p>
          <a className="tango-button mt-10" href="#contact">List your event <ArrowUpRight size={18} /></a>
        </div>
      </Reveal>
      <Reveal delay={150} className="organizer-stats mt-20 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
        <div><strong>One place</strong><span>to share what you&apos;re creating</span></div><div><strong>Global reach</strong><span>for a global dance community</span></div><div><strong>Simple tools</strong><span>built around real organizers</span></div>
      </Reveal>
    </Container><div className="organizer-mark" aria-hidden="true">MTE</div>
  </section>;
}
