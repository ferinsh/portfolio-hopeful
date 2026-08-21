export default function About({MyIMG}) {
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