import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loginComponent: false,
  }),

  getters: {
    userName: (state) => state.user?.name || '',
    userEmail: (state) => state.user?.email || '',
  },

  actions: {
    login(userData) {
      this.user = userData
      this.isAuthenticated = true
    },

    registerUser(userData) {
      this.user = userData
      this.isAuthenticated = true
      alert('User registered successfully!')
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
    },

    updateUser(updatedUserData) {
      this.user = {...updatedUserData }
    },
    setLoginComponent() {
      this.loginComponent = !this.loginComponent;
    }
  },
})
