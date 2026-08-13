import "./App.css";
import MyIMG from "./assets/me.jpeg"

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        FS
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">SOFTWARE DEVELOPER</p>

        <h1>
          Hi, I'm <span>Ferin</span>
          <br />
          I build things
          <br />
          for the web.
        </h1>

        <p className="hero-description">
          I build full-stack web applications with a focus on
          clean interfaces, reliable backend systems and
          practical solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work →
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-circle">
          <div className="image-placeholder">
            {/* YOUR PHOTO */}
            {/* <img src={MyIMG} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Responsive and interactive interfaces built with React and modern JavaScript.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "REST APIs and server-side applications using Node.js and Express.",
    },
    {
      number: "03",
      title: "Full-Stack Applications",
      description:
        "Complete web applications connecting frontend, backend and databases.",
    },
    {
      number: "04",
      title: "Machine Learning",
      description:
        "Data processing and predictive models using Python and machine learning.",
    },
  ];

  return (
    <section className="section expertise">
      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>
        <h2>
          My <span>Expertise</span>
        </h2>
      </div>

      <div className="expertise-grid">
        {services.map((service) => (
          <div className="expertise-card" key={service.number}>
            <span>{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-image">
        <div className="about-placeholder">
          {/* PHOTO */}
          <img src={MyIMG} alt="" />
        </div>
      </div>

      <div className="about-content">
        <p className="eyebrow">ABOUT ME</p>

        <h2>
          I like turning
          <br />
          <span>ideas into software.</span>
        </h2>

        <p>
          I'm a software developer interested in building
          practical applications and understanding how
          systems work beyond the interface.
        </p>

        <p>
          I enjoy working across the stack — from designing
          responsive interfaces to building APIs, databases
          and deploying applications.
        </p>

        <a href="#contact" className="primary-button">
          More About Me →
        </a>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "XGBoost",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <p className="eyebrow">TECHNOLOGIES</p>

        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Stock Watcher",
      description:
        " stock portfolio monitoring platform using React, Django REST Framework, PostgreSQL, Docker, and the Finnhub API, featuring JWT authentication, portfolio management, and realtime stock price updates.",
      technologies: "React • Django • Finnhub API • PostgreSQL • JWT authentication",
    },
    {
      number: "02",
      title: "Energy Demand Forecasting and Solar Microgrid Simulation",
      description:
        "A machine learning project for predicting household electricity consumption using engineered time-series features.",
      technologies: "Python • XGBoost • Pandas • ML",
    },
    {
      number: "03",
      title: "Coming Soon",
      description:
        "An upcoming project showcasing another full-stack application.",
      technologies: "React • Node.js • Database",
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
                <a href="#">Live Demo ↗</a>
                <a href="#">GitHub ↗</a>
              </div>
            </div>

            <div className="project-preview">
              PROJECT
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">GET IN TOUCH</p>

      <h2>
        Let's build something
        <br />
        <span>together.</span>
      </h2>

      <p>
        Have an idea, opportunity or project you'd like
        to discuss?
      </p>

      {/* <a
        href="mailto:your@email.com"
        className="primary-button"
      >
        Send Me an Email →
      </a> */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=ferinsharaf23@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
      >
        Send Me an Email →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>FERIN.</strong>
      </div>

      <p>© 2026 Ferin Sharaf</p>

      <div className="socials">
        <a
          href="https://www.github.com/ferinsh"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
        <a
          href="https://www.linkedin.com/in/ferinsharaf"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Expertise />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;