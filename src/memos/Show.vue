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
      <file-uploader v-on:uploaded='uploaded'></file-uploader>
    </div>

    <div class='ui buttons'>
      <button class='ui button positive' v-on:click='save'>Save</button>
      <div class='or'></div>
      <button class='ui button' v-on:click='cancel'>Cancel</button>
    </div>

  </div>

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

</template>

<script>
import io from '../io'

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
    CommentList,
    CommentForm,
    MarkdownViewer,
    FileUploader,
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
    uploaded(files){
      // console.log(files)
      files.forEach((file) => {
        let text
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


function isImage(type){
  return type.split('/')[0] === 'image'
}

</script>

<style>
</style>
