# Gsap
<script setup>
    import gsap from './pages/04gsap.vue'
</script>

## 简介
- GSAP是一个强大的JavaScript动画库，可以让开发者轻松地在web应用程序中创建高性能的动画效果。GSAP支持CSS、SVG、画布(canvas)、React、Vue、WebGL等多种动画对象，同时还支持颜色、字符串、运动路径以及一般对象等动画效果。
- GSAP不仅支持主流浏览器，而且具有自适应性，无论在什么设备上使用都能够保证高性能及流畅效果。

## 安装Gsap
- 直接使用npm进行安装即可使用
```js no-run
npm install gasp
```

## 使用gsap动画库代替上一节中我们自己写的动画
 
```js no-run
//使用gsap动画库设置动画
gsap.to(cube.position,{
    x:6,
    duration:5,
    repeat:-1,
    ease:"power3",
    onStart:()=>{
        console.log("开始运动了");
    },
})
gsap.to(cube.rotation,{
    x:Math.PI*2,duration:5,ease:"power3",repeat:-1,
})


```
- 这段代码用了 GSAP 库中的 **to** 方法，将 **cube**对象的位置和旋转属性设置为动画效果。具体而言，第一个 **to** 方法让立方体的 **position** 属性沿着 x 轴移动到 6 的位置，运动时长为 5 秒钟，不断重复播放。同时，该方法还指定了缓动函数为 **power3**，即三次方缓动，使得动画开始时缓慢加速，然后快速结束。
<gsap />