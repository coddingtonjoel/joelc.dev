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
    transition: box-shadow 0.2s;
    position: relative;
    width: 70vw;

    @media (max-width: 1000px) {
        height: calc(100% + 0px);
        padding-bottom: 40px;
    }

    &:hover {
        background-color: ${props => props.theme.background};
    }

    .items {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 1000px) {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    .items-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .icon {
        transform: translateY(-20px);

        @media (max-width: 1000px) {
            margin: 20px;
            transform: scale(0.9);
        }

        @media (max-width: 365px) {
            margin: 12px;
        }
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
        width: 80%;
    }
`;

const query = graphql`
    {
        allContentfulSkill(sort: { fields: order }) {
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
