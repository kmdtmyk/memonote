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
          <button class='ui button negative' v-on:click=''>delete</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  props: {
    labels: Array
  },
  methods: {
    
  },
}
</script>

<style>
</style>
