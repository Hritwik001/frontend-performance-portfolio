import {
    BarChart3,
    CheckCircle2,
    Microscope,
    Package,
    Search,
    Zap,
} from "lucide-react";

export const processSteps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand the product, user workflows, and where performance pain is experienced.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    description:
      "Profile the application using React Profiler, Lighthouse, and browser performance tools.",
  },
  {
    icon: Microscope,
    title: "Investigate",
    description:
      "Identify rendering bottlenecks, expensive computations, and unnecessary re-renders.",
  },
  {
    icon: Zap,
    title: "Optimize",
    description:
      "Implement targeted React and Next.js optimizations with measurable impact.",
  },
  {
    icon: CheckCircle2,
    title: "Validate",
    description:
      "Verify improvements through before-and-after measurements and profiling.",
  },
  {
    icon: Package,
    title: "Deliver",
    description:
      "Ship optimized code with documentation and practical recommendations.",
  },
];
