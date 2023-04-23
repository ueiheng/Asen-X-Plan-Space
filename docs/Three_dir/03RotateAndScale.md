<script setup>
    import scale from './pages/03缩放.vue'
    import rotate from './pages/03旋转.vue'
    import rotate0 from './pages/03旋转1.vue'

</script>
# 旋转与缩放

## 一、缩放

- 我们创建的物体都有一个**scale**属性，我们可以直接调用这个属性或者使用set方法来进行缩放
```js no-run
//将y轴放大两倍，z轴放大3倍
cube.scale.set(1,2,3)
//cube.scale.x = 1
```
<scale />


## 二、旋转
- 同理，我们创建的物体中也有rotation属性，我们也可以直接调用这个属性或者使用set方法来进行旋转
- 特别注意：角度请使用弧度制！
```js no-run
//弧度制在x,y,z轴都旋转45°
cube.rotation.set(Math.PI/4,Math.PI/4,Math.PI/4)
//cube.rotation.x = Math.PI/4
```

<rotate0 />

## 三、制作旋转位移动画

- 只需要在每次渲染时将**rotation**或**positon**进行增加减少即可实现动画效果
```js no-run
function animate() {
    requestAnimationFrame(animate);
    //让正方体转起来
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    cube.position.x += 0.01;
    cube.position.y += 0.01;

    if(cube.position.y>5){
        cube.position.x = 0;
        cube.position.y = 0;
    }

    controls.update()
    renderer.render(scene, camera);
}
```
<rotate />
