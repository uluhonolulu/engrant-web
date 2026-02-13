import './src/styles/global.css';
import betterlytics from "@betterlytics/tracker";
import { initRB2B } from './src/utils/rb2b';
import mixpanel from 'mixpanel-browser';

// Initialize Betterlytics when the client loads
export const onClientEntry = () => {
  betterlytics.init("app-mhi4jqkf");
  initRB2B("EN4M0HLY3POM"); // Replace with your actual RB2B unique ID
  
  // Initialize Mixpanel with cookie-based persistence for cross-domain tracking
  mixpanel.init("d3f787c024e14f5fd70660f42d2e3a40", {
    debug: process.env.NODE_ENV === 'development',
    track_pageview: true,
    persistence: 'cookie',
    cross_subdomain_cookie: true,
    secure_cookie: true,
    domain: '.engrant.eu'
  });
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
