const router = require('express').Router();
const mysql = require('mysql');



const db = mysql.createPool({
    host: "ryfqldzbliwmq6g5.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
    user: "u14nl75g7sxejy2f",
    password: "a7tyldmuj5bnjlt2",
    database: 'vdyvqtrgyk5nxyby'
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