import Store from 'store'
import Request from '../request'


export default class {

  static isLogin(){

  }

  static signup(user, callback){
    // console.log(user)
    Request
      .post('user/create')
      .send(user)
      .end((err, res) => {
        if(!err){
          var token = res.body.token
          Store.set('token', token)
        }
        callback(err, res)
      })
  }

  static login(user, callback){
    
  }

  static logout(callback){
    Store.remove('token')
  }

}
