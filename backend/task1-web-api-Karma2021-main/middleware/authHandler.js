const jwt = require('jsonwebtoken')

const verifyAdmin = (req, res, next) => {
    if (req.user.role === 'admin') return next()
    res.status(403)
    next(new Error('you are not admin!'))
}
module.exports = {  verifyAdmin }