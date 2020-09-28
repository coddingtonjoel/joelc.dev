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
            <BackgroundImage
                Tag="div"
                fluid={fluid}
                className="bg-img"
                alt="Laptop, coffee, notebook, and iPhone on a table">
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

const Wrapper = styled.section`
    background-color: ${props => props.theme.background};
    height: 100%;

    &:before {
        content: "";
        display: block;
        padding-top: 130px; /* header height + empty space */
        margin-top: -40px; /* header height to degrees padding’s space */
    }

    .bg-img {
        position: relative;
        overflow: hidden;
        padding: 50px 0 80px;

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
        transform: translateY(-30px);
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const query = graphql`
    {
        file(relativePath: { eq: "projects-background.jpg" }) {
            childImageSharp {
                fluid(quality: 80) {
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
                    fluid(quality: 80) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
    }
`;

export default Projects;
