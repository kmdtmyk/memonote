<template>
  <span class='ui tag label' :style='style'>
    <slot></slot>
  </span>
</template>

<script>
import tinycolor from 'tinycolor2'

export default {
  props: {
    color: String
  },
  computed: {
    style() {
      return {
        color: tinycolor(this.color).isLight() ? '#000' : '#fff',
        backgroundColor: this.color,
      }
    },
  },
}
</script>

<style>
</style>
