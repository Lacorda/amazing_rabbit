<template>
    <div>
        <HlgUpload
            ref="upload"
            drag
            chunked
            oss
            :region="region"
            :access-key-id="accessKeyId"
            :access-key-secret="accessKeySecret"
            :sts-token="stsToken"
            :bucket="bucket"
            :chunk-size="512 * 1024"
            :on-success="handleSuccess"
            :on-error="handleError"
            :on-progress="handleProgress"
            :data="uploadData"
            :before-upload="beforeUpload"
            :upload-object-key="fileName"
        >
            <template v-if="status === 'progress'">
                <div v-loading="status === 'progress'" class="loading" style="width: 80px; height: 80px" />
                <div>文件上传中{{ progress }}%</div>
            </template>

            <template v-else-if="status === 'success'">
                <HlgInfo type="success">上传成功</HlgInfo>
            </template>

            <template v-else-if="status === 'error'">
                <div>网络连接错误, 上传中断 <HlgButton type="text" @click.stop="onReupload">继续上传</HlgButton></div>
                <HlgButton>重新上传</HlgButton>
            </template>

            <template v-else>
                <div>将文件拖到此处，或 <HlgButton type="text">点击上传</HlgButton></div>
            </template>
        </HlgUpload>
        <div style="margin-top: 24px">
            上传到：
            <HlgSelect v-model="uploadTo" placeholder="请选择">
                <HlgOption
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </HlgSelect>
        </div>

        <div>{{ url }}</div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data() {
        return {
            url: '',
            status: '',
            progress: 0,
            uploadData: {
                upload_type: 'pc',
            },
            bucket: 'hlgcdn',
            region: 'oss-cn-hangzhou',
            accessKeyId: '',
            accessKeySecret: '',
            stsToken: '',
            fileName: '',
            uploadTo: 'tbgr-trade/waybill-bg/',
            options: [
                {
                    value: 'tbgr-trade/waybill-bg/',
                    label: '欢乐逛-快递模板底图'
                },
                {
                    value: 'tbgr/promotion/tool/cloud/',
                    label: '欢乐逛-云币'
                },
                {
                    value: 'tbgr-trade/template/',
                    label: '欢乐逛-打单'
                },
                {
                    value: 'tbgr-trade-dev/template/',
                    label: '欢乐逛-打单-预发'
                },
                {
                    value: 'gdd/template/',
                    label: '逛打单'
                },
                {
                    value: 'mini-hudong/coupon/lottie/',
                    label: '欢乐送券-关注送券动效皮肤'
                },
                {
                    value: 'tbgr-trade/sf-template/',
                    label: '欢乐逛-打单-顺丰'
                },
                {
                    value: 'tbgr-trade/express-logo/',
                    label: '欢乐逛-打单-快递logo'
                },
                {
                    value: 'huanleguang/',
                    label: '欢乐逛官网'
                },
                {
                    value: 'tbgr-activity/',
                    label: '欢乐逛-活动'
                },
            ]
        };
    },
    mounted() {
        axios.get(`//2tbgr.huanleguang.com/oss/token?bucket=${this.bucket}&test_token_id=3215139_ui_test`)
            .then((res) => {
                const { token } = res.data.result;
                this.accessKeyId = token.access_key_id;
                this.accessKeySecret = token.access_key_secret;
                this.stsToken = token.security_token;
            });
    },
    methods: {
        beforeUpload(file) {
            if (!this.uploadTo) {
                this.$message.error('你要上传到哪儿去？？？');
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject();
            }
            this.fileName = `${this.uploadTo}${file.name}`; // 打单资源 - 其他模板[逛打单]
            return this.$nextTick();
        },
        handleSuccess(res, file) {
            this.status = 'success';
            this.progress = 100;
            this.url = 'https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/' + res.name;
        },
        handleError(err, file, files) {
            this.status = 'error';
            console.log(err, file, files);
            if (err.message) {
                this.$message.error(err.message);
            }
        },
        handleProgress(res, file) {
            console.log(res);
            if (res.type === 'progress') {
                this.status = 'progress';
                this.progress = parseInt(res.percent, 10);
            }
        },
        onReupload() {
            this.$refs.upload.submit();
        },
    },
};
</script>
