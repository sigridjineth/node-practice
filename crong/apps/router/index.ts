import express = require("express");

const router = express.Router();
const main = require("./main");
const email = require("./email");

router.use('/main', main);
router.use('/email', email);

router.get("/", function (request: express.Request, response: express.Response) {
    response.send("Hello World!");
});

module.exports = router;