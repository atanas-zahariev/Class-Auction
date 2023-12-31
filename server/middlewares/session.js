const { verifiToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];
    if (token) {
        try {
            const userData = verifiToken(token);
            req.user = userData;
            req.token = token;
        } catch (error) { 

         res.status(401).json(['Invalid authorization token']);
         return
        }
    }
    next();
};