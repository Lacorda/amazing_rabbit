<!--
 * @Author: 风铃
 * @Date: 2021-04-14 17:00:57
 * @Description: 外部容器
-->
<template>
    <div :class="bem()">
        <RHeader :active="activeNav" :navs="navs" />
        <RAslide :menu="menu" :active="activeAslide" />
        <slot />
    </div>
</template>

<script>
import navs from '../../constants/navs';
import RHeader from '../header';
import RAslide from '../aslide';

export default {
    name: 'Container',
    components: {
        RHeader,
        RAslide,
    },
    data() {
        return {
            activeNav: '',
            navs,
            activeAslide: '',
        };
    },
    computed: {
        curNav() {
            return this.navs.find((item) => item.path === this.activeNav) || {};
        },
        menu() {
            return this.curNav.items || [];
        },
    },
    mounted() {
        const { path } = this.$route;
        this.activeAslide = path;
        const routes = path.split('/');
        this.activeNav = `/${routes[1]}`;
    },
};
</script>

<style lang="scss">
.rabit-container {
    width: 100vw;
    // height: 100vh;
    padding: 84px 24px 24px 224px;
}

</style>
