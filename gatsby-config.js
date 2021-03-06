/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Teo Nys',
    description: 'Teo Nys Personal Website',
    author: '@nysteo',
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://157.230.12.118',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'Experience',
          'Work'

        ],
        singleTypes: ['personal'],
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-smoothscroll',
  ],
}
