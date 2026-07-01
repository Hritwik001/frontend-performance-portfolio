import { processSteps } from "./processData";
import { ProcessStep } from "./ProcessStep";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessTimeline() {
  return (
    <div className="mx-auto mt-14 max-w-3xl">
      {processSteps.map((step, index) => (
        <Reveal key={step.title} delay={index * 90}>
          <ProcessStep
            icon={step.icon}
            title={step.title}
            description={step.description}
            isLast={index === processSteps.length - 1}
          />
        </Reveal>
      ))}
    </div>
  );
}
