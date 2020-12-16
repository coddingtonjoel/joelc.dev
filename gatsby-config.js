require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Joel Coddington`,
        description: `Joel Coddington is a passionate computer science student at Biola University who excels in UX/UI Design and Front-End Web Developent`,
        author: `Joel Coddington`,
        siteUrl: `https://joelc.dev`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-preload-fonts`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `dvhyftb64zvu`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                custom: {
                    families: ["Lato, Raleway"],
                    urls: [`fonts.css`],
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Template`,
                short_name: `Template`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        {
            resolve: "gatsby-plugin-page-progress",
            options: {
                includePaths: ["/blog", { regex: "^/blog" }],
                height: 3,
                prependToBody: false,
                color: `#EE6F6A`,
                footerHeight: 150,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
    ],
};
