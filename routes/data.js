const router = require('express').Router();
const mysql = require('mysql');



const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'hiking'
});

router.get('/hikings', (req, res) => {
    let sql = 'SELECT * FROM hikingslist'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})


router.get('/hikings/:id', (req, res) => {
    let sql = 'SELECT * FROM hikingslist where id=?'
    db.query(sql, req.params.id, (err, result) => {
        if (err) throw err
        res.json(result)
    })
})




module.exports = router;