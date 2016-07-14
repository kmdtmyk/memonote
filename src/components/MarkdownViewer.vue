<template>
  {{{markedText}}}
</template>

<script>
import marked from 'marked'

export default {
  props: {
    text: String,
  },
  computed: {
    markedText(){
      if(!this.text){
        return ''
      }
      return marked(this.text)
    },
  },
}
</script>

<style>
</style>
