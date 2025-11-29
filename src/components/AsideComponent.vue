<script setup>
</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-list">
      <li><router-link to="/" class="nav-item">Home</router-link></li>
      <li><router-link to="/products-list" class="nav-item">Products</router-link></li>
      <li><router-link to="/about-us" class="nav-item">About Us</router-link></li>
      <li><router-link to="/contact-me" class="nav-item">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  background-color: #f8f9fa;
  padding: 10px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 35px;
  margin: 0;
  padding: 0;
}

.nav-item {
  all: unset;
  font-weight: bold;
  color: var(--vt-c-black-soft);
  text-decoration: none;
  cursor: pointer;
  display: block;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: var(--vt-c-bordo);
}
</style>
