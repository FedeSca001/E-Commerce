<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <p>{{ msg }} !!!</p>
</template>

<style scoped>

</style>
