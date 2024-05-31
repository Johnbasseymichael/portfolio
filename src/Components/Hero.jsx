import React from "react";
import "./Styles/hero.scss";
import Me from "../assets/me.jpg";

function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="container">
                <div className="left-col">
                    <h1>Hi, I'm John Bassey Michael</h1>
                    <h2>Frontend Developer</h2>
                    <p>
                        Specializing in creating sleek, responsive, and
                        user-friendly web applications. Dedicated to delivering
                        seamless user experiences with a focus on innovative
                        design, attention to detail, and ensuring your website
                        stands out and engages your audience.
                    </p>

                    <div className="btns">
                        <button>Hire me</button>
                        <button>let's talk</button>
                    </div>
                </div>

                <div className="right-col">
                    <div className="container">
                        <img src={Me} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
