var jwt = require('jsonwebtoken');
var errorModule = require('./error.js');
var createError = errorModule.createError;

module.exports.verifyToken = function(req, res, next) {
    var token = req.cookies.access_token;
    if (!token) return next(createError(401, "You are not authenticated"));

    jwt.verify(token, process.env.JWT, function(err, user) {
        if (err) return next(createError(403, "Token is not valid"));
        req.user = user;
        next(); // after verification continue where we left
    });
};
