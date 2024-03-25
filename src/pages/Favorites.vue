<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const favorites = ref([])
onMounted(async () => {
  try {
    const {data} = await axios.get('https://a2c0289b3ba0d20f.mokky.dev/favorites')

    console.log(data)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>

</template>

<style scoped>

</style>