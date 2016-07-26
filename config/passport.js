//http://nantokaworks.com/sails-use-passport01/

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt')

function findById(id, fn){
  User.findOne(id)
    .exec((err, user) => {
      if(err){
        return fn(null, null)
      }else{
        return fn(null, user)
      }
    })
}

function findByname(name, fn){
  User.findOne({
    name: name
  })
    .exec((err, user) => {
      if(err){
        return fn(null, null)
      }else{
        return fn(null, user)
      }
    })
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy(
  function(name, password, done){
    process.nextTick(() => {
      
    })
  }
))
