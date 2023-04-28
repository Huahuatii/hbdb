<template>
    <div style="width:1000px;margin:0 auto">
        <div class="echart-div" style="width: 1000px; margin: 25px;height: 600px">
            <v-chart class="chart" :option="option" autoresize style="min-height: 470px;" />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import axios from 'axios';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, ScatterChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    VisualMapComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, onMounted } from 'vue';

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ScatterChart,
    VisualMapComponent,
]);

provide(THEME_KEY, 'light');
const schema = [
    { name: 'date', index: 0, text: '日' },
    { name: 'AQIindex', index: 1, text: 'AQI指数' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'PM10', index: 3, text: 'PM10' },
    { name: 'CO', index: 4, text: '一氧化碳（CO）' },
    { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
    { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
];
const days = [
'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
]
const option = ref({
    color: ['#dd4444', '#fec42c', '#80F1BE'],
    // legend: {
    //     top: 10,
    //     data: ['北京', '上海', '广州'],
    //     textStyle: {
    //         fontSize: 16
    //     }
    // },
    grid: {
        left: '10%',
        right: 150,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        formatter: function (param: any) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + param.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '日期',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16
        },
        max: 12,
        axisLine: {
            show: true
        },
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        axisLine: {
            show: true
        },
        splitLine: {
            show: true
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['特征1'],
            textGap: 30,
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },
        {
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            text: ['特征2'],
            textGap: 30,
            inRange: {
                colorLightness: [0.9, 0.5]
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['#c23531']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            data: [[1, 'Tuesday', 9, 56, 0.46, 18, 6, '良'],
            [2, 'Thursday', 11, 21, 0.65, 34, 9, '优'],
            [3, 'Monday', 7, 63, 0.3, 14, 5, '良'],
            [4, 'Saturday', 7, 29, 0.33, 16, 6, '优'],
            [5, 'Monday', 24, 44, 0.76, 40, 16, '优'],
            [6, 'Monday', 58, 90, 1.77, 68, 33, '良'],
            [7, 'Friday', 49, 77, 1.46, 48, 27, '良'],
            [8, 'Tuesday', 55, 80, 1.29, 59, 29, '良'],
            [9, 'Saturday', 216, 280, 4.8, 108, 64, '重度污染'],
            [10, 'Friday', 127, 216, 2.52, 61, 27, '中度污染'],]
        },
        {
            name: '上海',
            type: 'scatter',
            itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            data: [[1, 'Tuesday', 37, 27, 1.163, 27, 13, '优'],
            [2, 'Saturday', 62, 71, 1.195, 60, 8, '良'],
            [3, 'Tuesday', 38, 74, 1.363, 37, 7, '良'],
            [4, 'Friday', 21, 36, 0.634, 40, 9, '优'],
            [5, 'Monday', 42, 46, 0.915, 81, 13, '优'],
            [6, 'Friday', 52, 69, 1.067, 92, 16, '良'],
            [7, 'Tuesday', 30, 28, 0.924, 51, 2, '良'],
            [8, 'Tuesday', 48, 74, 1.236, 75, 26, '良'],
            [9, 'Tuesday', 85, 113, 1.237, 114, 27, '良'],
            [10, 'Tuesday', 81, 104, 1.041, 56, 40, '良']]
        },
        {
            name: '广州',
            type: 'scatter',
            itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            data: [[1, 'Tuesday', 45, 125, 0.82, 34, 23, '良'],
            [2, 'Tuesday', 27, 78, 0.86, 45, 29, '良'],
            [3, 'Saturday', 60, 84, 1.09, 73, 27, '良'],
            [4, 'Tuesday', 81, 121, 1.28, 68, 51, '轻度污染'],
            [5, 'Monday', 77, 114, 1.07, 55, 51, '轻度污染'],
            [6, 'Saturday', 81, 121, 1.28, 68, 51, '轻度污染'],
            [7, 'Tuesday', 77, 114, 1.07, 55, 51, '轻度污染'],
            [8, 'Friday', 65, 78, 0.86, 51, 26, '良'],
            [9, 'Friday', 33, 47, 0.64, 50, 17, '良'],
            [10, 'Tuesday', 55, 80, 1.01, 75, 24, '良']]
        }
    ]
});
</script>
  
<style scoped>
.chart {
    height: 400px;
    width: 800px;
}
</style>