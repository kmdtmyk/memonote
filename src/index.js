import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  saveScrollPosition: true,
})

router.map(routes)

const app = Vue.extend(App)
router.start(app, '#app')


// import io from './io'
import Push from 'push.js'


// io.socket.on('memo', (msg) => {
//
//   Push.create('title', {
//     tag: 'tag',
//     onClick(){
//       window.focus()
//       this.close()
//     },
//   })
//
// })


// io.socket.get('/api/memo', (memos) => {
  // console.log(memos)
// })
