import express = require("express");
import path = require("path");
const router = express.Router();

router.get('/main', (response: express.Response) => {
    response.sendFile(path.join(__dirname, "..", "..", "public", "main.html"));
});

module.exports = router;