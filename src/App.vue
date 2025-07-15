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
  display: flex;
  background-color: var(--color-background-mute);
  line-height: 1.5;
  color: var(--vt-c-black-mute);
  width: 100%;
  padding: 2.5pt;
  margin: auto;
  align-items: center;
  justify-content:center;
}

@media (min-width: 1024px) {
.header-component{
  padding: 5pt;
}
}
</style>
