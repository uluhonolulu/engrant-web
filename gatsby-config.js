require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
debugger;
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Engrant`,
    siteUrl: `https://engrant.eu`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/engrant-favicon.svg',
      },
    },
    {
      resolve: '@tmttn/gatsby-plugin-linkedin-insight',
      options: {
        partnerId: '8526737',

        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: true
      },
    },
    {
      resolve: "gatsby-plugin-hotjar",
      options: {
        includeInDevelopment: true,
        addToHead: true,
        id: 3791559,
        sv: 6,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M8RN7CMV',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is evaluated in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",
      },
    },
    // {
	// 	resolve: `gatsby-plugin-clerk`,
	// 	options: {
	// 	  frontendApi: process.env.GATSBY_CLERK_PUBLISHABLE_KEY, 
	// 	},

	// }
  ],
};