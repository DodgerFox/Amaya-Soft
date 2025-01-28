<template>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<script setup lang="ts">
// vue imports
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'

// store data
import { FeedbacksStore } from '@/stores/feedbacks';
const feedbacksStore = FeedbacksStore()

onBeforeMount(() => {
  feedbacksStore.fetchFeedbacks()
})
</script>

<style scoped>

</style>
