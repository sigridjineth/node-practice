import express = require("express");

const app: express.Application = express();
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const router = require("./router/index");
const localStorage = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'codesquad',
    database: 'nodetest'
});

connection.connect();

// router configuration
app.use(router);
app.use(bodyParser.json());

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

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
