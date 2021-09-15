<!--
 * @Author: 风铃
 * @Date: 2021-09-08 10:26:08
 * @Description: 读取文件 - 本地文件/服务端文件
-->
<template>
    <RContainer>
        <div class="local panel">
            <div class="panel-title">
                本地文件<br>
                <input ref="file" type="file" @change="onChangeInput">
            </div>
            <div class="panel-content">
                文件内容：<br>
                {{ content.local }}
            </div>
            <div class="panel-content">
                获取自定义区layout：<HlgButton type="primary" @click="onParser('local')">解析</HlgButton>
                <br>
                {{ custom.local }}
            </div>
        </div>
        <br><br><br>
        <div class="local panel">
            <div class="panel-title">
                服务端文件
                <HlgButton type="primary" @click="onRead">获取服务端文件</HlgButton>
            </div>
            <div class="panel-content">
                文件内容：<br>
                {{ content.service }}
            </div>
            <div class="panel-content">
                获取自定义区layout：<HlgButton type="primary" @click="onParser('service')">解析</HlgButton>
                <br>
                {{ custom.service }}
            </div>
        </div>
    </RContainer>
</template>

<script>
const axios = require('axios');
// const CUSTOMKEY_CAINIAO = 'ref="CUSTOM_AREA"';
// const CUSTOMKEY_PDD = 'name="user"';

export default {
    data() {
        return {
            content: {
                local: '',
                service: ''
            },
            custom: {
                local: '',
                service: ''
            },
        };
    },
    methods: {
        async onChangeInput() {
            if (!this.$refs.file) return;
            const file = this.$refs.file.files[0];
            const _self = this;
            if (!!file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = (e) => {
                    // 读取完毕后输出结果
                    _self.content.local = e.target.result;
                };
            }
        },
        onRead() {
            axios.get('http://hlgcdn.oss-cn-hangzhou.aliyuncs.com/gdd/template/%E7%99%BE%E4%B8%96.txt')
                .then((res) => {
                    this.content.service = res.data;
                });
        },
        onParser(type) {
            const execMatch = /<layout(?:[.\n\s\w\=\"_:;]+)(ref="CUSTOM_AREA")([.\n\s\w\=\"_:;]+)\>(?:[.\n\s\w\=\"_:;]+)/gm.exec(this.content[type]);
            if (execMatch) {
                const match = execMatch[2].match(/(width|height|left|top)="(\d+)"/gm);
                const result = {};
                match.forEach(item => {
                    const [key, value] = item.split('=');
                    result[key] = +(value.replace(/\D/g, ''));
                });
                this.custom[type] = result;
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.panel-content {
    max-height: 400px;
    overflow-y: auto;
}
</style>
