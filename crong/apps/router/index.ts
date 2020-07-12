import express = require("express");

const router: any = express.Router();
const main: any = require("./main");
const email: any = require("./email");

router.use('/main', main);
router.use('/email', email);

router.get("/", function (request: express.Request, response: express.Response) {
    response.send("Hello World!");
});

module.exports = router;