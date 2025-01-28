<template>
  <section class="panel">
    <div class="wrap">
      <iframe
        @load="$emit('load')"
        src="http://localhost:5173/admin"
        width="100%"
        frameborder="1"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'load'): void
}>()
</script>

<style lang="stylus">
.panel
    iframe
        height 300px
        border 2px solid #b2b0c0
        border-radius 24px
</style>
