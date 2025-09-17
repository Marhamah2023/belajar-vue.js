<template>
  <div class="container text-center mt-1">
    <h2 class="mb-2 text-primary">Belajar Vue + Bootstrap (Options API)</h2>

    <button 
      class="btn btn-lg btn-success d-flex align-items-center gap-2 mx-auto"
      @click="tambah"
    >
      <i class="bi bi-hand-index-thumb"></i>
      Klik Saya ({{ count }})
    </button>

    <p class="mt-1 text-muted">
      Kamu sudah mengklik <strong>{{ count }}</strong> kali.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    tambah() {
      this.count++
    }
  }
}
</script>
