import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const SkillsButton = props => {
    const { allContentfulSkill } = useStaticQuery(query);

    const { nodes: skills } = allContentfulSkill;

    const featuredSkills = skills.filter(node => {
        return node.featured === true;
    });

    return (
        <Wrapper onClick={props.onClick}>
            <div className="items">
                {featuredSkills.map(skill => {
                    return (
                        <Img
                            className="icon"
                            key={skill.name}
                            fixed={skill.icon.fixed}
                            draggable={false}
                        />
                    );
                })}
            </div>

            <span className="click-to-expand">Click to Expand</span>
        </Wrapper>
    );
};

const Wrapper = styled(Button).attrs(props => ({
    variant: "contained",
}))`
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.modal};
    margin: 0 auto;
    display: block;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.37);
    border-radius: 4px;
    padding: 0 6%;
    height: 150px;
    transition: 0.3s;
    position: relative;
    width: 70vw;

    &:hover {
        background-color: ${props => props.theme.background};
    }

    .items {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .icon {
        width: 65px;
        height: 65px;
        transform: translateY(-20px);
    }

    .click-to-expand {
        position: absolute;
        left: 50%;
        bottom: 3%;
        transform: translateX(-50%);
        text-transform: uppercase;
        color: #d0d0d0;
        font-size: 0.8rem;
        font-family: "Raleway";
        font-weight: 700;
    }
`;

const query = graphql`
    {
        allContentfulSkill(sort: { fields: contentfulid }) {
            nodes {
                featured
                icon {
                    fixed(width: 65) {
                        ...GatsbyContentfulFixed
                    }
                }
                name
            }
        }
    }
`;

export default SkillsButton;
