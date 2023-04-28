<template>
  <div class="about">
    <div class="container" style="min-height: 783px;">
      <big_search />
    </div>

    <div class="bc1" style="width: 1010px; margin: 0 auto; margin-top:-362px ;">
      <el-card style="margin:35px; background-color:#f1f0e7">
  <h3 style="margin-left: 30px;">How to Search</h3>
<el-divider border-style="double" class="mydivider" />
<div style="margin:25px 25px;">
  <p>For different data types, you can use different categories of keywords to conduct searches. Here is a brief introduction on how to perform searches:</p>
<li>Diseases:</li>
<li>Prescriptions:</li>
<li>Herbs:</li>
<li>Compounds:</li>
<li>Targets:</li>
</div>
</el-card>

<h3 style="margin-left: 30px;margin-top: 30px;">Search Result</h3>
<el-divider border-style="double" class="mydivider" />
<info_card/>
</div>


    
    <!-- <div class="bc1" style="width: 1380px; margin: 0 auto; margin-top: ;">
      <p class="myp1">The data you need is right below:</p>
    <el-divider border-style="double" class="mydivider" />
      <el-table
        :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
        stripe :header-cell-style="{
          background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
        }">
        <el-table-column label="prescription_id" prop="prescription_id" sortable />
        <el-table-column label="chinese_name" prop="chinese_name" sortable />
        <el-table-column label="disease" prop="disease" sortable />
        <el-table-column label="source" prop="source" sortable />
        <el-table-column align="right">

          <template #header>
            <el-input v-model="search" size="large" placeholder="Filter" />
          </template>

          <template #default="scope">
            <el-button size="large" @click="go_details(scope.$index, scope.row)">Details</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="mypagination">
        <el-pagination v-model:currentPage="data.searchParams.pagenum" v-model:page-size="data.searchParams.pagesize"
          :page-sizes="[5, 10, 25, 50]" :background=a layout="total, sizes, prev, pager, next, jumper"
          :total="data.total" />

      </div>
    </div> -->
    <!-- <div style="min-height: 200px; background-color: aqua;">
      {{response}}
      {{ active }}
    </div> -->

  </div>
</template>


<script lang="ts" setup>
import big_search from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/src/components/big_search_item.vue'
import info_card from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/src/components/info_card.vue'
import { computed, ref, reactive, onMounted } from 'vue'
// import { ArrowRight } from '@element-plus/icons-vue'
// import { get_CPM_data } from '../../utils/request.js'
// import echarts2_detail from '../home/echarts2_detail.vue';
// import Related_Data from '../../../src/components/many_table.vue'
// import target_cls from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/src/views/home/echarts_sankey_cpm.vue'
// import echarts1 from '../home/echarts1.vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/searchResponse'

const store = useStore()
const { response, active } = storeToRefs(store)

const search = ref('')
const filterTableData = computed(() =>
  data.userList.filter((data: any) =>
    !search.value ||
    Object.values(data).some((value: any) =>
      String(value).toLowerCase().includes(search.value.toLowerCase())
    )
  )
)



var a = true
const data: any = reactive({
  keyWord: "",
  searchParams: {
    query: "",
    pagesize: ref(10),
    pagenum: ref(1)
  },
  total: 0,
  userList: []
})
const data2: any = reactive({
  keyWord: "",
  searchParams: {
    query: "",
    pagesize: ref(10),
    pagenum: ref(1)
  },
  total: 0,
  userList: []
})

const activeName = ref('herb')



var url = window.location.href
var source_type = url.split('/')[4]
var pk = url.split('/')[6]
const handleClick = (tab: any, event: any) => {
  var target_type = String(tab.props.name)

}
onMounted(() => {
  // 判断url中是否有prescription，有则执行
  if (source_type == 'prescription' || source_type == 'compound' || source_type == 'target' || source_type == 'disease') {
    handleClick({ props: { name: 'herb' } }, null)
  }
})


// 每个detail按钮的跳转功能
const router = useRouter()

const go_details = (row: number, index: any) => {

  if (index.latin_name) {
    console.log('进入herb', index.herb_id);
    const pk = String(index.herb_id)
    router.push('/search/herb/details/' + pk)
  }
  else if (index.compound_id) {
    console.log('compounds');
    const pk = String(index.compound_id)
    router.push('/search/compound/details/' + pk)
  } else if (index.protein_name) {
    console.log('进入target');
    const pk = String(index.target_id)
    router.push('/search/target/details/' + pk)
  } else if (index.prescription_id) {
    console.log('prescription');
    const pk = String(index.prescription_id)
    router.push('/search/prescription/details/' + pk)
  } else if (index.disease_id) {
    console.log('进入disease');
    const pk = String(index.disease_id)
    router.push('/search/disease/details/' + pk)
  }
  else {
    console.log('进入错误');

  }

}

</script>

<style scoped>
.container {
  background-image: url("../../assets/Search_bg.jpg");
  background-size: 100% 50%;
  background-repeat: no-repeat;
  /* background-filter: blur(3px); */
  display: flex;
  justify-content: center;

}
.bc1 {
  background-color: rgb(245, 242, 236);
  width: 1040px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-bottom-left-radius: 0.9ch;
  border-bottom-right-radius: 0.9ch;
  padding: 5px 15px;
  /* 添加y轴滚动条 */
  overflow-y: auto;
  max-height: 1000px;
  /* 隐藏x轴滚动条 */
  overflow-x: hidden;

}
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

:deep(.el-descriptions__label) {
  width: 25%;
}

:deep(.el-descriptions__title) {
  margin-left: 10px;
}
</style>