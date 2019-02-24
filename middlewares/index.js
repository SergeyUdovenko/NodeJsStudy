const checkAuth = require('./check-auth')
const queryParsingMiddleware = (req, res, next) => {
    const params = req.params;
    req.parsedQuery = params;
    next();
};

module.exports = {
    queryParsingMiddleware,
    checkAuth
};