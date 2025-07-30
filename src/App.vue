<script setup>
import HeaderComponent from './components/Header/HeaderComponent.vue'
import AsideComponent from './components/AsideComponent.vue'
import FooterVue from './components/Footer.vue'
</script>

<template>
  <div class="app-layout">
    <header class="app-header">
      <HeaderComponent />
    </header>

    <aside class="app-aside">
      <AsideComponent />
    </aside>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <FooterVue />
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* HEADER */
.app-header {
  background-color: var(--color-background-mute);
  color: var(--vt-c-black-mute);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
}

@media (min-width: 800px) {
  .app-header {
    gap: 35px;
    padding: 10px;
  }
}

/* ASIDE */
.app-aside {
  background-color: var(--color-background-mute);
  border-bottom: 1px solid #ddd;
  text-align: center;
}

/* MAIN */
.app-main {
  flex: 1;
  padding: 1.5rem 1rem;
}

@media (min-width: 768px) {
  .app-main {
    padding: 10px;
  }
}

/* FOOTER */
.app-footer {
  background-color: var(--color-background-mute);
  padding: 1rem;
  border-top: 1px solid #ddd;
  text-align: center;
}

@media (min-width: 768px) {
  .app-footer {
    padding: 1rem 2rem;
    text-align: left;
  }
}
</style>
