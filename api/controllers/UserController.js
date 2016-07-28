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
        summary: 'Password doesn\'t match.',
      }
      return res.json(err.status, err)
    }

    User.create(user).exec((err, user) => {
      if(err){
        return res.json(err.status, err)
      }
      let token = jwToken.sign({
        id: user.id,
        name: user.name,
      })
      res.json(200, {user, token})
    })

  },

};
