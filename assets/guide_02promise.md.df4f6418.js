import{_ as s,a as n,c as a,d as e}from"./app.b29f61af.js";const y=JSON.parse('{"title":"一、引入","description":"","frontmatter":{},"headers":[],"relativePath":"guide/02promise.md","lastUpdated":null}'),l={name:"guide/02promise.md"},p=e(`<p><strong>Promise告诉你，写代码真的也可以很优雅</strong></p><h1 id="一、引入" tabindex="-1">一、引入 <a class="header-anchor" href="#一、引入" aria-hidden="true">#</a></h1><p>==掌握程度：必备技能==</p><h4 id="在进行异步操作的时候-以往的方法能用-但是略显粗糙-存在较多问题" tabindex="-1">在进行异步操作的时候，以往的方法能用，但是略显粗糙，存在较多问题 <a class="header-anchor" href="#在进行异步操作的时候-以往的方法能用-但是略显粗糙-存在较多问题" aria-hidden="true">#</a></h4><p>Promise就是用来处理异步操作，并且，Promise存在一个基本格式，这样就从根源上将大家的代码风格统一，使得异步操作变得非常方便，易读。</p><ol><li>最原始，我们在进行异步操作的时候，通常会使用==回调函数==,来反馈成功或者失败</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//封装异步操作函数</span></span>
<span class="line"><span style="color:#A6ACCD;">function fn(n,successCallback,failCallback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">          if(n&gt;0){</span></span>
<span class="line"><span style="color:#A6ACCD;">              let area = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">              area = 3.14*n*n</span></span>
<span class="line"><span style="color:#A6ACCD;">              //成功</span></span>
<span class="line"><span style="color:#A6ACCD;">              successCallback(total)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }else {</span></span>
<span class="line"><span style="color:#A6ACCD;">              failCallback(\`\${n}值非法\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          },3000)</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  //封装后调用,传入三个参数</span></span>
<span class="line"><span style="color:#A6ACCD;"> fn(10,(value)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(&#39;成功，圆的面积是：&#39;,value)</span></span>
<span class="line"><span style="color:#A6ACCD;"> },(err)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(&#39;失败&#39;，err)</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>==没有promise时，前端处理异步操作的常用方法，存在两个比较重要的问题==</p><p>（1）封装的函数需要三个参数，但是三个参数的位置，并非固定，这意味着，别人需要使用你封装的函数时，一定需要观察仔细，传入正确的参数，使用者可能必须要先看你的文档，才能参与到工作中</p><p>（2）当在<code>successCallback</code>或者<code>failCallback</code>中，再次调用其他函数，嵌套多次时，形成回调地狱，这样的代码不仅不利于维护，可以说是==非常低效==。</p><h1 id="二、promise的美妙世界" tabindex="-1">二、Promise的美妙世界 <a class="header-anchor" href="#二、promise的美妙世界" aria-hidden="true">#</a></h1><p>1.在遇到诸多如此问题后，急需一个解决办法能将异步操作进行简化并统一格式——==Promise==诞生</p><p>本文举例如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function fn(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                //异步代码</span></span>
<span class="line"><span style="color:#A6ACCD;">                setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if (n &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        //传入半径求圆面积</span></span>
<span class="line"><span style="color:#A6ACCD;">                        let area = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        area = 3.14*n*n</span></span>
<span class="line"><span style="color:#A6ACCD;">                        //返回成功的回调函数</span></span>
<span class="line"><span style="color:#A6ACCD;">                        resolve(area)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        reject(\`\${n}非法值\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">                }, 3000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            })</span></span>
<span class="line"><span style="color:#A6ACCD;">            return promise</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  //在调用封装好的promise函数时，可以使用&quot;链式调用&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  fn(10).then(value =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;成功，圆的面积是：&#39;, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(&#39;失败&#39;, err)</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>不难看出，使用<code>promise</code>后，当我们再次调用封装好的函数，只需要传入一个业务参数，本文中即n，即可实现异步操作，这与最原始的异步操作更容易使用，更易读，更简便！</p><h1 id="三、resolve-reject-then-catch-讲解" tabindex="-1">三、resolve reject then catch 讲解 <a class="header-anchor" href="#三、resolve-reject-then-catch-讲解" aria-hidden="true">#</a></h1><ol><li><p>==resolve与reject==</p><p>在new Promise 后，传入了两个参数，一个就是<code>resolve</code>另一个就是<code>reject</code></p><p>其实不难看出，<code>resolve</code>是成功回调函数，而<code>reject</code>是失败回调函数，往这两个函数传入的参数，将可以在调用时获取到。</p></li><li><p>==then 与 catch==</p><p>不难看出，调用封装好的函数后，需要传入一个成功的回调函数和一个失败的回调函数，而<code>.then</code>就是成功回调函数，我们在<code>resolve</code>中传入的参数将在<code>.then</code>中获取到，同理<code>.catch</code>也是失败回调函数，参数依然可以从<code>reject</code>中获取</p></li><li><p>==特别注意！！==</p><p>resolve与reject名字可更改，而<code>.then</code>与<code>.catch</code>是固定的！不过通常情况下，程序员们都会统一格式，不会主动修改<code>resolve</code>与<code>reject</code>。</p></li></ol><h1 id="四、-promise的三种状态" tabindex="-1">四、 Promise的三种状态 <a class="header-anchor" href="#四、-promise的三种状态" aria-hidden="true">#</a></h1><ul><li><p>pending：初始状态/待定</p></li><li><p>fulfilled：操作成功/实现</p></li><li><p>rejected：操作失败/被否决</p></li></ul><p>==注意==：</p><ol><li><p>Promise 会根据状态来确定执行哪个方法 Promise 实例化时状态默认为 pending 的</p><p><strong>如异步状态异常为：rejected，异步状态成功为：fulfilled</strong></p></li><li><p>当promise执行任意回调后，直接结束<code>promise</code>，意味着，如果想再次执行回调，必须再次调用封装的函数 ，即进入fulfilled或rejected状态后，无法再回到其他任意状态。</p></li></ol><p>==文末== 感谢阅读，还望支持！欢迎学习交流，如有错误，还请指正！</p><p>已更新于2022/11/29.</p><p>作者：Asen-coder（阿胜）</p><p><strong>Promise告诉你，写代码真的也可以很优雅</strong></p>`,25),o=[p];function c(r,t,i,C,A,d){return n(),a("div",null,o)}const D=s(l,[["render",c]]);export{y as __pageData,D as default};
