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

module.exports = {
    connection
};