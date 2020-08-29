import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
    return (
        <Wrapper>
            <div className="description-flex">
                <div className="description-text">
                    <h4>Who am I?</h4>
                    <p>
                        I'm a current undergraduate student at Biola University
                        (La Mirada, CA) pursuing a B.S. in Computer Science.
                        While being highly self-motivated and creative, I am
                        passionate about learning and practicing the skills
                        necessary to become either a UX/UI Engineer or Frontend
                        Developer. I love design, aesthetics, and web animation,
                        so I always aim to make beautiful work. I am currently
                        the <strong>Chief Technical Officer</strong> at Cartana
                        Inc., and as a <strong>Coding Instructor Intern</strong>{" "}
                        at Coding Minds Academy, teaching courses on JavaScript,
                        React, CSS, and Python.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};

    .description-text {
        color: ${props => props.theme.primary};
    }
`;

export default About;
