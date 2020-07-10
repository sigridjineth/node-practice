import express = require("express");

const app: express.Application = express();
const path: any = require("path");

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(3006, function () {
  console.log("Example app listening on port 3006!");
});

for (let index: number = 1; index < 10000; index++) {
  console.log("node is asynchronous.");
}

app.get("/main", function (request, response) {
  response.sendFile(path.join(__dirname, "..", "public", "main.html"));
});

app.use(express.static("public"));
