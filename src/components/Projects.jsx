const projects = [
  {
    title: "Plateforme de trading de crypto-monnaies",
    context: "Projet académique full-stack",
    description:
      "Conception et développement d’une plateforme web de trading permettant la gestion de portefeuilles utilisateurs et la visualisation de données financières.",
    contributions: [
      "Conception de l’architecture applicative et des modèles de données",
      "Développement du back-end (API, logique métier, authentification)",
      "Création d’interfaces d’administration pour la gestion des utilisateurs et des comptes",
      "Intégration de données dynamiques et graphiques"
    ],
    tech: "Symfony · PHP · MySQL · JavaScript · Twig"
  },
  {
  title: "Black Hole Superette — Site événementiel",
  context: "Projet front-end & back-office",
  description:
    "Site événementiel dédié à la sortie de l’album Black Hole Superette de la l'artiste USA , avec une interface publique immersive et un back-office d’administration.",
  contributions: [
    "Développement de l’interface front-end en React",
    "Mise en place d’une interface d’administration pour la gestion des dates de tournée (CRUD)",
    "Intégration de Firebase pour l’authentification et la gestion des données",
    "Travail sur l’identité visuelle, la charte graphique et l’expérience utilisateur",
    "Structuration du projet et organisation du code"
  ],
  tech: "React · JavaScript · Firebase · HTML · CSS"
 },
  {
    title: "Code Wallet",
    context: "Application desktop",
    description:
      "Application desktop permettant de sauvegarder, organiser et retrouver facilement des fragments de code.",
    contributions: [
      "Conception fonctionnelle et rédaction du cahier des charges",
      "Développement de l’application desktop",
      "Mise en place du stockage local des données",
      "Structuration du projet et organisation du code"
    ],
    tech: "Electron · React · Node.js"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <h3>{project.title}</h3>
            <span className="project-context">{project.context}</span>

            <p>{project.description}</p>

            <h4>Ce que j'ai réalisé</h4>
            <ul>
              {project.contributions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="project-tech">
              <strong>Technologies :</strong> {project.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
