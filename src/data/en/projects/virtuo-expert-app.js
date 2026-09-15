export default {
  id: "virtuo-expert-app",
  order: 3,
  title: "Virtuo Expert App",
  description: "Redesign of the mobile app used by hundreds of field operators across 6 European countries, delivering one-handed ergonomics, modular missions, and an on-demand mission marketplace.",
  tags: ["Mobile App", "Power users", "UX Research"],
  role: "UX Designer",
  year: "2019 - 2020",
  impact: "Error reduction / Boosted NPS",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/virtuo-expertapp-hero.webp",
  heroImage: {
    src: "assets/projects/virtuo-expertapp-hero.webp",
    label: "New Virtuo Expert app interface"
  },

  sections: [
    {
      type: "text",
      title: "Context",
      content: "At its peak, Virtuo operated a fleet of 5,000+ vehicles across 30+ European cities (6 countries), serviced daily by hundreds of on-the-ground field experts and transporters. The dedicated mobile app hadn't evolved in 2 years, causing daily errors and operational frustration that bottlenecked fleet growth and new team onboarding."
    },
    {
      type: "text",
      title: "Methodology",
      content: "Field immersion through on-site shadowing and contextual interviews with operators during their daily routines. The methodology combined regular stakeholder alignments, user testing sessions conducted directly on-site in underground parking lots, and a structured handover to the UI designer at the end of the project for final asset delivery."
    },
    {
      type: "principles",
      title: "The 4 Design Principles",
      items: [
        {
          num: "01",
          title: "Modular Mission Architecture",
          description: "Historically, only two rigid mission types existed. As operations diversified, this simplistic model hindered daily workflows. I redesigned missions around a modular architecture that allows dispatch teams to handle ad-hoc, complex scenarios while preserving frictionless execution for daily cleaning and vehicle transfer jobs.",
          images: [
            { src: "assets/projects/virtuo-expertapp-modularity-1.webp", label: "Detailed breakdown of mission components" },
            { src: "assets/projects/virtuo-expertapp-modularity-2.webp", label: "New nomenclature for intervention types and modular blocks" }
          ]
        },
        {
          num: "02",
          title: "One-Handed Ergonomics",
          description: "Field operators need to move fast and keep one hand free to unlock, inspect, and handle equipment. The interface and micro-interactions were designed to be as effortless as possible for both right- and left-handed users — zero unnecessary gestures, zero roadblocks.",
          images: [
            { src: "assets/projects/virtuo-expertapp-simplicity-1.webp", label: "Quick actions via swipe gestures" },
            { src: "assets/projects/virtuo-expertapp-simplicity-2.webp", label: "Timeline view with generous tap targets" }
          ]
        },
        {
          num: "03",
          title: "Super User Modes",
          description: "The 'one operator = one screen' model collapsed with operational diversification. I redesigned permissions and views to cater to different operational profiles: standard preparator, jockey/transporter, and station lead. Each role gets dedicated flows and tailored access.",
          images: [
            { src: "assets/projects/virtuo-expertapp-superuser-3.webp", label: "Team tracking and vehicle prep mission monitoring" }
          ]
        },
        {
          num: "04",
          title: "The Pool",
          description: "Recurring missions are dispatched automatically. For urgent tasks and ad-hoc jobs, I designed an on-demand task marketplace ('The Pool') where field operators can claim extra missions based on proximity and real-time availability.",
          images: [
            {
              src: "assets/projects/virtuo-expertapp-pool-1.webp", label: "Calendar and 'Pool' view allowing operators to accept extra missions"
            }
          ]
        }
      ]
    },
    {
      type: "bento",
      title: "Field Usability Testing & Rollout",
      content: "Final validation on clickable lofi prototypes tested on mobile to verify messaging clarity, offline state resilience, and error handling, followed by a phased module-by-module rollout to smooth the operational transition.",
      images: [
        { src: "assets/projects/virtuo-expertapp-test-1.webp", label: "Usability testing on lofi prototypes under real conditions" },
        { src: "assets/projects/virtuo-expertapp-test-2.webp", label: "Design and validation of error handling & offline states" }
      ]
    },
    {
      type: "results",
      title: "Results & Impact",
      items: [
        {
          highlight: "NPS +28 pts",
          text: "Field expert satisfaction surged, rising from a score of 6/10 to 8.5/10."
        },
        {
          highlight: "-11%",
          text: "Decrease in vehicle transfer and delivery errors over 30 days."
        },
        {
          highlight: "+35%",
          text: "Increase in accessory fulfillment (snow chains, baby seats, etc.)."
        }
      ]
    },
    {
      type: "reflection",
      title: "Reflection & Learnings",
      content: "In retrospect, we should have broken the project into smaller incremental milestones rather than a comprehensive overhaul from the ground up: a more phased rollout with smaller deliverables would have accelerated production delivery."
    }
  ]
};
