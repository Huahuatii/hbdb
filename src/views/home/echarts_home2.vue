<template>
    <v-chart class="chart" :option="option" autoresize style="min-height: 470px;" />
  </template>
  
  <script lang="ts" setup>
  import axios from 'axios';
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';
  import { ref, provide, onMounted } from 'vue';
  
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  provide(THEME_KEY, 'light');
  
  const option = ref({
    title: {
      text: 'Proportion of Hospital Prescriptions',
      textStyle: {
        fontSize: 30,
        // fontWeight: 'bold',
        color: '#565656'
      },
    //   subtext: 'no subtext',
      left: 'center'
    },
    
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        { value: 3872, name: 'Prescriptions' },
        { value: 1340, name: 'Hospital Prescriptions' },

      ] // 动态生成
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        // dataView: { show: true, readOnly: false },
        // restore: { show: true },
        // saveAsImage: { show: true }
      }
    },
    // 设置两个渐变色
    color:['#e0a291','#c3b89f'],
    series: [
      {
        name: 'Data type',
        type: 'pie',
        radius: [40, 140],
        center: ['50%', '50%'],
        // roseType: 'area',

        // 为不同data设置不同颜色
        
        itemStyle: {
          borderRadius: 7
        },
        
        data: [
            { value: 3872, name: 'Prescriptions' },
            { value: 1340, name: 'Hospital Prescriptions' },

        ] // 动态生成
      }
    ],
    emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
  });
  </script>
  
  <style scoped>
  .chart {
    height: 400px;
    width: 600px;
  }
  </style>