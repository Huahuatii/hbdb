import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('response', {
  state: () => {
    return {
      response: JSON,
      active: 0
    }
  }
})
