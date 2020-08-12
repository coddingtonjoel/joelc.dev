module.exports = {
    siteMetadata: {
        title: `Template`,
        description: `Template Description`,
        author: `Joel Coddington`,
        // siteUrl: `https://template.com`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
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
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // {
        //     resolve: "gatsby-plugin-web-font-loader",
        //     options: {
        //         google: {
        //             families: ["Work Sans", "Lato"],
        //         },
        //     },
        // },
    ],
};
