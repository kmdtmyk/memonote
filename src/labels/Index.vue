<template>

  <h1>label list</h1>

  <div class='ui form'>

    <div class='inline fields'>

      <div class='field'>
        <label>name</label>
        <input type='text' v-model='newLabel.name'>
      </div>

      <div class='field'>
        <label>color</label>
        <input type='text' v-model='newLabel.color'>
      </div>

      <button class='ui button primary' v-on:click='add'>Add label</button>

    </div>
    
  </div>

  <label-list :labels.sync='labels'></label-list>

</template>

<script>
import LabelList from './components/LabelList'
import socket from '../socket'

export default {
  data() {
    return {
      labels: [],
      newLabel: {},
    }
  },
  components: {
    LabelList,
  },
  route: {
    data({ to, next }){
      socket.get(`/api/label`, (labels) => {
        next({labels})
      })
    },
  },
  methods: {
    add(){
      socket.post('/api/label', this.newLabel, (label) => {
        this.labels.push(label)
        this.newLabel = {}
      })
    }
  },
}
</script>

<style>
</style>
