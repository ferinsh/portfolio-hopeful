export default function Skills() {
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
