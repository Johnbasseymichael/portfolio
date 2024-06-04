import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Styles/hero.scss";
import Me from "../assets/me.jpg";

function Hero() {
    const div1 = useRef(null);
    const div2 = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();
        timeline
            .fromTo(
                div1.current,
                {
                    opacity: 0,
                    visibility: "hidden",
                    y: -100,
                },
                {
                    opacity: 1,
                    visibility: "visible",
                    y: 0,
                    duration: 0.5,
                }
            )
            .fromTo(
                div2.current,
                {
                    opacity: 0,
                    visibility: "hidden",
                    y: -100,
                },
                {
                    opacity: 1,
                    visibility: "visible",
                    y: 0,
                    duration: 0.5,
                },
                "+=0.5"
            );
    }, []);

    return (
        <div className="hero" id="hero">
            <div className="container">
                <div className="left-col" ref={div1}>
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

                <div className="right-col" ref={div2}>
                    <div className="container">
                        <img src={Me} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
