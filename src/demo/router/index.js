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
        path: '/index/test-oaid',
        name: 'Oaid',
        component: () => import('../views/index/test-oaid'),
    },
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
        path: '/index/layout-float',
        name: 'LayoutFloat',
        component: () => import('../views/index/layout-float'),
    },
    {
        path: '/index/same-size',
        name: 'SameSize',
        component: () => import('../views/index/same-size'),
    },
    {
        path: '/index/stack-level',
        name: 'stackLevel',
        component: () => import('../views/index/stack-level'),
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
        path: '/vue/observer',
        name: 'VueObserver',
        component: () => import('../views/vue/observer'),
    },
    {
        path: '/vue/resource',
        name: 'VueResource',
        component: () => import('../views/vue/resource'),
    },
    {
        path: '/vue/keepAlive',
        name: 'VueResource',
        component: () => import('../views/vue/keepAlive'),
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
    // 手写实现
    {
        path: '/manual/js',
        name: 'ManualJs',
        component: () => import('../views/manual/js'),
    },
];

export default routes;
