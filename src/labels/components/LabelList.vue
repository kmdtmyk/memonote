<template>

  <table class='ui table striped'>
    <thead>
      <tr>
        <th colspan='2'>
          labels
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='label in labels'>
        <td>
          <span class='ui tag label' :style='label.style'>{{label.name}}</span>
        </td>
        <td class='right aligned'>
          <button class='ui button primary'>edit</button>
          <button class='ui button negative' v-on:click='del(label)'>delete</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import socket from '../../socket'

export default {
  props: {
    labels: Array
  },
  methods: {
    del(label){
      socket.delete(`/api/label/${label.id}`, label => {
        // console.log('delete', label)
        this.labels = this.labels.filter(l => return l.id !== label.id)
      })
    },
  },
}
</script>

<style>
</style>
