import React, { useState } from "react";
import { CgMenuHotdog } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import "./Styles/navbar.scss";

function Navbar() {
    const [viewMenu, setViewMenu] = useState(false);

    return (
        <div className={`navbar ${viewMenu ? "view-menu" : ""}`}>
            <nav onClick={() => (viewMenu ? setViewMenu(false) : null)}>
                <div className="left">
                    <a href="#hero" className="desktop-name">
                        John<span>Bassey.</span>
                    </a>

                    <a href="#hero" className="mobile-name">
                        J<span>B.</span>
                    </a>

                    <div className="svg">
                        <CgMenuHotdog onClick={() => setViewMenu(true)} />
                        <IoMdCloseCircle onClick={() => setViewMenu(false)} />
                    </div>
                </div>

                <ul>
                    <li>
                        <a href="#hero">home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">portfoil</a>
                    </li>
                    <li>
                        <a href="#testimonials">testimonials</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
