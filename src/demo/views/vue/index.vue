<template>
    <RContainer>
        <div class="parent">
            <div class="title">这是父组件</div>
            <div class="attr">
                {{ msg1 }}<br>
                {{ msg2 }}
            </div>
        </div>
        <hr>
        <ComponentB :msg111="msg1" :msg222="msg2" @listen111="listen1" @listen222="listen2" />
    </RContainer>
</template>


<script>
import ComponentB from './components/B';
export default {
    components: {
        ComponentB
    },
    data() {
        return {
            msg1: '父组件的data1',
            msg2: '父组件的data2',
        };
    },
    created() {
        console.log('A', this.$attrs); // {}
    },
    methods: {
        listen1(data) {
            console.log(data); // B传的listen111
        },
        listen2(data) {
            console.log(data); // B传的listen222
        }
    },
};
</script>
