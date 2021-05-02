
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import routes from './router';

import './components/svg-icon';

Vue.config.devtools = true;

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'hash',
});

export default new Vue({
    router,
    mounted() {
        document.dispatchEvent(new Event('render-event'));
    },
    render: r => r(App)
}).$mount('#app');
