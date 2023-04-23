 # 一、介绍：
- Three.js是一个基于JavaScript的3D图形库，它提供了一系列的3D图形编程功能和API。

[Three.js官网](https://threejs.org )

## 以下是Three.js的一些基础概念：

1. 场景(Scene)：Three.js中的所有3D对象都需要在场景中进行渲染。场景是所有可见对象的容器，可以添加、删除和编辑场景中的各种对象。

2. 相机(Camera)：相机定义了观察场景的位置、方向和视野范围。Three.js中提供了多种类型的相机，如透视相机(PerspectiveCamera)、正交相机(OrthographicCamera)等。

3. 渲染器(Renderer)：渲染器负责将场景和相机中的3D对象渲染到浏览器中。Three.js提供了多种渲染器，如WebGLRenderer、CanvasRenderer等。

4. 几何体(Geometry)：几何体用于定义3D对象的形状。Three.js中提供了多种几何体对象，如BoxGeometry、SphereGeometry、PlaneGeometry等。

5. 材质(Material)：材质用于定义3D对象的外观和纹理。Three.js中提供了多种材质对象，如MeshBasicMaterial、MeshLambertMaterial、MeshPhongMaterial等。

6. 网格(Mesh)：网格是由几何体和材质组成的对象。在Three.js中，网格是最常用的3D对象类型。

- 除了上述基础概念，Three.js还提供了一系列的API和功能，如灯光(Light)、纹理(Texture)、动画(Animation)等。掌握了这些基础概念和API，就可以开始使用Three.js创建精美的3D场景和效果了。
  
<br>
<br>
<br>

# 二、安装

## **安装（Installation）**

你可以使用npm以及现代构建工具来安装 three.js ，也可以只需静态主机或是 CDN 来快速上手。对于大多数用户来说，从 npm 安装是最佳选择。

所有安装 three.js 的方式都依赖于 ES modules（参见 Eloquent JavaScript: ECMAScript Modules）。ES modules使你能够在最终项目中包含所需库的一小部分。

1. npm 安装
```js
    npm install three
```

2. CDN或静态主机安装
```js
    <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
```
<br>
<br>
<br>

# 三、Three.js初体验

## 3D基础实例
本文将在Vue3.0框架中使用three.js3D


**实现我们的第一个3D立方体**

效果图如下：
<firstCanvas />

**源代码：**
```vue
<template>
    <div ref="myCanvas"></div>
</template>
    
<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue';
//场景
const scene = new THREE.Scene();

//透视相机   第一个参数75是  视野角度，单位：角度， 第二个参数长宽比  第三第四参数为近截面和远截面，当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//获取dom
const myCanvas = ref(null)
//创建一个渲染器实例
const renderer = new THREE.WebGLRenderer();

// 添加立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“渲染循环”（render loop）或者“动画循环”（animate loop）的东西。
function animate() {
    requestAnimationFrame(animate);
    //让正方体转起来
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

onMounted(() => {
    console.log(myCanvas);
    // 使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序
    renderer.setSize(window.innerWidth / 2.2, window.innerHeight / 2.2);

    //将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中
    myCanvas.value.appendChild(renderer.domElement);//形成canvas元素

    //调用旋转函数
    animate();
})


</script>
    
<style></style>

```

<script setup>
    import firstCanvas from './pages/01第一个场景.vue'
</script>