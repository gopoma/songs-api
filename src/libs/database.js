const mysql = require("mysql2");
const {
    dbHost,
    dbPort,
    dbUser,
    dbPassword,
    dbName
} = require("../config");

const connection = mysql.createPool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    dateStrings: true
});

function query(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => {
            if(error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

module.exports = { 
    query
};