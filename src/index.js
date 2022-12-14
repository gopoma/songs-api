const express = require("express");
const { port } = require("./config");
const { query } = require("./libs/database.js");

// Importando routes
const songs = require("./routes/songs");

const app = express();

// Haciendo uso de middlewares
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        name: "songs-api",
        version: "1.0.0",
        author: "gopoma"
    });
});

app.get("/api/users", async (req, res) => {
    const { result:users } = await query("SELECT * FROM users");
    return res.json(users);
});

// Utilizando routes
songs(app);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on: http://localhost:${port}`);
});