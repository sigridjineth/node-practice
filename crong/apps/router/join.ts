import express = require("express");
import {connection} from "../app";
import path = require("path");
const router = express.Router();

router.get('/', function (request: express.Request, response: express.Response) {
    response.sendFile(path.join(__dirname, "..", "..", "public", "join.html"));
});

module.exports = router;