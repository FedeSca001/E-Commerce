<script setup>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import AsideComponent from './components/AsideComponent.vue';
import FooterVue from './components/Footer.vue';
import AddUser from './components/AddUser.vue';
import { useUserStore } from './State/userState.js';

const userStore = useUserStore();
</script>

<template>
  <div class="app-layout">
    <!-- Overlay modal -->
    <div 
      v-if="userStore.$state.loginComponent" 
      class="modal-overlay" 
      @click="userStore.setLoginComponent(false)" 
      aria-hidden="true"
    ></div>

    <!-- Modal formulario -->
    <AddUser v-if="userStore.$state.loginComponent" class="card-logIn" />

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

/* Overlay para modal */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
}

/* Modal formulario */
.card-logIn {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 90vw;
  max-width: 400px;
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
