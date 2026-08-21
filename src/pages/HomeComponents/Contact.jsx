import { Link } from "react-router-dom";

export default function Contact() {
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


      <Link
        to="/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
      >
        Contact Me
      </Link>
    </section>
  );
}