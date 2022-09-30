import React from "react";
import "../styles/Navbar.css";
export default function Navbar() {
    return (
        <div className="sidenavbar">
            <div className="navitems">
                <a href="#content">/home</a>
                <a href="#aboutme">/about me </a>
                <a href="#experience">/experience </a>
                <a href="#personal-projects">/personal-projects</a>
            </div>
        </div>
    )
}
