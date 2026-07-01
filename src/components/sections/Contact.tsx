import { Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal className="motion-card rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center shadow-2xl shadow-black/30 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_60px_rgba(245,197,66,0.10)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Need help making your React or Next.js application feel faster?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--text-secondary)]">
            I’m available for frontend performance audits, optimization sprints, and React / Next.js
            performance-focused engineering work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:hritwiktiwary001@gmail.com">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/hritwik-tiwary/" target="_blank" rel="noreferrer">
              <Button variant="secondary">LinkedIn</Button>
            </a>

            <a href="https://github.com/Hritwik001" target="_blank" rel="noreferrer">
              <Button variant="secondary">GitHub</Button>
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
