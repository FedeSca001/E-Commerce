<script setup>
import Basket from './Basket.vue';
import SearchComponent from './SearchComponent.vue';
import UserState from './UserState.vue';

</script>

<template>
    <div class="header-container">
        <div>Company Name</div>
        <SearchComponent />
        <UserState />
        <Basket />
    </div>
</template>

<style>
.header-container {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content:center;
}
</style>
