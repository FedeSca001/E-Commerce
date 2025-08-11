<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/State/userState.js'

const userStore = useUserStore();
const nameUser = userStore.$state.user;

const showDropdown = ref(false);
</script>

<template>
  <div 
    class="user-state-container" 
    @mouseenter="showDropdown = true" 
    @mouseleave="showDropdown = false"
  >
    <div class="user-info">
      <img src="https://cdn-icons-png.flaticon.com/256/1077/1077063.png" alt="userIcon" />
      <p>{{ nameUser || "Sign In / Register" }}</p>
    </div>

    <div v-if="!nameUser && showDropdown" 
      class="dropdown-menu"
      @mouseenter="showDropdown = true" 
      @mouseleave="showDropdown = false">
        <button class="button-signIn" @click="userStore.setLoginComponent()">Sign In</button>
        <button @click="userStore.setLoginComponent()">Register</button>
    </div>
  </div>
</template>

<style scoped>
.user-state-container {
  position: relative;
  font-size: 9pt;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 7px;
}

img {
  width: 20px;
  height: 20px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--vt-c-white);
  padding: 8px;
  box-shadow: 0 2px 4px var(--vt-c-black-soft);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dropdown-menu button {
  background: var(--vt-c-white-mute);
  color: var(--vt-c-black-soft);
  border: none;
  border-radius: 5px;
  text-align: left;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 9pt;
}

.dropdown-menu .button-signIn {
  background-color: var(--vt-c-black) !important;
  color: var(--vt-c-white) !important;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 9pt;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.dropdown-menu .button-signIn:hover {
  background-color: var(--vt-c-black-soft) !important;
  transform: translateY(-1px);
}
</style>
