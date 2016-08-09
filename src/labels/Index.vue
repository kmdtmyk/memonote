<template>

  <h1>label list</h1>

  <div class='ui form'>
    <div class='inline fields'>
      <div class='field'>
        <label>name</label>
        <input type='text' v-model='newLabel.name'>
      </div>
      <div class='field'>
        <label>font color</label>
        <input type='text' v-model='newLabel.style.color'>
      </div>
      <div class='field'>
        <label>background color</label>
        <input type='text' v-model='newLabel.style.backgroundColor'>
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
      newLabel: {
        style: {},
      },
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
        this.newLabel = {
          style: {},
        }
      })
    }
  },
}
</script>

<style>
</style>
