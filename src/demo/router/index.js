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
        path: '/more',
        name: 'More',
        component: () => import('../views/more'),
    },
];

export default routes;
