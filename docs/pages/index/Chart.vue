<template>
    <div ref="chart" style="height: 500px;width: 500px;"></div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null)
const dataX = ref([]);
const dataY = ref([]);

onMounted(() => {
    // 定义一个空数组用于存储 x 轴数据
    for (let i = -100; i <= 100; i++) {
        dataX.value.push(i / 10);
    }

    // 定义一个空数组用于存储 y 轴数据
    for (let i = 0; i < dataX.value.length; i++) {
        dataY.value.push(Math.sin(dataX.value[i]));
    }

    // 在组件挂载后，初始化 ECharts 实例
    const chartInstance = echarts.init(chart.value);

    // 配置项和数据
    const option = {
        title: {
            text: '正弦函数'
        },
        tooltip: {},
        legend: {
            data: ['y=sin(x)']
        },
        xAxis: {
            type: 'value',
            boundaryGap: false,
            axisLine: { onZero: true },
            data: dataX.value
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'y=sin(x)',
                type: 'line',
                data: dataY.value,
                smooth: true
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    chartInstance.setOption(option);

});

</script>



