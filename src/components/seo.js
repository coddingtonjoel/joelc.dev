import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../../static/favicon.ico";
import LatoB from "../../static/Lato-Bold.ttf";
import LatoL from "../../static/Lato-Light.ttf";
import LatoR from "../../static/Lato-Regular.ttf";
import RalewayB from "../../static/Raleway-Bold.ttf";
import RalewayL from "../../static/Raleway-Light.ttf";
import RalewayR from "../../static/Raleway-Regular.ttf";

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}>
            <link rel="icon" href={favicon} />
            <link
                rel="preload"
                as="font"
                href={LatoB}
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={LatoL}
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={LatoR}
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={RalewayB}
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={RalewayL}
                type="font/ttf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                as="font"
                href={RalewayR}
                type="font/ttf"
                crossOrigin="anonymous"
            />
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

export default SEO;
