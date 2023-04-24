<template>
    <div style="width:1380px;margin:0 auto">
        

        <button v-for="c in classes" :key="c" @click="handleClick(c)">{{ c }}</button>
        <div class="echart-div" style="width: 1280px; margin: 25px;height: 700px; overflow-y:scroll ;">
            <v-chart ref="chart" :options="chartOptions" :data="chartData" type="graph"
                v-bind:style="{ height: height_t, width: '1200px', margin: '0 auto' }"></v-chart>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { defineComponent, reactive } from 'vue';
import VChart from 'vue-echarts';
import type * as echarts from 'echarts';
import 'echarts-wordcloud';

const pk = String(window.location.href.split('/')[6]);
const source_type = String(window.location.href.split('/')[4]);
const classes = ref([]);
const getClasses = async () => {
    const response = await axios.get(`http://192.168.30.33:8000/${source_type}/${pk}/graphic/`);
    classes.value = response.data.bio_class_list;
};
let chartOptions = ref({});
let chartData = ref({});
let height_t = '700px';

onMounted(getClasses);
let res: any
const handleClick = (c: any) => {
    axios.post(`http://192.168.30.33:8000/${source_type}/${pk}/graphic/`, {
        bio_class: c
    }).then(respone => {
        res = respone.data.mulberryData;

    })
    console.log('wtf', res);
}

defineComponent({
    components: { VChart },
    data() {
        return {
            chartOptions: {
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
                    top: 'bottom',
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
                    },
                ]
            },
            height_t: '1500px',
            chartData: {}
        };
    },
    mounted() {
        // 将类型断言为 echarts.ECharts 对象
        (this.$refs.chart as echarts.ECharts).setOption(this.chartOptions);
        // 获取数据并更新关系图
        this.updateChart();
    },
    methods: {
        async updateChart() {
            try {
                this.chartOptions.series[0].data = res.data;
                this.chartOptions.series[0].links = res.links;
                (this.$refs.chart as echarts.ECharts).setOption(this.chartOptions);
            } catch (error) {
                console.error(error);
            }
        }
    }
})
</script>
  
<style scoped>
.chart {
    height: 400px;
    width: 600px;
}
</style>