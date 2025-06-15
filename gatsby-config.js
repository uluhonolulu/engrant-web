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
    siteUrl: `https://www.engrant.com`,
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
        icon: 'src/images/icon.png',
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