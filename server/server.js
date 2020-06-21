const express = require("express");
const cors = require("cors");
// const favicon = require("express-favicon");
const path = require("path");

const photosRoutes = require("./routes");

const port = process.env.PORT || 8080;
const app = express();

// app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use("/api/photos", photosRoutes());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
