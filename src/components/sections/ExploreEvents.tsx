"use client";

import { Heart, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const filters = ["All events", "Milongas", "Festivals", "Workshops"] as const;
type Filter = (typeof filters)[number];

const events = [
  { id: "buenos-aires", type: "Milongas", city: "Buenos Aires", country: "Argentina", title: "A night made for the embrace", date: "Every Thursday", tone: "event-card--red" },
  { id: "worldwide", type: "Festivals", city: "Worldwide", country: "Your next destination", title: "A season of tango, waiting", date: "Coming soon", tone: "event-card--gold" },
  { id: "learning", type: "Workshops", city: "Find your teacher", country: "Around the world", title: "Stay curious. Keep dancing.", date: "New sessions weekly", tone: "event-card--ink" },
] as const;

export function ExploreEvents() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All events");
  const [saved, setSaved] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const visibleEvents = useMemo(() => events.filter((event) => {
    const matchesFilter = activeFilter === "All events" || event.type === activeFilter;
    const searchable = `${event.city} ${event.country} ${event.title}`.toLowerCase();
    return matchesFilter && searchable.includes(query.toLowerCase());
  }), [activeFilter, query]);

  const toggleSaved = (id: string) => setSaved((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);

  return <section id="explore" className="bg-[var(--wine-deep)] py-24 sm:py-32">
    <Container>
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div><p className="tango-kicker">A little preview</p><h2 className="tango-display mt-6 max-w-2xl text-5xl leading-[.95] sm:text-6xl">Explore what&apos;s <em>moving near you.</em></h2></div>
        <p className="max-w-xs leading-7 text-[var(--ink-muted)]">A portfolio-ready interaction model for browsing, filtering, and saving tango events.</p>
      </Reveal>
      <Reveal delay={100} className="explore-panel mt-14 p-5 sm:p-7">
        <div className="flex flex-col gap-5 border-b border-white/15 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter event types">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={`filter-pill ${activeFilter === filter ? "filter-pill--active" : ""}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <label className="search-field"><Search size={16} /><span className="sr-only">Search events</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search places or events" /></label>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {visibleEvents.map((event) => { const isSaved = saved.includes(event.id); return <article key={event.id} className={`event-card ${event.tone}`}>
            <div className="flex items-start justify-between"><span className="event-card__type">{event.type}</span><button type="button" onClick={() => toggleSaved(event.id)} className={`save-button ${isSaved ? "save-button--saved" : ""}`} aria-pressed={isSaved} aria-label={`${isSaved ? "Remove" : "Save"} ${event.title}`}><Heart size={17} fill={isSaved ? "currentColor" : "none"} /></button></div>
            <div><p className="event-card__date">{event.date}</p><h3>{event.title}</h3><p className="event-card__place"><MapPin size={14} /> {event.city} <span>·</span> {event.country}</p></div>
          </article>; })}
          {visibleEvents.length === 0 && <p className="col-span-full py-16 text-center text-[var(--ink-muted)]">No events match that search yet. Try a different place or filter.</p>}
        </div>
      </Reveal>
    </Container>
  </section>;
}
