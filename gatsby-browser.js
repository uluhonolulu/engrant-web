import './src/styles/global.css';
import betterlytics from "@betterlytics/tracker";
import mixpanel from 'mixpanel-browser';
import posthog from 'posthog-js';

// Initialize Betterlytics when the client loads
export const onClientEntry = () => {
  betterlytics.init("app-mhi4jqkf");

  // Initialize Mixpanel with cookie-based persistence for cross-domain tracking
  mixpanel.init("d3f787c024e14f5fd70660f42d2e3a40", {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: true,
    persistence: 'cookie',
    cross_subdomain_cookie: true,
    secure_cookie: true,
    domain: '.engrant.eu'
  });

  if (process.env.GATSBY_POSTHOG_KEY) {
    posthog.init(process.env.GATSBY_POSTHOG_KEY, {
      api_host: process.env.GATSBY_POSTHOG_HOST || 'https://eu.i.posthog.com',
      capture_pageview: 'history_change',
      capture_pageleave: true,
      persistence: 'cookie',
      cross_subdomain_cookie: true,
      cookie_domain: '.engrant.eu',
      debug: process.env.NODE_ENV === 'development',
    });
  }
};

// Track page views on route change
export const onRouteUpdate = ({ location }) => {
  if (typeof betterlytics !== 'undefined' && betterlytics.page) {
    betterlytics.page();
  }
  
  // Track page view in Mixpanel
  if (typeof window !== 'undefined' && mixpanel) {
    mixpanel.track('Page View', {
      path: location.pathname,
      title: document.title
    });
  }
};
