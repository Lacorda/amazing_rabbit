<template>
    <div>
        <div class="title">这是子组件</div>
        <div class="attr">
            {{ $attrs.msg111 }}<br>
            {{ $attrs.msg222 }}<br>
            {{ msg2 }}
        </div>

        <br>
        <hr>
        <ComponentC v-bind="$attrs" v-on="$listeners" />
    </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import ComponentC from './C';
export default {
    components: {
        ComponentC,
    },
    data() {
        return {
            msg2: '子组件的data'
        };
    },

    created() {
        console.log('B', this.$attrs, this.$listeners);
        // {msg111: "父组件的data1",msg222: "父组件的data2"}
        // {listen111: ƒ invoker(),listen222: ƒ invoker()}
    },
    mounted() {
        this.$emit('listen111', 'B传的listen111');
        this.$emit('listen222', 'B传的listen222');
    },
};
</script>
