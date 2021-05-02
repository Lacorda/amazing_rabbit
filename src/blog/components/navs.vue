<template>
    <ul :class="bem()">
        <li
            v-for="(nav, inx) in navs"
            :key="inx"
            :class="{'active':nav.path===$route.path}"
            @mouseenter="handleEnter"
            @mouseleave="handleLeave"
            @click="handleClick(nav)"
        >
            <div class="nav-text">{{ nav.name }}</div>
            <div class="nav-line" />
        </li>
    </ul>
</template>

<script>
import navs from '../constants/navs';

export default {
    name: 'Navs',
    data() {
        return {
            navs,
        };
    },
    methods: {
        handleEnter(e) {
            e.target.lastChild.style.width = '100%';
        },
        handleLeave(e) {
            if (e.target.className.includes('active')) return;
            e.target.lastChild.style.width = '0';
        },
        handleClick(nav) {
            this.$router.push(nav.path);
        },
    },
};
</script>

<style lang="scss">
@import '../../stylesheet/var.scss';

.rabit-navs {
    display: flex;
    align-items: center;
    margin-top: 2px;
    li {
        display: flex;
        flex-direction: column;
        margin: 0 16px;
        cursor: pointer;
        .nav-text {
            font-size: 16px;
        }
        .nav-line {
            width: 0;
            height: 2px;
            background-color: $--color-primary;
            margin-top: 4px;
            transition: all 0.2s;
        }
        &.active .nav-line {
            width: 100%;
        }
    }
}
</style>
