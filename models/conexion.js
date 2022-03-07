const mySql = require("mysql");
module.exports = mySql.createPool({
    host: "localhost",
    user: "root",
    password: "Ponejos2912",
    database: "transporte"
})