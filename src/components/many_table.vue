<template>
    <div class="bc1">
        <h3 class="myh1">
            Related Data
        </h3>
        <el-divider border-style="double" class="mydivider" />
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="border-card">
            <!-- 表格1 -->
            <el-tab-pane label="Prescription" name="prescription" v-if="source_type == 'disease'">
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
                    <el-pagination v-model:currentPage="data.searchParams.pagenum"
                        v-model:page-size="data.searchParams.pagesize" :page-sizes="[5, 10, 25, 50]" :background=a
                        layout="total, sizes, prev, pager, next, jumper" :total="data.total" />
                    <!-- @size-change="searchMM" @current-change="searchMM"  -->
                </div>
            </el-tab-pane>
            <!-- 表格2 -->
            <el-tab-pane label="Herb" name="herb"
                v-if="source_type == 'prescription' || source_type == 'disease' || source_type == 'compound' || source_type == 'target'">
                <el-table
                    :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
                    stripe :header-cell-style="{
                        background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
                    }">
                    <el-table-column label="herb_id" prop="herb_id" sortable />
                    <el-table-column label="chinese_character" prop="chinese_character" sortable />
                    <el-table-column label="latin_name" prop="latin_name" sortable />
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
                    <el-pagination v-model:currentPage="data.searchParams.pagenum"
                        v-model:page-size="data.searchParams.pagesize" :page-sizes="[5, 10, 25, 50]" :background=a
                        layout="total, sizes, prev, pager, next, jumper" :total="data.total" />
                    <!-- @size-change="searchMM" @current-change="searchMM"  -->
                </div>
            </el-tab-pane>
            <!-- 表格3 -->
            <el-tab-pane label="Compound" name="compound"
                v-if="source_type == 'prescription' || source_type == 'disease' || source_type == 'target' || source_type == 'herb'">
                <el-table
                    :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
                    stripe :header-cell-style="{
                        background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
                    }">
                    <el-table-column label="compound_id" prop="compound_id" sortable />
                    <el-table-column label="pref_name" prop="pref_name" sortable />
                    <el-table-column label="formula" prop="formula" sortable />
                    <el-table-column label="chembl_id" prop="chembl_id" sortable />
                    <!-- <el-table-column label="chembl_id" prop="chembl_id" sortable />
      <el-table-column label="formula" prop="formula" sortable />
      <el-table-column label="smiles" prop="smiles" sortable /> -->
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
                    <el-pagination v-model:currentPage="data.searchParams.pagenum"
                        v-model:page-size="data.searchParams.pagesize" :page-sizes="[5, 10, 25, 50]" :background=a
                        layout="total, sizes, prev, pager, next, jumper" :total="data.total" />
                </div>
            </el-tab-pane>
            <!-- 表格4 -->
            <el-tab-pane label="Target" name="target"
                v-if="source_type == 'prescription' || source_type == 'disease' || source_type == 'compound' || source_type == 'herb' ">
                <el-table
                    :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
                    stripe :header-cell-style="{
                        background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
                    }">
                    <el-table-column label="target_id" prop="target_id" sortable />
                    <el-table-column label="protein_name" prop="protein_name" sortable />
                    <el-table-column label="symbol" prop="gene_symbol" sortable />
                    <el-table-column label="uniprot" prop="uniprot" sortable />
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
                    <el-pagination v-model:currentPage="data.searchParams.pagenum"
                        v-model:page-size="data.searchParams.pagesize" :page-sizes="[5, 10, 25, 50]" :background=a
                        layout="total, sizes, prev, pager, next, jumper" :total="data.total" />
                </div>
            </el-tab-pane>
            <!-- 表格5 -->
            <el-tab-pane label="Disease" name="disease" v-if="source_type == 'prescription'">
                <el-table
                    :data="filterTableData.slice((data.searchParams.pagenum - 1) * data.searchParams.pagesize, data.searchParams.pagenum * data.searchParams.pagesize)"
                    stripe :header-cell-style="{
                        background: 'rgba(235, 209, 158, 0.693)', color: 'rgb(86 48 9)', fontSize: '22px'
                    }">
                    <el-table-column label="disease_id" prop="disease_id" sortable />
                    <el-table-column label="english_name" prop="english_name" sortable />
                    <el-table-column label="chinese_name" prop="chinese_name" sortable />
                    <el-table-column label="tcm_disease_id" prop="tcm_disease_id" sortable />
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
                    <el-pagination v-model:currentPage="data.searchParams.pagenum"
                        v-model:page-size="data.searchParams.pagesize" :page-sizes="[5, 10, 25, 50]" ::background=a
                        layout="total, sizes, prev, pager, next, jumper" :total="data.total" />
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script lang="ts" setup>

import { computed, ref, reactive,onMounted } from 'vue'
import { get_related_data } from '../utils/request.js'
import { useRouter } from 'vue-router'

const search = ref('')
const filterTableData = computed(() =>
  data.userList.filter((data:any) =>
    !search.value ||
    Object.values(data).some((value:any) =>
      String(value).toLowerCase().includes(search.value.toLowerCase())
    )
  )
)



var a = true
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
const data2:any = reactive({
    keyWord: "",
    searchParams: {
        query: "",
        pagesize: ref(10),
        pagenum: ref(1)
    },
    total: 0,
    userList: []
})

let activeName = ref('herb')



var url = window.location.href
var source_type = url.split('/')[4]
var pk = url.split('/')[6]
const handleClick = (tab: any, event: any) => {
    var target_type = String(tab.props.name)
    get_related_data(data2, source_type = source_type, pk = pk, target_type = target_type).then(res => {
        // console.log('用户数据', res);
            data.userList = res
        data.total = Object.keys(res).length
    })
    activeName = ref('123')
}
onMounted(() => {
    // 判断url中是否有prescription，有则执行，
    if (source_type == 'prescription' || source_type == 'compound'  || source_type == 'target') {
        handleClick({ props: { name: 'herb' } }, null)
        activeName = ref('herb')
    }
    else if (source_type == 'disease') {
        activeName = ref('prescription')

        handleClick({ props: { name: 'prescription' } }, null)
    }
    else if (source_type == 'herb') {
        handleClick({ props: { name: 'compound' } }, null)
        activeName = ref('compound')
    }
    setTimeout(() => {
        handleClick({ props: { name: 'herb' } }, null);
        console.log('activeName', activeName);
    }, 1000);
})


// 每个detail按钮的跳转功能
const router = useRouter()

const go_details = (row: number, index:any) => {

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
.bc1 {
    background-color: rgb(245, 242, 236);
    width: 1350px;
    min-height: 100px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 0.9ch;
    padding: 5px 15px;
}

.demo-tabs {
    margin: 15px;
}



:deep(.el-tabs__item) {
    font-size: 24px !important;
    font-weight: 700;
}


:deep(.is-active) {
    color: #79510d !important;
}

:deep(.el-tabs__item:hover) {
    color: #79510d !important;
}

:deep(.el-pagination.is-background .el-pager li:not(.disabled)) {
    background-color: rgb(241, 208, 141);
    /* // 进行修改未选中背景和字体 */
    color: #ffffff;
}

:deep(.el-tabs__header) {
    background-color: #f5f2ec !important;
}

:deep(.el-tabs--border-card) {
    border-style: solid;
    border-width: 5px;
    border-color: #f5f2ec;
}

</style>