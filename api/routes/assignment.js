var dbConfig    = require('../config/db');
var PostgreSQL  = require('pg').Pool;

var db = new PostgreSQL (dbConfig);

exports.getAssignmentList = function (req,res) {
    console.log('INFO: Get Assignemnt List');
    var pgQuery =  `SELECT * FROM Assignments`;
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

exports.getAssignment = function (req,res) {
    var pgQuery =  `SELECT * FROM Assignments WHERE id = $1`;
    var pgValues = [req.params.id];

    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack);
            res.status(400).send (error.stack);
        } else {
            if (results.rowCount == 0) {
                res.status(200).send ('Assignment not found');
            } else {
                res.status(200).send (results.rows[0]);
            }
        }
    });
}

exports.addAssignment = function (req,res) {
    var pgQuery =  `INSERT INTO Assignments (user_id, due_date, multipe_choice, open_answer, title, created, modified)
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    var pgValues = [
        req.body.user_id,
        req.body.due_date,
        req.body.multipe_choice,
        req.body.open_answer,
        req.body.title,
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


exports.deleteAssignment = function (req,res) {
    var pgQuery =  `DELETE FROM Assignments WHERE id = $1`;
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