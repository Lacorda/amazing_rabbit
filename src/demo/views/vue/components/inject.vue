<template>
    <div>
        <!-- childMsg: {{ childMsg }}
        <br>
        childText: {{ childText }}
        <br> -->
        childMsg1: {{ childMsg1 }}
        <br>
        data test: {{ count }}
        <br>
        <HlgButton @click="change">change data</HlgButton>
    </div>
</template>

<script>
export default {
    inject: {
        // childMsg: { from: 'msg' },
        // childText: { from: 'text' },
        childMsg1: { from: 'msg1' },
    },
    data() {
        return {
            count: 1
        };
    },
    methods: {
        change() {
            this.count++;
            this.$emit('change', this.count);
        }
    },
};
</script>
