<template>
<div class="Sidebar">
  <h2> Barra lateral</h2>
  <ul>
  <li><router-link to="/contador">contador</router-link></li>
  <li><router-link to="/lista-de-tareas">lista de tareas</router-link></li>
  <li><router-link to="/registrar">registrar</router-link></li>
  </ul>
</div>
</template>

<script setup>

</script>

<style>

.Sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}

</style>
