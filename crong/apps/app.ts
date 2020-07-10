import express = require("express");

const app: express.Application = express();
const path: any = require("path");
const bodyParser: any = require("body-parser");

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(3006, function () {
  console.log("Example app listening on port 3006!");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

for (let index: number = 1; index < 10000; index++) {
  console.log("node is asynchronous.");
}

app.get("/main", function (request, response) {
  response.sendFile(path.join(__dirname, "..", "public", "main.html"));
});

app.post("/email_post", function (request, response) {
  // get : req.param('email')
  console.log(request.body.email);
  response.send("<h1>Welcome</h1>" + request.body.email);
});
