<template>
    <v-chart class="chart" :option="option" autoresize style="min-height: 500px;"/>
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
      text: '玫瑰图',
      subtext: 'no subtext',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [] // 动态生成
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
        name: 'Data type',
        type: 'pie',
        radius: [40, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [] // 动态生成
      }
    ]
  });
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://192.168.30.33:8000/disease/D003/herb/');
      const data = response.data.frequency;
      const legendData = data.map((item: any) => item.name);
      const seriesData = data.map((item: any) => ({ value: item.value, name: item.name }));
      option.value.legend.data = legendData;
      option.value.series[0].data = seriesData;
    } catch (error) {
      console.error(error);
    }
  });
  </script>
  
  <style scoped>
  .chart {
    height: 400px;
    width: 600px;
  }
  </style>