const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Joel Hoelting`,
    siteUrl: `https://joelhoelting.com`,
    description: `Full stack software engineer and coding instructor with over three years of experience in Javascript, Ruby, Python and Node-based frameworks.`,
    author: `Joel Hoelting`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joel Hoelting`,
        start_url: `/`,
        background_color: `#2D3073`,
        theme_color: `#2D3073`,
        display: `minimal-ui`,
        icon: `src/assets/images/joel_hoelting_favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/')
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    }
  ]
};
