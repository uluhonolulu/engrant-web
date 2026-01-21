"use strict";

exports.onRouteUpdate = function () {
  // If fbq exists, it means the script loaded (either production or includeInDevelopment=true)
  // So we should track page views
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "ViewContent");
  }
};
