import express = require("express");

const app: express.Application = express();
const path: any = require("path");
const bodyParser: any = require("body-parser");
const mysql: any = require("mysql2");
const main: any = require("./router/main");

export const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'codesquad',
  database: 'nodetest'
});

connection.connect();

const result: any = async() => {
  const conn: any = connection.getConnection();
  try {
    const [row]: any = await conn.query('SELECT * FROM node_user')
    return row;
  } catch (e) {
    throw new Error(e);
  } finally {
    conn.release();
  }
}

// router configuration
app.use('/main', main);

app.get("/", function (request, response) {
  console.log(result);
  response.send("Hello World!");
});

app.listen(3006, function () {
  console.log("Example app listening on port 3006!");
});

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.post("/email_post", function (request, response) {
  // get : req.param('email')
  console.log(request.body.email);
  response.render("email.ejs", { email: request.body.email });
});

app.post("/ajax_send_email", function (request, response) {
  console.log(request.body.email);
  const responseData = {result: "OK", email: request.body.email};
  const query = connection.query("SELECT name from node_user WHERE email='" + request.body.email + "'", function (err: any, rows: any) {
    if (err) {
      throw err;
    }
    if (rows[0]) {
      console.log(rows[0].name)
      return;
    }
    console.log('nothing found' + rows[0])
    return;
  })
  response.json(responseData);
});
