import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A structured approach to frontend performance."
          description="Every optimization starts with measurement, not assumptions. The goal is to find the highest-impact bottlenecks, fix them carefully, and validate the improvement with real performance data."
          align="center"
        />

        <ProcessTimeline />
      </Container>
    </Section>
  );
}
