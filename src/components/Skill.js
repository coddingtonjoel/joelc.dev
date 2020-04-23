import React, { Fragment } from "react";
import MediaQuery from "react-responsive";

const Skill = (props) => {
    let ai = "";
    if (props.skill.name === "Adobe Illustrator") {
        ai = "ai";
    }

    return (
        <Fragment>
            <MediaQuery minDeviceWidth={431}>
                <div className="about-skill-item">
                    <span className={`${ai} about-skill-name`}>
                        {props.skill.name}
                    </span>
                    <div className="about-skill-bar-container">
                        <progress
                            className="uk-progress about-skill-bar"
                            value={`${props.skill.percent}`}
                            max="100"></progress>
                    </div>
                    <img
                        className="about-skill-icon"
                        src={props.skill.icon}
                        alt=""
                    />
                </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={430}>
                <div className="about-skill-item">
                    <img
                        className="about-skill-icon"
                        src={props.skill.icon}
                        alt=""
                    />
                    <div className="about-skill-bar-container">
                        <progress
                            className="uk-progress about-skill-bar"
                            value={`${props.skill.percent}`}
                            max="100"></progress>
                    </div>
                </div>
            </MediaQuery>
        </Fragment>
    );
};

export default Skill;
