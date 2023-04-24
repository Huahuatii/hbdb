<template>
    <v-chart ref="chart" :options="chartOptions" :data="chartData" type="graph" style="min-height: 600px;"></v-chart>
</template>
    
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import VChart from 'vue-echarts';
import type * as echarts from 'echarts';
import { get_data_relation } from '../../utils/request';
import categories_json from '../../assets/categories.json'
import node_and_link from '../../assets/testherbdata.json'
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
                    data: ['CPM', 'Herb', 'Compound', 'Target', 'Disease']
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
                        data: node_and_link.node,
                        //   draggable: true,
                        links: node_and_link.link,
                        // legendHoverLink: true,
                        categories: categories_json,
                        // focusNodeAdjacency: true,
                        draggable: true,
                        roam: true,
 
                        cursor: 'pointer',
                        label: {
                            fontSize: 14,
                            position: 'right',
                            formatter: '{b}'
                        },

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

                // const result = await get_data_relation(data, type, pk);
                // this.chartOptions.series[0].data = result.node;
                // this.chartOptions.series[0].links = result.link;
                // (this.$refs.chart as echarts.ECharts).setOption(this.chartOptions);
            } catch (error) {
                console.error(error);
            }
        }
    }
});
</script>
  