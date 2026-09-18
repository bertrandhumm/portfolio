export default {
  id: "viamichelin",
  order: 1,
  title: "ViaMichelin",
  description: "Transformation de l'outil de navigation historique Michelin en un écosystème \"Slow Travel\" axé sur la découverte du territoire, la curation locale et les itinéraires scéniques.",
  tags: ["Product Strategy", "UX/UI", "Mobile & Web"],
  role: "Lead Product Designer",
  year: "2023 - 2025",
  impact: "Ratings 3.7 → 4.0 / Interface future-proof",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/viamichelin-hero.webp",
  heroImage: {
    src: "assets/projects/viamichelin-hero.webp",
    label: "Interface ViaMichelin — Écosystème Slow Travel"
  },

  // Sections flexibles de contenu
  sections: [
    {
      type: "text",
      title: "Contexte",
      content: "ViaMichelin perdait des centaines de milliers d’utilisateurs chaque mois face à un outil de navigation utilitaire vieillissant, des contraintes legacy et un modèle publicitaire intrusif. La recherche d'itinéraire était devenue un bottleneck, incapable de lier naturellement inspiration et déplacement.\n\nL'objectif stratégique : transformer le produit en un écosystème de découverte \"Slow Travel\" centré sur les territoires et la curation locale Michelin, avec un cap clair : **faire du trajet le début du voyage**."
    },
    {
      type: "text",
      title: "Méthodologie",
      content: "Sur 2 ans et demi d'intervention, le projet a débuté par une phase intense de cadrage : audit quantitatif, interviews d'utilisateurs fidèles et occasionnels, gap analysis, benchmark concurrentiel et co-construction de la vision produit avec le Product Owner, tout en ménageant les enjeux d'une marque forte et très protégée comme Michelin.\n\nAprès la validation des premiers wireflows et prototypes interactifs, nous avons découpé le projet par lots. J'ai managé une équipe de 3 designers pour concevoir l'ensemble des parcours et edge cases, synchronisés au rythme d'une équipe de 15 développeurs (internes et externes) pendant plus d'un an, avant un déploiement progressif marché par marché et des phases d'optimisation continue post-lancement."
    },
    {
      type: "principles",
      title: "Les 5 Principes de Conception",
      items: [
        {
          num: "01",
          title: "Recherche d’itinéraire chirurgicale",
          description: "Recherche data-driven pour identifier les points de friction de l’ancienne version et repenser un flow plus dynamique, où l’objectif est d’atteindre le plus vite possible des propositions d’itinéraires variées et facilement comparables. C’était l’ADN de ViaMichelin et il fallait redonner du crédit à cette fonctionnalité.",
          images: [
            { src: "assets/projects/viamichelin-iti-1.webp", label: "Options d'itinéraire" },
            { src: "assets/projects/viamichelin-iti-2.webp", label: "Résultats & comparateur" }
          ]
        },
        {
          num: "02",
          title: "L’exploration au coeur de l’interface",
          description: "Tous les écrans encouragent à l’exploration du territoire. A destination, la curation Michelin est présentée et sur la route, l’interface propose des itinéraires alternatifs pour découvrir de belles routes, des lieux ou les meilleures adresses du Guide Michelin.",
          images: [
            { src: "assets/projects/viamichelin-exploration-1.webp", label: "Idée d'escale sur l'A6" }]
        },
        {
          num: "03",
          title: "Conservation stratégique des features historiques",
          description: "Une cohorte d’utilisateurs utilise ViaMichelin pour certaines fonctionnalités que les autres n’ont pas (mode caravane, coût précis du trajet, notes de frais). Il fallait donc les conserver mais les intégrer dans le nouveau paradigme et faire de l'amélioration du trajet leur fil conducteur. Les features historiques ne disparaissent pas — ils s'intègrent dans une vision plus large.",
          images: [
            { src: "assets/projects/viamichelin-legacy-1.webp", label: "Coûts détaillés" },
            { src: "assets/projects/viamichelin-legacy-2.webp", label: "La fameuse 'Option caravane'" },
            { src: "assets/projects/viamichelin-legacy-3.webp", label: "Informations trafic" }
          ]
        },
        {
          num: "04",
          title: "Résolution du problème des publicités",
          description: "Les ads bloquantes et intrusives dégradaient l'expérience et freinaient l'adoption. J'ai beaucoup travaillé à mieux intégrer les publicités avec des formats native ads et du sponsorship. Mais le vrai défi n'était pas technique ni design, il était plutôt de convaincre les stakeholders d'abandonner les formats bloquants au profit de formats moins intrusifs mais plus durables.",
          images: [
            { src: "assets/projects/viamichelin-ads-1.webp", label: "Exemple d'un pavé traditionnel de pub" },
            { src: "assets/projects/viamichelin-ads-2.webp", label: "Publicité native dans une liste" },
            { src: "assets/projects/viamichelin-ads-3.webp", label: "Publicité contextuelle pour Blablacar" }]
        },
        {
          num: "05",
          title: "Design System from scratch",
          description: "Ce redesign a nécessité la construction d'un Design System de 200+ composants from scratch, permettant la cohérence inter-équipes et la vélocité de livraison multi-plateforme sous contraintes legacy.",
          images: [
            { src: "assets/projects/viamichelin-ds-1.webp", label: "Design system - Utilities" },
            { src: "assets/projects/viamichelin-ds-2.webp", label: "Design system - Cartes" },
            { src: "assets/projects/viamichelin-ds-3.webp", label: "Design system - Points d'intérêts" }]
        }
      ]
    },
    {
      type: "results",
      title: "Résultats & Impact",
      items: [
        {
          highlight: "Pivot Réussi",
          text: "Migration et ajustement de l'expérience malgré l'inévitable résistance au changement des utilisateurs historiques."
        },
        {
          highlight: "3.7 → 4.0 / 5",
          text: "Progression notable du Play Store Rating reflétant l'adoption nette de la nouvelle expérience. Plus léger sur iOS"
        },
        {
          highlight: "Nouveaux Marchés",
          text: "Succès du nouveau concept de Slow Travel validé sur des marchés clés comme l’Italie."
        }
      ]
    },
    {
      type: "reflection",
      title: "Réflexion & Enseignements",
      content: "Avec du recul, la plus grande leçon est la tension entre ancien et nouveau : préserver les features historiques était essentiel pour la confiance des utilisateurs, mais cela a ralenti la bascule. Un découpage en phases plus marquées — avec des quick wins visibles avant la refonte complète — aurait peut-être réduit la friction de la transition et faciliter la transition vers un modèle publicitaire moins intrusif qui a eu besoin de temps pour montrer son potentiel."
    }
  ]
};
