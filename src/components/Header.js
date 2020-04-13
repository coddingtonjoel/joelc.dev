import React from "react";
import SVG from "./SVG";

const Header = () => {
    return (
        <div className="header">
            <SVG />
            <main className="header-container">
                <h1 className="header-head">
                    My name is Joel Coddington.
                    <br />
                    I'm a student web developer.
                </h1>
                <button className="header-btn">
                    <span className="header-btn-span">Learn More</span>
                </button>
            </main>
        </div>
    );
};

export default Header;
