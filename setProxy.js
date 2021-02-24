const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: "http://loaclhost:3001/",
      changeOrigin: true,
    }),
  );
};
