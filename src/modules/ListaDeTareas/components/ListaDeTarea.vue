<template>

    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">

        <ul>
            <li v-for="(tareas, index) in tareas" :key="index">
                {{ tareas }}
                <button @click="borrarTarea">Borrar</button>
            </li>
        </ul>
    </div>

</template>

<script setup>

import {ref} from 'vue';
const tareas = ref([]);
const nuevaTarea = ref(' ');
const addTarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = ' '
}

const borrarTarea = (index) => {
    tareas.value.splice(index,1)
}

</script>

<style scoped>
div{
  font-family: sans-serif;
}

</style>
