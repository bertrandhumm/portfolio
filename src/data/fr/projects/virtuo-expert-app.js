export default {
  id: "virtuo-expert-app",
  order: 3,
  title: "Virtuo Expert App",
  description: "Refonte de l'application mobile utilisée par des centaines de préparateurs dans 6 pays européens pour proposer une ergonomie main libre, des missions modulaires et une \"marketplace\" de missions.",
  tags: ["Mobile App", "Power users", "UX Research"],
  role: "UX Designer",
  year: "2019 - 2020",
  impact: "Réduction des erreurs / NPS amélioré",

  // Thumbnail Home & Hero Cover Image
  thumbnail: "assets/projects/virtuo-expertapp-hero.webp",
  heroImage: {
    src: "assets/projects/virtuo-expertapp-hero.webp",
    label: "Nouveaux écrans de l'app Virtuo Expert"
  },

  sections: [
    {
      type: "text",
      title: "Contexte",
      content: "Au maximum, Virtuo opérait une flotte de 5 000+ véhicules sur 30+ villes européennes (6 pays), gérée par des centaines de préparateurs et convoyeurs sur le terrain. L'application dédiée n'avait pas évolué depuis 2 ans : elle générait des erreurs quotidiennes et des frustrations qui freinaient l'expansion de la flotte et le recrutement de nouveaux experts."
    },
    {
      type: "text",
      title: "Méthodologie",
      content: "Immersion terrain par shadowing et interviews de préparateurs dans leur quotidien. La méthodologie a alterné des points de cadrage réguliers avec les stakeholders, des sessions de tests utilisateurs menées directement en conditions réelles dans des parkings souterrains, et un handover soigné au UI designer en fin de projet pour la production des composants finaux."
    },
    {
      type: "principles",
      title: "Les 4 Principes de Conception",
      items: [
        {
          num: "01",
          title: "Conception modulaire des missions",
          description: "Historiquement, seuls deux types de missions existaient. L'activité s'est diversifiée et ce découpage simpliste bloquait le quotidien des utilisateurs. J'ai repensé les missions comme une architecture modulaire qui permet aux équipes d'adresser des besoins ponctuels et complexes, tout en gardant la fluidité des missions de préparation et de convoyages du quotidien.",
          images: [
            { src: "assets/projects/virtuo-expertapp-modularity-1.webp", label: "Vue détaillée des différentes briques" },
            { src: "assets/projects/virtuo-expertapp-modularity-2.webp", label: "Nouvelle nomenclature des types d'interventions et des briques utilisées" }
          ]
        },
        {
          num: "02",
          title: "Main libre",
          description: "Un préparateur doit aller vite et garder une main libre pour déverrouiller, vérifier, manipuler. L'interface et les interactions ont été pensées pour que l'utilisation soit aussi fluide que possible pour droitiers comme gauchers — zéro geste superflu, zéro blocage.",
          images: [
            { src: "assets/projects/virtuo-expertapp-simplicity-1.webp", label: "Actions rapides avec des swipes" },
            { src: "assets/projects/virtuo-expertapp-simplicity-2.webp", label: "Vue timeline avec larges tap areas" }
          ]
        },
        {
          num: "03",
          title: "Super user",
          description: "Le modèle \"1 préparateur = 1 écran\" ne tenait plus face à la diversification de l'activité. J'ai repensé les permissions et les écrans pour que l'application s'adapte aux différents cas de figure : préparateur classique, convoyeur, responsable de site. Chaque rôle a son parcours et ses accès.",
          images: [
            { src: "assets/projects/virtuo-expertapp-superuser-3.webp", label: "Suivi des équipes et des missions de préparation" }
          ]
        },
        {
          num: "04",
          title: "Le Pool",
          description: "Les missions récurrentes sont attribuées automatiquement. Pour les urgences et cas particuliers, j'ai imaginé une sorte de marketplace des missions où les préparateurs peuvent piocher en fonction de leur position et de leurs disponibilités.",
          images: [
            {
              src: "assets/projects/virtuo-expertapp-pool-1.webp", label: "Vue calendrier et 'Pool' dans laquelle le préparateur peut accepter d'autres missions"
            }
          ]
        }
      ]
    },
    {
      type: "bento",
      title: "Tests Terrains & Déploiement",
      content: "Validation finale sur prototype lofi cliquable testé sur mobile pour vérifier la clarté des messages, la gestion des états hors-ligne et les retours d'erreurs, suivi d'un déploiement progressif par lots pour accompagner la conduite du changement.",
      images: [
        { src: "assets/projects/virtuo-expertapp-test-1.webp", label: "Tests d'utilisabilité sur prototype lofi en conditions réelles" },
        { src: "assets/projects/virtuo-expertapp-test-2.webp", label: "Design et validation des retours d'erreurs & états hors-ligne" }
      ]
    },
    {
      type: "results",
      title: "Résultats & Impact",
      items: [
        {
          highlight: "NPS +28 pts",
          text: "Satisfaction des préparateurs terrain en nette hausse, passant d'un score de 6/10 à 8.5/10."
        },
        {
          highlight: "-11%",
          text: "Réduction des erreurs de convoyage sur 30 jours."
        },
        {
          highlight: "+35%",
          text: "Hausse des installations d'accessoires (chaînes, sièges bébé…)."
        }
      ]
    },
    {
      type: "reflection",
      title: "Réflexion & Enseignements",
      content: "Avec du recul, nous aurions dû découper le projet différemment pour ne pas tout refondre d'un coup : un passage plus progressif et des milestones plus digestes auraient accéléré la mise en production."
    }
  ]
};
