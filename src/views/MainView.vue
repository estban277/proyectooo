<template>
<Header :mensaje="texto"></Header>
    <div class="container">
      <sidebar></sidebar>
      <div class="content">
        <input type="texto" v-model="texto">
        {{ texto }}
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
  import Sidebar from '../components/Sidebar.vue';
  import Header from '../components/Header.vue';
import { ref } from 'vue';

  const texto = ref('');
</script>

<style>

.container{
    display: flex;

}

.content{
    flex: 1;
    padding: 20px;
}

</style>
