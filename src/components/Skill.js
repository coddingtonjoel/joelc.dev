import React from "react";
import ProgressBar from "./ProgressBar";

const Skill = (props) => {
    let ai = "";
    if (props.skill.name === "Adobe Illustrator") {
        ai = "ai";
    }

    return (
        <div className="about-skill-item">
            <span className={`${ai} about-skill-name`}>{props.skill.name}</span>
            <div className="about-skill-bar-container">
                <ProgressBar
                    className="about-skill-bar"
                    percent={props.skill.percent}
                />
            </div>
            <img className="about-skill-icon" src={props.skill.icon} alt="" />
        </div>
    );
};

export default Skill;
