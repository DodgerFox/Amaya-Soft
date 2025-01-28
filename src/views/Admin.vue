<template>
  <main class="admin">
    <div class="feedbacks-editor">
        <div
          class="feedbacks-editor-item"
          v-for="feedback in feedbacks"
          :key="feedback.id"
        >
          <h3 class="feedbacks-editor-item__title">Отзыв №{{ feedback.id }}</h3>
          <textarea
            class="feedbacks-editor-item__text"
            name="text"
            v-model="feedback.text"
            @input="updateFeedback(feedback)"
          ></textarea>
          <input
            class="feedbacks-editor-item__username"
            type="text"
            v-model="feedback.user.fullname"
            @input="updateFeedback(feedback)"
          />
        </div>
      </div>
  </main>
</template>

<script setup lang="ts">
// store data
import { storeToRefs } from "pinia";
import { FeedbacksStore } from "@/stores/feedbacks";
const feedbacksStore = FeedbacksStore();

const { feedbacks } = storeToRefs(feedbacksStore);

function updateFeedback(feedback: any) {
  window.parent.postMessage(
    JSON.stringify({ type: "update:feedback", feedback }),
    "http://localhost:5173/admin"
  );
}
</script>

<style lang="stylus">
.admin
  .feedbacks-editor
      padding 40px
      display flex
      flex-direction column
      gap 20px
      @media screen and (max-width: 500px)
        padding 40px 20px
      
      &-item
          display flex
          flex-direction column
          gap 10px

          &__title
            font-weight 600

          input, textarea
            padding 10px
            border-radius 8px
            border none
            background-color #f1f1f1
</style>
