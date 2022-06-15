/*
 * @Author: 风铃
 * @Date: 2021-04-13 18:51:31
 * @Description: 导航
 */
export default [
    {
        name: '首页',
        path: '/index',
        items: [
            {
                name: '0.测试oaid',
                path: '/index/test-oaid',
            },
            {
                name: '1.循环里的闭包',
                path: '/index',
            },
            {
                name: '2.Web Worker',
                path: '/index/web-worker',
            },
            {
                name: '3.CSS各种居中布局',
                path: '/index/layout-center',
            },
            {
                name: '4.CSS各种自适应布局',
                path: '/index/layout-flex',
            },
            {
                name: '5.CSS宽高等比缩放',
                path: '/index/same-size',
            },
            {
                name: '6.圣杯布局与双飞翼布局',
                path: '/index/layout-float',
            },
            {
                name: '7.position与overflow',
                path: '/index/pover',
            },
            {
                name: '8.层叠上下文',
                path: '/index/stack-level',
            },
        ],
    },
    {
        name: '手写实现',
        path: '/manual',
        items: [
            {
                name: 'js基础篇',
                path: '/manual/javascript',
            },
        ],
    },
    {
        name: 'Vue',
        path: '/vue',
        items: [
            {
                name: 'Vue组件间的通信',
                path: '/vue',
            },
            {
                name: 'Slot插槽',
                path: '/vue/slot',
            },
            {
                name: 'observer',
                path: '/vue/observer',
            },
            {
                name: '源码系列',
                path: '/vue/resource',
            },
            {
                name: 'keepAlive',
                path: '/vue/keepAlive',
            },
        ],
    },
    {
        name: '工具',
        path: '/tools',
        items: [
            {
                name: '上传到OSS',
                path: '/tools',
            },
            {
                name: '读取文件',
                path: '/tools/file-read',
            },
            {
                name: 'test',
                path: '/tools/test',
            },
        ],
    },
    {
        name: 'More',
        path: '/more',
        items: [
            {
                name: '无限可能',
                path: '/more',
            },
        ],
    },
];
