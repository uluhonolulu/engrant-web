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
        name: 'Engrant',
        short_name: 'Engrant',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/android-chrome-512x512.png',
        icons: [
          {
            src: 'src/images/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'src/images/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'src/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'src/images/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-9GKK3JW135",
        ],
        pluginConfig: {
          head: true,
        },
        gtagConfig: {
          cookie_domain: '.engrant.eu',
          cookie_flags: 'SameSite=None;Secure',
          linker: {
            domains: ['engrant.eu', 'app.engrant.eu'],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel-custom`,
      options: {
        pixelId: "1577154443426139",
        includeInDevelopment: false, // Set to false to only load in production
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