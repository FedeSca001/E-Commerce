<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/State/userState.js'

const userStore = useUserStore();
const nameUser = userStore.$state.user;

const showDropdown = ref(false);
</script>

<template>
  <div 
    class="user-state-container" @mouseenter="showDropdown = true">
    <img src="https://cdn-icons-png.flaticon.com/256/1077/1077063.png" alt="userIcon" />
    <p>{{ nameUser || "Sign In / Register" }}</p>


    <div v-if="!nameUser && showDropdown" 
        class="dropdown-menu" 
        @mouseleave="showDropdown = false">
      <button class="button-signIn" @click="console.log('Login clicked')">Sign In</button>
      <button @click="console.log('Register clicked')">Register</button>
    </div>
  </div>
</template>

<style scoped>
.user-state-container {
  position: relative;
  font-size: 9pt;
  cursor: pointer;
  display: inline-block;
}

img {
  width: 30px;
  height: 30px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
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
