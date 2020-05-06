import React, { useState } from "react";

const ProjectInfo = (props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="project-info">
            <h3 className="about-skills-head heading">{props.title}</h3>
            {loaded ? null : <img src={props.sc} alt="" />}
            <p>{props.desc}</p>
            <a
                target="blank"
                rel="noopener noreferrer"
                href={props.link}
                onLoad={() => {
                    setLoaded(true);
                }}>
                View Project
            </a>
        </div>
    );
};

export default ProjectInfo;
