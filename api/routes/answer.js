var dbConfig    = require('../config/db');
var PostgreSQL  = require('pg').Pool;

var db = new PostgreSQL (dbConfig);

exports.getAnswerList = function (req,res) {
    var pgQuery =  `SELECT * FROM Answers`;
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

exports.getAnswer = function (req,res) {
    var pgQuery =  `SELECT * FROM Answers WHERE id = $1`;
    var pgValues = [req.params.id];

    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack);
            res.status(400).send (error.stack);
        } else {
            if (results.rowCount == 0) {
                res.status(200).send ('Answer not found');
            } else {
                res.status(200).send (results.rows[0]);
            }
        }
    });
}

exports.addAnswer = function (req,res) {
    var pgQuery =  `INSERT INTO Answers (assignment_id, question_id, user_id, text, correct, created, modified)
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    var pgValues = [
        req.body.assignment_id,
        req.body.question_id,
        req.body.user_id,
        req.body.text,
        req.body.correct,
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

// exports.updateAnswer = function (req,res) {
// }

exports.deleteAnswer = function (req,res) {
    var pgQuery =  `DELETE FROM Answers WHERE id = $1`;
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