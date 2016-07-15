<template>

  <div class='ui form'>

    <div class='field'>
      <label>title</label>
      <input type='text' v-model='memo.title'>
    </div>

    <div class='field'>
      <label>note</label>
      <markdown-editor :text.sync='memo.note'></markdown-editor>
    </div>

    <div class='field'>
      <label>file upload</label>
      <file-uploader v-on:uploaded='uploaded'></file-uploader>
    </div>

    <div v-if='memo.id' class='ui buttons'>
      <button class='ui button positive' v-on:click='save'>Save</button>
      <div class='or'></div>
      <button class='ui button' v-on:click='cancel'>Cancel</button>
    </div>

    <div v-else>
      <button class='ui button primary' v-on:click='save'>Save</button>
    </div>

  </div>

</template>

<script>
import FileUploader from '../../components/FileUploader'
import MarkdownEditor from '../../components/MarkdownEditor'

export default {
  props: {
    memo: Object,
  },
  components: {
    FileUploader,
    MarkdownEditor,
  },
  methods: {
    save(){
      this.$emit('save')
    },
    cancel(){
      this.$emit('cancel')
    },
    uploaded(files){
      // console.log(files)
      files.forEach((file) => {
        let text = ''
        if(isImage(file.type)){
          text = `![${file.filename}](${file.url})`
        }else{
          text = `[${file.filename}](${file.url})`
        }
        if(this.memo.note){
          this.memo.note += '\n'
        }
        this.memo.note += text
      })
    },
  },
}

function isImage(type){
  return type.split('/')[0] === 'image'
}

</script>

<style>
</style>
