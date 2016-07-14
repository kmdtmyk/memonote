<template>

  <h1>
    #{{memo.id}} {{memo.title}}
  </h1>

  <div class='ui form' v-if='editing'>

    <div class='field'>
      <label>title</label>
      <input type='text' v-model='editMemo.title'>
    </div>

    <div class='field'>
      <label>note</label>
      <textarea v-model='editMemo.note'></textarea>
    </div>

    <div class='field'>
      <label>file upload</label>
      <input type='file' v-model='file' v-on:change='upload' multiple>
    </div>

    <div class='ui buttons'>
      <button class='ui button positive' v-on:click='save'>Save</button>
      <div class='or'></div>
      <button class='ui button' v-on:click='cancel'>Cancel</button>
    </div>

  </div>

  <div v-else>

    <div class='ui segment'>
      {{{markedNote}}}
    </div>

    <div>
      <button class='ui button primary' v-on:click='edit'>edit</button>
      <button class='ui button negative' v-on:click='delete'>delete</button>
    </div>

  </div>

  <comment-list :comments='memo.comments'></comment-list>

  <comment-form :comment='newComment' v-on:submit='addComment'></comment-form>

</template>

<script>
import io from '../io'
import marked from 'marked'

import CommentList from './CommentList'
import CommentForm from './CommentForm'

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
      file: '',
    }
  },
  computed: {
    markedNote(){
      if(!this.memo.note){
        return ''
      }
      return marked(this.memo.note)
    },
  },
  components: {
    CommentList,
    CommentForm,
  },
  route: {
    data({ to, next }){
      let id = to.params.id
      io.socket.get(`/api/memo/${id}`, (memo) => {
        // console.log(memo)
        next({memo})
      })
    },
  },
  methods: {
    edit(){
      this.editMemo = {
        title: this.memo.title,
        note: this.memo.note,
      }
      this.file = ''
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
      var id = comment.id
      io.socket.delete('/api/memoComment/' + id, (res) => {
        console.log('delete', res)
        this.memo.comments = this.memo.comments.filter((comment) => comment.id !== id)
      })
    },
    upload(e){
      var files = e.target.files
      upload(files, (err, res) => {
        console.log(res.body)
        var files = res.body.files
        files.forEach((file) => {
          var text
          if(isImage(file.type)){
            text = `![${file.filename}](${file.url})`
          }else{
            text = `[${file.filename}](${file.url})`
          }
          if(this.editMemo.note){
            this.editMemo.note += '\n'
          }
          this.editMemo.note += text
        })
        this.file = ''
      })
    },
  }
}

// io.socket.on('memo', (res) => {
//   console.log('on', res)
//   fetch(vue, id)
// })

// fetch(vue, id)

// function fetch(vue, id){
//   io.socket.get('/api/memo/' + id , (memo) => {
//     console.log('get', memo)
//     vue.memo = memo
//   })
// }

function upload(files, callback){
  var request = superagent.post('/multimedia/upload')
  Array.prototype.forEach.call(files, (file) => {
    request.attach('file', file)
  })
  request.end(callback)
}

function isImage(type){
  return type.split('/')[0] === 'image'
}

</script>

<style>
</style>
