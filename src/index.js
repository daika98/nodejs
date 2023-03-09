//Add các thư viện và các file
const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const port = 3000;

const app = express();

const route = require("./routes");
const db = require("./config/db");

db.connect();

//add folder /public để sử dụng tài nguyên
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Đổi đuôi file từ handlebars
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
//add folder views để lưu hiển thị các websites
app.set("views", path.join(__dirname, "resources/views"));

// chuyển sang file index.js trong folder routes
route(app);

app.listen(port, () => console.log(`App listening at port ${port}`));
