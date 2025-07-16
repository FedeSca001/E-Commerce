<script setup>
import { useBasketStore } from '@/State/basketState.js'

const basket = useBasketStore()
const numberOfItems = basket.$state.items.length
</script>

<template>
    <div class="basket-container">
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Basket"/>
        <p>Basket <span>{{ numberOfItems }}</span></p>
    </div>
</template>

<style scoped>
.basket-container {
    font-size: 9pt;
    cursor: pointer;
}
img {
    width: 30px;
    height: 30px;
}
span {
    font-weight: bold;
    background-color: var(--vt-c-bordo);
    color: var(--vt-c-white-mute);
    padding: 2px;
    border-radius: 25%;
}
</style>
