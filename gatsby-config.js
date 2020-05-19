let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
    pathPrefix: "/brandon.saunders.portfolio",
    siteMetadata: {
        title: `Brandon Saunders Portfolio`,
        description: ``,
        author: `@saundersb`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                display: `minimal-ui`,
            },
        },
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-transformer-json',
            options: {
                path: `${__dirname}/src/data`
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`
            }
        }
    ],
};
