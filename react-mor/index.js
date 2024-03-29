// 同构

require("@babel/register")({
  presets: ["@babel/preset-react"],
});

const ReactDomServer = require("react-dom/server");

console.log(ReactDomServer.renderToString(require("./index.jsx")));

/**
 * ReactDomServer.renderToString()
 * VueServerRenderer.renderToString()
 */
