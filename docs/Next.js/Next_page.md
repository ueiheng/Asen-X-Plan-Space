## 为什么选择Next.js

## 首屏加载速度快
我们的内嵌场景比较丰富，因此比较追求页面的一个首屏体验，NextJS 的产物类似 MPA（多页面应用），在请求页面时会对当前页面的资源进行按需加载,而不是去加载整个应用, 相对于 SPA 而言，可以实现更为极致的用户体验。


## SEO优化好
SSR \ SSG \ ISR 支持页面内容预加载，提升了搜索引擎的友好性。


## 内置特性易用且极致
NextJS 内置 getStaticProps、getServerSideProps、next/image、next/link、next/script等特性，充分利用该框架的这些特性，为你的用户提供更高层次的体验，这些内容后文会细讲。


缺点：

页面响应相对于SPA而言更慢
由于页面资源分页面按需加载，每次路由发生变化都需要加载新的资源，优化不够好的话，会导致页面卡顿。
开发体验不够友好
开发环境下 NextJS 根据当前页面按需进行资源实时构建，影响开发及调试体验


## 图像组件

Next.js不是在构建时优化图像，而是根据用户请求按需优化图像，与静态网站生成器和仅静态不同，无论发布多少图像，构建时间不会增加。

```js
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```
## 修改html源信息    /pages/index.js

Head组件
```js
<Head>
    <title>Create Next app</title>
    <link rel="icon" href="/favicon.ico" />
</Head>
```

在需要使用的组件中直接引入
```js
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}
```


## 是用数据进行静态生成 SSG
在Next.js中，当您导出页面组件时，您还可以导出一个名为getStaticProps的函数

`getStaticProps`在生产环境构建时运行，并且可以获取外部数据发送到页面

```js
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```