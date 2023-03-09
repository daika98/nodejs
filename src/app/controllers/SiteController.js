const Course = require("../model/Course");

class SiteController {
  //get /home
  home(req, res, next) {
    Course.find({})
      .then(function (courses) {
        // Process results
        courses = courses.map((course) => course.toObject());
        res.render("home", { courses });
      })
      .catch(next);
  }

  //get /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
