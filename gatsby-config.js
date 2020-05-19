let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
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
            resolve: 'gatsby-source-s3',
            options: {
                aws: {
                    accessKeyId: `${process.env.GATSBY_S3_ACCESS_KEY}`,
                    secretAccessKey: `${process.env.GATSBY_S3_SECRET_ACCESS_KEY}`,
                },
                buckets: ['brandon.saunders.portfolio.bucket'],
            },
        },
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
