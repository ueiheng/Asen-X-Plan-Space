// 此处配置页头header

export default {
    title: "Asen Learn Space",
    titleTemplate: false, //组织子标题
    ignoreDeadLinks: true,//忽略死链接
    lastUpdated: true,    //上次git上传时间
    description: "Three.js", // <meta>标签
    themeConfig: {
        siteTitle: "Asen", // 网站标题
        logo: '/images/author.jpg',
        nextLinks: true,
        nav: [
            {
                text: "文档",
                items: [
                    { text: '文档1' },
                    { text: '文档2' }
                ]
            },
            {
                text: "快捷导航",
                items: [
                    { text: 'Vue3.0 官网', link: 'https://cn.vuejs.org/' },
                    { text: 'React18 官网', link: 'https://zh-hans.react.dev/' },
                    { text: 'Three.js 官网', link: 'https://threejs.org/' },
                    { text: 'Angular.js 官网', link: 'https://angular.io/' },
                    { text: 'Leetcode', link: 'https://leetcode.cn/' },
                    { text: 'CSDN', link: 'https://www.nowcoder.com/' },
                    { text: '掘金', link: 'https://juejin.cn/' },
                    { text: 'GPT 3.0', link: 'https://chat1.aichatos.com/' },
                ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/ueiheng" },
        ],
        sidebar: [
            {
                text: '开始',
                items: [
                    {
                        text: 'CSS3:  Flex布局',
                        link: '/guide/01flex',
                        items: [
                            // { text: 'promise', link: '/guide/02promise' }
                        ],
                        //是否可以进行折叠
                        // collapsible: true,
                        // collapsed: true
                    },
                    {
                        text: 'JS：Promise', link: '/guide/02promise'
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
            {
                text: 'Three.js教程',
                items: [
                    { text: '快速上手', link: '/Three_dir/01快速入门.md' },
                    { text: '基础知识', link: '/Three_dir/02基础知识.md' },
                    { text: '旋转与缩放', link: '/Three_dir/03旋转与缩放.md' },
                    { text: 'Gsap动画库', link: '/Three_dir/04Gsap动画库.md' },
                    { text: 'WalkingWitch', link: '/Three_dir/03行走女巫.md' },

                ],
                collapsible: true,
                collapsed: true,
            },
        ]
    },


};