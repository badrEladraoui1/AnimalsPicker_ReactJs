const express = require("express");
const app = express();

// status 200 is the default

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  //   res.download("package.json");
  //   res.status(200).json({ json: "json" });
  res.render("index", { text: "world" }); // we can use text in the html
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
