
<template>
    <div>
        <div class="title">这是孙子组件</div>
        <div class="attr">
            {{ msg111 }}<br>
            {{ $attrs.msg222 }}<br>
            {{ msg3 }}
        </div>
    </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */

export default {
    props: {
        msg111: String,
        // msg2: String,
    },

    data() {
        return {
            msg3: '孙子组件的data'
        };
    },

    created() {
        console.log('C', this.$attrs, this.$listeners);
    },
    mounted() {
        this.$emit('listen111', 'C传的listen111');
        this.$emit('listen222', 'C传的listen222');
    },
};
</script>
