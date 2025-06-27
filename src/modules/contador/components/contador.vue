<template>
    <h1>contador</h1>
    <p>  {{ contador }} </p>
    <button @click="incrementar">incrementar</button>
    <button @click="decrementar">decrementar</button>
</template>

<script setup>

import {ref} from 'vue';

const contador = ref(100);
const incrementar = () => {
  contador.value++;
}
const decrementar = () => {
  contador.value--;
}

</script>

<style scoped>

h1 {
  font-family: sans-serif;
  position: relative;
  left: 50px;
}

p {
  color: navy;
  font-size: 30px;
  font-family: sans-serif;
  position: relative;
  left: 100px;
}

button {
background-color: coral;
border: none;
padding: 10px 20px;
border-radius: 20px;
font-size: 18px;

}

</style>
