import { CaseStudyArticle } from "@/components/case-studies/CaseStudyArticle";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Frontend engineering, shown through the work itself."
          description="Three products built from the ground up, and two documented performance turnarounds — the same engineering discipline applied to building and to fixing."
        />

        <div className="mt-16 space-y-10">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 120}>
              <CaseStudyArticle study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
