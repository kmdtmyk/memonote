<template>

  <div class='ui top attached tabular menu'>
    <div class='active item' data-tab='write'>Write</div>
    <div class='item' data-tab='preview'>Preview</div>
  </div>
  <div class='ui bottom attached active tab segment' data-tab='write'>
    <textarea v-model='text'></textarea>
  </div>
  <div class='ui bottom attached tab segment' data-tab='preview'>
    <markdown-viewer :text='text'></markdown-viewer>
  </div>

</template>

<script>
import MarkdownViewer from './MarkdownViewer'

export default {
  props: {
    text: String,
  },
  components: {
    MarkdownViewer,
  },
  ready(){
    $('.menu .item').tab()
  }
}
</script>

<style scoped>
.item{
  cursor: pointer;
}
</style>
