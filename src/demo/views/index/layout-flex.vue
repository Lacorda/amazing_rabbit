<template>
    <RContainer>
        <div class="panel panel1">
            <div class="title">
                左边固定，右边自适应 1:<br>
                左边position:absolute; 右边 margin-left
            </div>
            <div class="content">
                <div class="block block-1">左边固定200px</div>
                <div class="block block-2">右边自适应</div>
            </div>
        </div>
        <div class="panel panel2">
            <div class="title">
                左边固定，右边自适应 2:<br>
                左边float: left; 右边 margin-left
            </div>
            <div class="content">
                <div class="block block-1">左边固定200px</div>
                <div class="block block-2">右边自适应</div>
            </div>
        </div>
        <div class="panel panel3">
            <div class="title">
                左边固定，右边自适应 3:<br>
                左边 float: left; <br>
                右边 float: right; width:100%;<br>
                先左移 margin-left: -200px; 覆盖左边的<br>
                子元素再右移<br>
                为了让右边不盖住左边，写的时候右边在前
            </div>
            <div class="content">
                <div class="block block-2">
                    <div class="block-in">右边自适应</div>
                </div>
                <div class="block block-1">左边固定200px</div>
            </div>
        </div>
        <div class="panel panel4">
            <div class="title">
                左边固定，右边自适应 4:<br>
                父元素使用 display: flex; align-items: flex-start;(让左右两边不等高)<br>
                左边固定宽度<br>
                右边flex: 1
            </div>
            <div class="content">
                <div class="block block-1">左边固定200px</div>
                <div class="block block-2">右边自适应</div>
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
        .block {
            padding: 24px;
        }
        .block-1 {
            width: 200px;
            height: 200px;
            background: coral;
        }
        .block-2 {
            background: darkcyan;
        }
    }
}
.panel1 .content {
    position: relative;
    height: 300px;
    .block-1 {
        position: absolute;
    }
    .block-2 {
        margin-left: 200px;
    }
}
.panel2 .content {
    overflow: hidden;
    .block-1 {
        float: left;
    }
    .block-2 {
        margin-left: 200px;
    }
}
.panel3 .content {
    overflow: hidden;
    .block-1 {
        float: left;
    }
    .block-2 {
        float: right;
        width: 100%;
        margin-left: -200px;
        .block-in {
            margin-left: 200px;
        }
    }
}
.panel4 .content {
    display: flex;
    align-items: flex-start;
    .block-2 {
        flex: 1;
    }
}
</style>
