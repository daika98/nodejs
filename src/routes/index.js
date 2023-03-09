//add thư viện từ file news.js và site.js
const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}
module.exports = route;
