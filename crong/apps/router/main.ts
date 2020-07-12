import express = require("express");
const path: any = require("path");
const router: any = express.Router();

router.get('/main', (request: any, response: any) => {
    response.sendFile(path.join(__dirname, "..", "..", "public", "main.html"));
});

export = router;