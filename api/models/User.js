/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt')

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    toJSON(){
      var user = this.toObject()
      delete user.password
      return user
    },
  },

  beforeCreate(user, cb){
    var rounds = 10
    bcrypt.genSalt(rounds, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if(err){
          console.log(err)
          cb(err)
        }else{
          user.password = hash
          cb(null, user)
        }
      })
    })
  },

  comparePassword(password, user, cb){
    bcrypt.compare(password, user.password, (err, match) => {
      if(err){
        cb(err)
      }
      if(match){
        cb(null, true)
      }else{
        cb(err)
      }
    })
  },

};
