<template>
  <main class="home">
    <Feedbacks :feedbacks="feedbacks" />
    <Panel @load="iframeIsLoaded" />
  </main>
</template>

<script setup lang="ts">
// template components
import Feedbacks from "@/components/blocks/Feedbacks.vue";
import Panel from "@/components/blocks/Panel.vue";

// store data
import { storeToRefs } from "pinia";
import { FeedbacksStore } from "@/stores/feedbacks";
const feedbacksStore = FeedbacksStore();

const { feedbacks } = storeToRefs(feedbacksStore);

function iframeIsLoaded() {
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin !== "http://localhost:5173") return;

      const message = JSON.parse(event.data);
      switch (message.type) {
        case "update:feedback":
          feedbacksStore.updateFeedback(JSON.parse(event.data).feedback);
          break;

        default:
          break;
      }
    },
    false
  );
}
</script>

<style lang="stylus">
.home
  display flex
  flex-direction column
  align-items center
</style>
