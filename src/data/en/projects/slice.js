export default {
  id: "slice",
  order: 4,
  title: "Slice - Inventory & Fair Division",
  description: "Creation of a mobile app for dividing personal property in estates, featuring AI-assisted inventory, empathetic UX to ease every step of the process, and a fair division algorithm with notary-ready legal value.",
  tags: ["Mobile App", "0 to 1", "UX, UI, Product, Tech"],
  role: "Founder",
  year: "2026",
  impact: "Commercial launch + Notary endorsement",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/slice-hero.webp",
  heroImage: {
    src: "assets/projects/slice-hero.webp",
    label: "Split numerous belongings fairly"
  },

  sections: [
    {
      type: "text",
      title: "Context",
      content: "During an inheritance or divorce, dividing personal property all too often spirals into emotional conflicts due to messy spreadsheets and informal communication. Drawing from personal experience, I originally built this application for private family use. Given the unexpected enthusiasm and positive feedback, I decided to open it to a broader audience. **Slice** was born as an **impartial digital trusted third party** designed to defuse tension and bring peace of mind to this delicate life milestone."
    },
    {
      type: "text",
      title: "Methodology",
      content: "To build an impartial and legally robust platform, I conducted extensive interviews with families dealing with estate settlements, notaries, and auctioneers. This was followed by an end-to-end product cycle: wireframing, high-fidelity UI design, and full-stack software development paired with AI agents. The app is currently live on iOS and Android stores, showing healthy organic growth as active commercialization kicks off (October 2026)."
    },
    {
      type: "principles",
      title: "The 4 Experience Pillars",
      items: [
        {
          num: "01",
          layout: "split",
          title: "AI-Assisted Inventory",
          description: "Seamless UX paired with AI vision to ensure accurate, qualified, and exhaustive item data upon entry (image analysis, automated descriptions, and condition rating). Financial valuation is deliberately excluded from AI capabilities to prevent disputes and prioritize certified human expertise.",
          images: [
            { src: "assets/projects/slice-ia-1.webm", label: "Dynamic AI-assisted inventory logging" },
            { src: "assets/projects/slice-ia-2.webm", label: "Dynamic AI-assisted inventory logging" }
          ]
        },
        {
          num: "02",
          title: "Fair Division Algorithm",
          description: "A frictionless flow allowing beneficiaries to formulate their wishes anonymously, free from peer pressure. The fair division algorithm cross-references preferences to compute the most equitable allocation. When families seek financial equity, licensed auctioneers can submit indicative valuations directly within the application.",
          images: [
            { src: "assets/projects/slice-algo-1.webp", label: "Anonymized decision log view of the division" },
            { src: "assets/projects/slice-algo-2.webp", label: "End-user view of awarded items" }
          ]
        },
        {
          num: "03",
          title: "100% Offline Capability",
          description: "Engineered in Flutter/Hive, the application operates completely offline if inventory needs to be recorded without cellular reception in basements or attics.",
          images: [
            { src: "assets/projects/slice-offline-1.webp", label: "Technical architecture diagram of offline data consolidation" }
          ]
        },
        {
          num: "04",
          title: "Notary-Ready Export & Legal Value",
          description: "Automated generation of standardized summary reports directly usable by notary offices to formalize amicable settlement agreements and append them to estate deeds."
        }
      ]
    },
    {
      type: "results",
      title: "Impact & Results",
      items: [
        {
          highlight: "Idea-to-Launch Mastery",
          text: "End-to-end execution from initial spark (0 to 1) through full software and tech architecture."
        },
        {
          highlight: "Emotional UX",
          text: "Designing a sensitive service capable of defusing conflict and restoring peace during delicate life moments."
        },
        {
          highlight: "Notary Endorsement",
          text: "Now actively recommended and shared by legal and notary practices with their clients for amicable settlements."
        }
      ]
    },
    {
      type: "reflection",
      title: "Reflection & Learnings",
      content: "Carrying this 0 to 1 product from inception to launch, Slice confirmed that the deepest challenges lie in business logic modeling and compassionate UX for emotionally charged life moments. Undertaking this solo venture also reinforced my strong conviction in the power and leverage of cross-functional team collaboration, which would have saved precious time."
    }
  ]
};
