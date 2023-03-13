const Course = require("../model/Course");

class CourseController {
  //get /course
  showCourse(req, res, next) {
    //Sử dụng findOne để tìm ra db có slugId = :slug
    Course.findOne({ slugId: req.params.slug })
      .then(function (course) {
        // Process results/ càn chuyển sang Object để sử dụng handlerbars
        course = course.toObject();
        res.render("courses/show_course", { course });
      })
      .catch(next);
  }

  createCourse(req, res, next) {
    res.render("courses/createCourse");
  }

  storeCourse(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.img =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkHI9_ZMRlTS9qZvgx80KDENRhgx66Hv6Zel0d3rU&s";
    const course = new Course(formData);
    course
      .save()
      .then(function () {
        res.redirect("/home");
      })
      .catch(next);
  }

  editCourse(req, res, next) {
    //Sử dụng findOne để tìm ra db có Id = :id
    Course.findById(req.params.id)
      .then(function (course) {
        // Process results/ càn chuyển sang Object để sử dụng handlerbars
        course = course.toObject();
        res.render("courses/edit-course", { course });
      })
      .catch(next);
  }
  //[Put] /course/:id
  updateCourse(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(function () {
        res.redirect("/me/stored/list");
      })
      .catch(next);
  }
  //[Delete] /course/:id
  deleteCourse(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(function () {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
