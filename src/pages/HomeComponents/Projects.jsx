export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Stock Watcher",
      description:
        " stock portfolio monitoring platform using React, Django REST Framework, PostgreSQL, Docker, and the Finnhub API, featuring JWT authentication, portfolio management, and realtime stock price updates.",
      technologies: "React • Django • Finnhub API • PostgreSQL • JWT authentication",
      github: "https://github.com/ferinsh/Favorite-stocks-watcher",
      livedemo: "#",
      image: ""
    },
    {
      number: "02",
      title: "Energy Demand Forecasting and Solar Microgrid Simulation",
      description:
        "A machine learning project for predicting household electricity consumption using engineered time-series features.",
      technologies: "Python • XGBoost • Pandas • ML",
      github: "https://github.com/ferinsh/sfRP",
      livedemo: "#",
      image: ""
    },
    {
      number: "03",
      title: "Coming Soon",
      description:
        "Adding more projects to the portfolio.",
      technologies: "",
      github: "#",
      livedemo: "#",
      image: ""
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>

        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.technologies}</small>

              <div className="project-links">
                {project.livedemo !== "#" && <a href={project.livedemo} target="_blank">Live Demo ↗</a>}
                {project.github !== "#" && <a href={project.github} target="_blank">GitHub ↗</a>}
                
              </div>
            </div>

            {
            project.image && 
            <div className="project-preview">
              PROJECT
            </div>
            }
            
          </article>
        ))}
      </div>
    </section>
  );
}
