import express = require("express");
import {connection} from "../app";

const router: any = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({extended: true})

router.post("/form", urlencodedParser, function (request: express.Request, response: express.Response) {
    // get : req.param('email')
    console.log(request.body.email);
    response.render("email.ejs", {email: request.body.email});
});

router.post("/ajax", urlencodedParser, function (request: express.Request, response: express.Response) {
    console.log(request.body.email);
    const responseData = {result: "OK", email: request.body.email};
    const query = connection.query("SELECT name from node_user WHERE email='" + request.body.email + "'",
        function (err: any, rows: any) {
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

module.exports = router;