import { Container } from "@/components/layout/Container";

export function Navbar() {
  return <header className="absolute inset-x-0 top-0 z-30 text-[var(--cream)]"><Container><nav className="flex h-24 items-center justify-between"><a href="#top" className="tango-logo text-xl">my tango <i>events</i></a><div className="hidden items-center gap-8 text-sm text-white/70 md:flex"><a href="#features">Discover</a><a href="#explore">Explore</a><a href="#organizers">For organizers</a><a href="#contact">About us</a></div><a href="#explore" className="rounded-full border border-white/30 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-[var(--wine-deep)]">Get the app</a></nav></Container></header>;
}
