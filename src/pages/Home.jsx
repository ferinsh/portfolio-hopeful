import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

import Hero from "./HomeComponents/Hero";
import Expertise from "./HomeComponents/Expertise";
import About from "./HomeComponents/About";
import Skills from "./HomeComponents/Skills";
import Projects from "./HomeComponents/Projects";
import Contact from "./HomeComponents/Contact";

import MyIMG from "../assets/me.jpeg"
import ProfileIMG from "../assets/profile.png"

import "./Home.css"

export default function Home() {
    return (
    <>
      <Navbar />

      <main>
        <Hero ProfileIMG = {ProfileIMG} />
        <Expertise />
        <About MyIMG={MyIMG}/>
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

