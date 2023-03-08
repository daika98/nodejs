class SiteController {
  //get /news
  home(req, res) {
    res.render("home");
  }

  //get /news/tin-hot
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
