<template>

  <h1>login</h1>

  <div class='ui form'>

    <div class='field'>
      <label>name</label>
      <input type='text' v-model='user.name'>
    </div>

    <div class='field'>
      <label>password</label>
      <input type='password' v-model='user.password'>
    </div>

    <div>
      <button class='ui button primary' v-on:click='login'>Login</button>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      user: {},
    }
  },
  methods: {
    login(){
      console.log('login')
    },
  },
}
</script>

<style>
</style>
