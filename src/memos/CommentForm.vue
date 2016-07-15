<template>

  <form class='ui form reply' v-on:submit.prevent='submit'>
    <div class='field'>
      <label>name</label>
      <input type='text' v-model='comment.user.name'>
    </div>
    <div class='field'>
      <label>comment</label>
      <textarea v-model='comment.body'></textarea>
    </div>
    <button class='ui blue labeled submit icon button' type='submit'>
      <i class='icon edit'></i> Add Comment
    </button>
  </form>

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
    }
  }
}
</script>

<style>
</style>
