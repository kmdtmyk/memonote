<template>

  <div class='ui form reply'>
    <div class='field'>
      <label>name</label>
      <input type='text' v-model='comment.user.name'>
    </div>
    <div class='field'>
      <label>comment</label>
      <textarea v-model='comment.body'></textarea>
    </div>
    <button class='ui blue labeled submit icon button' type='button' v-on:click='submit'>
      <i class='icon edit'></i> Add Comment
    </button>
  </div>

</template>

<script>
export default {
  props: {
    comment: {
      user: Object,
    },
  },
  methods: {
    submit(){
      this.$emit('submit')
    }
  }
}
</script>

<style>
</style>
