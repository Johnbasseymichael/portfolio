import React from "react";
import "./Styles/testimonials.scss";
import { FaQuoteRight } from "react-icons/fa";
import Me from "../assets/me.jpg";
import elisha from "../assets/elisha.jpeg";
import j from "../assets/j.jpeg";

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <h1>Testimonials</h1>
                <p>
                    Hear from those who have collaborated with me. Discover what
                    clients and colleagues say about my work, dedication, and
                    impact on their projects.
                </p>

                <div className="cards">
                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            John's meticulous attention to detail and dedication
                            to user experience greatly enhanced our website's
                            design and functionality.
                        </p>
                        <div className="person">
                            <img src={elisha} alt="person" />
                        </div>
                        <small>Adamu Elisha</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            John transformed our vision into a stunning,
                            responsive website with impressive animations,
                            showcasing his exceptional frontend skills.
                        </p>
                        <div className="person">
                            <img src={j} alt="person" />
                        </div>
                        <small>Jonathan Felicity</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            John’s creative approach and technical expertise
                            ensured our project’s success, delivering
                            outstanding results beyond our expectations.
                        </p>
                        <div className="person">
                            <img src={Me} alt="person" />
                        </div>
                        <small>Austin Jay</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
