<template>
  <div class='ui menu inverted'>
    <a class='item' v-link='{path: "/"}'>Home</a>
    <a class='item' v-link='{path: "/memos"}'>Memo</a>
    <a class='item' v-link='{path: "/labels"}'>Label</a>
    <a class='item' v-link='{path: "/users"}'>User</a>
    <div class='right menu'>
      <a class='item' v-link='{path: "/login"}' v-if='!user.name'>Login</a>
      <a class='item' v-link='{path: "/signup"}' v-if='!user.name'>Signup</a>
      <a class='item' v-if='user.name' @click='test'><i class="user icon"></i> {{user.name}}</a>
      <a class='item' v-if='user.name' @click='logout'>Logout</a>
    </div>
  </div>
</template>

<script>
import Auth from '../auth'

export default {
  data(){
    return {
      user: Auth.currentUser,
    }
  },
  methods: {
    logout(){
      Auth.logout(() => {
        this.$router.go('/login')
      })
    },
    test(){
      console.log(this.user)
    }
  },
}
</script>

<style>
</style>
