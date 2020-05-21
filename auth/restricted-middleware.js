const jwt = require("jsonwebtoken");
const configVars = require("../config/vars.js");

module.exports = (req, res, next) => {
    // add code here to verify users are logged in
    const token = req.headers.authorization;
    if (token) {
        const secret = configVars.jwtSecret;

        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                // the token is invalid
                res.status(401).json({ message: "You cannot access without valid credentials." });
            } else {
                // the token is good
                req.jwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: "Please provide the authentication information" });
    }
};

/* TO DO? Might add a whitelist and call this function from server instead of users-router?

const express = require('express');

const db = require('../database/connection');

module.exports = {
    restricted,
}

function restricted(req, res, next) {
    console.log(req.url)

    // swithing to a blacklist instead to match the README
    const blacklist = '/api/users/*';
    if (blacklist.indexOf(req.url) === -1) {
        next();
    }
    else if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ you: "You must log in to access this." });
    }
}
// whitelist for the unrestricted
// function restricted(req, res, next) {
//     console.log(req.url)

//     // whitelist for the unrestricted
//     const whitelist = ['/', '/api/register', '/api/login'];
//     if (whitelist.indexOf(req.url) !== -1) {
//         next();
//     }
//     else if (req.session && req.session.loggedIn) {
//         next();
//     } else {
//         res.status(401).json({ you: "You must log in to access this." });
//     }
// }
*/