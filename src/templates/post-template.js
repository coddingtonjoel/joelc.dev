import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";

const Post = ({ data }) => {
    const post = data.markdownRemark;
    const {
        contentfulPostImage: {
            image: { fluid },
        },
    } = data;

    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <Wrapper>
                <BackgroundImage
                    className="bg-img"
                    Tag="div"
                    fluid={fluid}
                    alt={post.frontmatter.title}>
                    <div className="header-content">
                        <h1 className="title">{post.frontmatter.title}</h1>
                        <p className="date">
                            Published {post.frontmatter.date} by Joel Coddington-Lopez
                        </p>
                    </div>
                </BackgroundImage>
                <div className="content-container">
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                    <hr className="divider-bottom" />
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.article`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};

    .content .gatsby-resp-image-background-image {
        padding-bottom: 0 !important;
    }

    .content img {
        border-radius: 4px;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.37) !important;
        height: 80% !important;
        width: 80% !important;
        position: relative !important;
        display: block;
        margin: 30px auto !important;
    }

    .content-container {
        padding: 30px 28%;

        @media (max-width: 700px) {
            padding: 30px 13%;
        }
    }

    a:link,
    a:visited {
        color: ${props => props.theme.hyperlink};
    }

    .bg-img {
        position: relative;
        height: 300px;
        overflow: hidden;
        background-position: fixed;

        @media (max-width: 500px) {
            height: 230px;
        }

        &::before,
        &::after {
            opacity: 0.04 !important;
        }
    }

    .content {
        font-size: 1.15rem;
        line-height: 1.75;

        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }

    hr {
        border-color: ${props => props.theme.primary};
        opacity: 0.5;
    }

    .divider-top {
        margin: 20px 0 50px 0;
    }

    .divider-bottom {
        margin-top: 50px;
    }

    p {
        margin: 20px 0;
    }

    .title {
        font-size: 3rem;
        text-transform: uppercase;
        font-family: "Raleway";

        @media (max-width: 1000px) {
            font-size: 2.8rem;
        }

        @media (max-width: 700px) {
            font-size: 2.5rem;
        }

        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }

    .header-content {
        padding: 0%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        width: 90vw;
        margin: auto;
    }

    .date {
        margin-bottom: 0;

        @media (max-width: 500px) {
            font-size: 0.9rem;
        }
    }
`;

export const query = graphql`
    query BlogPostBySlug($slug: String!, $title: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            excerpt(pruneLength: 160)
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
        contentfulPostImage(title: { eq: $title }) {
            image {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default Post;
