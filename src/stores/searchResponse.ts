import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('response', {
  state: () => {
    return {
      // 将response储存为任意类型
      response: ref<any>(null),
      active: 0
    }
  }
})
