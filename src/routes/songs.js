const express = require("express");
const SongService = require("../services/songs");

function songs(app) {
    const router = express.Router();
    const songService = new SongService();
    app.use("/api/songs", router);

    router.get("/", async (req, res) => {
        const result = await songService.getAll();
        return res.json(result);
    });

    router.get("/:idSong", async (req, res) => {
        const result = await songService.get(req.params.idSong);
        return res.status(result.success ? 200 : 404).json(result.data);
    });

    router.post("/", async (req, res) => {
        const result = await songService.add(req.body);
        return res.status(result.success ? 201 : 400).json(result.data);
    });

    router.patch("/:idSong", async (req, res) => {
        const result = await songService.edit(req.params.idSong, req.body);
        return res.status(result.success ? 202 : 400).json(result.data);
    });

    router.put("/:idSong", async (req, res) => {
        const result = await songService.update(req.params.idSong, req.body);
        return res.status(result.success ? 202 : 400).json(result.data);
    });

    router.delete("/:idSong", async (req, res) => {
        const result = await songService.delete(req.params.idSong);
        return res.status(result.success ? 202 : 400).json(result.data);
    });
}

module.exports = songs;