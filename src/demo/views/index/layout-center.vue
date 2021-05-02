<template>
    <RContainer>
        <div class="panel panel1">
            <div class="title">模块里的文字水平居中:</div>
            <div class="content">
                text-align: center
            </div>
        </div>
        <div class="panel panel2">
            <div class="title">整个模块水平居中: 已知宽度</div>
            <div class="content">
                margin: 0 auto;
            </div>
        </div>
        <div class="panel panel3">
            <div class="title">
                多个块级元素水平居中 1: <br>
                父元素使用: text-align: center; <br>
                子元素使用 display: inline-block;<br>
            </div>
            <div class="content">
                <div class="block">块级元素1</div>
                <div class="block">块级元素2</div>
                <div class="block">块级元素3</div>
            </div>
        </div>
        <div class="panel panel4">
            <div class="title">
                多个块级元素水平居中 2:<br>
                父元素使用: display: flex; justify-content: center;
            </div>
            <div class="content">
                <div class="block">块级元素1</div>
                <div class="block">块级元素2</div>
                <div class="block">块级元素3</div>
            </div>
        </div>
        <div class="panel panel5">
            <div class="title">
                已知高度宽度元素的水平垂直居中 1:<br>
                绝对定位与 top: 50%; left: 50%; margin: -40px 0 0 -120px; 实现;
            </div>
            <div class="content">
                <div class="block">width: 240px; height: 80px</div>
            </div>
        </div>
        <div class="panel panel6">
            <div class="title">
                已知宽高的水平垂直居中 2:<br>
                绝对定位与 top: 0; bottom: 0; left: 0; right: 0; margin: auto;实现;
            </div>
            <div class="content">
                <div class="block">width: 140px; <br>height: 100px</div>
            </div>
        </div>
        <div class="panel panel7">
            <div class="title">
                未知宽高的水平垂直居中 1:<br>
                父元素设置 display: table-cell; text-align: center; vertical-align: middle;<br>
                <em style="color: red">此时 width 和 height设置为百分比无效，必须设置一个固定值</em>
            </div>
            <div class="content">
                <span class="inline">span未知宽高</span>
            </div>
        </div>
        <div class="panel panel8">
            <div class="title">
                未知宽高的水平垂直居中 2:<br>
                使用 css3 的 transform<br>
                position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            </div>
            <div class="content">
                <span class="inline">span未知宽高</span>
            </div>
        </div>
        <div class="panel panel9">
            <div class="title">
                未知宽高的水平垂直居中 3:<br>
                flex 布局<br>
                display: flex; align-items: center; justify-content: center;
            </div>
            <div class="content">
                <span class="inline">span未知宽高</span>
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
        border-radius: 5px;
        > div {
            border: 1px solid #fff;
            border-radius: 2px;
            padding: 8px;
            margin: 4px 0;
        }
        > span {
            border: 1px solid #fff;
            border-radius: 2px;
        }
        .block {
            width: 300px;
        }
    }
}
.panel1 .content {
    text-align: center;
}
.panel2 .content {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
.panel3 .content {
    text-align: center;
    > .block {
        display: inline-block;
        width: 200px;
        margin: 0 8px;
    }
}

.panel4 .content {
    display: flex;
    justify-content: center;
    > .block {
        width: 200px;
        margin: 0 8px;
    }
}

.panel5 .content {
    position: relative;
    overflow: hidden;
    height: 200px;
    > .block {
        width: 240px;
        position: absolute;
        height: 80px;
        top: 50%;
        left: 50%;
        margin: -40px 0 0 -120px;
    }
}
.panel6 .content {
    position: relative;
    overflow: hidden;
    height: 200px;
    > .block {
        width: 140px;
        position: absolute;
        height: 100px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
.panel7 .content {
    height: 200px;
    width: 1200px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.panel8 .content {
    position: relative;
    height: 200px;
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.panel9 .content {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
