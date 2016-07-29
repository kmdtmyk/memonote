/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create(req, res){
    var user = req.body
    if(user.password !== user.confirmPassword){
      var err = {
        status: 401,
        message: 'Password doesn\'t match.',
      }
      return res.json(err.status, err)
    }

    User.create(user).exec((err, user) => {
      if(err){
        return res.json(err.status, err)
      }

      let token = createToken(user)
      return res.json(200, {user, token})
    })

  },
  login(req, res){
    var {name, password} = req.body
    if(!name){
      var err = {
        status: 401,
        message: 'Name required.',
      }
      return res.json(err.status, err)
    }
    User.findOne({name: name}, (err, user) => {
      if(!user){
        var err = {
          status: 401,
          message: 'Invalid name or passowrd',
        }
        return res.json(err.status, err)
      }
      User.comparePassword(password, user, (err, valid) => {
        if(err){
          var err = {
            status: 403,
            message: 'Forbidden',
          }
          return res.json(err.status, err)
        }
        if(!valid){
          var err = {
            status: 401,
            message: 'Invalid name or passowrd',
          }
          return res.json(err.status, err)
        }

        let token = createToken(user)
        return res.json(200, {user, token})
      })

    })

  },

};

function createToken(user){
  let token = jwToken.sign({
    id: user.id,
    name: user.name,
  })
  return token
}
