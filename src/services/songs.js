const SongModel = require("../models/song");

class SongService {
    async getAll() {
        const songs = await SongModel.getAll();
        return songs;
    }

    async add(data) {
        try {
            await SongModel.create(data);

            return {
                success: true,
                data: { message: "Song added successfully" }
            }
        } catch(error) {
            return {
                success: false,
                data: {
                    message: error.message
                }
            };
        }
    }

    async edit(id, data = {}) {
        try {
            const isConsistent = Object.keys(data).reduce((result, key) => {
                switch(typeof(data[key])) {
                    case "string":
                        return result && data[key];
                    case "number":
                        return result && typeof(data[key]) !== "undefined";
                }
            }, true);

            if(!isConsistent) {
                throw new Error("Values are required");
            }

            await SongModel.edit(id, data);
            return {
                success: true,
                data: { message: "Song edited successfully" }
            };
        } catch(error) {
            return {
                success: false,
                data: { message: error.message }
            }
        }
    }

    async update(id, data = {}) {
        try {
            if(!data.title || typeof(data.year) === "undefined" || !data.author || !data.description || !data.thumbnail || !data.genre || !data.path) {
                throw new Error("Fill all the fields");
            }

            await SongModel.edit(id, data);
            return {
                success: true,
                data: { message: "Song updated successfully" }
            };
        } catch(error) {
            return {
                success: false,
                data: { message: error.message }
            };
        }
    }

    async delete(id) {
        try {
            await SongModel.delete(id);
            return {
                success: true,
                data: { message: "Song deleted successfully" }
            };
        } catch(error) {
            return {
                success: false,
                data: { message: error.message }
            };
        }
    }
}

module.exports = SongService;