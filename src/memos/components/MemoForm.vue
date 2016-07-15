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
import MarkdownEditor from '../../components/MarkdownEditor'

export default {
  props: {
    memo: Object,
  },
  components: {
    MarkdownEditor,
  },
  methods: {
    save(){
      this.$emit('save')
    },
    cancel(){
      this.$emit('cancel')
    },
  },
}
</script>

<style>
</style>
