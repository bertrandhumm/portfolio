export default {
  id: "viamichelin",
  order: 1,
  title: "ViaMichelin",
  description: "Transforming Michelin's legacy navigation tool into a \"Slow Travel\" discovery ecosystem focused on regional discovery, local curation, and scenic routes.",
  tags: ["Product Strategy", "UX/UI", "Mobile & Web"],
  role: "Lead Product Designer",
  year: "2023 - 2025",
  impact: "Ratings 3.7 → 4.0 / Future-proof interface",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/viamichelin-hero.webp",
  heroImage: {
    src: "assets/projects/viamichelin-hero.webp",
    label: "ViaMichelin Interface — Slow Travel Ecosystem"
  },

  // Content Sections
  sections: [
    {
      type: "text",
      title: "Context",
      content: "ViaMichelin was losing hundreds of thousands of users each month due to an outdated utilitarian tool, legacy tech constraints, and an intrusive advertising model. Route calculation had become a bottleneck, failing to bridge the gap between inspiration and moving from A to B.\n\nThe strategic goal: transform the product into a \"Slow Travel\" discovery ecosystem centered on regional destinations and local Michelin curation, with a clear direction: **making the journey the start of the trip**."
    },
    {
      type: "text",
      title: "Methodology",
      content: "Over a 2.5-year engagement, the project kicked off with an in-depth discovery phase: quantitative data audit, user interviews with power users and occasional drivers, gap analysis, competitive benchmarking, and product vision alignment with the Product Owner, while carefully handling the brand equity of a heritage brand like Michelin.\n\nFollowing validation of early wireflows and interactive prototypes, delivery was structured in phases. I led a team of 3 product designers to deliver all screens, flows, and edge cases, syncing closely with a 15-developer engineering squad (internal and external) for over a year, followed by progressive market-by-market rollouts and continuous post-launch optimizations."
    },
    {
      type: "principles",
      title: "The 5 Design Principles",
      items: [
        {
          num: "01",
          title: "Surgical Route Search",
          description: "Data-driven research to pinpoint friction points in the legacy version and rethink a dynamic flow, aiming to surface varied and easily comparable route alternatives as fast as possible. This was ViaMichelin's core DNA and credibility needed to be restored to this core feature.",
          images: [
            { src: "assets/projects/viamichelin-iti-1.webp", label: "Route options" },
            { src: "assets/projects/viamichelin-iti-2.webp", label: "Results & comparator" }
          ]
        },
        {
          num: "02",
          title: "Exploration at the Heart of the Interface",
          description: "Every screen encourages exploring the territory. At destination, Michelin curation is showcased; along the road, the interface suggests alternative itineraries to discover scenic drives, hidden gems, or the best Michelin Guide recommendations.",
          images: [
            { src: "assets/projects/viamichelin-exploration-1.webp", label: "Stopover recommendation on A6" }
          ]
        },
        {
          num: "03",
          title: "Strategic Retention of Legacy Features",
          description: "A loyal cohort relies on ViaMichelin for unique capabilities (caravan mode, exact toll/fuel cost calculations, expense report data). These had to be preserved while seamlessly blending into the new paradigm. Legacy features didn't disappear — they integrated into a broader vision.",
          images: [
            { src: "assets/projects/viamichelin-legacy-1.webp", label: "Detailed cost breakdown" },
            { src: "assets/projects/viamichelin-legacy-2.webp", label: "The famous 'Caravan option'" },
            { src: "assets/projects/viamichelin-legacy-3.webp", label: "Live traffic updates" }
          ]
        },
        {
          num: "04",
          title: "Solving the Advertising Paradox",
          description: "Intrusive ads degraded the UX and hurt long-term adoption. I worked extensively on integrating non-disruptive native ads and contextual sponsorships. The real challenge wasn't technical or visual, but aligning stakeholders to move away from disruptive formats toward sustainable monetization.",
          images: [
            { src: "assets/projects/viamichelin-ads-1.webp", label: "Legacy display ad banner" },
            { src: "assets/projects/viamichelin-ads-2.webp", label: "Native ad within route list" },
            { src: "assets/projects/viamichelin-ads-3.webp", label: "Contextual Blablacar integration" }
          ]
        },
        {
          num: "05",
          title: "Design System from Scratch",
          description: "This redesign required building a 200+ component Design System from scratch, ensuring cross-team consistency and multi-platform delivery velocity under legacy constraints.",
          images: [
            { src: "assets/projects/viamichelin-ds-1.webp", label: "Design system - Utilities" },
            { src: "assets/projects/viamichelin-ds-2.webp", label: "Design system - Cards" },
            { src: "assets/projects/viamichelin-ds-3.webp", label: "Design system - POI icons" }
          ]
        }
      ]
    },
    {
      type: "results",
      title: "Results & Impact",
      items: [
        {
          highlight: "Successful Pivot",
          text: "Seamless transition and experience refinement despite expected friction from historical power users."
        },
        {
          highlight: "3.7 → 4.0 / 5",
          text: "Significant improvement in Play Store rating reflecting strong adoption of the new experience. Noticeably smoother on iOS."
        },
        {
          highlight: "New Markets",
          text: "Validation of the Slow Travel concept across key European markets like Italy."
        }
      ]
    },
    {
      type: "reflection",
      title: "Reflection & Learnings",
      content: "Looking back, the biggest takeaway was navigating the tension between old and new: preserving legacy features was vital for user trust, yet it slowed the rollout. A more phased launch — delivering visible quick wins before the full overhaul — could have minimized friction and allowed the new native advertising model more runway to prove its long-term ROI."
    }
  ]
};
