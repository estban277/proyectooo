<template>
<h3>prppiedades computadas</h3>
<input type="text" v-model="valor">
{{ valorCalculado }}
<resultadoSection v-if="mostrarElementos" :resultado="valorCalculado"></resultadoSection>
<div class="error" v-else-if="isNaN(valor)">debe ser un numero para calcular</div>
<div v-else>aqui no se muestra nada</div>
</template>

<script setup>

import { ref, computed } from 'vue';
import resultadoSection from '@/modules/components/resultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(()=>{
  return valor.value * 3
})

const mostrarElementos = computed(()=>{
  return valor.value > 10;

})

</script>

<style scoped>
.error{
  color: red;
}

</style>
