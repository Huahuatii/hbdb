<template>
    <div style="width:1380px;margin:0 auto">

        <!-- 隐藏的按钮 -->
        <button v-for="c in classes" :key="c" @click="handleClick(c)" v-show=false>{{ c }}</button>

        <div style="display: flex;">


            <div style="width: 1300px;margin-left: 25px; padding: 10px;">
                <!-- <div
                style="width: 1200px;margin-left: 25px;border-top:2px solid #9a8158;border-bottom:2px solid #9a8158;border-left:2px solid #9a8158;padding: 10px;"> -->
                <div class="sankey_head">
                    <h1 class="myh1">
                        Sankey Chart Relationship
                    </h1>
                    <!-- 竖直居中 -->
                    <el-select v-model="option2.value" class='select_type' filterable
                        placeholder="Choose a Target Type: eg:GPCR secretin" style="margin-left: 45px;width: 450px;">
                        <el-option v-for="c in classes" :key="c.name" :label="c.name" :value="c.name"
                            @click="handleClick(c.name)" />
                    </el-select>

                </div>
                <el-divider border-style="double" class="mydivider" style="margin-top: 0;" />
                <!-- <v-chart :option="option2" style="height: 650px; width: 450px;margin-top: 30px;" /> -->
                <div class="echart-div"
                    style="width: 1190px; margin: 45px 45px 45px 45px;min-height: 500px;max-height: 1000px; overflow-y:scroll ;">
                    <!-- 最小高度为400px -->
                    <v-chart class="chart" :option="option" autoresize
                        :style="{ height: edgeNum + 'px', minHeight: '500px' }" />
                </div>
            </div>




            <!-- 桑基图 -->

        </div>
    </div>
</template>
  
<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { defineComponent, reactive } from 'vue';
import VChart from 'vue-echarts';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

const pk = String(window.location.href.split('/')[6]);
const source_type = String(window.location.href.split('/')[4]);

// 访问http://192.168.30.139:8000/${source_type}/${pk}/graphic/获取边的数目设定echart-div的高度的方法
// 构造一个函数
let edgeNum = 0;
axios.post(`http://192.168.30.139:8000/${source_type}/${pk}/graphic/`, {
    "bio_class": 'Protein'
}).then((response) => {
    // 获取response.data.mulberryData.links数据条目数
    edgeNum = response.data.mulberryData.links.length * 10 + 100;
});




const classes = ref([] as any[]);
const getClasses = async () => {
    const response = await axios.get(`http://192.168.30.139:8000/${source_type}/${pk}/graphic/`);

    const classList = response.data.bio_class_list.map((className: any) => ({
        name: className,
        value: Math.random() * 0.5 // 生成2到3之间的随机数
    }));

    classes.value = classList;
    option2.value.series[0].data = classList;
};
onMounted(() => {

    setTimeout(() => {
        getClasses();
        handleClick('Protein');
    }, 1000);
});

const option = ref({
    title: {
        text: '桑基图',
        subtext: 'no subtext',
        left: 'center'
    },

    tooltip: {
        trigger: 'item',
        formatter: '<br/>{b} ',
        extraCssText: 'cursor: pointer;'
    },
    legend: {
        left: 'center',
        top: 500 // 距离顶部 90px
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            type: 'sankey',
            emphasis: {
                focus: 'adjacency'
            },
            cursor: 'pointer',
            data: [],
            focusNodeAdjacency: 'allEdges',
            links: [],

            // 层级和色彩
            levels: [
                {
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'gradient',
                        opacity: 0.6
                    }
                },
                {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'gradient',
                        opacity: 0.6
                    }
                },
                {
                    depth: 2,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'gradient',
                        opacity: 0.6
                    }
                },
                {
                    depth: 3,
                    itemStyle: {
                        color: '#decbe4'
                    },
                    lineStyle: {
                        color: 'gradient',
                        opacity: 0.6
                    }
                },
                {
                    depth: 4,
                    itemStyle: {
                        color: '#e5c0d7'
                    },
                    lineStyle: {
                        color: 'gradient',
                        opacity: 0.6
                    }
                }
            ],
            lineStyle: {
                color: 'gradient',
                curveness: 0.5,
                width: 0.5,
                extraCssText: 'cursor: pointer;' // 更改链接上的鼠标图标
            }
        }
    ]
});


const handleClick = async (c: any) => {
    try {
        console.log('123', c);
        const response = await axios.post(`http://192.168.30.139:8000/${source_type}/${pk}/graphic/`, {
            "bio_class": c
        });
        const node = response.data.mulberryData.data;
        const link = response.data.mulberryData.links;
        // option.value.legend.data = legendData;
        option.value.series[0].data = node;
        option.value.series[0].links = link;

    } catch (error) {
        console.log(error);
    }
};
let wordCloudColor = [
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265',
    '#91c7ae',
    '#749f83',
    '#ca8622',
    '#bda29a',
    '#6e7074',
    '#546570',
    '#c4ccd3'
];

const option2 = ref({
    value: [],
    series: [
        {
            type: 'wordCloud',
            gridSize: 10,
            rotationRange: [-45, 0, 45, 90],
            textStyle: {
                fontFamily: '微软雅黑',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250),
                        Math.round(Math.random() * 250)
                    ].join(',') + ')';
                }
            },
            sizeRange: [12, 24],
            width: '100%',
            height: '100%',
            //数据
            data: [

            ]
        }
    ]
});




</script>
  
<style scoped>
.chart {
    min-height: 400px;
}

.scrollbar-flex-content {
    display: flex;
}

.sankey_head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.select_type {
    /* 竖直居中 */
    /* display: flex; */
    align-items: center;
    justify-content: center;
    width: 200px;
}

.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
}
</style>