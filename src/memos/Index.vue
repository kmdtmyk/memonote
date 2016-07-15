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
      <a class='ui button primary' v-link='{path: `/memos/new`}'>new memo</a>
    </div>
  </div>

  <div v-show='!$loadingRouteData'>
    <memo-list :memos='memos' ></memo-list>
  </div>

</template>

<script>
import io from '../io'
import MemoList from './components/MemoList'

export default {
  data() {
    return {
      memos: [],
    }
  },
  components: {
    MemoList,
  },
  route: {
    data({ to, next }){
      io.socket.get('/api/memo', (memos) => {
        // console.log(memos)
        next({memos})
      })
    },
  },
}
</script>

<style>
</style>
