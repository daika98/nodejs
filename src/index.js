const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

const port = 3000;

const app = express();

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

app.listen(port, () => console.log(`App listening at port ${port}`));
