const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('../views/index/closure.vue'),
    },
    // {
    //     path: '/index/closure',
    //     name: 'Closure',
    //     component: () => import('../views/index/closure.vue'),
    // },
    {
        path: '/index/web-worker',
        name: 'WebWorker',
        component: () => import('../views/index/web-worker'),
    },
    {
        path: '/index/layout-center',
        name: 'LayoutCenter',
        component: () => import('../views/index/layout-center'),
    },
    {
        path: '/index/layout-flex',
        name: 'LayoutFlex',
        component: () => import('../views/index/layout-flex'),
    },
    {
        path: '/index/same-size',
        name: 'SameSize',
        component: () => import('../views/index/same-size'),
    },
    {
        path: '/index/pover',
        name: 'Pover',
        component: () => import('../views/index/pover'),
    },
    {
        path: '/vue',
        name: 'Vue',
        component: () => import('../views/vue'),
    },
    {
        path: '/vue/slot',
        name: 'VueSlot',
        component: () => import('../views/vue/slot'),
    },
    {
        path: '/tools',
        name: 'Upload',
        component: () => import('../views/tools/upload'),
    },
    {
        path: '/tools/file-read',
        name: 'FileRead',
        component: () => import('../views/tools/file-read'),
    },
    {
        path: '/more',
        name: 'More',
        component: () => import('../views/more'),
    },
];

export default routes;
