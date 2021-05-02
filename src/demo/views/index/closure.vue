<template>
    <RContainer>
        <ElButton @click="withLet">let循环</ElButton>
        <ElButton @click="copyVar">复制var循环代码</ElButton>
        <ElButton v-for="(btn, idx) in btns" :key="idx" class="btn">按钮{{ idx+1 }}</ElButton>
        <div class="output-container">
            <h3>当前使用{{ forWith }}循环</h3>
            <h3>{{ forWith === 'var' ? '输出：控制台查看' : '输出：' }}</h3>
            <div ref="output" />
        </div>
    </RContainer>
</template>

<script>
import copyToClip from '@mixins/copy-text';

export default {
    mixins: [copyToClip],
    data() {
        return {
            btns: new Array(4),
            forWith: 'let',
        };
    },
    mounted() {
        this.withLet();
    },
    methods: {
        withLet() {
            this.forWith = 'let';
            const btns = document.getElementsByClassName('btn');
            const $output = this.$refs.output;
            for (let index = 0; index < btns.length; index += 1) {
                btns[index].onclick = function () {
                    const $div = document.createElement('div');
                    $div.innerHTML = index;
                    $output.appendChild($div);
                };
            }
        },
        copyVar() {
            this.forWith = 'var';
            const text = `
                const btns = document.getElementsByClassName('btn');
                for (var index = 0; index < btns.length; index += 1) {
                    btns[index].onclick = function () {
                        console.log(index);
                    };
                }
            `;
            this.copyToClip(text);
        },
    },
};
</script>
