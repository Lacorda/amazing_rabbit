<!--
 * @Author: 风铃
 * @Date: 2021-04-14 17:05:36
 * @Description:
-->
<template>
    <div :class="bem()">
        <ElMenu :default-active="active" router>
            <div v-for="menuItem in menu" :key="menuItem.path">
                <ElSubmenu v-if="menuItem.items" :index="menuItem.path" @select="handleSelect">
                    <template #title>{{ menuItem.name }}</template>
                    <ElMenuItem v-for="item in menuItem.items" :key="item.path" :index="item.path">{{ item.name }}</ElMenuItem>
                </ElSubmenu>
                <ElMenuItem v-else :index="menuItem.path">
                    <template #title>{{ menuItem.name }}</template>
                </ElMenuItem>
            </div>
        </ElMenu>
    </div>
</template>

<script>
export default {
    name: 'PageAslide',
    props: {
        active: {
            type: String,
            default: '',
        },
        menu: {
            type: Array,
            default: () => ([]),
        },
    },
};
</script>

<style lang="scss">
.rabit-page-aslide {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    padding-top: 60px;
    border-right: 1px solid #dfdfdf;
    background: #ffffff;
    .el-menu {
        border: none;
    }
}

</style>
