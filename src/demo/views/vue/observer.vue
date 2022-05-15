<template>
    <RContainer>
        <!-- {{ msg }} -->
        <!-- {{ text }} -->
        <br>
        <InjectCom @change="changeInject" />
        <HlgButton @click="changeMsg">change msg</HlgButton>
    </RContainer>
</template>


<script>
import InjectCom from './components/inject.vue';

export default {
    provide() {
        return {
            msg: this.msg,
            text: this.msg.text,
            msg1: { text: 'test1' }
        };
    },
    components: {
        InjectCom,
    },
    data() {
        return {
            msg: { text: 'test' },
            // text: 'ddd',
        };
    },
    watch: {
        msg(nv) {
            console.log('%c@@@text===>', 'color:green;font-size:15px', nv);
        },
        // text(nv) {
        //     console.log('%c@@@text===>', 'color:green;font-size:15px', nv);
        // },
    },
    methods: {
        changeMsg() {
            this.msg.text += 't';
        },
        changeInject(count) {
            console.log(count);
        }
    }
};
</script>
