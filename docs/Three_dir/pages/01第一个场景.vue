<template>
    <div ref="myCanvas" style="width: 682px;height: 335px;border-radius: 8px;overflow: hidden;">
    </div>
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


// 1.添加立方体
// 要创建一个立方体，我们需要一个BoxGeometry（立方体）对象. 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）。未来我们将在这方面进行更多的探索。
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 2.接下来，对于这个立方体，我们需要给它一个材质，来让它有颜色。
// Three.js自带了几种材质，在这里我们使用的是MeshBasicMaterial。
// 所有的材质都存有应用于他们的属性的对象。在这里为了简单起见，我们只设置一个color属性，值为0xffff00，也就是黄色。
// 这里所做的事情，和在CSS或者Photoshop中使用十六进制(hex colors)颜色格式来设置颜色的方式一致。
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// 第三步，
// 我们需要一个Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
// 默认情况下，当我们调用scene.add()的时候，物体将会被添加到(0,0,0)坐标。但将使得摄像机和立方体彼此在一起。
// 为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。
camera.position.z = 5;



// 第四步 animate函数
// 这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“渲染循环”（render loop）或者“动画循环”（animate loop）的东西。

// 如果你是一个浏览器游戏开发的新手，你或许会说“为什么我们不直接用setInterval来实现刷新的功能呢？”当然啦，我们的确可以用setInterval，
// 但是，requestAnimationFrame有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停。
// 因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
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