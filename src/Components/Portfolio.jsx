import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import alvocine from "../assets/alvocine.png";
import alvochat from "../assets/alvochat.png";
import pic from "../assets/zustand.jpeg";
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
            tags: ["html", "css", "sass", "javaScript", "react"],
            link: "https://alvocine.netlify.app/",
            github: "https://github.com/Johnbasseymichael/alvo-cine",
            features: ["get movies", "search movies", "get movies details"],
            description: `Lorem ipsum, dolor sit amet consectetur
    adipisicing elit. Reiciendis nam temporibus
    consequatur inventore autem sunt aspernatur odit
    accusantium tempora rerum possimus obcaecati
    odio beatae velit, tenetur aliquam pariatur
    quidem atque minima. Ea sit quibusdam odit enim
    ab voluptates, officiis, atque saepe facilis
    quos mollitia facere earum optio esse rerum
    culpa.`,
        },
        {
            workImg: alvochat,
            name: "alvochat",
            index: "02",
            tags: ["html", "scc", "javaScript"],
            link: "https://alvochat.netlify.app/",
            github: "https://github.com/Johnbasseymichael/alvo-chat",
            features: [
                "send messages",
                "send pictures",
                "send videos",
                "serch for friends",
                "authentication",
            ],
            description: `Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reiciendis nam temporibus
        consequatur inventore autem sunt aspernatur odit
        accusantium tempora rerum possimus obcaecati
        odio beatae velit, tenetur aliquam pariatur
        quidem atque minima. Ea sit quibusdam odit enim
        ab voluptates, officiis, atque saepe facilis
        quos mollitia facere earum optio esse rerum
        culpa.`,
        },
        {
            workImg: pic,
            name: "alvochat",
            index: "02",
            tags: ["html", "scc", "javaScript"],
            link: "#",
            github: "#",
            features: [
                "sem asd sdfsfsd sadf asdf asd",
                " asdfasdlfal  adsfasd",
                "view profile",
            ],
            description: `Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reiciendis nam temporibus
        consequatur inventore autem sunt aspernatur odit
        accusantium tempora rerum possimus obcaecati
        odio beatae velit, tenetur aliquam pariatur
        quidem atque minima. Ea sit quibusdam odit enim
        ab voluptates, officiis, atque saepe facilis
        quos mollitia facere earum optio esse rerum
        culpa.`,
        },
        {
            workImg: pic,
            name: "portfolio",
            index: "03",
            tags: ["html", "scc", "javaScript"],
            link: "#",
            github: "#",
            features: [
                "sem asd sdfsfsd sadf asdf asd",
                " asdfasdlfal  adsfasd",
                "view profile",
            ],
            description: `Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Reiciendis nam temporibus
        consequatur inventore autem sunt aspernatur odit
        accusantium tempora rerum possimus obcaecati
        odio beatae velit, tenetur aliquam pariatur
        quidem atque minima. Ea sit quibusdam odit enim
        ab voluptates, officiis, atque saepe facilis
        quos mollitia facere earum optio esse rerum
        culpa.`,
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
