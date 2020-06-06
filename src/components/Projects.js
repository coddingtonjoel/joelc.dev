import React, { Fragment } from "react";
import ProjectSelector from "./ProjectSelector";
import ProjectData from "../ProjectData";

const Projects = () => {
    return (
        <Fragment>
            <div className="projects" id="projects">
                <div className="about-head-wrapper">
                    <h2 className="about-head heading">Projects</h2>
                </div>
                <div className="projects-container">
                    {ProjectData.map((proj) => {
                        return (
                            <ProjectSelector
                                logo={proj.logo}
                                title={proj.title}
                                sub={proj.sub}
                                desc={proj.desc}
                                tech={proj.tech}
                                link={proj.link}
                                sc1={proj.sc1}
                                sc2={proj.sc2}
                                sc3={proj.sc3}
                                key={proj.title}
                            />
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Projects;
