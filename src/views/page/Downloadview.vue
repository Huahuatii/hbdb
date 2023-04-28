<template>
  <div class="bc1">
    <div class="Manual_head">
      <p>DOWNLOAD</p>
    </div>
    <el-divider border-style="double" class="mydivider" />

<!-- 测试的echarts -->
<bbq_plot/>





    <div style="margin-left: 30px;margin-right: 100px;">
      <el-timeline>
        <el-timeline-item center placement="top">
          <!-- <el-timeline-item center timestamp="2018/4/12" placement="top"> -->

          <h4 class="h4_title">Diseases</h4>
          <a href="192.168.30.139:9000/download/herb_all.xlsx">下载文件1</a>
          <br>
          <!-- <a :href="downloadUrl2" :download="fileName2">下载文件2</a>
          <br>
          <a :href="downloadUrl3" :download="fileName3">下载文件3</a> -->


        </el-timeline-item>
        <el-timeline-item center placement="top">
          <!-- <el-timeline-item center timestamp="2018/4/12" placement="top"> -->

          <h4 class="h4_title">Prescriptions</h4>
          <p>download12</p>

        </el-timeline-item>
        <el-timeline-item center placement="top">

          <h4 class="h4_title">Herbs</h4>
          <p>download13</p>

        </el-timeline-item>
        <el-timeline-item center placement="top">

          <h4 class="h4_title">Compounds</h4>
          <p>download14</p>

        </el-timeline-item>
        <el-timeline-item center placement="top">

          <h4 class="h4_title">Targets</h4>
          <p>download15</p>

        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import bbq_plot from '../home/bbq_plot.vue'
const fileName1 = 'example1.csv'
const fileContent1 = '1,2,3\n4,5,6\n7,8,9'

const fileName2 = 'example2.csv'
const fileContent2 = 'a,b,c\n1,2,3\n4,5,6'

const fileName3 = 'example3.csv'
const fileContent3 = 'John,Doe,40\nJane,Doe,35\nBob,Smith,50'

const downloadUrl1 = computed(() => {
  const content = encodeURIComponent(fileContent1)
  return `data:text/csv;charset=utf-8,${content}`
})

const downloadUrl2 = computed(() => {
  const content = encodeURIComponent(fileContent2)
  return `data:text/csv;charset=utf-8,${content}`
})

const downloadUrl3 = computed(() => {
  const content = encodeURIComponent(fileContent3)
  return `data:text/csv;charset=utf-8,${content}`
})
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

.Manual_head {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border-radius: 0.2ch;
  background-color: rgb(234, 226, 204);
  /* 边框颜色 */
  border: 1px solid rgb(243, 183, 114);
  /* 字体颜色 */
  color: rgb(193, 100, 38);
}

/* :deep(.el-timeline-item__content){
  font-size: 24px;
} */
:deep(.el-card__body) {
  background-color: rgb(252, 252, 252);
}

.h4_title {
  font-size: 24px;
}
</style>