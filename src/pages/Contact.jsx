import { useState } from "react";

import Footer from "./Components/Footer";

import "./Contact.css";
import Navbar from "./Components/Navbar";

function ProjectForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);

        const { name, email, subject, message } = formData;

        const body = `
        Name: ${name}
        Email: ${email}

        ${message}
        `;

        const mailtoUrl = `mailto:ferinsharaf23@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        // Clear the form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        window.location.href = mailtoUrl;
    };

    return (
        <section className="contact-form-section">

            <div className="form-heading">
                <p className="eyebrow">SEND A MESSAGE</p>

                <h2>
                Tell me about
                <br />
                <span>your project.</span>
                </h2>
            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <div className="form-row">

                <div className="form-group">
                    <label htmlFor="name">YOUR NAME</label>

                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">YOUR EMAIL</label>

                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                </div>

                <div className="form-group">
                <label htmlFor="subject">SUBJECT</label>

                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Let's work together"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="message">YOUR MESSAGE</label>

                <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me a little about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                </div>

                <button type="submit" className="contact-submit">
                Send Message
                <span>↗</span>
                </button>

            </form>

        </section>
    );
}


function Contact() {
  return (
    <div className="contact-page">
        {/* <Navbar homeLink="/"/> */}
        <section className="contact-hero">
            <div className="contact-heading">
            <p className="eyebrow">GET IN TOUCH</p>

            <h1>
                Let's build
                <br />
                something <span>together.</span>
            </h1>

            <p className="contact-intro">
                Have a project, opportunity, or idea you'd like to
                discuss? I'm always open to interesting conversations
                and new opportunities.
            </p>
            </div>

            <div className="contact-details">

            <div className="contact-detail">
                <span>Phone</span>
                <a href="tel:+918848534986">+91 88485 34986</a><br /><br />
                <span>EMAIL</span>
                <a href="mailto:ferinsharaf23@gmail.com">
                ferinsharaf23@gmail.com
                </a>
            </div>

            <div className="contact-detail">
                <span>LOCATION</span>
                <p>Kerala, India</p>
            </div>

            <div className="contact-detail">
                <span>SOCIAL</span>

                <div className="contact-socials">
                <a
                    href="https://github.com/ferinsh"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>

                <a
                    href="https://www.linkedin.com/in/ferinsharaf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn ↗
                </a>
                </div>
            </div>

            </div>
        </section>

        <ProjectForm />
      
        <section className="contact-bottom">

            <p className="eyebrow">CURRENTLY</p>

            <h2>
            Open to new
            <span> opportunities.</span>
            </h2>

        </section>
        <Footer />
    </div>
  );
}

export default Contact;