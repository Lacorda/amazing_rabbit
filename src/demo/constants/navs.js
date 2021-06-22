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
