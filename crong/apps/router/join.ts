import express = require("express");
import {connection} from "../app";
import path = require("path");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({extended: true})

router.get('/', function (request: express.Request, response: express.Response) {
    response.sendFile(path.join(__dirname, "..", "..", "public", "join.html"));
});

router.post('/', urlencodedParser, function (request: express.Request, response: express.Response) {
    const body = request.body;
    const email = body.email;
    const name = body.name;
    const password = body.password;
    const sql = {email: email, name: name, password: password};

    const query = connection.query('INSERT INTO node_user set ?', sql, function (err: any, rows: any) {
        if (err) {
            throw err;
        }
        console.log("ok. db insert : ", rows.insertId, name);
        response.render('welcome.ejs', {'name': name, 'id': rows.insertId});
    });
})

module.exports = router;