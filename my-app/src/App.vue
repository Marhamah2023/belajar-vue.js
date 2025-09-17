<script setup>
  import { ref } from 'vue'
  import BasicComponent from './lessons/BasicComponent.vue';

  const count = ref(0) // variabel reaktif untuk hitung klik

</script>

<template>

  <!-- tag biasa -->
  <h1>Hello world</h1>

  <hr></hr>

  <!-- basic component -->
  <div class="container mt-3">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Belajar Vue + Bootstrap</h5>
        <p class="card-text">
          Jumlah klik tombol: <strong>{{ count }}</strong>
        </p>

        <!-- tombol custom -->
        <BasicComponent label="Tambah Klik" variant="danger" @click="count++" />
      </div>
    </div>
  </div>

  <hr></hr>

</template>

<style scoped>

</style>