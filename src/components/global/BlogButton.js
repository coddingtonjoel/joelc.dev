import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";

const BlogButton = props => {
    return (
        <StyledLink to={props.slug}>
            <StyledButton variant="contained">
                <BackgroundImage
                    className="bg-img"
                    Tag="div"
                    fluid={props.image}
                    alt="Laptop with code on screen">
                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="date">Published {props.date}</p>
                        <hr />
                        <p className="excerpt">{props.excerpt}</p>
                    </div>
                </BackgroundImage>
            </StyledButton>
        </StyledLink>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled(Button)`
    margin: 30px;
    font-family: "Lato";
    text-transform: none;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.modal};
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.37);
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: box-shadow 0.2s;
    text-overflow: ellipsis;

    /* flex-wrap begins */
    @media (max-width: 1270px) {
        margin: 20px;
    }

    &:hover {
        background-color: ${props => props.theme.background};
    }

    &,
    .bg-img {
        height: 250px;
        width: 400px;
        border-radius: 4px;

        @media (max-width: 650px) {
            height: 225px;
            width: 375px;
        }

        @media (max-width: 500px) {
            height: 120px;
            width: 80vw;
        }

        @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .bg-img {
        position: relative;
        overflow: hidden;
        background-position: fixed;

        &::before,
        &::after {
            opacity: 0.06 !important;
        }
    }

    .content {
        padding: 5%;

        @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        font-family: "Raleway";
    }

    .date {
        opacity: 0.5;
    }

    hr {
        opacity: 0.3;
        margin: 10px 0;

        @media (max-width: 500px) {
            opacity: 0;
            display: none;
        }
    }

    .excerpt {
        text-overflow: ellipsis;

        @media (max-width: 500px) {
            opacity: 0;
            display: none;
        }
    }
`;

export default BlogButton;
