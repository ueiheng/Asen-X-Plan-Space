<!-- 首页 -->
<template>
    <div class="site-title">ASEN X PLAN SPACE</div>
    <div class="content-mq">
        <div class="marquee">- A - radical - front-end - <strong>Enthusiast</strong></div>
        <div class="marquee">- A - radical - front-end - <strong>Enthusiast</strong></div>
        <div class="marquee">- A - radical - front-end - <strong>Enthusiast</strong></div>
        <div class="marquee">- A - radical - front-end - <strong>Enthusiast</strong></div>
    </div>
    <!-- <div class="index-img"><img src="../../public/images/indexbac.png" alt="img"></div> -->
    <div class="index-img"><video class="index-video" autoplay muted disablepictureinpicture
            src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-the-clouds-with-the-radiant-sun-14171-large.mp4"
            loop></video></div>
</template>
    
<script setup>

</script>
    
<style lang="less">
.site-title {
    width: 100%;
    font-size: 144px;
    text-align: center;
    // color: #000000;
    height: 230px;
    overflow: hidden;
    font-weight: 900;
    padding-top: 80px;
    white-space: nowrap;
    user-select: none;
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
    user-select: none;
}

.marquee {
    white-space: nowrap;
    animation: scroll 12s cubic-bezier(0.43, 1.20, 0.14, 1.72) infinite;
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
        transform: translateX(-100%);
    }
}

.index-img {
    border-radius: 15px;
    min-width: 350px;
    overflow: hidden;
    margin: 30px 20px;
    // height: 600px;
}

.index-img .index-video {
    width: 100%;
    height: 100%;
}
</style>