<template>
  <div>
    <navigation-bar></navigation-bar>
    <container>
      <router-view></router-view>
    </container>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Container from './components/Container'

export default {
  components: {
    NavigationBar,
    Container,
  },
}
</script>

<style>
</style>
