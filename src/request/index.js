import superagent from 'superagent'
import config from '../config'



export default class{

  static post(api){
    return superagent.post(config.apiServer + api)
  }

}
