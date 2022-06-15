<template>
    <RContainer>
        <h3>keepAlive</h3>
        msg: {{ msg }}
        <HlgButton @click="handleClick">点击自加1</HlgButton>
    </RContainer>
</template>


<script>
export default {
    name: 'KeepAlive',
    data() {
        return {
            msg: { count: 1 },
        };
    },
    activated() {
        console.log(this.msg.count);
    },
    deactivated() {
        console.log('deactivated');
    },
    methods: {
        handleClick() {
            this.msg.count++;
        },
    }
};
</script>
