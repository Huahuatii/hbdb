<template>
  <div class="bc1">
    down load
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

</script>
<style scoped>
.bc1 {
  background-color: rgb(245, 242, 236);
  width: 1250px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-bottom-left-radius: 0.9ch;
  border-bottom-right-radius: 0.9ch;
  padding: 5px 15px;
  /* 添加y轴滚动条 */
  overflow-y: auto;
  min-height: 600px;
  /* 隐藏x轴滚动条 */
  overflow-x: hidden;
}
/* :deep(.el-tabs__active-bar) {
  background-color: #8a1f1f;
} */
</style>