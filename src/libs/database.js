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

function queryPromise(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => {
            if(error) {
                return reject(error);
            }
            return resolve(result);
        });
    });
}

async function query(sql, data) {
    try {
        const result = await queryPromise(sql, data);
        return {
            success: true,
            result
        };
    } catch(error) {
        console.log(error);
        return {
            success: false,
            message: error.message
        };
    }
}

module.exports = {
    query
};