<template>
    <div style="width:1380px;margin:0 auto">
        <div class="echart-div" style="width: 1280px; margin: 25px;height: 700px; overflow-y:scroll ;">
            <v-chart ref="chart" :options="chartOptions" :data="chartData" type="graph"
                v-bind:style="{ height: height_t, width: '1200px', margin: '0 auto' }"></v-chart>
        </div>
    </div>

    <!-- <el-row style="margin: 15px 15px 15px 5px;">
        <el-col :span="3" style="text-align: center; background-color: #fbb4aea8;border-radius: 0.5ch;">
            Symptom
        </el-col>
        <el-col :span="3" style="margin-left: 80px;text-align: center;background-color: #b3cde3a8;border-radius: 0.5ch;">
            CPM
        </el-col>
        <el-col :span="3" style="margin-left: 80px;text-align: center;background-color: #ccebc5a8;border-radius: 0.5ch;">
            Herb
        </el-col>
        <el-col :span="3" style="margin-left: 80px;text-align: center;background-color: #decbe4a8;border-radius: 0.5ch;">
            Compount
        </el-col>
        <el-col :span="3" style="margin-left: 80px;text-align: center;background-color: #e5c0d7a8;border-radius: 0.5ch;">
            Target
        </el-col>
    </el-row> -->
</template>
  
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VChart from 'vue-echarts';
import type * as echarts from 'echarts';
import { get_data_relation } from '../../utils/request.js';
// import categories_json from '../../../src/assets/categories.json'

export default defineComponent({
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
            height_t: '700px',
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
                const data = reactive({ dataList: [] });
                const data2 = reactive({ dataList: [] });
                const url = window.location.href;
                const type = String(url.split('/')[4]);
                const pk = String(url.split('/')[6]);
                console.log('type:', type, 'pk:', pk);

                const result: any = await get_data_relation(data, type, pk);
                // this.height_t = result.mulberryData.links.length*5 + 600 + 'px';
                // console.log('height_t:', this.height_t);
                this.chartOptions.series[0].data = result.mulberryData.data;
                this.chartOptions.series[0].links = result.mulberryData.links;
                (this.$refs.chart as echarts.ECharts).setOption(this.chartOptions);
            } catch (error) {
                console.error(error);
            }
        }
    }
});
</script>
  