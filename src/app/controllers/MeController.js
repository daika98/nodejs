const Course = require("../model/Course");

class MeController {
  //get /me/store-list
  storedList(req, res, next) {
    Course.find({})
      .then(function (courses) {
        // Process results
        courses = courses.map((course) => course.toObject());
        res.render("me/store-list", { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
