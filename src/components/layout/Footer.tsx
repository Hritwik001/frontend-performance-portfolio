import { Container } from "@/components/layout/Container";

export function Footer() {
  return <footer id="contact" className="bg-[var(--wine-deep)] py-14 text-[var(--cream)]">
    <Container><div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"><div><p className="tango-logo text-3xl">my tango <i>events</i></p><p className="mt-4 max-w-sm leading-7 text-white/60">A better way to discover the places, people, and moments that make tango feel like tango.</p></div><nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70"><a href="#features">Discover</a><a href="#organizers">For organizers</a><a href="#">About</a><a href="#">FAQ</a><a href="#">Privacy</a><a href="#">Terms</a></nav></div><div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© 2026 My Tango Events. A concept website.</span><span>Made with a little more feeling.</span></div></Container>
  </footer>;
}
