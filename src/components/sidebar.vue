<template>
<div class="Sidebar">
  <h2>bienvenido</h2>
  <h3>Nombre: {{ nombre }}</h3>
  <h3>Email: {{ email }}</h3>
  <ul>
  <li><router-link to="/contador">contador</router-link></li>
  <li><router-link to="/lista-de-tareas">lista de tareas</router-link></li>
  <li><router-link to="/registrar">registrar</router-link></li>
  <li><router-link to="/calcular">calcular</router-link></li>
  </ul>
</div>
</template>
<script setup>

import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import {ref, watch} from 'vue'
const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre, (newvalue) => {
  nombre.value = newvalue;
});
watch(() => registrarStore.email, (newValue) => {
  email.value = newValue;
})


</script>

<style>

.Sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    font-family: sans-serif;
}

h3{
  font-family: sans-serif;
}



</style>
