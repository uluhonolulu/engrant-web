/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,
  publicPath: "/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build",
}; 