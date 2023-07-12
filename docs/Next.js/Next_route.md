# Next.js 定义和组织路由

## 创建路由

Next.js自带路由体系，不要单独引入React-router等依赖。

### 示例：

`localhost:3000/box/son-box`
每个文件夹都表示一个路由段，嵌套路由即将文件夹相互嵌套。
[label](https://nextjs.org/_next/image?url%253D%252Fdocs%252Fdark%252Froute-segments-to-path-segments.png%2526w%253D3840%2526q%253D75%2526dpl%253Ddpl_EsrGouw9etS94qzppZZBRoh2f1VG)

每个文件夹下的`page.js`文件将使该目录的路由可访问。
没有`page.js`的文件夹可以用于存储组件、样式表、图像或其他配置文件

**因为Next.js自带babel，所以页面文件可以为.js、.jsx、.tsx等特殊文件**

## 创建用户界面

每个路由下的page.js文件需要默认导出一个React组件

```js
export default function Home(){
    return <h1>Hello，Next.js</h1>
}
```

## 路由跳转

```js
//引入Link组件
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
```
![Alt text](https://www.nextjs.cn/static/images/learn/navigate-between-pages/links.gif)

