<template>
  <button class="btn" :class="`btn-${variant}`" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  variant: {
    type: String,
    default: 'primary'
  }
})
defineEmits(['click'])
</script>
