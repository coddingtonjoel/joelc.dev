import React, { Fragment, useState } from "react";
import ProjectInfo from "./ProjectInfo";
import proj from "../ProjectData";
import MediaQuery from "react-responsive";
import ProjectAccordion from "./ProjectAccordion";

const Projects = () => {
    const [selected, setSelected] = useState(proj[0]);

    return (
        <Fragment>
            <div className="projects" id="projects">
                <div className="about-head-wrapper">
                    <h2 className="about-head heading">Projects</h2>
                </div>
                <MediaQuery minDeviceWidth={1001}>
                    <div className="projects-container">
                        <div className="projects-container-buttons">
                            <button
                                href="#!"
                                onClick={() => {
                                    setSelected(proj[0]);
                                }}
                                className="project-button">
                                <img src={proj[0].logo} alt="" />
                            </button>
                            <button
                                href="#!"
                                onClick={() => {
                                    setSelected(proj[1]);
                                }}
                                className="project-button">
                                <img src={proj[1].logo} alt="" />
                            </button>
                            <button
                                href="#!"
                                onClick={() => {
                                    setSelected(proj[2]);
                                }}
                                className="project-button">
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
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1000}>
                    <div className="project-accordion-container">
                        <ul uk-accordion="collapsible: true; animation: true; multiple: true;">
                            {proj.map((p) => {
                                return (
                                    <ProjectAccordion
                                        title={p.title}
                                        sc={p.sc}
                                        desc={p.desc}
                                        link={p.link}
                                        logo={p.logo}
                                        key={p.title}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </MediaQuery>
            </div>
        </Fragment>
    );
};

export default Projects;
