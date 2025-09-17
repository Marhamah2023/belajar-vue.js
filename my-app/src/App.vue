<script setup>
  import { ref } from 'vue'
  import BasicComponent from './lessons/BasicComponent.vue';
  import Options from './lessons/Options.vue';
  import Composition from './lessons/Composition.vue';
  import LocalRegistration from './lessons/LocalRegistration.vue';

  const count = ref(0) // variabel reaktif untuk hitung klik

  function handleClick() {
    alert("Tombol diklik!")
  }

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

  <hr></hr>

  <!-- Global Registration -->
   <div>
    <h3>Contoh Global Registration</h3>
    <!-- bisa dipakai langsung -->
    <MyButton label="Klik Aku" variant="success" @click="alert('OK!')" />
  </div>

  <hr></hr>

  <!-- local registration -->
    <div class="container mt-3">
  <h3>Belajar Vue dengan Composition API</h3>

  <p>Jumlah klik: {{ count }}</p>

  <!-- baris tombol -->
  <div class="d-flex gap-2">
    <MyButton label="Klik Aku" variant="primary" @click="handleClick" />
    <button class="btn btn-success" @click="count++">
      Tambah Count
    </button>
  </div>
</div>

<hr></hr>

<!--  -->


</template>

<style scoped>

</style>