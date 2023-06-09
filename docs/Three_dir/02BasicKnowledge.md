# 详解Three.js实现立方体的开发步骤

## 第一步：将安装后的three进行引入
```js no-run
import * as THREE from 'three';
```

## 第二步：布置场景

**场景作用：**
1. 容器：场景是所有三维对象的容器，我们可以将需要显示的所有物体添加到场景中，然后交给three.js引擎进行渲染。

2. 管理：场景管理着所有与场景有关的组件，如相机、灯光等。我们可以通过场景来添加这些组件，也可以从场景中删除这些组件。

3. 事件：场景也可以处理用户事件，比如鼠标点击、键盘按键等。我们可以在场景中添加对应的事件监听器来处理用户的输入。

4. 处理动画：场景可以用于处理动画效果，我们可以将需要动画的物体添加到场景中，然后利用渲染循环不断更新物体的状态，实现动画效果。
   
<br>
<br>

- 场景是所有三位对象的容器，是整个渲染器的核心部分。必不可少！
```js
const scene = new THREE.Scene();
```

## 第三步：搭建相机

**常见相机种类：**

1. **透视相机**(PerspectiveCamera)：透视相机是最常用的相机类型之一，它根据透视原理来投影场景。远离相机的物体会显得比较小，近处的物体则会显得比较大，这种效果比较符合人眼的视觉感受，因此透视相机通常用于需要展示深度感的场景中。

2. **正交相机**(OrthographicCamera)：正交相机则是以正交投影方式来渲染场景，不会对距离产生影响，所有物体的大小比例是固定不变的。通常用于需要精确测量物体大小、制作二维类似地图、设计平面布局等场景。

3. **立方体相机**(CubeCamera)：立方体相机以六个面为摄像头进行拍摄，可以将一个物体的各个角度完整地呈现出来。常常用于渲染环境贴图、制作反射、折射效果等。

4. **VR相机**(VRControls)：VR相机用于在虚拟现实中进行场景渲染，它可以让用户沉浸在三维场景中，实现360度全方位视角的交互体验。


<br>
<br>

- 相机决定了场景中物体的**观察方式**，定义了渲染器如何将场景中的三位物体投影到屏幕上。
```js no-run
const const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
     0.1, 
     1000
);
```
这段代码 给PerspectiveCamera相机传递了四个参数
1. 第一个参数75表示摄像机的**可视角度**，用角度表示。这个值越大，场景中的物体看起来就越小 
2. 第二个参数window.innerWidth / window.innerHeight表示视窗的**宽高比**。在这个例子中，我们使用了浏览器窗口的宽高比作为相机视野的宽高比，保证场景不会被拉伸或压缩。
3. 第三第四参数为**近截面**和**远截面**，当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。

**特别注意：此时我们创建的相机位于原点！原点！原点！**


## 第四步：创建渲染器实例

- 在Three.js中，渲染器（Renderer）是将场景中的物体、光源等元素转换成最终图像的核心组件之一。它的作用是通过计算光线、投影等数学运算，将三维场景渲染出来并显示在屏幕上。
  
- 在Three.js中，提供了多个渲染器，包括**WebGLRenderer**、CanvasRenderer、SVGRenderer等，其中最常用的是**WebGLRenderer**。

- **WebGLRenderer**使用WebGL技术来完成渲染工作，能够利用GPU硬件加速，因此它的渲染效率比较高。同时，WebGLRenderer还支持多种功能，如阴影、天空盒、后期处理等。
  

```js no-run
cosnt renderer = new THREE.webGLRenderer();

renderer.render(scene,camera) 
```

注意：此时我们已经将创建好的场景和相机进行了渲染，但并未添加物体

**即此时的场景如下：** 

全黑！
<sceneandcamera />
<script setup>
    import sceneandcamera from './pages/02基础知识场景和相机渲染器.vue'
    import addCube from './pages/02基础知识添加物体.vue'
    import addOrbit from './pages/02轨道控制器.vue'
    import beauty from './pages/02美化立方体.vue'
</script>

## 第五步：创建物体

- 本篇以正反体为例，向场景中添加正方体
  
**这段代码实现了将一个黄色的立方体对象添加到场景中，并将相机位置设置为z轴为5的位置。**
1. 创建一个立方体的几何体(**BoxGeometry**)。这个几何体的参数为1,1,1,表示**宽、高、深度**均为1个单位长度。
2. 创建一个材质(**MeshBasicMaterial**)，并将其颜色设置为黄色(0xffff00)。这个材质是Three.js中最基本的材质之一，没有任何光照影响。

3. 创建一个网格对象(**Mesh**)，将立方体几何体和黄色材质对象作为参数，生成一个黄色的立方体物体。然后将该物体添加到场景(scene)中。
4. 将相机位置至于z轴5个单位，此时**相机在场景之外**，才可以看到创建后的物体，否则在**原点于物体重合**！
   
```js no-run
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xffff00})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube);

camera.position.z = 5;
```
效果图如下：

<addCube />

## 第六步：创建一个轨道控制器

- 通过创建轨道控制器，可以让我们波动这个正方体

```js no-run
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    const controls = new OrbitControls( camera, renderer.domElement );
```

效果图如下：

此时使用鼠标拖动或者滚轮滚动都可以对立方体进行波动
<addOrbit />

## 第七步：美化立方体

- 添加坐标轴
```js
const axes = new THREE.AxesHelper(5);
scene.add(axes)
```

- 施加波动的惯性作用
  
**.enableDamping : Boolean**
将其设置为true以启用阻尼（惯性），这将给控制器带来重量感。默认值为false。
请注意，如果该值被启用，你将必须在你的动画循环里调用.update()。

```js no-run
controls.enableDamping = true
```


<beauty />


  





