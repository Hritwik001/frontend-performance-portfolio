import {
    BarChart3,
    Code2,
    Layers,
    Package,
    Search,
    Zap,
} from "lucide-react";

export const processSteps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand the product, the users, and the constraints — before any code gets written.",
  },
  {
    icon: Layers,
    title: "Architect",
    description:
      "Plan the component structure, state model, and data flow so the interface stays maintainable as it grows.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "Implement the UI with clean, typed, reusable components — the same discipline for a new product or an existing one.",
  },
  {
    icon: BarChart3,
    title: "Measure",
    description:
      "Profile real usage with React Profiler, Lighthouse, and browser performance tools instead of guessing.",
  },
  {
    icon: Zap,
    title: "Optimize",
    description:
      "Fix the highest-impact issues first — rendering, re-renders, bundle weight, interaction latency.",
  },
  {
    icon: Package,
    title: "Ship",
    description:
      "Deliver documented, production-ready code, with before/after evidence for anything measured.",
  },
];
