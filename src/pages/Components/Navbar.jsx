
import { Link } from "react-router-dom";

export default function Navbar({ homeLink = "/contact" }) {

    const linkProperties = {
        "/contact": {
        text: "Let's Talk",
        },
        "/home": {
        text: "Home",
        },
        "/": {
        text: "Home",
        },
        "/projects": {
        text: "Projects",
        },
    };
    const currentLink = linkProperties[homeLink];

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

        <Link to={homeLink} className="nav-button">
            {currentLink?.text || "Home"}
        </Link>
        </nav>
    );
}