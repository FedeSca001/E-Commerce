import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    items: [],
  }),

  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    isEmpty: (state) => state.items.length === 0,
  },

  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += product.quantity || 1
      } else {
        this.items.push({ ...product, quantity: product.quantity || 1 })
      }
    },

    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId)
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId)
      if (item && quantity > 0) {
        item.quantity = quantity
      } else if (item && quantity <= 0) {
        this.removeItem(productId)
      }
    },

    clearBasket() {
      this.items = []
    },
  },
})
