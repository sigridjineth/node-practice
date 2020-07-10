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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

for (let index: number = 1; index < 10000; index++) {
  console.log("node is asynchronous.");
}

app.get("/main", function (request, response) {
  response.sendFile(path.join(__dirname, "..", "public", "main.html"));
});

app.post("/email_post", function (request, response) {
  // get : req.param('email')
  console.log(request.body.email);
  response.render("email.ejs", { email: request.body.email });
});

app.post("/ajax_send_email", function (request, response) {
  console.log(request.body.email);
  var responseData = { result: "OK", email: request.body.email };
  response.json(responseData);
});
