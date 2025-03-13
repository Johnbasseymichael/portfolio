import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

function Home() {
    return (
        <div className="app" style={{ marginTop: "4rem" }}>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Contact />
        </div>
    );
}

export default Home;
