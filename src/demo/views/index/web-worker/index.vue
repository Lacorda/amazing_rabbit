<template>
    <RContainer>
        <ElButton @click="start">开始</ElButton>
        <ElButton @click="stop">停止</ElButton>
        <div class="output-container">
            <h3>输出</h3>
            <div id="worker-app" ref="worker" />
        </div>
    </RContainer>
</template>

<script>
import TestWorker from './test.worker';

export default {
    name: 'DemoWorker',
    data() {
        return {
            count: 0,
            counting: false,
            worker: null,
        };
    },
    beforeUnmount() {
        this.worker.terminate();
    },
    methods: {
        start() {
            if (typeof window.Worker === 'undefined') {
                console.log('no Worker');
            } else if (!this.counting) {
                this.counting = true;
                if (!this.worker) {
                    this.worker = new TestWorker();
                    this.worker.onmessage = (data) => {
                        const $div = document.createElement('div');
                        $div.innerHTML = data.data;
                        this.$refs.worker.appendChild($div);
                    };
                    this.worker.onerror = (error) => {
                        console.log(error.filename, error.lineno, error.message); // 发生错误的文件名、行号、错误内容
                        this.counting = false;
                        this.worker.terminate();
                    };
                }
                this.simpleCounter();
            }
        },
        simpleCounter() {
            this.count += 1;
            this.worker.postMessage(this.count);
            setTimeout(this.simpleCounter, 1000);
        },
        stop() {
            this.counting = false;
            this.worker.terminate();
            const $div = document.createElement('div');
            $div.innerHTML = '停止';
            this.$refs.worker.appendChild($div);
        },
    },
};
</script>
