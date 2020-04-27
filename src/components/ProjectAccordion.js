import React, { useState } from "react";
import arrow from "../images/accordion.svg";

const ProjectAccordion = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="project-accordion">
            <a
                onClick={() => {
                    setOpen(!open);
                }}
                href="#!"
                className="uk-accordion-title">
                <div className="project-accordion-head">
                    <img
                        className="project-accordion-logo"
                        src={props.logo}
                        alt=""
                    />
                    <img
                        className={`project-accordion-arrow-${open}`}
                        src={arrow}
                        alt=""
                    />
                </div>
            </a>
            <div className="uk-accordion-content project-accordion-content">
                <h3 className="about-skills-head heading">{props.title}</h3>
                <img src={props.sc} alt="" />
                <p>{props.desc}</p>
                <a target="blank" rel="noopener noreferrer" href={props.link}>
                    View Project
                </a>
            </div>
        </li>
    );
};

export default ProjectAccordion;
