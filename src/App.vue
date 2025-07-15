<script setup>
import AsideComponent from './components/AsideComponent.vue';
import HeaderComponent from './components/Header/HeaderComponent.vue';
</script>

<template>
  <header>
    <HeaderComponent class="header-component" />
  </header>

  <aside>
    <AsideComponent msg="Hello ASAIDE Component" />  
  </aside>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.header-component{
  background-color: var(--color-background-mute);
  color: var(--vt-c-black-mute);
  width: 100%;
  gap: 15px;
  padding: 10px 30px;
}

@media (min-width: 800px) {
.header-component{
  gap: 35px;
}
}
</style>
