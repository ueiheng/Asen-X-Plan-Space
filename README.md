# Instructions for the use of physical imaging systems

## 一、修改左侧sidebar

直接通过.vitepress中的config.js进行修改


```js
sidebar: [
            {
                text: '开始',
                items: [
                    {
                        text: 'CSS3:  Flex布局',
                        link: '/guide/01flex',
                        items: [
                            { text: 'promise', link: '/guide/02promis' }
                        ],
                        collapsible: true,
                        collapsed: true
                    },
                ],
                collapsible: true,
                collapsed: true
            },
            {
                text: '正弦函数',
                items: [
                    { text: '正弦函数', link: '/guide/03sin_img' },
                ],
                collapsible: true,
                collapsed: true,
            },
        ]

```

## 二、添加正文
- 在guide目录下新建md文件，并在config.js中配置文件路由
- 
- 如需在md文件中使用vue，请先在/pages中新建文件夹和.vue文件
- 最后在md文件中引入该vue文件
- 若vue文件有公共组件可以提出的，可以单独封装到/components目录下进行组件复用！！


## 三、处理图片资源

- 在/public/images目录下放入图片资源，该目录在进行打包时不会进行压缩，可直接使用