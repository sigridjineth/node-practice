import express = require("express");
const path: any = require("path");
const router: any = express.Router();

router.get('/main', (response: express.Response) => {
    response.sendFile(path.join(__dirname, "..", "..", "public", "main.html"));
});

module.exports = router;