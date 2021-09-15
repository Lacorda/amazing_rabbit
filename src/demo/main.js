import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import HLGUI from 'hlg-ui';

import bem from '@mixins/bem';

import RContainer from './components/container';
import {
    Input, Menu, Submenu, MenuItem, MenuItemGroup,
    PageHeader, Button
} from 'element-ui';

Vue.config.devtools = true;

Vue.use(VueRouter);
Vue.use(HLGUI);

Vue.mixin(bem);

Vue.component('RContainer', RContainer);

Vue.component(Input.name, Input);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(PageHeader.name, PageHeader);
Vue.component(Button.name, Button);

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
