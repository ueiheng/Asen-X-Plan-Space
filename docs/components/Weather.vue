<template>
    
</template>
    
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

let location = 'wuhan';
onMounted(() => {
    axios({
        method: 'get',
        url: 'https://api.seniverse.com/v3/weather/now.json',
        params: {
            key: 'Sjg5V7Blro_IxE9ZC',
            location: location,
            language: 'zh-Hans',
            unit: 'c'
        },
        timeout: 5000 //超时时间
    }).then(function (response) {
        let { data } = response
        // 处理响应数据
        console.log(data.results[0]);
    }).catch(function (error) {
        // 处理错误
        console.log(error);
    });
})
</script>
    
<style></style>
