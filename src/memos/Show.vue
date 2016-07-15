<template>

  <div v-show='!$loadingRouteData'>

    <h1>
      #{{memo.id}} {{memo.title}}
    </h1>

    <memo-form v-if='editing' :memo='editMemo' v-on:save='save' v-on:cancel='cancel'></memo-form>

    <div v-else>

      <div class='ui segment'>
        <markdown-viewer :text='memo.note'></markdown-viewer>
      </div>

      <div>
        <button class='ui button primary' v-on:click='edit'>edit</button>
        <button class='ui button negative' v-on:click='delete'>delete</button>
      </div>

    </div>

    <comment-list :comments='memo.comments' v-on:delete='deleteComment'></comment-list>

    <comment-form :comment='newComment' v-on:submit='addComment'></comment-form>

  </div>

</template>

<script>
import io from '../io'

import MemoForm from './MemoForm'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import MarkdownViewer from '../components/MarkdownViewer'
import FileUploader from '../components/FileUploader'

export default {
  data(){
    return {
      memo: {
        comments: [],
      },
      newComment: {
        user: {},
      },
      editing: false,
      editMemo: {},
    }
  },
  components: {
    MemoForm,
    CommentList,
    CommentForm,
    MarkdownViewer,
  },
  route: {
    data({ to, next }){
      let id = to.params.id
      io.socket.get(`/api/memo/${id}`, (memo) => {
        next({memo})
      })
    },
    activate(transition){
      // console.log('activate', transition)
      io.socket.on('memo', this.onSocket)
      transition.next()
    },
    deactivate(transition){
      // console.log('deactivate', transition)
      io.socket.off('memo', this.onSocket)
      transition.next()
    },
  },
  methods: {
    onSocket(msg){
      console.log(msg)
      let id = msg.id
      if(id !== this.memo.id){
        return
      }
      io.socket.get(`/api/memo/${id}`, (memo) => {
        this.memo = memo
      })
    },
    edit(){
      this.editMemo = {
        title: this.memo.title,
        note: this.memo.note,
      }
      this.editing = true
    },
    delete(){

    },
    save(){
      if(!this.editing){
        return
      }
      io.socket.put('/api/memo/' + this.memo.id, this.editMemo, (memo) => {
        Object.assign(this.memo, this.editMemo)
        this.editing = false
      })
    },
    cancel(){
      this.editing = false
    },
    addComment(e){
      this.newComment.memo = this.memo.id
      io.socket.post('/api/memoComment', this.newComment, (res) => {
        this.memo.comments.push(res)
      })
      this.newComment = {
        user: {},
      }
    },
    deleteComment(comment){
      let id = comment.id
      io.socket.delete('/api/memoComment/' + id, (res) => {
        console.log('delete', res)
        this.memo.comments = this.memo.comments.filter((comment) => comment.id !== id)
      })
    },
  },
}
</script>

<style>
</style>
