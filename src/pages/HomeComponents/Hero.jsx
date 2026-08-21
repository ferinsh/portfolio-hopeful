export default function Hero({ProfileIMG}) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">DEVELOPER</p>

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
          <img id="profile_image" src={ProfileIMG} alt="Profile Image" />
          {/* <div className="image-placeholder">
            YOUR PHOTO
            <img src={MyIMG} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
}