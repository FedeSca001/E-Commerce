<script setup>
import { ref } from 'vue'

const searchStr = ref('')

function handleInput(e) {
  searchStr.value = e.target.value
  console.log('Escribiendo:', searchStr.value)
}

function handleSubmit() {
  console.log('Buscando:', searchStr.value)
}
</script>

<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <input
      class="search-input"
      type="text"
      :value="searchStr"
      @input="handleInput"
      placeholder="Search article..."
    />
    <button class="search-button" type="submit">Search</button>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 400px;
  margin: 0 10px;
}

.search-input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  border-color: #fbff00;
  border: 1px solid #fbff00;
  outline: none;
}

.search-button {
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-black-mute);
  color: var(--vt-c-white-mute);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
