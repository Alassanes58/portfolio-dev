export default function Skills() {
  return (
    <section id="skills">
      <h2>Compétences</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Développement Front-end</h3>
          <p>
            Création d’interfaces web modernes, accessibles et responsives,
            orientées expérience utilisateur.
          </p>
          <ul>
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Développement Mobile</h3>
          <p>
            Conception d’applications mobiles multiplateformes avec gestion de
            données et navigation.
          </p>
          <ul>
            <li>React Native, Expo</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Back-end & Données</h3>
          <p>
            Mise en place de logiques serveur, d’API et de systèmes de stockage
            de données.
          </p>
          <ul>
            <li>Node.js, PHP (Symfony)</li>
            <li>Firebase, MySQL</li>
            <li>API REST</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Méthodes & Outils</h3>
          <p>
            Travail en équipe, organisation de projet et bonnes pratiques de
            développement.
          </p>
          <ul>
            <li>Git, GitHub</li>
            <li>Méthodes agiles (SCRUM)</li>
            <li>Figma, UML</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
