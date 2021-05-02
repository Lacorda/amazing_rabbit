<template>
    <RContainer>
        <div class="panel panel1">
            <div class="title">
                宽度响应屏幕大小，高度 = 宽度<br>
                原理: padding 和 margin 的百分比都是相对于父元素的 width<br><br>
                Flex布局最后一行靠左对齐: <br>
                在结尾加至少一整行的占位元素，width = 子元素width, height为0
            </div>
            <div class="content">
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-in">
                        <div class="block-in-content">宽度自适应，高度 = 宽度</div>
                    </div>
                </div>
                <i /><i /><i /><i /><i />
                <i /><i /><i /><i /><i />
            </div>
        </div>
    </RContainer>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.panel {
    margin-bottom: 16px;
    background-color: #f5f5f5;
    padding: 24px;
    .title {
        font-weight: 500;
        text-align: center;
        margin-bottom: 8px;
        line-height: 2;
    }
    .content {
        width: 100%;
        padding: 8px;
        background: lightseagreen;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        .block {
            position: relative;
            background: darkcyan;
            border: 1px solid #fff;
            margin-bottom: 24px;
            margin-left: 24px;
            .block-in {
                padding-top: 100%;
                height: 0;
                &-content {
                    margin-top: -100%;
                }
            }
        }
        & > i {
            width: 200px;
            margin-right: 10px;
        }
    }
}
@media screen and (max-width: 1560px) {
    .block {
        width: 320px;
    }
}
@media screen and (max-width: 1200px) {
    .block {
        width: 240px;
    }
}
@media screen and (max-width: 960px) {
    .block {
        width: 200px;
    }
}
</style>
