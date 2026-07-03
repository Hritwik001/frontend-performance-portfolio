export type CaseStudyMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      label: string;
      caption: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      label: string;
      caption: string;
    };

export type CaseStudyLink = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type PerformanceMetrics = {
  before: string;
  after: string;
  barPercent: number;
  note: string;
};

export type CaseStudyBreakdownItem = {
  label: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  performance?: PerformanceMetrics;
  breakdown: CaseStudyBreakdownItem[];
  media: CaseStudyMedia[];
  links: CaseStudyLink[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "kitchenflow",
    eyebrow: "Product Engineering",
    title: "KitchenFlow",
    subtitle: "Kitchen Operations Dashboard",
    summary:
      "A full kitchen operations command center built from scratch — a live ticket board across four service lanes, station load intelligence, a chef crew board, and a service-analytics layer, all wired into one shared live state.",
    breakdown: [
      {
        label: "Challenge",
        body: "Kitchens are typically run on paper tickets and memory. The goal was to give a kitchen the same clarity a manager gets from a SaaS dashboard: live, legible, and uncluttered, without adding another screen to operate.",
      },
      {
        label: "Build",
        body: "Built in Next.js App Router and TypeScript: a live ticket board (New → Fire → Plating → Ready), a ticket detail panel, station load and chef ownership views, and a service intelligence panel, all driven by shared React state and a lightweight motion layer.",
      },
      {
        label: "Outcome",
        body: "A six-module command center — Command, Intake, Prep, Inventory, Insights, and Crew — built as a single connected product rather than a series of separate screens.",
      },
    ],
    media: [
      {
        type: "video",
        src: "/videos/kitchenflow-demo.mp4",
        poster: "/images/kitchenflow/dashboard.png",
        label: "Product Walkthrough",
        caption: "Live ticket board, ticket detail panel, and module navigation in action.",
      },
      {
        type: "image",
        src: "/images/kitchenflow/dashboard.png",
        alt: "KitchenFlow command board with live ticket lanes and ticket detail panel",
        label: "Command Board",
        caption: "New, Fire, Plating, and Ready lanes with a focused ticket detail panel.",
      },
      {
        type: "image",
        src: "/images/kitchenflow/insights.png",
        alt: "KitchenFlow insights view with service analytics",
        label: "Service Insights",
        caption: "Completion counts, average ticket time, and risk signals for the service.",
      },
      {
        type: "image",
        src: "/images/kitchenflow/crew.png",
        alt: "KitchenFlow crew view with station controls and chef board",
        label: "Crew & Station Controls",
        caption: "Station load, ownership, and live readiness across the kitchen crew.",
      },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://kitchen-flow-liard.vercel.app",
        variant: "primary",
      },
      {
        label: "View on GitHub",
        href: "https://github.com/Hritwik001/KitchenFlow",
        variant: "secondary",
      },
      {
        label: "Product Case Study (PDF)",
        href: "/case-studies/KitchenFlow_Product_Case_Study.pdf",
        variant: "secondary",
      },
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Product UI Engineering"],
  },
  {
    slug: "revenuepulse",
    eyebrow: "Performance Case Study",
    title: "RevenuePulse",
    subtitle: "SaaS Revenue Analytics Dashboard",
    summary:
      "A React and Next.js revenue analytics dashboard with delayed KPI rendering, slow chart loading, laggy subscription search, slow plan filtering, and heavy dashboard refresh behavior.",
    performance: {
      before: "2000ms",
      after: "140ms",
      barPercent: 92,
      note: "React Profiler validated a significant render-time reduction after optimization.",
    },
    breakdown: [
      {
        label: "Problem",
        body: "Slow KPI loading, delayed revenue charts, laggy search, slow filters, and sluggish dashboard refresh.",
      },
      {
        label: "Optimization",
        body: "Removed artificial delays, memoized revenue calculations, optimized search/filtering, and reduced table rendering.",
      },
      {
        label: "Result",
        body: "Render time improved from 2000ms to 140ms with smoother dashboard interactions.",
      },
    ],
    media: [
      {
        type: "image",
        src: "/images/revenuepulse/dashboard.png",
        alt: "RevenuePulse dashboard screenshot",
        label: "Application Dashboard",
        caption: "Revenue dashboard after performance optimization.",
      },
      {
        type: "image",
        src: "/images/revenuepulse/profiler.png",
        alt: "RevenuePulse optimized React Profiler screenshot",
        label: "React Profiler Analysis",
        caption: "Optimized React Profiler capture showing reduced render time.",
      },
    ],
    links: [
      {
        label: "After Optimization",
        href: "https://drive.google.com/file/d/1GBauEmln7Z4Mu3KuQSTaLvDPmEOv8Hu7/view?usp=sharing",
        variant: "primary",
      },
      {
        label: "Before Optimization",
        href: "https://drive.google.com/file/d/11qBFfqrGdqf8lOB6x7Zv5_Jra0xtASor/view?usp=sharing",
        variant: "secondary",
      },
      {
        label: "Technical Case Study",
        href: "/case-studies/RevenuePulse_Performance_Case_Study.pdf",
        variant: "secondary",
      },
    ],
    tags: ["React", "Next.js", "React Profiler", "useMemo", "useDeferredValue"],
  },
  {
    slug: "supportdesk",
    eyebrow: "Performance Case Study",
    title: "SupportDesk",
    subtitle: "Enterprise Ticketing Platform",
    summary:
      "A React and Next.js ticketing dashboard with laggy search, slow filters, heavy rendering, expensive ticket processing, and poor responsiveness across a 10,000-ticket dataset.",
    performance: {
      before: "3675ms",
      after: "2.3ms",
      barPercent: 98,
      note: "React Profiler validated a dramatic render-time reduction after optimization.",
    },
    breakdown: [
      {
        label: "Problem",
        body: "Laggy search, slow filters, heavy rendering, expensive ticket processing, and poor responsiveness.",
      },
      {
        label: "Optimization",
        body: "Memoized dataset generation, optimized filtering, added debounced search, deferred updates, and pagination.",
      },
      {
        label: "Result",
        body: "Render time improved from 3675ms to 2.3ms with smoother search, filtering, and table interactions.",
      },
    ],
    media: [
      {
        type: "image",
        src: "/images/supportdesk/dashboard.png",
        alt: "SupportDesk dashboard screenshot",
        label: "SupportDesk Dashboard",
        caption: "Ticketing dashboard after performance optimization.",
      },
      {
        type: "image",
        src: "/images/supportdesk/profiler.png",
        alt: "SupportDesk optimized React Profiler screenshot",
        label: "React Profiler Analysis",
        caption: "Optimized React Profiler capture showing reduced render time.",
      },
    ],
    links: [
      {
        label: "After Optimization",
        href: "https://drive.google.com/file/d/1XurDFOQUs8Hdh220oKKPE6IaVcbgg4Yp/view?usp=sharing",
        variant: "primary",
      },
      {
        label: "Before Optimization",
        href: "https://drive.google.com/file/d/1NqHumYcf0cJX6y-LKTih93OrfBIqAekC/view?usp=sharing",
        variant: "secondary",
      },
      {
        label: "Technical Case Study",
        href: "/case-studies/SupportDesk_Performance_Case_Study.pdf",
        variant: "secondary",
      },
    ],
    tags: ["React", "Next.js", "Debounced Search", "Pagination", "Large Dataset"],
  },
];
