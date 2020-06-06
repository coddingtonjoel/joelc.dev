import React from "react";
import SVG from "./SVG";
import SVGMobile from "./SVGMobile";
import SVGButton from "./SVGButton";
import MediaQuery from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
    return (
        <div id="home">
            <MediaQuery minDeviceWidth={701}>
                <div className="header">
                    <div className="header-svg">
                        <SVG />
                    </div>
                    <div className="header-text-wrapper">
                        {/* TODO add GSAP animation like sketch website */}
                        <h1 className="header-text heading">
                            My name is Joel Coddington.
                            <br />
                            I'm a student web developer.
                        </h1>
                    </div>
                    <AnchorLink
                        offset="100"
                        className="header-btn"
                        href="#about">
                        <SVGButton />
                    </AnchorLink>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <div className="header-mobile">
                    <div className="header-mobile-svg">
                        <SVGMobile />
                        <h1 className="header-text header-mobile-text heading">
                            My name is Joel Coddington.
                            <br />
                            I'm a student web developer.
                        </h1>
                    </div>
                    <AnchorLink
                        offset="100"
                        className="header-btn header-mobile-btn"
                        href="#about">
                        <SVGButton />
                    </AnchorLink>
                </div>
            </MediaQuery>
        </div>
    );
};

export default Header;
