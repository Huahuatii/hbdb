<template>
  <div class="about">
    <div class="container" style="min-height: 783px;">
      <big_search />
    </div>

    <div class="bc1" style="width: 1010px; margin: 0 auto; margin-top:-362px ;">
      <!-- <el-card style="margin:35px; background-color:#f1f0e7">
        <h3 style="margin-left: 30px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            style="height: 24px; color: #7f7e7c;"> -->
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <!-- <path fill="#303133"
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg> How to Search</h3>
        <el-divider border-style="double" class="mydivider" />

        <div style="margin:25px 25px;">
          <p>For different data types, you can use different categories of keywords to conduct searches. Here is a brief
            introduction on how to perform searches:</p>
          <li>Diseases:</li>
          <li>Prescriptions:</li>
          <li>Herbs:</li>
          <li>Compounds:</li>
          <li>Targets:</li>
        </div>
      </el-card> -->

      <div class="demo-collapse" style="width: 920px;margin: 0 auto;margin-top: 50px;">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template #title>
              <h3 style="margin-left: 25px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  style="height: 24px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path fill="#303133"
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg> How to Search</h3>

            </template>
            <!-- <el-divider class="mydivider" /> -->
            <div style="margin-top: 25px;margin-left: 25px;font-size: 18px;font-weight: 550;"> For different data types, you can use different categories of keywords to conduct searches. Here is a brief introduction on how to perform searches:
              <li>Diseases:</li>
              <li>Prescriptions:</li>
              <li>Herbs:</li>
              <li>Compounds:</li>
              <li>Targets:</li>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <h3 style="margin-left: 30px;margin-top: 30px;">Search Result <span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;margin-left: 600px;">total results: {{data.total}}</span></h3>
      <el-divider border-style="double" class="mydivider" />
      <info_card />
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

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}

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

:deep(.el-collapse-item__header) {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: larger;
  background-color: #f1f0e7;
  border: 1px solid #ebebe0;
  border-radius: 4px;
  /* 阴影 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

:deep(.el-collapse-item__content) {

  background-color: #f1f0e7;
  border: 1px solid #ebebe0;
  border-radius: 4px;
  /* 阴影 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>