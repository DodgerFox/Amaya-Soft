<template>
    <article class="feedback">
        <div class="feedback__cover" :style="{ backgroundImage: `url('./src/assets/images/feedbacks/${ feedback.cover }')`}"></div>
        <div class="feedback-content">
            <Rate :rate="feedback.rate" />
            <p class="feedback__text">{{ feedback.text }}</p>
            <div class="feedback__username">{{ feedback.user?.fullname }}</div>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Feedback } from '@/types/feedback';
import Rate from './Rate.vue';

defineProps<{
  feedback: Feedback
}>()
</script>

<style lang="stylus">
.feedback
    background-color #F4F5FF
    border-radius 24px
    border 2px solid #B2B0C0
    padding 16px
    display flex
    gap 24px
    width 100%
    height 100%
    @media screen and (max-width: 500px)
        flex-direction column
        .feedback__cover
            width 100%
    
    &-content
        font-size 16px
        font-weight 400
        line-height 20px
        color #3C4267
    
    &__cover
        width 120px
        height 210px
        min-width 120px
        border-radius 12px
        background-color #333
        background-size cover
        background-position center
    
    &__text
        margin-top 16px
    
    &__username
        color #3C4267
        font-weight 700
        margin-top 8px

    
</style>