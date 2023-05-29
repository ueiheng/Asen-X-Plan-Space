<template>
    <div class="Group-content">
        <Card class="card" description="学习React" icon="💡" details="React-redux saga"   />
        <Card class="card" description="基础linux" icon="📘" details="linux系统基础快速入门"   />
        <Card class="card" description="description" icon="🔖" details="details"  />
        <Card class="card" description="description"  icon="🛠️" details="details"  />
    </div>
</template>
    
<script setup lang='ts'>
import Card from '../../components/card.vue';
</script>
    
<style>
.Group-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.card {
    margin: 20px;
}
</style>
