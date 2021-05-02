import Vue from 'vue';
import SvgIcon from './index.vue'; // svg组件

// 注册到全局
Vue.component(SvgIcon.name, SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
export default requireAll(req);
