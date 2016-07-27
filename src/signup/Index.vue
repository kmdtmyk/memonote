<template>

  <h1>Sginup</h1>

  <div class='ui form'>

    <div class='field'>
      <label>name</label>
      <input type='text' v-model='user.name'>
    </div>

    <div class='field'>
      <label>password</label>
      <input type='password' v-model='user.password'>
    </div>

    <div class='field'>
      <label>confirm password</label>
      <input type='password' v-model='user.confirmPassword'>
    </div>

    <error-message v-for='errorMessage in errorMessages' :title='errorMessage.title' :message='errorMessage.message'></error-message>

    <div>
      <button class='ui button primary' v-on:click='signup'>Signup</button>
    </div>


  </div>

</template>

<script>
import ErrorMessage from '../components/ErrorMessage'

export default {
  data(){
    return {
      user: {},
      errorMessages: [],
    }
  },
  components: {
    ErrorMessage
  },
  methods: {
    signup(){
      // console.log('signup')
      this.errorMessages.push({title:'title',message:'message'})
    },
  },
}
</script>

<style>
</style>
