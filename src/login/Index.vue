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

    <error-message v-for='errorMessage in errorMessages' :title='errorMessage.title' :message='errorMessage.message'></error-message>

    <div>
      <button class='ui button primary' v-on:click='login'>Login</button>
    </div>

  </div>

</template>

<script>
import ErrorMessage from '../components/ErrorMessage'
import Auth from '../auth'

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
    login(){
      Auth.login(this.user, (err, res) => {
        if(err){
          this.errorMessages.unshift({title:'error', message: res.body.message})
          return
        }
        this.$router.go('/memos')
      })
    },
  },
}
</script>

<style>
</style>
