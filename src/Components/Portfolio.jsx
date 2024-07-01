import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import alvocine from "../assets/alvocine.png";
import alvobond from "../assets/alvobond.jpg";
import alvochat from "../assets/alvochat.png";
import port from "../assets/portfolio.png";
import "./Styles/portfolio.scss";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
    const [clickedWork, setClickedWork] = useState(null);
    const [showWorkDetails, setShowWorkDetails] = useState(false);

    const works = [
        {
            workImg: alvocine,
            name: "alvocine",
            index: "01",
            tags: [
                "html",
                "css",
                "sass",
                "javaScript",
                "react",
                "IMDB",
                "react query",
                "react player",
            ],
            link: "https://alvocine.netlify.app/",
            github: "https://github.com/Johnbasseymichael/alvo-cine",
            features: [
                "get movies list",
                "watch movie trailer",
                "search movies",
                "get movie details",
                "get upcoming movies",
                "",
            ],
            description: `Alvocine: A dynamic movie recommendation application built with React. Alvocine provides users with personalized movie suggestions based on their preferences and viewing history. The application features a sleek and user-friendly interface, seamless navigation, and real-time updates to enhance the user experience. Integrated with external APIs, Alvocine offers a rich database of movies, including detailed information and reviews. This project demonstrates strong skills in React development, API integration, and UI/UX design.`,
        },
        {
            workImg: alvobond,
            name: "alvo connect",
            index: "02",
            tags: ["html", "css", "sass", "javaScript", "react", "ZEGO"],
            link: "https://alvoconnect.netlify.app/",
            github: "https://github.com/Johnbasseymichael/alvo-bond",
            features: [
                "Start a video call",
                "Join a video call",
                "Group call",
                "Chat",
                "Share screen",
                "Edit layout",
                "and more...",
            ],
            description: `Alvocine: A dynamic movie recommendation application built with React. Alvocine provides users with personalized movie suggestions based on their preferences and viewing history. The application features a sleek and user-friendly interface, seamless navigation, and real-time updates to enhance the user experience. Integrated with external APIs, Alvocine offers a rich database of movies, including detailed information and reviews. This project demonstrates strong skills in React development, API integration, and UI/UX design.`,
        },
        {
            workImg: alvochat,
            name: "alvochat",
            index: "03",
            tags: [
                "html",
                "css",
                "sass",
                "javaScript",
                "react",
                "firebase",
                "redux",
            ],
            link: "https://alvochat.netlify.app/",
            github: "https://github.com/Johnbasseymichael/alvo-chat",
            features: [
                "send messages",
                "recive messages",
                "send pictures",
                "recive pictures",
                "serch for friends",
                "authentication",
                "and more...",
            ],
            description: `AlvoChat is a dynamic and user-friendly chatting application built using React. Designed to provide seamless communication, the application features real-time messaging, a responsive interface, and intuitive user interactions. Hosted on Netlify, AlvoChat demonstrates proficiency in modern web development technologies and practices.`,
        },

        {
            workImg: port,
            name: "portfolio",
            index: "04",
            tags: [
                "html",
                "css",
                "sass",
                "Gsap",
                "yup",
                "react-hook-form",
                "javaScript",
                "and more...",
            ],
            link: "#",
            github: "#",
            features: [
                "Visual Design",
                " Certifications",
                "Responsive Design",
                "resume/CV",
                "Skills",
                "and more...",
            ],
            description: `Personal Portfolio: An interactive portfolio showcasing my skills as a frontend web developer. Built with React and enhanced with GSAP animations, it features projects like AlvoChat and Alvocine, demonstrating my expertise in creating dynamic and responsive web applications.

`,
        },
    ];

    const scrollContainerRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        // Horizontal scroll for the children
        gsap.to(scrollContainer.children, {
            xPercent: -140 * (scrollContainer.children.length - 1), //AJUST TO YA TASTE
            ease: "none",
            scrollTrigger: {
                trigger: scrollContainer,
                pin: true,
                scrub: 1,
                end: () => `+=${scrollContainer.scrollWidth}`,
                // onEnter: () => (document.body.style.overflowY = "auto"),
                // onLeave: () => (document.body.style.overflowY = "auto"),
                // onEnterBack: () => (document.body.style.overflowY = "auto"),
                // onLeaveBack: () => (document.body.style.overflowY = "auto"),
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleWork = (w) => {
        setClickedWork(w);
        setShowWorkDetails(true);
    };

    return (
        <>
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <h2>Portfolio Showcase</h2>

                    <div
                        className="works"
                        ref={scrollContainerRef}
                        style={{
                            marginTop: "4rem",
                            display: "flex",
                            overflowX: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {works.map((work, i) => (
                            <div
                                className="work"
                                key={i}
                                onClick={() => handleWork(work)}
                            >
                                <div className="work-img">
                                    <a>
                                        <img src={work.workImg} />
                                    </a>

                                    <div className="work-num">
                                        <span>{work.index}</span>
                                    </div>
                                </div>

                                <div className="work-details">
                                    <div className="work-num">
                                        <span>{work.index}</span>
                                    </div>

                                    <div className="desc">
                                        <p>{work.description}</p>

                                        <button>Veiw Project</button>
                                    </div>
                                </div>
                                <h3>{work.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showWorkDetails ? (
                <Project
                    project={clickedWork}
                    setShowWorkDetails={setShowWorkDetails}
                />
            ) : null}
        </>
    );
}

export default Portfolio;
