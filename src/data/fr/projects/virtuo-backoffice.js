export default {
  id: "virtuo-backoffice",
  order: 2,
  title: "Virtuo Back Office",
  description: "Refonte globale d'un outil métier critique supervisant 5 000+ véhicules sur 30+ villes européennes avec une nouvelle architecture 'Dashboard as a pivot', une logique de tiroirs contextuels et mise en conformité RGPD.",
  tags: ["Service Design", "Back Office", "B2B"],
  role: "UX Designer",
  year: "2020 - 2021",
  impact: "Navigation fluide / Gains de productivité",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/virtuo-backoffice-hero.webp",
  heroImage: {
    src: "assets/projects/virtuo-backoffice-hero.webp",
    label: "Wireframes Back Office Virtuo"
  },

  sections: [
    {
      type: "text",
      title: "Contexte",
      content: "Le back-office de Virtuo centralisait la gestion d'une flotte 100% connectée de plus de 5 000+ véhicules répartis sur 30+ villes européennes. Construit brique par brique depuis les débuts de la startup, le système était devenu un patchwork lourd et instable.\n\nLes équipes Ops faisaient face à de lourdes frictions : dispersion des données entre Looker et le BO, multi-tabbing compulsif, absence de filtres enregistrables et failles critiques de conformité RGPD."
    },
    {
      type: "text",
      title: "Méthodologie",
      content: "J'ai mené un audit approfondi combinant de nombreux entretiens qualitatifs et workshops avec les équipes Ops et Tech, complété par une cartographie de l'arborescence et un benchmark sectoriel.\n\nCe diagnostic a révélé la tension fondamentale du métier : la nécessité d'une vision macro (« bird eye view » de la flotte et du taux d'occupation) couplée à un micro-management chirurgical (véhicule ou incident précis).\n\nPour sécuriser la livraison, nous avons structuré la conception en 4 sprints de wireframing itératif rythmés par des validations hebdomadaires à trois voix (Product Manager, Tech Lead et Ops Teams)."
    },
    {
      type: "principles",
      title: "Les 3 Principes de Conception",
      items: [
        {
          num: "01",
          title: "Le « Dashboard as a Pivot » & Tiroirs contextuels imbriqués",
          description: "J'ai proposé de repositionner le back office comme source de vérité opérationnelle pour limiter le recours à Looker dans le travail quotidien. Pour éliminer le multi-tabbing compulsif, la vue macro de la flotte reste ancrée en arrière-plan pendant que des tiroirs contextuels (Slide-over Drawers) s'ouvrent en cascade à droite pour inspecter un véhicule et déclencher une action sans quitter son contexte.",
          images: [
            { src: "assets/projects/virtuo-backoffice-pivot-1.webp", label: "Affichage compact pour revue rapide de la flotte" },
            { src: "assets/projects/virtuo-backoffice-pivot-2.webp", label: "Premier tiroir de détail (fiche véhicule & télématique)" },
            { src: "assets/projects/virtuo-backoffice-pivot-3.webp", label: "Second panneau imbriqué pour gérer une intervention programmée" }
          ]
        },
        {
          num: "02",
          title: "Timeline d'occupation & Filtres granulaires",
          description: "Conception d'une vue Gantt temporelle haute densité intégrant la disponibilité par véhicule (jour, semaine, mois, départs en vacances). Elle s'accompagne d'un système de filtres granulaires et enregistrables (par pays, agglomération, station et statut) évitant que des données critiques ne passent entre les mailles du filet.",
          images: [
            { src: "assets/projects/virtuo-backoffice-timeline-1.webp", label: "Vue synthétique du cycle de vie de la voiture" },
            { src: "assets/projects/virtuo-backoffice-filters-1.webp", label: "Gestion fine de la nomenclature" }
          ]
        },
        {
          num: "03",
          title: "Permissions avancées & Cloisonnement RGPD",
          description: "Refonte complète du système de rôles et de permissions (RBAC). Les données sensibles des clients (permis de conduire, cartes d'identité, coordonnées), initialement accessibles à l'ensemble des utilisateurs du BO sans restriction, ont été strictement cloisonnées pour répondre aux exigences réglementaires RGPD, limitant l'accès aux seules personnes habilitées.",
          images: [
            { src: "assets/projects/virtuo-backoffice-grpd-1.webp", label: "Gestion fine des droits et des demandes d'accès" }
          ]
        }
      ]
    },
    {
      type: "results",
      title: "Résultats & Impact",
      items: [
        {
          highlight: "Single Source of Truth",
          text: "Alignement parfait du BO comme unique outil opérationnel et recentrage de Looker sur la BI."
        },
        {
          highlight: "1 seul tab ouvert",
          text: "Suppression totale de la dispersion en onglets grâce aux panneaux contextuels latéraux."
        },
        {
          highlight: "-40% Temps Ops*",
          text: "Déclaré à +1Y par Virtuo. Gain d'efficacité massif sur le traitement des incidents de flotte et le guidage des équipes."
        }
      ]
    },
    {
      type: "reflection",
      title: "Réflexion & Enseignements",
      content: "Ce projet a été une démonstration majeure que le design de back-office est avant tout de l'architecture d'information et de la logique système. Les nombreuses heures de workshops avec les équipes Ops ont été cruciales pour comprendre leurs besoins réels et la tension fondamentale entre la vue macro (bird eye view) et le micro-management chirurgical, clé de l'adoption immédiate sur 30+ villes européennes."
    }
  ]
};
