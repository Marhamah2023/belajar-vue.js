<template>
  <button 
    class="btn"
    :class="`btn-${variant}`"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    label: {
      type: String,
      default: "Klik Saya"
    },
    variant: {
      type: String,
      default: "primary"
    }
  },
  emits: ["click"]
}
</script>
