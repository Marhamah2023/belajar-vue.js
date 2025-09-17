<script setup>
  import { ref } from 'vue'
  import BasicComponent from './lessons/BasicComponent.vue';
  import Options from './lessons/Options.vue';
  import Composition from './lessons/Composition.vue';

  const count = ref(0) // variabel reaktif untuk hitung klik

</script>

<template>

  <!-- tag biasa -->
  <h3>Hello world</h3>

  <hr></hr>

  <!-- basic component -->
  <h3>belajar basic component</h3>
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

  <!-- options -->
  <h3>belajar options</h3>
  <Options />

  <hr></hr>

  <!-- composition -->
  <h3>belajar composition</h3>
  <Composition />

</template>

<style scoped>

</style>