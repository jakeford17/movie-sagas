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

router.get('/details/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE id=$1`;
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error in SELECT MOVIE quiery', err);
        res.sendStatus(500);
      });
  });

module.exports = router;