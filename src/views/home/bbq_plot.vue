<template>
    <div style="width:1200px;margin:0 auto">
        <div class="echart-div" style="width: 1100px; margin: 0 auto;height: 600px">
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
// 读取一个本地json文件
import example_data from '/home/hht/Myapps/Vue_demo/Vue_vite_demo2/hbdb/utils/example.json';
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
// 遍历json中每个数据，取出其中的y值，并取其中不重复部分
const y_data = Array.from(new Set(example_data.map((item) => item.y)));
const x_data = Array.from(new Set(example_data.map((item) => item.y)));



const x_range = { 'min': 0, 'max': 60 }


// 将json换成列表套列表的形式
const list_data = example_data.map((item) => [item.color, item.size, item.x, item.y]);
console.log('list_data', list_data)


provide(THEME_KEY, 'light');
const schema = [
    { name: 'color', index: 0, text: 'color' },
    { name: 'size', index: 1, text: 'size' },
    { name: 'x', index: 2, text: 'x' },
    { name: 'y', index: 3, text: 'y' },
];

const option = ref({
    color: ['#dd4444'],
    // legend: {
    //     top: 10,
    //     data: ['北京', '上海', '广州'],
    //     textStyle: {
    //         fontSize: 16
    //     }
    // },
    grid: {
        left: 350,
        right: 100,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        formatter: function (param: any) {
            var value = param.value;
            // prettier-ignore
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + param.seriesName
                + '</div>'
                + schema[0].text + '：' + value[0] + '<br>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: 'X轴',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16
        },
        min: x_range.min,
        max: x_range.max,
        axisLine: {
            show: true
        },
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: y_data,
        axisLine: {
            show: true
        },
        splitLine: {
            show: true
        },
        // 设置y轴文字宽度
        axisLabel: {
            width: 200 // 设置 Y 轴文字的宽度为 60 像素
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 1,
            min: 0,
            max: 50,
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
            dimension: 0,
            min: 14,
            max: 17,
            itemWidth: 30,
            calculable: true,
            precision: 0.1,
            itemHeight: 120,
            text: ['特征2'],
            textGap: 30,
            inRange: {
                color: ['#c23531', '#33d993d9']
            },
            outOfRange: {
                symbolSize: [14, 17],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                outOfRange: {
                    color: ['#999']
                }
            }
        }
    ],
    series: [
        {
            name: 'DATA',
            type: 'scatter',
            itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            data: list_data,
            encode: {
                x: 2,
                y: 1
            }
        },

    ]
});
</script>
  
<style scoped>
.chart {
    height: 400px;
    width: 1000px;
}
</style>