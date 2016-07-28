import Store from 'store'
import base64 from 'base64-coder-node'
import Request from '../request'


let Auth = {

  currentUser: {},

  signup(user, callback){
    Request
      .post('user/create')
      .send(user)
      .end((err, res) => {
        if(!err){
          var token = res.body.token
          Store.set('token', token)
          this.setCurrentUser()
        }
        callback(err, res)
      })
  },

  login(user, callback){

  },

  logout(callback){
    Store.remove('token')
    this.setCurrentUser()
    callback()
  },

  getToken(){
    return Store.get('token')
  },

  setCurrentUser(){
    let token = this.getToken()
    if(!token){
      this.currentUser.id = ''
      this.currentUser.name = ''
      return
    }
    let user = JSON.parse(base64().decode(token.split('.')[1])).user
    Object.assign(this.currentUser, user)
  },

}

Auth.setCurrentUser()

export default Auth
