<template>
    <RContainer>
        <h3>源码系统 - 测试</h3>
        msg: {{ msg }}
        <br>
        text: {{ text }}
        <br>
        <!-- obj: {{ obj }} -->
        <br>
        <!-- arr: {{ arr }}
        <br> -->
        <!-- <A :obj="obj" :arr="arr" /> -->
        <br>
        <!-- <HlgButton @click="changeMsg">修改msg</HlgButton> -->
        <br>
        <HlgButton @click="changeObj">修改obj</HlgButton>
        <br>
        <HlgButton @click="changeArr">修改arr</HlgButton>
    </RContainer>
</template>


<script>
// import A from './components/resource/A';
import Foo from '../../utils/withclassstatic';

export default {
    components: {
        // A,
    },
    data() {
        return {
            msg: { text: 'test' },
            // msg: 'test',
            text: 'ddd',
            obj: {
                a: { c: 3 },
                b: 2,

            },
            arr: [],
            Foo,
            f: new Foo()
        };
    },
    computed: {
        name() {
            return this.data;
        }
    },
    watch: {
        msg(nv) {
            console.log('%c@@@text===>', 'color:green;font-size:15px', nv);
        },
        text(nv) {
            console.log('%c@@@text===>', 'color:green;font-size:15px', nv);
        },
    },
    methods: {
        // changeMsg() {
        //     this.msg.text += '1';
        // },
        // changeMsg() {
        //     this.msg += '1';
        // },
        changeArr() {
            this.arr.push(111);
        },
        changeObj() {
            this.obj.b++;
        }
    }
};
</script>
