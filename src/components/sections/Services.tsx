import { CalendarDays, Heart, MapPinned, UsersRound } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  { icon: MapPinned, number: "01", title: "Follow your feet", text: "Find tango events near you, or start dreaming up your next dance destination." },
  { icon: CalendarDays, number: "02", title: "One world calendar", text: "A clear, global view of milongas, festivals, marathons, and workshops." },
  { icon: UsersRound, number: "03", title: "Meet the community", text: "Connect with organizers and dancers who make every local scene feel like home." },
  { icon: Heart, number: "04", title: "Keep the good ones", text: "Save the events that move you and build your own season of tango." },
];

export function Services() {
  return (
    <section id="features" className="bg-[var(--cream)] py-24 text-[var(--wine)] sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="tango-kicker tango-kicker--dark">The tango world, in your pocket</p>
          <h2 className="tango-display mt-6 text-5xl leading-[0.95] sm:text-6xl">More places to dance. <em>More reasons to go.</em></h2>
        </Reveal>
        <div className="mt-16 grid border-l border-t border-[rgba(63,20,29,0.18)] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Reveal key={feature.number} delay={index * 90} className="feature-cell group border-b border-r border-[rgba(63,20,29,0.18)] p-7 sm:p-8">
              <div className="flex items-start justify-between"><Icon size={25} strokeWidth={1.4} /><span className="font-mono text-xs text-[var(--wine)]/55">{feature.number}</span></div>
              <h3 className="mt-14 text-2xl font-medium tracking-tight">{feature.title}</h3>
              <p className="mt-4 leading-7 text-[var(--wine)]/70">{feature.text}</p>
              <span className="mt-8 block text-xl transition-transform duration-500 group-hover:translate-x-2">↗</span>
            </Reveal>;
          })}
        </div>
      </Container>
    </section>
  );
}
