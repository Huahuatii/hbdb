<template>
  <v-chart class="chart" :option="option" autoresize style="min-height: 470px;" />
  <div style="min-height: 30px;float: inline-end;">
    <button @click="handleClick('prescription')" v-if="source_type == 'x'">prescription</button>
    <button @click="handleClick('disease')" v-if="source_type == 'x'">disease</button>
    <button @click="handleClick('herb')" v-if="source_type == 'x'">herb</button>
    <button @click="handleClick('compound')" v-if="source_type == 'prescription'">compound</button>
    <button @click="handleClick('target')" v-if="source_type == 'prescription'">target</button>  
  </div>
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
    text: 'Component with High Proportions(top30)',
    // subtext: 'no subtext',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  // legend: {
  //   left: 'center',
  //   top: 'bottom',
  //   data: [] // 动态生成
  // },
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
const source_type = String(window.location.href.split('/')[4]);
const handleClick = async (type: string) => {
  try {
    const pk = String(window.location.href.split('/')[6]);
    const source_type = String(window.location.href.split('/')[4]);

    const response = await axios.get(`http://192.168.30.33:8000/${source_type}/${pk}/${type}`);
    const data = response.data.filter((item: any) => item.count > 0);
    data.sort((a: any, b: any) => b.count - a.count);
    const legendData = data.slice(0, 30).map((item: any) => item['english_name'] || item['chinese_name'] || item['pref_name'] || item['gene_symbol'] || item['english_name']);
    const seriesData = data.slice(0, 30).map((item: any) => ({ value: item.count, name: item['english_name'] || item['chinese_name'] || item['pref_name'] || item['gene_symbol'] || item['english_name']}));
    // option.value.legend.data = legendData;
    option.value.series[0].data = seriesData;
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  handleClick('compound');
});
</script>

<style scoped>
.chart {
  height: 400px;
  width: 600px;
}
</style>