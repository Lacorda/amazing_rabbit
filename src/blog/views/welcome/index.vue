<template>
    <div>
        <div ref="bg" :class="bem('bg')">
            <div ref="logo" class="logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <h1 data-text="欢迎来到我的博客，现在出发吧~">欢迎来到我的博客，现在出发吧~</h1>
            <Mouse v-if="showMouse" @click="enterHome" />
        </div>
        <div v-if="!hideLoading" :class="[bem('loading'), {'loaded':!loading}]">
            <div :class="bem('loading--left')" />
            <div :class="bem('loading--right')" />
            <div :class="bem('loading-spinner')">
                <div class="configure-border-1">
                    <div class="configure-core" />
                </div>
                <div class="configure-border-2">
                    <div class="configure-core" />
                </div>
                <div class="loading-word">LOADING...</div>
            </div>
        </div>
    </div>
</template>

<script>
import sleep from '@services/sleep';
import mouse from '@mixins/mouse';
import Mouse from '../../components/mouse';

export default {
    name: 'Welcome',
    components: {
        Mouse,
    },
    mixins: [mouse],
    data() {
        return {
            loading: true,
            hideLoading: false,
            showMouse: false,
            entering: false,
        };
    },
    async mounted() {
        await sleep(1000);
        this.loading = false;
        await sleep(500);
        this.hideLoading = true;
        await sleep(1000);
        this.showMouse = true;
        document.body.style.overflowY = 'hidden';
    },
    unmounted() {
        document.body.style.overflowY = '';
    },
    methods: {
        enterHome() {
            if (this.entering) return;
            this.entering = true;

            // const bgBounding = this.$refs.bg.getBoundingClientRect();
            const logoBounding = this.$refs.logo.getBoundingClientRect();

            localStorage.setItem('bounding', JSON.stringify(logoBounding));
            window.location.href = 'https://lacorda.github.io/blog/';
            // this.$emit('update:bounding', { bg: bgBounding, logo: logoBounding });
            // this.$router.push('/web');
        },
    },
};
</script>

<style lang="scss" src="./index.scss"></style>
