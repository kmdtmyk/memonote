<template>

  <table class='ui table celled'>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>comments</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='memo in memos'>
        <td>
          {{memo.id}}
        </td>
        <td>
          <a v-link='{path: `/memos/${memo.id}`}'>{{memo.title}}</a>
        </td>
        <td>
          {{memo.comments.length}}
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  props: {
    memos: Array
  },
}
</script>

<style>
</style>
