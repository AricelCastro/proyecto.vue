<script setup>
import { ref } from 'vue';
import hijo1 from './hijo1.vue';
import hijo2 from './hijo2.vue';
import hijo3 from './hijo3.vue';
import hijo4 from './hijo4.vue';
defineProps({
  nombre: String
});
</script>

<template>
  <div class="container text-center mt-4">
    <h1 class="text-blue fw-bold display-4" style="font-family:'Courier New', Courier, monospace">
      <i class="fas fa-user"></i> Soy el Componente Padre
    </h1>
    <div class="row justify-content-between mb-5">
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-danger p-4 rounded shadow">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo1 class="mt-4 p-3 border rounded bg-white" edad="10" />
        </div>
      </div>
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-success p-4 rounded shadow">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo2 class="mt-4 p-3 border rounded bg-white" edad="8" />
        </div>
      </div>
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-secondary p-4 rounded shadow">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo3 class="mt-4 p-3 border rounded bg-white" edad="4" />
        </div>
      </div>
      <div class="col-md-5 mb-5">
        <div class="row align-items-center bg-warning p-4 rounded shadow">
          <i class="fas fa-child fa-2x me-3 text-dark"></i>
          <hijo4 class="mt-4 p-3 border rounded bg-white" edad="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
h1 {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>