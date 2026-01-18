/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

/**
 * Creates redirects for deprecated routes
 */
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  // Redirect /ngo-search to / (root)
  createRedirect({
    fromPath: `/ngo-search`,
    toPath: `/`,
    isPermanent: true, // 301 redirect
    redirectInBrowser: true, // Also redirect client-side navigation
  });
};
