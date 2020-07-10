"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function(reqquest, response) {
    response.send("Hello World!");
});
app.listen(3005, function() {
    console.log("Example app listening on port 3002!");
});
for (var index = 1; index < 10000; index++) {
    console.log("node is asynchronous.");
}