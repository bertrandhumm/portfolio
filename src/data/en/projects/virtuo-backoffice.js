export default {
  id: "virtuo-backoffice",
  order: 2,
  title: "Virtuo Back Office",
  description: "Complete overhaul of a mission-critical operational tool supervising 5,000+ vehicles across 30+ European cities with a new 'Dashboard as a pivot' architecture, contextual slide-over drawers, and GDPR compliance.",
  tags: ["Service Design", "Back Office", "B2B"],
  role: "UX Designer",
  year: "2020 - 2021",
  impact: "Seamless navigation / High productivity gains",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/virtuo-backoffice-hero.webp",
  heroImage: {
    src: "assets/projects/virtuo-backoffice-hero.webp",
    label: "Virtuo Back Office Wireframes"
  },

  sections: [
    {
      type: "text",
      title: "Context",
      content: "Virtuo's back office centralized the management of a 100% connected fleet of over 5,000+ vehicles across 30+ European cities. Built piece-by-piece since the startup's inception, the system had become an unstable, fragmented patchwork.\n\nOps teams faced severe daily friction: data fragmentation across Looker and the BO, compulsive multi-tabbing, lack of saved filters, and critical GDPR compliance gaps."
    },
    {
      type: "text",
      title: "Methodology",
      content: "I conducted a deep-dive audit combining extensive qualitative interviews and workshops with Ops and Tech teams, backed by database pagetree mapping and competitive benchmarking.\n\nThe diagnostic highlighted the core operational tension: balancing a high-level bird's eye view of the fleet with surgical micro-management of individual vehicles and incidents.\n\nTo ensure swift delivery, design was structured across 4 iterative wireframing sprints aligned with weekly three-way sign-off reviews (Product Manager, Tech Lead, and Ops Teams)."
    },
    {
      type: "principles",
      title: "The 3 Design Principles",
      items: [
        {
          num: "01",
          title: "The « Dashboard as a Pivot » & Nested Contextual Drawers",
          description: "I proposed repositioning the back office as the operational source of truth to reduce reliance on Looker in daily workflows. To eliminate compulsive multi-tabbing, the macro fleet view remains anchored in the background while contextual slide-over drawers cascade on the right to inspect vehicles and trigger actions without losing context.",
          images: [
            { src: "assets/projects/virtuo-backoffice-pivot-1.webp", label: "Compact fleet overview layout" },
            { src: "assets/projects/virtuo-backoffice-pivot-2.webp", label: "First drawer (vehicle record & telematics)" },
            { src: "assets/projects/virtuo-backoffice-pivot-3.webp", label: "Second nested drawer for scheduled maintenance" }
          ]
        },
        {
          num: "02",
          title: "Occupancy Timeline & Granular Filters",
          description: "Designed a high-density Gantt timeline displaying real-time vehicle availability (day, week, month, peak holiday departures). Paired with granular, savable filter presets (by country, metro area, station, and vehicle status) to ensure critical alerts never slip through the cracks.",
          images: [
            { src: "assets/projects/virtuo-backoffice-timeline-1.webp", label: "Synthesized car lifecycle view" },
            { src: "assets/projects/virtuo-backoffice-filters-1.webp", label: "Granular status nomenclature management" }
          ]
        },
        {
          num: "03",
          title: "Advanced Permissions & GDPR Partitioning",
          description: "Complete redesign of the Role-Based Access Control (RBAC) model. Sensitive customer data (driver's licenses, IDs, contact details), previously accessible company-wide without restriction, were strictly compartmentalized to meet GDPR compliance requirements and restricted to authorized personnel.",
          images: [
            { src: "assets/projects/virtuo-backoffice-grpd-1.webp", label: "Granular access rights and permission requests" }
          ]
        }
      ]
    },
    {
      type: "results",
      title: "Results & Impact",
      items: [
        {
          highlight: "Single Source of Truth",
          text: "Seamless alignment of the BO as the primary operations tool and refocusing of Looker exclusively on BI."
        },
        {
          highlight: "Single-Tab Workflow",
          text: "Complete eradication of multi-tab clutter thanks to slide-over contextual side panels."
        },
        {
          highlight: "-40% Ops Handling Time*",
          text: "Self-reported at +1Y by Virtuo. Massive efficiency gain on fleet incident handling and field guidance."
        }
      ]
    },
    {
      type: "reflection",
      title: "Reflection & Learnings",
      content: "This project proved that back-office design is fundamentally about information architecture and system dynamics. The extensive hours of workshops with Ops teams were crucial to understanding their real needs and the fundamental tension between the macro bird's eye view and surgical micro-management, which ensured immediate adoption across 30+ European cities."
    }
  ]
};
