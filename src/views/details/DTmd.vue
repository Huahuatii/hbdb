<template>
  <div class="mycontent">
    <!-- 面包屑 -->
    <el-breadcrumb :separator-icon="ArrowRight" style="padding: 30px 15px;float: left;">
      <el-breadcrumb-item :to="{ path: '/' }" style="font-size: 24px;">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/search' }" style="font-size: 24px;">Data Type</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/search/cc' }" style="font-size: 24px;">Disease</el-breadcrumb-item>
      <el-breadcrumb-item style="font-size: 24px;">{{ data1.dataList.disease_id }}</el-breadcrumb-item>

    </el-breadcrumb>

    <!-- 语言切换开关 -->
    <!-- <div style="float: right;margin: 25px 20px 20px 20px;">
      <el-switch v-model="value5" class="ml-2" inline-prompt size='large'
        style="--el-switch-on-color: #b9af54; --el-switch-off-color: #548cb9" active-text="ZH-CN" inactive-text="EN" />
    </div> -->

    <!-- 分割线 -->
    <div style="padding: 45px 10px 0px 10px; "> <el-divider border-style="double" class="mydivider" /> </div>
  </div>

  <!-- 数据内容 -->
  <div class="mycontent2">
    <el-descriptions class="margin-top" :title="data1.dataList.english_name" :column="3" :size="size" border>
      <template #extra>
        <el-radio-group v-model="size">
          <el-radio label="large">Large</el-radio>
          <el-radio>Default</el-radio>
          <el-radio label="small">Small</el-radio>
        </el-radio-group>
      </template>


      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            disease_id
          </div>
        </template>
        {{ data1.dataList.disease_id }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            chinese_name
          </div>
        </template>
        {{ data1.dataList.chinese_name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
           
            tcm_disease_id
          </div>
        </template>
        {{ data1.dataList.tcm_disease_id }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            english_name
          </div>
        </template>
        {{ data1.dataList.english_name }}
      </el-descriptions-item>
      
    </el-descriptions>
  </div>

  <!-- 关系图谱 -->
  <div style="width:1380px;margin:0 auto;  display: flex;
  justify-content: space-between;">
        <div class="echart-div" style="width: 600px; margin: 25px;height: 350px;  display: inline-block;">

      <echarts1 />
    </div>
    <div class="echart-div" style="width: 600px; margin: 25px;height: 350px;  display: inline-block;">

      <echarts2 />
    </div>
  </div>


  <!-- 桑基图 -->
  <target_cls/>


  <!-- 相关数据 -->
  <Related_Data />
</template>


<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { get_MD_data } from '../../utils/request.js'
import echarts2_detail from '../home/echarts2_detail.vue';
import Related_Data from '../../../src/components/many_table.vue'
import target_cls from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/src/views/home/echarts_sankey_cpm.vue'
import echarts1 from '../home/echarts1.vue';
import echarts2 from '../home/echarts2.vue';

// 获取数据
'data1是用来获取基本详细信息的'
'data2是用来获取关系信息的'
const data:any = reactive({
  dataList: [] as any[]
})
const data1:any = reactive({
  dataList: [] as any[]
})

var url = window.location.href
var getqyinfo = String(url.split('details/')[1])

get_MD_data(data, getqyinfo).then(res => {
  if (res) {
    data1.dataList = res
  }
})

const size = ref('')
const iconStyle = computed(() => {
  const marginMap:any = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
const blockMargin = computed(() => {
  const marginMap:any = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})

</script>

<style scoped>
.mycontent {
  background-color: rgb(245, 242, 236);
  width: 1350px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 0.9ch;
  padding: 15px;


}

.mycontent2 {
  background-color: rgb(245, 242, 236);
  width: 1350px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 0.9ch;
  padding: 15px;
}
</style>