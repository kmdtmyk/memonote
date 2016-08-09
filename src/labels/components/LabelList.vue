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
          <tag :color='label.style.backgroundColor'>{{label.name}}</tag>
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
import Tag from '../../components/Tag'
import socket from '../../socket'

export default {
  props: {
    labels: Array
  },
  components: {
    Tag,
  },
  methods: {
    del(label){
      socket.delete(`/api/label/${label.id}`, label => {
        // console.log('delete', label)
        this.labels = this.labels.filter(l => l.id !== label.id)
      })
    },
  },
}
</script>

<style>
</style>
