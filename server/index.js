const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.static(__dirname));
app.set("view engine", "pug");
const increaseCount = () => {
  let count = Number.parseInt(fs.readFileSync("counter.txt")) + 1;
  console.log(count);
  fs.writeFileSync("counter.txt", count.toString());
};

// PATHS
app.get("/", (req, res) => {
  increaseCount();
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/projects.html");
});
// counter endpoint
app.get("/count", (req, res) => {
  let count = fs.readFileSync(__dirname + "/counter.txt");
  res.render("count", { count: count });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
