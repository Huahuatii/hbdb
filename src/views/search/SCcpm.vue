<template>
  <Searchview />
  <div class="bc1">
    <p class="myp1">The data you need is right below:</p>
    <el-divider border-style="double" class="mydivider" />



    <!-- DATA TABLE -->
    <el-table
      :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
      stripe :header-cell-style="{
        background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
      }">
      <el-table-column label="prescription_id" prop="prescription_id" sortable />
      <el-table-column label="tcm_prescription_id" prop="tcm_prescription_id" sortable/>
      <el-table-column label="chinese_name" prop="chinese_name" sortable />
      <el-table-column label="source" prop="source" sortable />
      <el-table-column align="right">

        <template #header>
          <el-input v-model="search" size="large" placeholder="Filter" />
        </template>

        <template #default="scope">
          <el-button size="large" @click="go_details(scope.$index, scope.row)" class="dets">Details</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="mypagination">
      <el-pagination v-model:currentPage="data.searchParams.pagenum" v-model:page-size="data.searchParams.pagesize"
        :page-sizes="[5, 10, 15, 25, 50]" background='true' layout="total, sizes, prev, pager, next, jumper"
        :total="data.total" @size-change="searchCPM" @current-change="searchCPM" />
    </div>
  </div>
</template>
  


<script lang="ts" setup>

import { computed, ref, reactive } from 'vue'
import Searchview from '../page/Searchview.vue'
import { get_CPM_data } from '../../utils/request.js'
import { useRouter } from 'vue-router'

const search = ref('')


const filterTableData = computed(() =>
  data.userList.filter((data:any) =>
    !search.value ||
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(search.value.toLowerCase())
    )
  )
)



const data:any = reactive({
  keyWord: "",
  searchParams: {
    query: "",
    pagesize: ref(15),
    pagenum: ref(1)
  },
  total: 0,
  userList: []
})


const searchCPM = () => {
  get_CPM_data(data.searchParams).then(res => {
    if (res) {
      console.log('用户数据', res);
      data.userList = res
      data.total = Object.keys(res).length

    }
  })
}

searchCPM()

const router = useRouter()

const go_details=(row:number, index:any)=> {
console.log(row);

console.log(index);

  const pk = String(index.prescription_id)
  router.push('prescription/details/' + pk)
}

</script>

<style scoped>
.bc1 {
  background-color: rgb(245, 242, 236);
  width: 1350px;
  min-height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 0.9ch;
  padding: 5px 15px;
}
.mypagination {
  margin: 15px 5px;
}

:deep(.el-pagination.is-background .el-pager li) {
  background-color: rgb(241, 208, 141);
  /* // 进行修改未选中背景和字体 */
  color: #ffffff;
}

:deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: rgba(235, 209, 158, 0.693);
  color: #76520f;
}


/* :deep(.el-tabs__item) {
  font-size: 24px !important;
  font-weight: 700;
} */
:deep(.cell) {
  font-size: 20px;
}

/* el-table__cell 的子代cell */
:deep(th>.cell) {
  font-size: 22px ;
  height: 35px;
  line-height: 35px;
}
:deep(.el-table_1_column_2) {
  width: 300px ;
}
:deep(li>.is-active) {
  background-color: rgb(241, 208, 141);
  color: #b60b0b;
}
</style>