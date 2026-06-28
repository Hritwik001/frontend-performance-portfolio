export const caseStudies = [
  {
    title: "RevenuePulse",
    subtitle: "SaaS Revenue Analytics Dashboard",
    before: "2000ms",
    after: "140ms",
   summary:
    "Diagnosed rendering bottlenecks in a SaaS revenue analytics dashboard and optimized KPI rendering, charts, search, filtering and overall dashboard responsiveness using modern React performance techniques.",

    metrics: [
      "2000ms → 140ms",
       "React Profiler",
       "Dashboard Rendering",
    ],

    highlights: [
     "Identified unnecessary re-renders",
     "Optimized rendering pipeline",
     "Improved dashboard responsiveness",
    ],

    tags: ["React", "Next.js", "React Profiler", "useMemo", "useDeferredValue"],
  },


  {
    title: "SupportDesk",
    subtitle: "Ticketing Platform",
    before: "3675ms",
    after: "2.3ms",
    summary:
  "Investigated rendering issues in a React ticketing platform and optimized search, filtering, table rendering, pagination and large dataset performance.",
  metrics: [
  "3675ms → 2.3ms",
  "React Profiler",
  "Large Dataset Rendering",
],

highlights: [
  "Reduced rendering bottlenecks",
  "Optimized filtering pipeline",
  "Improved table responsiveness",
],
    tags: ["React", "Next.js", "Debounced Search", "Pagination", "Large Dataset"],
  },
];
