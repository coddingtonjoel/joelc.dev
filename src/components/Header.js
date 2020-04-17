import React, { Fragment } from "react";
import SVG from "./SVG";
import SVGMobile from "./SVGMobile";
import SVGButton from "./SVGButton";
import MediaQuery from "react-responsive";

const Header = () => {
    return (
        <Fragment>
            <MediaQuery minDeviceWidth={701}>
                <div className="header" id="home">
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
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <div className="header-mobile" id="home-m">
                    <div className="header-mobile-svg">
                        <SVGMobile />
                        <h1 className="header-text header-mobile-text heading">
                            My name is Joel Coddington.
                            <br />
                            I'm a student web developer.
                        </h1>
                    </div>
                    <a className="header-btn header-mobile-btn" href="#about">
                        <SVGButton />
                    </a>
                </div>
            </MediaQuery>
        </Fragment>
    );
};

export default Header;
