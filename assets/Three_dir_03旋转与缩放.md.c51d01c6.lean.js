import{S as C,P as d,W as A,B as h,M as _,a as u,A as m}from"./chunks/three.module.50b37e64.js";import{O as w}from"./chunks/OrbitControls.df197344.js";import{r as f,o as g,a as i,c as y,b as D,d as b}from"./app.b29f61af.js";const T={__name:"03缩放",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3);function p(){requestAnimationFrame(p),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},P={__name:"03旋转",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3),s.rotation.set(Math.PI/4,Math.PI/4,Math.PI/4);function p(){requestAnimationFrame(p),s.rotation.x+=.01,s.rotation.y+=.01,s.rotation.z+=.01,s.position.x+=.01,s.position.y+=.01,s.position.y>5&&(s.position.x=0,s.position.y=0),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},E={__name:"03旋转1",setup(F){const a=new C,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=f(null),n=new A,t=new h(1,1,1),r=new _({color:16776960}),s=new u(t,r);a.add(s),o.position.z=5;const l=new w(o,n.domElement),c=new m(4);a.add(c),l.enableDamping=!0,s.scale.set(1,2,3),s.rotation.set(Math.PI/4,Math.PI/4,Math.PI/4);function p(){requestAnimationFrame(p),l.update(),n.render(a,o)}return g(()=>{console.log(e),n.setSize(window.innerWidth/2.2,window.innerHeight/2.2),e.value.appendChild(n.domElement),p()}),(x,v)=>(i(),y("div",{ref_key:"myCanvas",ref:e,style:{width:"682px",height:"335px","border-radius":"8px",overflow:"hidden"}},null,512))}},I=b("",4),S=b("",3),M=b("",3),j=JSON.parse('{"title":"旋转与缩放","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、缩放","slug":"一、缩放","link":"#一、缩放","children":[]},{"level":2,"title":"二、旋转","slug":"二、旋转","link":"#二、旋转","children":[]},{"level":2,"title":"三、制作旋转位移动画","slug":"三、制作旋转位移动画","link":"#三、制作旋转位移动画","children":[]}],"relativePath":"Three_dir/03旋转与缩放.md","lastUpdated":null}'),k={name:"Three_dir/03旋转与缩放.md"},H=Object.assign(k,{setup(F){return(a,o)=>(i(),y("div",null,[I,D(T),S,D(E),M,D(P)]))}});export{j as __pageData,H as default};
