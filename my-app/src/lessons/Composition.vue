<template>
  <div class="container text-center mt-3">
    <h2 class="mb-1 text-primary">Belajar Vue + Bootstrap</h2>

    <button 
      class="btn btn-lg btn-success d-flex align-items-center gap-2 mx-auto"
      @click="tambah"
    >
      <i class="bi bi-hand-index-thumb"></i> <!-- icon Bootstrap -->
      Klik Saya ({{ count }})
    </button>

    <p class="mt-3 text-muted">
      Kamu sudah mengklik <strong>{{ count }}</strong> kali.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function tambah() {
  count.value++
}
</script>
