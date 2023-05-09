<template>
    <div ref="myCanvas">
    </div>
</template>
    
<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// import { GLTFLoaderUtils } from 'three/examples/jsm/loaders/GLTFLoaderUtils.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//透视相机   第一个参数75是  视野角度，单位：角度， 第二个参数长宽比  第三第四参数为近截面和远截面，当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//获取dom
const myCanvas = ref(null)
//创建一个渲染器实例
const renderer = new THREE.WebGLRenderer({ antialias: true });


// 调整摄像机角度
camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 2;


const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true


const loader = new GLTFLoader();
loader.load('../../gltf/wolf_with_animations.glb', (gltf) => {
    const model = gltf.scene;

    model.scale.set(2, 2, 2);

    let mixer = new THREE.AnimationMixer(model); // 创建融合器（mixer）
    const clips = gltf.animations; // 获取所有动画  
    const walkClip = THREE.AnimationClip.findByName(clips, '02_walk'); // 找到走路的动画 clip
    
    const action = mixer.clipAction(walkClip); // 创建动画 action
    action.play(); // 播放动画
    scene.add(model);
    
});

const light = new THREE.AmbientLight(0xffffff, 4);
scene.add(light);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 0, 0);
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight);
scene.add(spotLight.target);

// 第四步 animate函数
// 这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“渲染循环”（render loop）或者“动画循环”（animate loop）的东西。

// 如果你是一个浏览器游戏开发的新手，你或许会说“为什么我们不直接用setInterval来实现刷新的功能呢？”当然啦，我们的确可以用setInterval，
// 但是，requestAnimationFrame有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停。
// 因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。


function animate() {
    // const clock = new THREE.Clock();
    requestAnimationFrame(animate);
    // const delta = clock.getDelta();
    // console.log(Mymixer);
    // Mymixer.update(delta);
    renderer.render(scene, camera);
}

onMounted(() => {
    // console.log(myCanvas);
    // 使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序
    renderer.setSize(window.innerWidth, window.innerHeight);
    //将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中
    myCanvas.value.appendChild(renderer.domElement);//形成canvas元素

    //调用旋转函数
    animate();
})

</script>
<style></style>