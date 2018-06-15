const sass = require("@stencil/sass");

exports.config = {
  copy: [
    {
      src: "../node_modules/firebase/firebase-*.js",
      dest: "assets/js"
    }
  ],
  outputTargets: [
    {
      type: "www",
      serviceWorker: {
        swSrc: "src/sw.js"
      }
    }
  ],
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.css",
  plugins: [sass()],
  enableCache: false
};
