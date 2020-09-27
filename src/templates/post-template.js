import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Post = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <Wrapper>
                <h1>{post.frontmatter.title}</h1>
                <p className="date">{post.frontmatter.date}</p>
                <hr />
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.article`
    h1,
    .date {
        text-align: center;
    }
`;

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;

export default Post;
