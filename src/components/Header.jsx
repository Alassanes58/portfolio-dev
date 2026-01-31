export default function Header() {
  return (
    <header className="hero">
      <h1>Alassane Sidibe</h1>

      <h2>Développeur Web & Mobile</h2>

      <p className="hero-text">
        Étudiant en développement, orienté projets concrets et solutions
        full-stack. Actuellement à la recherche d’un stage disponible immediatement.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          Voir mes projets
        </a>

        <a
          href="/CV_Prenom_Nom.pdf"
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          Télécharger mon CV
        </a>
      </div>

      <nav className="hero-nav">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
