const express = require("express");
const helmet = require("helmet");

const app = express();

//Use Helmet
app.use(helmet());

//Index Route
app.get("/", (req, res) => {
  res.send("INDEX");
});

//About Route
app.get("/about", (req, res) => {
  res.send("ABOUT");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
