import './src/styles/global.css';
import betterlytics from "@betterlytics/tracker";
import { initRB2B } from './src/utils/rb2b';

// Initialize Betterlytics when the client loads
export const onClientEntry = () => {
  betterlytics.init("app-mhi4jqkf");
  initRB2B("EN4M0HLY3POM"); // Replace with your actual RB2B unique ID
};

// Track page views on route change
export const onRouteUpdate = () => {
  if (typeof betterlytics !== 'undefined' && betterlytics.page) {
    betterlytics.page();
  }
};
