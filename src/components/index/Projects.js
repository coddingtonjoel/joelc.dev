import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import ProjectsButton from "./ProjectsButton";

const Projects = () => {
    const {
        file: {
            childImageSharp: { fluid },
        },
        allContentfulProject: { nodes: projects },
    } = useStaticQuery(query);

    return (
        <Wrapper id="projects">
            <BackgroundImage Tag="div" fluid={fluid} className="bg-img">
                <h4>Projects</h4>
                <div className="buttons">
                    {projects.map(project => {
                        return (
                            <ProjectsButton
                                className="button"
                                project={project}
                                key={project.id}
                                fluid={project.icon.fluid}
                            />
                        );
                    })}
                </div>
            </BackgroundImage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};

    .bg-img {
        position: relative;
        overflow: hidden;
        height: 500px;

        &::before,
        &::after {
            opacity: 0.08 !important;
        }
    }

    h4 {
        color: ${props => props.theme.primary};
        font-size: 2.2rem;
        font-family: "Raleway";
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        display: block;
        width: 215px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const query = graphql`
    {
        file(relativePath: { eq: "projects-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allContentfulProject(sort: { fields: order }) {
            nodes {
                description {
                    description
                }
                icon {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                featured
                id
                title
                url
                tagline
                stack
                screenshots {
                    fluid(quality: 50) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
    }
`;

export default Projects;
