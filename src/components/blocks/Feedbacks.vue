<template>
  <section class="feedbacks">
    <div class="wrap">
      <div class="feedbacks-slider">
        <swiper
          ref="slider"
          class="feedbacks-swiper"
          :modules="[Pagination, Navigation]"
          :slides-per-view="slidesPerView"
          :space-between="16"
          :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
          :pagination="{ clickable: true }"
        >
            <swiper-slide v-for="feedback in feedbacks" :key="feedback.id">
                <FeedbackSlide :feedback="feedback" />
            </swiper-slide>
        </swiper>
        <div class="navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// template components
import FeedbackSlide from "@/components/ui/Feedback.vue";

// vue imports
import { ref, onMounted } from 'vue';

// types
import { Feedback } from '@/types/feedback';

// Import Swiper Vue.js components and modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

defineProps<{
    feedbacks: Feedback[]
}>();

// Swiper Breakpoints почему то не отрабатывает, сделал костыль
const slidesPerView = ref(3)

function setSlidesPerView(windowWidth: number) {
    if (windowWidth >= 1100)
        slidesPerView.value = 3
    if (windowWidth < 1100)
        slidesPerView.value = 2
    if (windowWidth < 800)
        slidesPerView.value = 1
}

onMounted(() => {
    setSlidesPerView(window.innerWidth)
    window.addEventListener('resize', (e) => setSlidesPerView(e.target.innerWidth))
})
</script>

<style lang="stylus">
.feedbacks
    &-slider
        padding 60px
        position relative
        @media screen and (max-width: 500px)
            padding 40px 40px
        @media screen and (max-width: 400px)
            padding 40px 0

    &-swiper
        padding 60px 0

    .swiper-slide
        height auto
    
    .swiper-container
        display flex

    .swiper-button-prev:after, .swiper-button-next:after
        content ''
        width 26px
        height 40px
        background-image url('./src/assets/icons/arrow.svg')

    .swiper-button-prev
        transform rotate(180deg)
        left 0
    
    .swiper-button-next
        right 0
    
    .swiper-pagination-bullet
        background #FE9539
        &-active
            background #FE9539

    .navigation
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        display flex
        align-items center
        @media screen and (max-width: 400px)
            display none
</style>
