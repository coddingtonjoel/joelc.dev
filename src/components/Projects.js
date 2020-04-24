import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import proj from "../ProjectData";

const Projects = () => {
    const [selected, setSelected] = useState(proj[0]);

    return (
        <div className="projects" id="projects">
            <div className="about-head-wrapper">
                <h2 className="about-head heading">Projects</h2>
            </div>
            <div className="projects-container">
                <div className="projects-container-buttons">
                    <button
                        href="#!"
                        onClick={() => {
                            setSelected(proj[0]);
                        }}
                        className="project-button"
                        key={proj[0].title}
                        autoFocus>
                        <img src={proj[0].logo} alt="" />
                    </button>
                    <button
                        href="#!"
                        onClick={() => {
                            setSelected(proj[1]);
                        }}
                        className="project-button"
                        key={proj[1].title}>
                        <img src={proj[1].logo} alt="" />
                    </button>
                    <button
                        href="#!"
                        onClick={() => {
                            setSelected(proj[2]);
                        }}
                        className="project-button"
                        key={proj[2].title}>
                        <img src={proj[2].logo} alt="" />
                    </button>
                </div>
                <div className="projects-container-splitter" />
                <div className="projects-container-info">
                    <ProjectInfo
                        title={selected.title}
                        sc={selected.sc}
                        desc={selected.desc}
                        link={selected.link}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
