import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import BlogButton from "../components/global/BlogButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = ({ data }) => {
    const {
        allMarkdownRemark: { nodes: posts },
    } = data;

    const blogRef = useRef([]);
    blogRef.current = [];

    useEffect(() => {
        blogRef.current.forEach((blog, index) => {
            gsap.from(blog, {
                duration: 0.6,
                top: -40,
                opacity: 0,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: blog,
                    start: "bottom bottom",
                },
            });
        });
    }, []);

    const addToRefs = el => {
        if (el && !blogRef.current.includes(el)) {
            blogRef.current.push(el);
        }
    };

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
                                slug={"/blog" + post.fields.slug}
                                image={current[0].image.fluid}
                                ref={addToRefs}
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
        display: grid;
        align-items: center;
        grid-template-columns: 100%;
        justify-items: center;
        padding: 0;

        @media (min-width: 880px) {
            grid-template-columns: 50% 50%;
            transform: scale(0.9);
            padding: 0 2%;
        }

        @media (min-width: 1100px) {
            transform: none;
            padding: 0 10%;
        }

        @media (min-width: 1350px) {
            padding: 0 2%;
            grid-template-columns: 33% 33% 33%;
        }

        @media (min-width: 1820px) {
            padding: 0 4%;
            grid-template-columns: 25% 25% 25% 25%;
        }
    }
`;

export const query = graphql`
    {
        allMarkdownRemark(
            filter: { frontmatter: { title: { ne: "" } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                excerpt(pruneLength: 160)
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
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

export default Blog;
