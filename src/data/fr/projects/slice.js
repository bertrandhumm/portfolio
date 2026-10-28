export default {
  id: "slice",
  order: 4,
  title: "Slice — Inventaire et partage",
  description: "Création d'une application de partage de biens meubles dans une succession avec un inventaire assisté par l'IA, une UX fluide pour dédramatiser toutes les étapes du processus et un algorithme de partage équitable exploitable en études notariales.",
  tags: ["Mobile App", "0 to 1", "UX, UI, Product, Tech"],
  role: "Founder",
  year: "2026",
  impact: "Lancement commercial + Notaires",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/slice-hero.webp",
  heroImage: {
    src: "assets/projects/slice-hero.webp",
    label: "Partagez un grand nombre d'objets équitablement"
  },

  sections: [
    {
      type: "text",
      title: "Contexte",
      content: "Lors d'une succession ou d'un divorce, le partage des biens matériels vire trop souvent au conflit émotionnel face au manque de traçabilité des tableurs et échanges informels. Fort d'une expérience personnelle, j'ai initialement conçu cette application pour un usage privé. Face à l'engouement inattendu et aux retours enthousiastes de mon entourage, j'ai décidé de la proposer au plus grand nombre. **Slice** est né en tant que **tiers de confiance numérique impartial** pour dédramatiser et apaiser cette étape délicate des successions."
    },
    {
      type: "text",
      title: "Méthodologie",
      content: "Pour concevoir un outil juste et juridiquement robuste, j'ai mené des dizaines d'interviews auprès de familles confrontées à des successions, de notaires et de commissaires-priseurs. S'en est suivi un cycle complet : wireframing, UI design haute-fidélité, puis développement de l'application en binôme avec des agents IA. L'application est aujourd'hui en ligne sur les stores et l'usage grandit de façon organique alors que sa commercialisation active démarre (octobre 2026)."
    },
    {
      type: "principles",
      title: "Les 4 piliers de l'expérience",
      items: [
        {
          num: "01",
          layout: "split",
          title: "Inventaire assisté par IA",
          description: "Une UX fluide combinée à l'IA pour garantir une donnée qualifiée, précise et exhaustive dès la saisie (analyse d'image, description automatique et évaluation de l'état). L'estimation financière a été volontairement écartée de l'IA pour éviter les contestations et privilégier une expertise humaine.",
          images: [
            { src: "assets/projects/slice-ia-1.webm", label: "Inventaire dynamique assisté par IA" },
            { src: "assets/projects/slice-ia-2.webm", label: "Inventaire dynamique assisté par IA" }
          ]
        },
        {
          num: "02",
          title: "Algorithme d'équité",
          description: "Un parcours fluide pour que chaque participant formule ses choix en tout anonymat, sans pression sociale. L'algorithme d'équité croise ensuite ces préférences pour calculer la répartition la plus juste. Lorsque les héritiers souhaitent une équité financière, des commissaires-priseurs peuvent donner une valorisation indicative des objets directement dans l'application.",
          images: [
            { src: "assets/projects/slice-algo-1.webp", label: "Vue anonymisée d'une partie de log de décision de partage" },
            { src: "assets/projects/slice-algo-2.webp", label: "Vue utilisateur des objets attribués au participant" }
          ]
        },
        {
          num: "03",
          title: "Fonctionnement 100 % offline",
          description: "Développée en Flutter/Hive, l'application fonctionne parfaitement hors ligne si l'inventaire doit être fait sans réseau, à la cave ou au grenier par exemple.",
          images: [
            { src: "assets/projects/slice-offline-1.webp", label: "Diagramme technique résumant la stratégie de consolidation offline" }
          ]
        },
        {
          num: "04",
          title: "Export notarial & valeur juridique",
          description: "Génération automatisée d'un rapport récapitulatif normé, directement exploitable par les études notariales pour valider l'acte de partage amiable et l'annexer au dossier de succession."
        }
      ]
    },
    {
      type: "results",
      title: "Impact & Résultats",
      items: [
        {
          highlight: "Maîtrise Idea-to-Launch",
          text: "Capacité à porter un produit de l'intuition initiale (0 to 1) jusqu'à l'architecture technique complète."
        },
        {
          highlight: "UX Émotionnelle",
          text: "Design d'un service capable de désamorcer les tensions et d'apaiser des moments de vie délicats."
        },
        {
          highlight: "Prescription notariale",
          text: "Produit désormais recommandé et présenté par certaines études notariales à leurs clients lors de partages amiables."
        }
      ]
    },
    {
      type: "reflection",
      title: "Réflexion & Enseignements",
      content: "En portant ce projet de bout en bout (0 to 1), Slice m'a prouvé que les plus grands défis de conception résident dans la modélisation de la logique métier et l'apaisement de la charge émotionnelle des utilisateurs à travers une UX au service de l'humain. Mené en solo, ce projet a également renforcé ma conviction quant à la richesse et la force du travail en équipe pluridisciplinaire, qui m'aurait ici fait gagner un temps précieux."
    }
  ]
};