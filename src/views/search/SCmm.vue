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
      <el-table-column label="herb_id" prop="herb_id" sortable />
      <el-table-column label="chinese_character" prop="chinese_character" sortable />
      <el-table-column label="chinese_pin_yin" prop="chinese_pin_yin" sortable />
      <el-table-column label="english_name" prop="english_name" sortable />
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
        :page-sizes="[5, 10, 25, 50]" background='true' layout="total, sizes, prev, pager, next, jumper"
        :total="data.total" @size-change="searchMM" @current-change="searchMM"/>
        <!-- @size-change="searchMM" @current-change="searchMM"  -->
    </div>
  </div>
</template>
  


<script lang="ts" setup>

import { computed, ref, reactive } from 'vue'
import Searchview from '../page/Searchview.vue'
import { get_MM_data } from '../../utils/request.js'
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
    pagesize: ref(10),
    pagenum: ref(1)
  },
  total: 0,
  userList: []
})


const searchMM = () => {
  get_MM_data(data.searchParams).then(res => {
    if (res) {
      data.userList = res
      data.total = Object.keys(res).length

    }
  })
}

searchMM()


// 构建detail前往`mm/details/pk`的方法
const router = useRouter()
const go_details = (row: number, index:any) => {
  console.log(row);
  console.log(index);
  const pk = String((index.herb_id))
  router.push('herb/details/' + pk)
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

/deep/ .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: rgb(241, 208, 141);
  /* // 进行修改未选中背景和字体 */
  color: #ffffff;
}

/* 
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
background-color: rgba(235, 209, 158, 0.693); */
/* // 进行修改选中项背景和字体 */
/* color: #d32323;
} */
</style>