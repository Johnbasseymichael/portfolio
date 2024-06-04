import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaMale } from "react-icons/fa";

import "./Styles/contact.scss";
import Me from "../assets/contact.png";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h1>Connect With Me</h1>

                <div className="socials">
                    <a
                        href="https://github.com/Johnbasseymichael"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span>Github</span>
                    </a>

                    <a href="tel:+2348166842569">
                        <FaPhone />
                        <span>+2348166842569</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alvin-alvin-1a6984294/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin />
                        <span>Linkedin</span>
                    </a>

                    <a
                        href="https://x.com/AlvinAlvin11023"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareXTwitter />
                        <span>X</span>
                    </a>
                </div>

                <div className="fun">
                    <h3>Start a project</h3>
                    <p>
                        Interested in working together? We should queue up a
                        time to chat,
                        <br /> I'll buy the coffee🤭️🤫️.
                    </p>
                    <label className="fun-btn" htmlFor="name">
                        🤘Lets do this
                    </label>
                </div>

                <div className="mail">
                    <div className="picture">
                        <div>
                            <img src={Me} alt="me" />
                        </div>
                    </div>

                    <div className="mail-me">
                        <h2>Hit my mail</h2>
                        <form>
                            <div className="name">
                                <label>Enter your name</label>
                                <div>
                                    <FaMale />

                                    <input
                                        placeholder="Enter name"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                            </div>

                            <div className="email">
                                <label>Enter your Email address</label>
                                <div>
                                    <MdOutlineMail />

                                    <input
                                        placeholder="Enter email address"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className="message">
                                <label>Type your message</label>
                                <textarea placeholder="Message here"></textarea>
                            </div>

                            <button>Submite</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
