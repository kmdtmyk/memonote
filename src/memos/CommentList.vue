<template>
  
  <div class='ui comments'>
    <h3 class='ui dividing header'>
      Comments ({{comments.length}})
    </h3>
    <div class='comment' v-for='comment in comments'>
      <span class='author'>
        {{comment.user.name}}
      </span>
      <div class='metadata'>
        <span class="date">{{comment.createdAt}}</span>
      </div>
      <div class='ui segment'>
        {{comment.body}}
      </div>
      <div class='actions'>
        <a href='javascript:' v-on:click='deleteComment(comment)'>delete</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    comments: []
  },
}
</script>

<style>
</style>
