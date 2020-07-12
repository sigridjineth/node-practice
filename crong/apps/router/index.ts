import express = require("express");

const router = express.Router();
const main = require("./main");
const email = require("./email");
const join = require("./join");

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);

router.get("/", function (request: express.Request, response: express.Response) {
    response.send("Hello World!");
});

module.exports = router;