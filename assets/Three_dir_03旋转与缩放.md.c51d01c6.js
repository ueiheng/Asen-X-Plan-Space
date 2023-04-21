import{S as C,P as d,W as A,B as h,M as _,a as u,A as m}from"./chunks/three.module.50b37e64.js";import{O as w}from"./chunks/OrbitControls.df197344.js";import{r as f,o as g,a as i,c as y,b as D,d as b}from"./app.b29f61af.js";const T={__name:"03缩放",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3);function p(){requestAnimationFrame(p),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},P={__name:"03旋转",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3),s.rotation.set(Math.PI/4,Math.PI/4,Math.PI/4);function p(){requestAnimationFrame(p),s.rotation.x+=.01,s.rotation.y+=.01,s.rotation.z+=.01,s.position.x+=.01,s.position.y+=.01,s.position.y>5&&(s.position.x=0,s.position.y=0),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},E={__name:"03旋转1",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3),s.rotation.set(Math.PI/4,Math.PI/4,Math.PI/4);function p(){requestAnimationFrame(p),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},I=b(`<h1 id="旋转与缩放" tabindex="-1">旋转与缩放 <a class="header-anchor" href="#旋转与缩放" aria-hidden="true">#</a></h1><h2 id="一、缩放" tabindex="-1">一、缩放 <a class="header-anchor" href="#一、缩放" aria-hidden="true">#</a></h2><ul><li>我们创建的物体都有一个<strong>scale</strong>属性，我们可以直接调用这个属性或者使用set方法来进行缩放</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//将y轴放大两倍，z轴放大3倍</span></span>
<span class="line"><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//cube.scale.x = 1</span></span>
<span class="line"></span></code></pre></div>`,4),S=b(`<h2 id="二、旋转" tabindex="-1">二、旋转 <a class="header-anchor" href="#二、旋转" aria-hidden="true">#</a></h2><ul><li>同理，我们创建的物体中也有rotation属性，我们也可以直接调用这个属性或者使用set方法来进行旋转</li><li>特别注意：角度请使用弧度制！</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//弧度制在x,y,z轴都旋转45°</span></span>
<span class="line"><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//cube.rotation.x = Math.PI/4</span></span>
<span class="line"></span></code></pre></div>`,3),M=b(`<h2 id="三、制作旋转位移动画" tabindex="-1">三、制作旋转位移动画 <a class="header-anchor" href="#三、制作旋转位移动画" aria-hidden="true">#</a></h2><ul><li>只需要在每次渲染时将<strong>rotation</strong>或<strong>positon</strong>进行增加减少即可实现动画效果</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">animate</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">animate</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//让正方体转起来</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.01</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">cube</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">controls</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3),j=JSON.parse('{"title":"旋转与缩放","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、缩放","slug":"一、缩放","link":"#一、缩放","children":[]},{"level":2,"title":"二、旋转","slug":"二、旋转","link":"#二、旋转","children":[]},{"level":2,"title":"三、制作旋转位移动画","slug":"三、制作旋转位移动画","link":"#三、制作旋转位移动画","children":[]}],"relativePath":"Three_dir/03旋转与缩放.md","lastUpdated":null}'),k={name:"Three_dir/03旋转与缩放.md"},H=Object.assign(k,{setup(F){return(a,o)=>(i(),y("div",null,[I,D(T),S,D(E),M,D(P)]))}});export{j as __pageData,H as default};
