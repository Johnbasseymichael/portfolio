import React from "react";
import "./Styles/testimonials.scss";
import { FaQuoteRight } from "react-icons/fa";
import Me from "../assets/me.jpg";

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
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Alias, eaque ullam rerum tempora deserunt
                            dolorem repellat quos voluptatum ex mollitia.
                        </p>
                        <div className="person">
                            <img src={Me} alt="person" />
                        </div>
                        <small>John Doe</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Alias, eaque ullam rerum tempora deserunt
                            dolorem repellat quos voluptatum ex mollitia.
                        </p>
                        <div className="person">
                            <img src={Me} alt="person" />
                        </div>
                        <small>John Doe</small>
                    </div>

                    <div className="card">
                        <FaQuoteRight />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Alias, eaque ullam rerum tempora deserunt
                            dolorem repellat quos voluptatum ex mollitia.
                        </p>
                        <div className="person">
                            <img src={Me} alt="person" />
                        </div>
                        <small>John Doe</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
