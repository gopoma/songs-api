const { query } = require("../libs/database");

class SongModel {
    static async getAll() {
        return await query("SELECT * FROM songs");
    }

    static async create(data) {
        return await query("INSERT INTO songs(??) VALUES (?)", [Object.keys(data), Object.values(data)]);
    }

    static async delete(id) {
        return await query("DELETE FROM songs WHERE id=?", [id]);
    }
}

module.exports = SongModel;