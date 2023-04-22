<template>
    <div ref="myCanvas">
    </div>
</template>
    
<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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


//设置摄像机的位置
camera.position.z = 2;
// camera.position.x = 1;
// camera.position.y = 2;


//添加轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true



//加载模型
const loader = new GLTFLoader();
loader.load('../../gltf/scene.gltf', (gltf) => {
    const model = gltf.scene;

    const cubeTexture = new THREE.CubeTextureLoader()
    .setPath('../../gltf/textures/')
    .load([
        'claws_diffuse.png',
        'eyes_diffuse.jpeg',
        'fur__fella3_jpg_001_diffuse.png',
        'fur__fella3_jpg_001_occlusion.png',
        'fur__fella3_jpg_001_specularGlossiness.png',
        'Material__wolf_col_tga_diffuse.jpeg',
        'Material__wolf_col_tga_occlusion.png',
        'Material__wolf_col_tga_specularGlossiness.png'
    ]);

    //创建动画混合器
    let mixer = new THREE.AnimationMixer(model); // 创建融合器（mixer）

    // 播放动画
    console.log(gltf.animations);
    //跑
    mixer.clipAction(gltf.animations[0]).play();

    // 创建水晶材质
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x008080, // 设置材质颜色为白色
        // roughness: 0.1, // 设置粗糙度为 0.1
        // clearcoat: 0.1,
        // metalness: 1, // 设置金属感为 100%
        // transparent: true, // 设置材质为透明的
        // opacity: 0.5, // 设置不透明度为 50%
        // envMapIntensity: 1, // 设置环境映射强度为 100%
        envMap: cubeTexture // 设置环境映射贴图
    });
    // 遍历模型的所有子网格，并将水晶材质应用到它们上面
    model.traverse((child) => {
        if (child.isMesh) {
            child.material = crystalMaterial;
        }
    });

    // const axes = new THREE.AxesHelper(4);
    // scene.add(axes)

    scene.add(model);
    function animate() {
        requestAnimationFrame(animate);

        mixer.update(0.01)

        renderer.render(scene, camera);
    }
    animate()
});

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const spotLight = new THREE.SpotLight(0xffff00);
spotLight.position.set(0, 20, 20);
spotLight.target.position.set(-10, 0, 0);
scene.add(spotLight);
scene.add(spotLight.target);

//等待组件异步加载好后再添加到dom中
onMounted(() => {
    console.log(myCanvas);
    // 使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序
    renderer.setSize(window.innerWidth, window.innerHeight);

    //将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中
    myCanvas.value.appendChild(renderer.domElement);//形成canvas元素
})

</script>
    
<style></style>