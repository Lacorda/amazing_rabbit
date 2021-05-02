<!--
 * @Author: 风铃
 * @Date: 2021-04-13 18:44:49
 * @Description: 公共头部
-->
<template>
    <div :class="bem()">
        <div :class="bem('logo')">
            DEMO小屋
        </div>
        <div :class="bem('navs')">
            <ElMenu :default-active="active" mode="horizontal" router>
                <ElMenuItem v-for="nav in navs" :key="nav.index" :index="nav.path" :route="nav.path">{{ nav.name }}</ElMenuItem>
            </ElMenu>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PageHeader',
    props: {
        active: {
            type: String,
            default: '',
        },
        navs: {
            type: Array,
            default: () => ([]),
        },
    },
};
</script>

<style lang="scss">
.rabit-page-header {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 24px;
    border-bottom: 1px solid #dfdfdf;
    background: #ffffff;
    &__logo {
        font-size: 24px;
        display: flex;
        align-items: center;
        color: #000000;
    }
    &__navs {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        .el-menu.el-menu--horizontal {
            border-bottom: none;
        }
    }
}

</style>
