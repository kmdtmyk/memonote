<template>
  <h1>memo list</h1>

  <div class='ui menu'>
    <form class='item'>
      <div class='ui icon input search'>
        <input class='prompt' type='seach' placeholder='search' name='q'>
        <i class='search icon'></i>
      </div>
    </form>
    <div class='right item'>
      <a class='ui button primary' v-link='{path: `/memo/new`}'>new memo</a>
    </div>
  </div>

  <table class='ui table celled'>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>comments</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='memo in memos'>
        <td>
          {{memo.id}}
        </td>
        <td>
          <a v-link='{path: `/memos/${memo.id}`}'>{{memo.title}}</a>
        </td>
        <td>
          {{memo.comments.length}}
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import socketIOClient from 'socket.io-client'
import sailsIOClient from 'sails.io.js'

var io = sailsIOClient(socketIOClient)
io.sails.url = 'http://localhost:1337'

export default {
  data() {
    return {
      memos: [],
    }
  },
  route: {
    data({ to, next }){
      io.socket.get('/api/memo', (memos) => {
        console.log(memos)
        next({memos})
      })
    },
  },
}
</script>

<style>
</style>
