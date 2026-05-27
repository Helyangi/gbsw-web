// Node.js + Mysql 연동 코드

const mysql = require("mysql2");
const conn = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "100830",
    database: "gbsw_web",
});

conn.connect();



// conn.query("select * from tb_user", (err, rows, fields) => {
//     if (err)
//     {
//         console.log(err);
//         throw err;
//     }
//     console.log(rows);
// });