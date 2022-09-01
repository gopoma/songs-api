const { query } = require("../libs/database");

class SongModel {
    static async getAll() {
        return await query("SELECT * FROM songs");
    }

    static async create(data) {
        return await query("INSERT INTO songs(??) VALUES (?)", [Object.keys(data), Object.values(data)]);
    }

    static async edit(id, data) {
        let counter = 0;
        const associations = [];
        for(let key of Object.keys(data)) {
            counter++;
            associations.push(key, data[key]);
        }

        let assigns;
        if(counter === 1) {
            assigns = "??=?";
        } else if(counter > 1) {
            assigns = "??=?, "
        }
        for(let i = 0; i < counter - 2; i++) {
            assigns += "??=?, ";
        }
        if(counter > 1) {
            assigns += "??=?";
        }
        return await query(`UPDATE songs SET ${assigns} WHERE id=?`, [...associations, id]);
    }

    static async delete(id) {
        return await query("DELETE FROM songs WHERE id=?", [id]);
    }
}

module.exports = SongModel;