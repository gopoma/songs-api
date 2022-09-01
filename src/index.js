const express = require("express");
const { port } = require("./config");
const { connection } = require("./libs/database.js");

const app = express();

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on: http://localhost:${port}`);
});

app.get("/", (req, res) => {
    return res.json({
        name: "songs-api",
        version: "1.0.0",
        author: "gopoma"
    });
});

connection.query("SELECT * FROM users", (error, result) => {
    if(error) {
        console.log("A wild Error has appeared!");
    } else {
        console.log(result);
    }
});