const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "movies";`).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET', error)
        res.sendStatus(500);
    });
})

module.exports = router;