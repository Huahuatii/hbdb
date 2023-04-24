
<template>
  <div class="bc1">
    <h3 class="myh3">Search</h3>
    <p class="myp1">Select a <u><b>data type</b></u> you WANT:</p>
    <el-col :span="24" class="Sccb3">
      <el-button type="warning" round @click="go_search_CPM">Prescription</el-button>
      <el-button type="warning" round @click="go_search_MM">Herbs</el-button>
      <el-button type="warning" round @click="go_search_MD">Disease</el-button>
      <el-button type="warning" round @click="go_search_CC">Compounds</el-button>
      <el-button type="warning" round @click="go_search_T">Target</el-button>
    </el-col>
    <el-divider border-style="double" class="mydivider" />
  </div>
</template>


<script lang="ts" setup>
import router from '@/router';
const go_search_CPM = () => {
  router.push('/search/cpm')
}

const go_search_MM = () => {
  router.push('/search/mm')
}

const go_search_MD = () => {
  router.push('/search/md')
}

const go_search_T = () => {
  router.push('/search/t')
}

const go_search_CC = () => {
  router.push('/search/cc')
}
</script>



<style>
.bc1 {
  background-color: rgb(245, 242, 236);
  width: 1350px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 0.9ch;
  padding: 5px 15px;
}

.myh3 {
  font-size: 30px;
  color: rgb(56, 37, 9);
}

.myp1 {
  font-size: 15px;
  color: rgb(123, 123, 123);
}

.mypagination {
  margin: 15px 5px;
}

/deep/ .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: rgb(241, 208, 141);
  /* // 进行修改未选中背景和字体 */
  color: #ffffff;
}
</style>