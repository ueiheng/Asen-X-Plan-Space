<template>
    <br>
    <div class="Group-P">最近更新🛸</div>
    <!-- <br> -->
    <div class="Group-content">
        <Card class="card" description="学习React" icon="💡" details="redux" path-url="/React/learn_redux.html" />
        <Card class="card" description="基础linux" icon="📘" details="linux系统基础快速入门" path-url="/zatan/learn_linux.html" />
        <Card class="card" description="description" icon="🔖" details="details" path-url="/guide/" />
        <Card class="card" description="description" icon="🛠️" details="details" path-url="/guide/" />
    </div>
</template>
    
<script setup>
import Card from '../../components/Card.vue';
</script>
    
<style>
.Group-P {
font-size: 20px;
text-align: center;
user-select: none; 
/* css无法选中文*/
color: rgb(89, 91, 91);
margin-left: 40px;
margin-bottom: 10px;
padding: 10px;
width: 140px;
border-radius: 10px;
background-color:var(--vp-c-bg-soft-down);
}

.Group-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card {
    margin: 20px;
}
</style>
