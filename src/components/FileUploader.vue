<template>
  <input type='file' v-on:change='change' multiple>
</template>

<script>
import superagent from 'superagent'

export default {
  methods: {
    change(e){
      let files = e.target.files
      upload(files, (err, res) => {
        let files = res.body.files
        this.$emit('uploaded', files)
        e.target.value = ''
      })
    }
  },
}

function upload(files, callback){
  var request = superagent.post('http://localhost:1337/multimedia/upload')
  Array.prototype.forEach.call(files, (file) => {
    request.attach('file', file)
  })
  request.end(callback)
}

</script>

<style>
</style>
