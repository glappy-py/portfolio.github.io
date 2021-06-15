const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.static(__dirname));

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
  increaseCount();
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/projects.html");
});
// counter endpoint
app.get("/getcount", (req, res) => {
  let count = fs.readFileSync(__dirname + "/counter.txt");
  res.send(`<h1>${count}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
