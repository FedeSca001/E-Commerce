<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/State/userState';

const log = ref(false);
const userStore = useUserStore();

function handleSubmit(event) {
  event.preventDefault();

  if (!log.value) {
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
      email: formData.get('email')
    };
    userStore.registerUser(userData);
  } else {
    console.log('Datos enviados por el usuario logueado');
  }
}
</script>

<template>  
  <div class="form-container">
    <button @click="userStore.setLoginComponent(false)" type="button" class="close-button" aria-label="Cerrar formulario">×</button>

    <div class="switch-label-container">
      <label class="switch">
        <input type="checkbox" v-model="log" />
        <span class="slider round"></span>
      </label>
      <span class="switch-text">{{ log ? 'Cambiar a Register' : 'Cambiar a Login' }}</span>
    </div>

    <form @submit.prevent="handleSubmit" class="form" aria-live="polite" aria-atomic="true">
      <label for="username" class="form-label">Username:</label>
      <input type="text" id="username" name="username" class="form-input" required>

      <label for="password" class="form-label">Password:</label>
      <input type="password" id="password" name="password" class="form-input" required>
      
      <label for="email" class="form-label" v-if="!log">Email:</label>
      <input type="email" id="email" name="email" class="form-input" required v-if="!log">

      <button type="submit" class="form-button" v-if="!log">Register</button>
      <button type="submit" class="form-button" v-else>Log</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Fijar altura mínima para evitar salto de layout */
  min-height: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}

/* Botón cerrar */
.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 26px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 50%;
}

.close-button:hover,
.close-button:focus {
  color: #4A90E2;
  outline: none;
  background-color: rgba(74, 144, 226, 0.1);
}

/* Switch container */
.switch-label-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 12px;
  user-select: none;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

/* Switch toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  user-select: none;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 22px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4A90E2;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}


.form-label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #555;
}

.form-input {
  padding: 10px 14px;
  margin-bottom: 16px;
  border: 1.8px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #4A90E2;
  outline: none;
  box-shadow: 0 0 6px rgba(74,144,226,0.5);
}

.form-button {
  padding: 12px;
  background-color: #4A90E2;
  color: white;
  font-size: 17px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #357ABD;
}
</style>
