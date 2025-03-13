import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { WORKS } from "../constant/portfolio";
import "./Styles/portfolio.scss";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
    const [clickedWork, setClickedWork] = useState(null);
    const [showWorkDetails, setShowWorkDetails] = useState(false);

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
                        {WORKS.map((work, i) => (
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
                                        <span>{String(i + 1).padStart(2, "0")}</span>
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
