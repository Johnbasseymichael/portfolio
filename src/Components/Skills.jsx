import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Styles/skills.scss";
import Me from "../assets/me.jpg";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.jpeg";
import gsapImg from "../assets/gsap.jpeg";
import html from "../assets/html.png";
import js from "../assets/js.png";
import netlify from "../assets/netlify.png";
import postman from "../assets/postman.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.jpeg";
import tailwind from "../assets/tailwind.jpeg";
import threejs from "../assets/threejs.png";
import ts from "../assets/ts.png";
import zustand from "../assets/zustand.jpeg";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const skills = [
        {
            skillImg: html,
            skillName: "HTML",
        },
        {
            skillImg: css,
            skillName: "CSS",
        },
        {
            skillImg: js,
            skillName: "JavaScript",
        },
        {
            skillImg: ts,
            skillName: "TypeScript",
        },
        {
            skillImg: react,
            skillName: "React Js",
        },
        {
            skillImg: Me,
            skillName: "Jekyll ",
        },
        {
            skillImg: Me,
            skillName: "Markdown",
        },
        {
            skillImg: redux,
            skillName: "Redux",
        },
        {
            skillImg: zustand,
            skillName: "Zustand ",
        },
        {
            skillImg: tailwind,
            skillName: "Tailwind CSS",
        },

        {
            skillImg: Me,
            skillName: "Firebase ",
        },
        {
            skillImg: threejs,
            skillName: "Three Js ",
        },
        {
            skillImg: gsapImg,
            skillName: "Gsap ",
        },
        {
            skillImg: postman,
            skillName: "Postman ",
        },
        {
            skillImg: sass,
            skillName: "sass ",
        },

        {
            skillImg: git,
            skillName: "Git ",
        },
        {
            skillImg: github,
            skillName: "Github",
        },

        {
            skillImg: netlify,
            skillName: "Netlify ",
        },
        {
            skillImg: Me,
            skillName: " React Query",
        },
        {
            skillImg: Me,
            skillName: " ",
        },
    ];

    const refs = useRef(skills.map(() => React.createRef()));
    useEffect(() => {
        refs.current.forEach((ref, index) => {
            gsap.fromTo(
                ref.current,
                { x: 200, y: 40, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    // ease: "power1.out",
                    ease: "back.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 100%",
                        end: "bottom 50%",
                        scrub: true,
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="skills" id="skills">
            <div className="container">
                <h2>My Skills</h2>
                <p>
                    Throughout my journey, I have developed myself in various
                    aspects of frontend development, mastering the skills
                    necessary to deliver exceptional and innovative web
                    solutions.
                </p>

                <h3>Technological Proficiencies</h3>

                <div className="techs">
                    {skills.map((skill, i) => (
                        <div key={i} className="tech" ref={refs.current[i]}>
                            <img src={skill.skillImg} />
                            <p>{skill.skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
