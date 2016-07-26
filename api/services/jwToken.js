var jwt = require('jsonwebtoken')
const tokenSecret = 'secret'


module.exports.sign = function(payload){
  var options = {
    expiresIn: '180m',
  }
  return jwt.sign(payload, tokenSecret, options)
}

module.exports.verify = function(token, callback){
  var options = {}
  return jwt.verify(token, tokenSecret, options, callback)
}
