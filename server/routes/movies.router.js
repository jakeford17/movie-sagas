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

router.get('/genres/:id', (req, res) => {
    const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, "genres".name FROM "movies" 
                        JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id 
                        JOIN "genres" ON "movies_genres".genres_id = "genres".id 
                        WHERE "movies".id = $1;`;
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error in SELECT MOVIE query', err);
        res.sendStatus(500);
      });
  });

  router.get('/details/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE id=$1`;
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error in SELECT MOVIE query', err);
        res.sendStatus(500);
      });
  });

  router.put('/', (req, res) => {
    const updatedMovie = req.body;
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    const queryValues = [
      updatedMovie.newTitle,
      updatedMovie.newDescription,
      updatedMovie.id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing UPDATE MOVIE query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;