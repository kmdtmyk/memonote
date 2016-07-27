<template>

  <div v-if='show' class='ui negative message'>
    <i class='close icon' v-on:click='close'></i>
    <div class='header'>
      {{title}}
    </div>
    <p>
      {{message}}
    </p>
  </div>

</template>

<script>
export default {
  data(){
    return {
      show: true,
    }
  },
  props: ['title', 'message'],
  methods: {
    close(){
      this.show = false
    },
  },
}
</script>

<style>
</style>
