/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `engrant-web-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
	resolve: `gatsby-plugin-google-gtag`,
	options: {
	  // Your GA4 Measurement ID(s) (you can add multiple)
	  trackingIds: [
		"G-NREH71232E", // Replace this with your Measurement ID!
	  ],
	  // Optional configuration options
	  pluginConfig: {
		// Puts tracking script in the <head> instead of the <body>
		head: true,
		// Setting this parameter is optional
		// respectDNT: true,
		// Avoids sending pageview hits from custom paths
		// exclude: ["/preview/**", "/do-not-track/me/too/"],
	  },
	},
  },]
};