<script setup>
import AsideComponent from './components/AsideComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <header>
    <HeaderComponent msg="Hello Header Component" />
  </header>

  <aside>
    <AsideComponent msg="Hello ASAIDE Component" />  
  </aside>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {

}
</style>
