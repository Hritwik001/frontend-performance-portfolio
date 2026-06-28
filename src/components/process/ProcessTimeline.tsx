import { processSteps } from "./processData";
import { ProcessStep } from "./ProcessStep";

export function ProcessTimeline() {
  return (
    <div className="mx-auto mt-14 max-w-3xl">
      {processSteps.map((step, index) => (
        <ProcessStep
          key={step.title}
          icon={step.icon}
          title={step.title}
          description={step.description}
          isLast={index === processSteps.length - 1}
        />
      ))}
    </div>
  );
}
