"use strict";

var React = require("react");
var siteSchema = require("./src/utils/siteSchema");

exports.onRenderBody = function ({ setHeadComponents }) {
  return setHeadComponents([
    React.createElement("script", {
      key: "google-ads-gtag-loader",
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=AW-17885656465",
    }),
    React.createElement("script", {
      key: "google-ads-gtag-config",
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17885656465');
        `,
      },
    }),
    React.createElement("script", {
      key: "schema-organization",
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(siteSchema.organizationSchema),
      },
    }),
    React.createElement("script", {
      key: "schema-website",
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(siteSchema.webSiteSchema),
      },
    }),
  ]);
};
