<script setup>
import { ref } from 'vue';

const searchStr = ref('');

function handleInput(e) {
  searchStr.value = e.target.value;
  console.log('Escribiendo:', searchStr.value);
}

function handleSubmit() {
  console.log('Buscando:', searchStr.value);
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      :value="searchStr"
      @input="handleInput"
      placeholder="Search article"
    />
    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
</style>
