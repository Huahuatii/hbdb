<template>
    <!-- <div style="min-height: 30px;"> </div> -->
    <v-chart ref="chart" :options="chartOptions" :data="chartData" type="graph" style="width: 600px;;min-height: 500px;"></v-chart>
</template>

<script lang="ts">
import { defineComponent, reactive} from 'vue';
import VChart from 'vue-echarts';
import type * as echarts from 'echarts';

import  {get_data_relation} from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/src/utils/request';

import categories_json from '../../../src/assets/categories.json'
export default defineComponent({
    components: { VChart },
    data() {
        return {
            chartOptions: {
                title: {
                    text: '关系图',
                    subtext: 'no subtext',
                    left: 'center',
                    top: 'top',
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['Prescription','Herb', 'Compound', 'Target', 'Disease']
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
                        type: 'graph',
                        layout: 'force',  // force | circular
                        data: [],
                        //   draggable: true,
                        links: [],
                        // legendHoverLink: true,
                        categories: categories_json,
                        // focusNodeAdjacency: true,
                        draggable: true,
                        roam: true,
                        // force: {
                        //     layoutCenter: [
                        //         { x: '100%', y: '40%' }, // Herb的初始位置
                        //         { x: '30%', y: '20%' }, // Compound的初始位置
                        //         { x: '60%', y: '50%' }, // Target的初始位置
                        //     ]
                        // },
                        cursor: 'pointer',
                        label: {
                            fontSize: 14,
                            position: 'right',
                            // formatter: '{b}'
                        },
                        // 另一种label
                        // label: {
                        //     show: true,
                        //     position: "bottom",
                        //     distance: 1,
                        //     fontSize: 10,
                        //     align: "center",
                        //     formatter: '{b}',
                        // },
                        lineStyle: {
                            color: 'target',
                            curveness: 0.2
                        },
                        emphasis: {
                            focus: 'adjacency',
                            lineStyle: {
                                width: 5
                            }
                        }
                    }
                ]
            },

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
                const result:any = await get_data_relation(data, type, pk);
                this.chartOptions.series[0].data = result.knowledgeData.node;
                this.chartOptions.series[0].links = result.knowledgeData.link;
                (this.$refs.chart as echarts.ECharts).setOption(this.chartOptions);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
</script>
  