import React, { Fragment } from "react";
import MediaQuery from "react-responsive";

const Skill = (props) => {
    let ai = "";
    if (props.skill.name === "Adobe Illustrator") {
        ai = "ai";
    }

    return (
        <Fragment>
            <MediaQuery minDeviceWidth={501}>
                <div className="about-skill-item">
                    <img
                        className="about-skill-icon"
                        src={props.skill.icon}
                        alt=""
                    />
                    <span className={`${ai} about-skill-name`}>
                        {props.skill.name}
                    </span>
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={500}>
                <div className="about-skill-item" uk-tooltip={props.skill.name}>
                    <img
                        className="about-skill-icon"
                        src={props.skill.icon}
                        alt=""
                    />
                    <span className={`${ai} about-skill-name`}>
                        {props.skill.name}
                    </span>
                </div>
            </MediaQuery>
        </Fragment>
    );
};

export default Skill;
