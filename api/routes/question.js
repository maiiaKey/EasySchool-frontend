var dbConfig    = require('../config/db');
var PostgreSQL  = require('pg').Pool;

var db = new PostgreSQL (dbConfig);

exports.getQuestionList = function (req,res) {
    var pgQuery =  `SELECT * FROM Questions`;
    db.query (pgQuery, (error, results) => {
        if (error) {
            console.log(error.stack);
            res.status(500).send (error.stack);
        } else {
            res.status(200).send ({
                "count": results.rowCount,
                "rows": results.rows
            })
        }
    });
}

exports.getQuestion = function (req,res) {
    var pgQuery =  `SELECT * FROM Questions WHERE id = $1`;
    var pgValues = [req.params.id];

    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack);
            res.status(400).send (error.stack);
        } else {
            if (results.rowCount == 0) {
                res.status(200).send ('Question not found');
            } else {
                res.status(200).send (results.rows[0]);
            }
        }
    });
}

exports.addQuestion = function (req,res) {
    var pgQuery =  `INSERT INTO Questions (assignment_id, type, text, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3, created, modified)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    var pgValues = [
        req.body.assignment_id,
        req.body.type,
        req.body.text,
        req.body.correct_answer,
        req.body.incorrect_answer_1,
        req.body.incorrect_answer_2,
        req.body.incorrect_answer_3,
        new Date(),
        new Date()
    ];
    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack)
            res.status(400).send (error.stack)
        } else {
            res.status(201).send (results.rows[0]);
        }
    })
}

// exports.updateQuestion = function (req,res) {
// }

exports.deleteQuestion = function (req,res) {
    var pgQuery =  `DELETE FROM Questions WHERE id = $1`;
    var pgValues = [req.params.id];

    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack)
            res.status(400).send (error.stack)
        } else {
            res.status(204).send (results.rows[0]);
        }
    })
}