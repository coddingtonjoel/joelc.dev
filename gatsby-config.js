module.exports = {
    siteMetadata: {
        title: `Joel Coddington || Web Developer`,
        description: `Portfolio website for Joel Coddington, a Computer Science student at Biola University.`,
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
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
    ],
};
