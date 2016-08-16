import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

import config from '../config'
import Auth from '../auth'

let io = sailsIOClient(socketIOClient)
// io.sails.url = config.apiServer


export default class{

  static get(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.get(...args)
  }

  static post(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.post(...args)
  }

  static put(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.put(...args)
  }

  static delete(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.delete(...args)
  }

  static on(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.on(...args)
  }

  static off(...args){
    io.sails.headers = {
      'Authorization': 'Bearer ' + Auth.getToken()
    }
    io.socket.off(...args)
  }

}
