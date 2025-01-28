import { acceptHMRUpdate, defineStore } from 'pinia'
import feedbacks from '../data/feedbacks.json'
import { Feedback } from '@/types/feedback';


export const FeedbacksStore = defineStore('feedbacksStore', {
  state: () => {
    return {
      feedbacks: [] as Feedback[]
    }
  },

  actions: {
    fetchFeedbacks() {
      this.feedbacks = feedbacks.map(feedback => new Feedback(feedback))
    },
    updateFeedback(feedback: Feedback) {
      const current = this.feedbacks.find(itemFeedback => itemFeedback.id == feedback.id);
      const index = this.feedbacks.indexOf(current as Feedback);
      if (this.feedbacks[index])
        this.feedbacks[index] = feedback
      
    }
  },

  getters: {
    // getTags: state => state.tags
  },
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(FeedbacksStore, import.meta.hot))
