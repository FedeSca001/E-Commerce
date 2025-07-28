<script setup>

</script>

<template>
  <nav class="nav-bar">
    <ul class="nav-list">
      <li class="nav-item">Home</li>
      <li class="nav-item">Products</li>
      <li class="nav-item">About Us</li>
      <li class="nav-item">Contact</li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar {
  background-color: #f8f9fa;
  padding: 10px 30px;
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
  font-weight: bold;
  color: var(--vt-c-black-mute);
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: var(--vt-c-indigo);
}
</style>
