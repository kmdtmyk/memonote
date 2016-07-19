<template>

  <h1>memo list</h1>

  <div class='ui menu'>
    <form class='item' v-on:submit.prevent='search'>
      <div class='ui icon input search'>
        <input class='prompt' type='seach' placeholder='search' v-model='q'>
        <i class='search icon'></i>
      </div>
    </form>
    <div class='right item'>
      <a class='ui button primary' v-link='{path: `/memos/new`}'>new memo</a>
    </div>
  </div>

  <memo-list :memos='memos'></memo-list>

</template>

<script>
import io from '../io'
import MemoList from './components/MemoList'

export default {
  data() {
    return {
      memos: [],
      q: this.$route.query.q || '',
    }
  },
  components: {
    MemoList,
  },
  route: {
    data({ to, next }){
      io.socket.get(`/memo?q=${this.q}`, (memos) => {
        next({memos})
      })
    },
  },
  methods: {
    search(){
      this.$router.go('?q=' + this.q)
    },
  },
}
</script>

<style>
</style>
