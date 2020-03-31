var dbConfig    = require('../config/db');
var PostgreSQL  = require('pg').Pool;

var db = new PostgreSQL (dbConfig);

exports.getUserList = function (req,res) {
    var pgQuery =  `SELECT id, username, first_name, last_name, teacher, created, modified FROM Users`;
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

exports.getUser = function (req,res) {
    var pgQuery =  `SELECT id, username, first_name, last_name, teacher, created, modified FROM Users WHERE id = $1`;
    var pgValues = [req.params.id];

    db.query (pgQuery, pgValues, (error, results) => {
        if (error) {
            console.log(error.stack);
            res.status(400).send (error.stack);
        } else {
            if (results.rowCount == 0) {
                res.status(200).send ('User not found');
            } else {
                res.status(200).send (results.rows[0]);
            }
        }
    });
}

exports.addUser = function (req,res) {
    var pgQuery =  `INSERT INTO Users (username, password, first_name, last_name, teacher, created, modified)
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, username, first_name, last_name, teacher, created, modified`;
    var pgValues = [
        req.body.username,
        1,
        req.body.first_name,
        req.body.last_name,
        req.body.teacher,
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

 exports.updateUser = function (req,res) {
    if (req.body.username!=="" && req.body.username!==null) {
        var pgValues = [
            req.params.id,
            req.body.username,
        ];
        var pgQuery = `UPDATE Users SET username = $2 WHERE id = $1`;
        db.query (pgQuery, pgValues, (error, results) => {
            if (error) {
                console.log(error.stack)
                res.status(400).send (error.stack)
            } else {
                res.status(201).send (results.rows[0]);
            }
        }) 
    }
    if (req.body.first_name!=="" && req.body.first_name!==null) {
        var pgValues = [
            req.params.id,
            req.body.first_name,
        ];
        var pgQuery = `UPDATE Users SET first_name = $2 WHERE id = $1`;
        db.query (pgQuery, pgValues, (error, results) => {
            if (error) {
                console.log(error.stack)
                res.status(400).send (error.stack)
            } else {
                res.status(201).send (results.rows[0]);
            }
        }) 
    }
    if (req.body.last_name!=="" && req.body.last_name!==null) {
        var pgValues = [
            req.params.id,
            req.body.last_name,
        ];
        var pgQuery = `UPDATE Users SET last_name = $2 WHERE id = $1`;
        db.query (pgQuery, pgValues, (error, results) => {
            if (error) {
                console.log(error.stack)
                res.status(400).send (error.stack)
            } else {
                res.status(201).send (results.rows[0]);
            }
        }) 
    }
    if (req.body.password!=="" && req.body.password!==null) {
        var pgValues = [
            req.params.id,
            req.body.password,
        ];
        var pgQuery = `UPDATE Users SET password = $2 WHERE id = $1`;
        db.query (pgQuery, pgValues, (error, results) => {
            if (error) {
                console.log(error.stack)
                res.status(400).send (error.stack)
            } else {
                res.status(201).send (results.rows[0]);
            }
        }) 
    }
    // console.log(pgValues);
    // console.log(req.params.id);
    // res.status(200).send("OK");
 }

exports.deleteUser = function (req,res) {
    var pgQuery =  `DELETE FROM Users WHERE id = $1`;
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

exports.isTeacher = function(req,res){
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization.split(' ')[1], secret.secretToken);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        var userId = decoded.id;
        return res.send(userId);
         
    }
    return res.send(500);
}