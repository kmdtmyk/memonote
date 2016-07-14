<template>

  <h1>new memo</h1>

  <form class='ui form' action='/memo/create' method='post'>

    <div class='field'>
      <label>title</label>
      <input type='text' name='memo[title]'>
    </div>

    <div class='field'>
      <label>note</label>
      <textarea name='memo[note]'></textarea>
    </div>

    <button class='ui button primary' type='submit'>submit</button>

  </form>

</template>

<script>
// export default {
//   data: function () {
//     return {
//     }
//   },
//   computed: {},
//   ready: function () {},
//   attached: function () {},
//   methods: {},
//   components: {}
// }
</script>

<style>
</style>
