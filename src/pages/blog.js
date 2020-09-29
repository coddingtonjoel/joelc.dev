import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import BlogButton from "../components/global/BlogButton";

const blog = ({ data }) => {
    const {
        allMarkdownRemark: { nodes: posts },
    } = data;

    return (
        <Layout>
            <SEO title="Blog Posts" />
            <Wrapper>
                <h4>All Blog Posts</h4>
                <div className="container">
                    {posts.map(post => {
                        const current = data.allContentfulPostImage.nodes.filter(
                            tempPost => {
                                return (
                                    tempPost.title === post.frontmatter.title
                                );
                            }
                        );
                        return (
                            <BlogButton
                                key={post.frontmatter.title}
                                title={post.frontmatter.title}
                                date={post.frontmatter.date}
                                excerpt={post.excerpt}
                                slug={post.fields.slug}
                                image={current[0].image.fluid}
                            />
                        );
                    })}
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.main`
    padding-top: 1px;
    padding-bottom: 30px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};

    h4 {
        color: ${props => props.theme.primary};
        font-size: 2.2rem;
        font-family: "Raleway";
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        display: block;
        width: 320px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};

        @media (max-width: 430px) {
            font-size: 2rem;
            width: 285px;
        }

        @media (max-width: 380px) {
            font-size: 1.7rem;
            width: 245px;
        }
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`;

export const query = graphql`
    {
        allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
            nodes {
                excerpt(pruneLength: 210)
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    description
                }
            }
        }
        allContentfulPostImage {
            nodes {
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                title
            }
        }
    }
`;

export default blog;
