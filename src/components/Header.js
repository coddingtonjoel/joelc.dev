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
            </main>
        </div>
    );
};

export default Header;
