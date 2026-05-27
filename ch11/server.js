// Express 서버
const express = require("express");
const app = express();
const mysql = require("mysql2");
const conn = mysql.createConnection
({
    host: "localhost",
    user: "root",
    password: "100830",
    database: "gbsw_web",
});

conn.connect();

app.listen(3000, () => {
    console.log("3000번 포트 서버 대기 중");
})

app.get("/", (req, res) => {
    res.send("나의 서버입니다.");
});
app.get("/user", (req, res) => {
    conn.query("select * from tb_user", (err, rows, fields) => {
        if (err) {
            throw err
        }
        res.json(rows)
    })
})
app.get("/user/:id", (req, res, next) => {
        if (req.params.id === "0")
            {
                next();
            }
        conn.query("select * from tb_user where id =" + req.params.id,
        (err, rows, fields) => {
            if (err) {
                throw err
            }
            res.json({rows})
            console.log(req.params.id);
    })
})
// send는 text/html 포맷
// 요청도 json, 응답도 jso