<template>

  <div class='ui top attached tabular menu'>
    <div class='active item' data-tab='write'>Write</div>
    <div class='item' data-tab='preview'>Preview</div>
  </div>

  <div class='ui bottom attached active tab segment' data-tab='write'>
    <div class='field'>
      <textarea v-model='text'></textarea>
    </div>
    <div class='field'>
      <label>file upload</label>
      <file-uploader v-on:uploaded='uploaded'></file-uploader>
    </div>
  </div>

  <div class='ui bottom attached tab segment' data-tab='preview'>
    <markdown-viewer :text='text'></markdown-viewer>
  </div>

</template>

<script>
import FileUploader from './FileUploader'
import MarkdownViewer from './MarkdownViewer'

export default {
  props: {
    text: {
      type: String,
      default(){
        return ''
      },
    }
  },
  components: {
    FileUploader,
    MarkdownViewer,
  },
  ready(){
    $('.menu .item').tab()
  },
  methods: {
    uploaded(files){
      // console.log(files)
      files.forEach((file) => {
        let add = ''
        if(isImage(file.type)){
          add = `![${file.filename}](${file.url})`
        }else{
          add = `[${file.filename}](${file.url})`
        }
        if(this.text){
          this.text += '\n'
        }
        this.text += add
      })
    },
  },
}

function isImage(type){
  return type.split('/')[0] === 'image'
}

</script>

<style scoped>
.item{
  cursor: pointer;
}
</style>
