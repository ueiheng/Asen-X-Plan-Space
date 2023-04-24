<!-- 首页 -->
<template>
    <div class="site-title">Asen Space</div>
    <div class="content-mq">
        <div class="marquee">- A - radical - front-end - enthusiast</div>
        <div class="marquee">- A - radical - front-end - enthusiast</div>
        <div class="marquee">- A - radical - front-end - enthusiast</div>
        <div class="marquee">- A - radical - front-end - enthusiast</div>
    </div>- 
</template>
    
<script setup>

</script>
    
<style lang="less" scope>
.is-home {
    background-color: #e9e9e9;
}

// nav标题颜色
.VPNav {
    background-color: #e9e9e9;
}

//样式覆盖
.VPNavBar.has-sidebar .content-body[data-v-cf6e7c5e],
.VPNavBar.fill .content-body[data-v-cf6e7c5e] {
    background-color: #e9e9e9;
}

.site-title {
    // width: 100%;
    font-size: 150px;
    text-align: center;
    color: #222;
    height: 300px;
    overflow: hidden;
    font-weight: 700;
    padding-top: 80px;
}


.content-mq {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 60px;
    margin-right: 60px;
    overflow: hidden;
    font-size: 32px;
    height: 44px;
}

.marquee {
    white-space: nowrap;
    animation: scroll 4s cubic-bezier(0.43,1.20, 0.14, 1.72) infinite;
    margin-right: 20px;
}
.marquee:last-child {
    margin-right: 0;
}



@keyframes scroll {
  0% {
    transform: translateX(5%);
  }
  100% {
    transform:translateX(-100%);
  }
}



</style>