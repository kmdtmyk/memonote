<template>

  <h1>new memo</h1>

  <memo-form :memo='memo' v-on:save='save'></memo-form>

</template>

<script>
import socket from '../socket'
import MemoForm from './components/MemoForm'

export default {
  data(){
    return {
      memo: {},
    }
  },
  components: {
    MemoForm,
  },
  methods: {
    save(){
      socket.post('/api/memo', this.memo, (memo) => {
        console.log(memo)
        this.$router.go(`/memos/${memo.id}`)
      })
    },
  },
}
</script>

<style>
</style>
