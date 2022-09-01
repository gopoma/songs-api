const SongModel = require("../models/song");

class SongService {
    async getAll() {
        const songs = await SongModel.getAll();
        return songs;
    }

    async add(data) {
        try {
            const result = await SongModel.create(data);

            return {
                success: true,
                data: result
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

    async delete(id) {
        try {
            const result = await SongModel.delete(id);
            return {
                success: true,
                data: result
            };
        } catch(error) {
            return {
                success: false,
                data: {
                    message: error.message
                }
            };
        }
    }
}

module.exports = SongService;