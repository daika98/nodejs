//add thư viện từ file news.js và site.js
const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  //su dung de hien course
  app.use("/course", courseRouter);
  // Sử dụng để xem danh sách khóa học
  app.use("/me", meRouter);
}
module.exports = route;
