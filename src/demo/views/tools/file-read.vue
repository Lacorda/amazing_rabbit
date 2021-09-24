<!--
 * @Author: 风铃
 * @Date: 2021-09-08 10:26:08
 * @Description: 读取文件 - 本地文件/服务端文件
-->
<template>
    <RContainer>
        平台选择
        <HlgSelect v-model="platform" placeholder="请选择" @change="onChangeSelect">
            <HlgOption
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </HlgSelect>
        <br>
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
const CUSTOMKEY_CAINIAO = 'ref="CUSTOM_AREA"';
const CUSTOMLINK_CAINIAO = 'https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/tbgr-trade/template/百世.txt';
const CUSTOMKEY_PDD = 'name="user"';
const CUSTOMLINK_PDD = 'https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/gdd/template/一联单.xml';

export default {
    data() {
        return {
            options: [
                {
                    value: 'cainiao',
                    label: '菜鸟'
                },
                {
                    value: 'pdd',
                    label: '拼多多'
                },
            ],
            platform: 'cainiao',
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
    computed: {
        customKey() {
            return this.platform === 'cainiao' ? CUSTOMKEY_CAINIAO : CUSTOMKEY_PDD;
        },
        url() {
            return this.platform === 'cainiao' ? CUSTOMLINK_CAINIAO : CUSTOMLINK_PDD;
        },
    },
    methods: {
        onChangeSelect() {
            this.content = {
                local: '',
                service: ''
            };
            this.custom = {
                local: '',
                service: ''
            };
        },
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
            axios.get(this.url)
                .then((res) => {
                    this.content.service = res.data;
                });
        },
        onParser(type) {
            const reg = new RegExp(`<layout(?:[.\\n\\s\\w\=\"_:;,]+)(${this.customKey})([.\\n\\s\\w\=\"_:;,]+)\>(?:[.\\n\\s\\w\=\"_:;,]+)`, 'gm');
            const execMatch = reg.exec(this.content[type]);
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
/deep/ .hlg-select .hlg-input {
    width: 100px;
}
.panel-content {
    max-height: 200px;
    overflow-y: auto;
}
</style>
