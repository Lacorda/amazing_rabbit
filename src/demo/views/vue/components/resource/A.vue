<template>
    <div>
        <div class="title">这是子组件</div>
        <div class="attr">
            {{ obj }}<br>
            {{ arr }}<br>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object,
            default: () => ({})
        },
        arr: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            msg2: '子组件的data'
        };
    },
};
</script>
