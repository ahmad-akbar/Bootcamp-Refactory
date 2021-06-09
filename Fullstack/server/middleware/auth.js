const { checkToken } = require('../helpers/jwt')
const { User, Todo } = require('../models/index')

class Auth {
  static authentication(req, res, next) {
    try {
      let decoded = checkToken(req.headers.access_token)

      User.findOne({
        where: {
          email: decoded.email
        }
      })
        .then(data => {
          if (!data) {
            throw ({ name: 'JsonWebTokenError', message: 'Please Login First' })
          }
          else {
            req.user = data
            next()
          }
        })
        .catch(err => {
          next(err)
        })
    } catch (err) {
      next({ name: 'JsonWebTokenError', message: 'Please Login First' })
    }
  }
}

module.exports = Auth