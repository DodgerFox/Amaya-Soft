<template>
    <div class="rate">
        <div class="rate__star" v-for="(star, index) in rate" :key="index">
            <inline-svg src="./src/assets/icons/star.svg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'

defineProps<{
  rate: number
}>()
</script>

<style lang="stylus">
.rate
    display flex
    gap 4px
</style>