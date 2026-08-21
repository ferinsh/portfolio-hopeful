export default function Expertise() {
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