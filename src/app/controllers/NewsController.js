class NewsController {
  //get /news
  news(req, res) {
    res.render("news");
  }

  //get /news/tin-hot
  hotNews(req, res) {
    res.send("tin hot");
  }
}

module.exports = new NewsController();
