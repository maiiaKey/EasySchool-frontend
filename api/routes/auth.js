let jwt = require('jsonwebtoken');
const config = require('../config/config');
var dbConfig    = require('../config/db');
var PostgreSQL  = require('pg').Pool;

var db = new PostgreSQL (dbConfig);

exports.login = function (req, res) {
    console.log('INFO: Authenticating user ' + req.body.username)
    var reqUsername = req.body.username;
    var reqPassword = req.body.password;

    if (reqUsername && reqPassword) {
        var pgQuery =  `SELECT * FROM Users WHERE username = $1`;
        var pgValues = [reqUsername];
        db.query (pgQuery, pgValues, (error, results) => {
            if (error) {
                console.log(error.stack);
                res.status(400).send({error: error.stack});
            } else {
                console.log(results.rows[0]);
                if (reqUsername === results.rows[0].username && reqPassword === results.rows[0].password) {
                    let token = jwt.sign( {username: results.rows[0].id}, config.secret, { expiresIn: '24h' } );
                    res.status(200).json({
                        success: true,
                        message: 'Authentication successful!',
                        token: token,
                        expiresIn: '1d'
                    });
                } else {
                    res.status(403).json({message: 'Incorrect username or password'});
                }
            }
        });
    } else {
        res.status(400).json({message: 'Authentication failed! Check username and password'});
    }
}