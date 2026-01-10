import './src/styles/global.css';
import betterlytics from "@betterlytics/tracker";

// Initialize Betterlytics when the client loads
export const onClientEntry = () => {
  betterlytics.init("app-mhi4jqkf");
};

// Track page views on route change
export const onRouteUpdate = () => {
  if (typeof betterlytics !== 'undefined' && betterlytics.page) {
    betterlytics.page();
  }
};
