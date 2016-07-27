<template>
  <div class='ui menu inverted'>
    <a class='item' v-link='{path: "/"}'>Home</a>
    <a class='item' v-link='{path: "/memos"}'>Memo</a>
    <a class='item' v-link='{path: "/labels"}'>Label</a>
    <a class='item' v-link='{path: "/users"}'>User</a>
    <div class='right menu'>
      <a class='item' v-link='{path: "/login"}'>Login</a>
      <a class='item' v-link='{path: "/signup"}'>Signup</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
