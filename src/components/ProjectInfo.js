import React from "react";

const ProjectInfo = (props) => {
    return (
        <div className="project-info">
            <h3 className="about-skills-head heading">{props.title}</h3>
            <img src={props.sc} alt="" />
            <p>{props.desc}</p>
            <a target="blank" rel="noopener noreferrer" href={props.link}>
                View Project
            </a>
        </div>
    );
};

export default ProjectInfo;
