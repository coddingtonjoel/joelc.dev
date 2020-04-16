import React from "react";
import SVG from "./SVG";
import SVGButton from "./SVGButton";

const Header = () => {
    return (
        <main className="header" id="home">
            <div className="header-svg">
                <SVG />
            </div>
            <div className="header-text-wrapper">
                <h1 className="header-text heading">
                    My name is Joel Coddington.
                    <br />
                    I'm a student web developer.
                </h1>
            </div>
            <a className="header-btn" href="#about">
                <SVGButton />
            </a>
        </main>
    );
};

export default Header;
