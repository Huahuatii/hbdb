
<template>
  <div class="bc1">
    <h3 class="myh3">Search</h3>
    <p class="myp1">Select a <u><b>data type</b></u> you WANT:</p>
    <el-col :span="24" class="bc1">
      <el-button type="warning" class="elbtn" round @click="go_search_CPM(1)" :class="{ active: isActive === 1 }">Prescriptions</el-button>
      <el-button type="warning" class="elbtn" round @click="go_search_MM(2)" :class="{ active: isActive === 2 }">Herbs</el-button>
      <el-button type="warning" class="elbtn" round @click="go_search_MD(3)" :class="{ active: isActive === 3 }">Diseases</el-button>
      <el-button type="warning" class="elbtn" round @click="go_search_CC(4)" :class="{ active: isActive === 4 }">Compounds</el-button>
      <el-button type="warning" class="elbtn" round @click="go_search_T(5)" :class="{ active: isActive === 5 }">Targets</el-button>
    </el-col>
    <el-divider border-style="double" class="mydivider" />
  </div>
</template>


<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';

// 取出url中最后一个斜杠后面的内容
const url = window.location.href;
const urlArr = url.split('/');
const lastStr = urlArr[urlArr.length - 1];
console.log('lastStr', lastStr)
// 根据lastStr确定isActive的值
let isActive = ref(0);
if (lastStr === 'cpm') {
  isActive.value = 1;
} else if (lastStr === 'mm') {
  isActive.value = 2;
} else if (lastStr === 'md') {
  isActive.value = 3;
} else if (lastStr === 'cc') {
  isActive.value = 4;
} else if (lastStr === 't') {
  isActive.value = 5;
} else {
  isActive.value = 0;
}

const go_search_CPM = (i: number) => {
  router.push('/search/cpm')
  isActive.value = i;
}

const go_search_MM = (i: number) => {
  router.push('/search/mm')
  isActive.value = i;
}

const go_search_MD = (i: number) => {
  isActive.value = i;
  router.push('/search/md')
}

const go_search_T = (i: number) => {
  isActive.value = i;
  router.push('/search/t')
}

const go_search_CC = (i: number) => {
  isActive.value = i;
  router.push('/search/cc')
}
</script>



<style scoped>
:deep(.elbtn){
  font-size:30px;
  height:44px;
}
.elbtn.active{
  /* 渐变色背景 */
  background: linear-gradient(45deg, #ddb58a, #c8551f);
  /* 边框颜色 */
  border-color: #c8551f;
}
.bc1 {
  background-color: rgb(245, 242, 236);
  width: 1350px;
  min-height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 0.5ch;
  padding: 5px 15px;
}

.myh3 {
  font-size: 42px;
  color: rgb(56, 37, 9);
}

.myp1 {
  font-size: 20px;
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