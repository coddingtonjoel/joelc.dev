import React from "react";
import SVG from "./SVG";
import SVGButton from "./SVGButton";

const Header = () => {
    return (
        <div className="header">
            <div className="header-svg">
                <SVG />
            </div>
            <a className="header-btn" href="#!">
                <SVGButton />
            </a>
        </div>
    );
};

export default Header;
