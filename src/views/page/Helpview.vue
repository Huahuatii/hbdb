<template>
  <div class="bc1">
    <div class="Manual_head">
      <p>DPHIT Manual</p>
    </div>
    <el-divider border-style="double" class="mydivider" />
    <el-tabs tab-position='left' style="min-height: 250px" class="demo-tabs">

      <el-tab-pane label="Search">Users can search five types of data provided by the DPHIT database, including
        disease, prescription, herb, compound and target on the 'Search' page. The examples of key words allowed to be
        searched are displayed below the search box. For example, if you want to search for an disease, “胆囊炎” for example,
        you can type in “胆”, and it will show you a list of words related to it. </el-tab-pane>
      <el-tab-pane label="Browse">Users can browse the database by clicking the "Browse" button on the navigation bar
        and select a data type you want to view the records. For each component, the first column represents the IDs of the records,
        and the last column contains a hyperlink to the detailed page.</el-tab-pane>
      <el-tab-pane label="Detail">Users can enter the the details page from the 'Browse' page and 'Search' page by
        clicking the hyperlink of the certain item. </el-tab-pane>
      <!-- <el-tab-pane label="Task">Task</el-tab-pane> -->
    </el-tabs>
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

:deep(.el-tabs__item) {
  /* background-color: rgb(234, 226, 204); */
  color: rgb(204, 152, 89);
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
}

:deep(.is-active) {
  /* background-color: rgb(234, 226, 204); */
  color: rgb(222, 141, 43);
  /* 文字阴影 */
  text-shadow: 0 0 1px rgb(222, 141, 43);
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
}

:deep(.el-tabs__active-bar) {
  background-color: #8a1f1f;
}

:deep(.el-tabs__nav-scroll) {
  min-height: 400px;
}

:deep(.el-tab-pane) {
  margin: 15px 15px 15px 15px;
  /* 文字两端对齐 */
  text-align: justify;
  font-size: 24px;
  /* 加粗一半 */
  font-weight: 500;
  /* 字体微软雅黑 */
  font-family: "Microsoft YaHei";
}
</style>