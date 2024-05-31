import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pic from "../assets/zustand.jpeg";
import "./Styles/portfolio.scss";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
    const works = [
        {
            workImg: pic,
            index: "01",
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
            index: "02",
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
            index: "03",
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
            index: "04",
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
            index: "05",
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
            index: "060",
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

    return (
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
                        <div className="work" key={i}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
