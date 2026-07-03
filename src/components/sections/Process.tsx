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
          title="A structured approach to building — and fixing — frontend products."
          description="The same process applies whether the work is a new product surface or a performance turnaround: understand the problem, build deliberately, measure the result, and ship with evidence."
          align="center"
        />

        <ProcessTimeline />
      </Container>
    </Section>
  );
}
