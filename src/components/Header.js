import React, { useEffect, useRef } from "react";
import SVG from "./SVG";
import SVGMobile from "./SVGMobile";
import SVGButton from "./SVGButton";
import MediaQuery from "react-responsive";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { gsap } from "gsap";

const Header = () => {
    const headerText = useRef();

    // this allows us to access DOM elements
    useEffect(() => {
        // add animations on page load using useEffect()
        gsap.from(headerText.current, {
            opacity: 0,
            y: 5,
            duration: 2,
            delay: 2,
            ease: "power2.out",
        });
    }, [headerText]);

    return (
        <div id="home">
            <MediaQuery minDeviceWidth={701}>
                <div className="header">
                    <div className="header-svg">
                        <SVG />
                    </div>
                    <div className="header-text-wrapper">
                        <h1 className="header-text heading" ref={headerText}>
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
