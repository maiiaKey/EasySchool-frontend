let jwt = require('jsonwebtoken');
const config = require('../config/config');

async function jwtValidation(req, res, next) {

    let token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({message: 'NO_TOKEN_PROVIDED'}); //if the token is null
    } else {
        let tokenContent = token.split(' ');
        if (tokenContent.length < 2 || tokenContent[0] !== 'Bearer') {
            res.send(401).json({message: 'INCORRECT_TOKEN_FORMAT'}); 
        }
        token = tokenContent[1]; //only the token itself is now stored in var token 
    }
    jwt.verify(token, config.secret, (err, res) => {
        if (err) {
            res.send(401).json({message: err.message, name: err.name}); //if the token isn't valid
        } else {
            req.decoded = res; //if the token is valid
            next();
        }
    });
};

module.exports = jwtValidation;