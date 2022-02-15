<template>
    <RContainer>
        <div>
            <h1>圣杯布局</h1>
        </div>
        <div class="container1">
            <div class="middle">
                middle
            </div>
            <div class="left">
                left
            </div>
            <div class="right">
                right
            </div>
        </div>
        <br><br>
        <div>
            <h1>双飞翼布局</h1>
        </div>
        <div class="container2">
            <div class="middle">
                <div class="content">
                    middle
                </div>
            </div>
            <div class="left">
                left
            </div>
            <div class="right">
                right
            </div>
        </div>
    </RContainer>
</template>

<style lang="scss" scoped>
* {
    word-break: break-all;
}
.container1 {
    padding-left: 200px;
    padding-right: 200px;
    overflow: hidden; // overflow: hidden创建一个BFC，撑开container高度
    .middle, .left, .right {
        float: left; // 2.全部左浮动
        height: 100px;
    }
    .middle {
        background:grey;
        width: 100%; // 1.设置宽度
    }
    .left {
        width: 200px; // 1.设置宽度
        background:pink;
        // 3.margin-left: -100% 让left紧贴middle左边(margin-left: -200px left会紧贴middle右边)
        // 因为:左浮动框的左边缘会去贴包含框的左边缘，或者他之前的左浮动框的右边缘
        margin-left: -100%;
        position: relative; // 4. 这时left覆盖在middle上面，出现了遮挡，设置position: relative并left: -200px;同时container设置padding-left: 200px;
        left: -200px;
    }
    .right {
        width: 200px; // 1.设置宽度
        background:lightblue;
        margin-left: -200px;
        position: relative;
        right: -200px;
    }
}
.container2 {
    overflow: hidden; // overflow: hidden创建一个BFC，撑开container高度
    .middle, .left, .right {
        float: left; // 2.全部左浮动
        height: 100px;
    }
    .middle {
        background:grey;
        width: 100%; // 1.设置宽度
        .content { // 4. middle内设置一个content，只放内容，margin两边宽度为left和right宽度，会被left/right覆盖
            margin: 0 200px;
        }
    }
    .left {
        width: 200px; // 1.设置宽度
        background:pink;
        // 3.margin-left: -100% 让left紧贴middle左边()
        // 因为:左浮动框的左边缘会去贴包含框的左边缘，或者他之前的左浮动框的右边缘
        margin-left: -100%;
    }
    .right {
        width: 200px; // 1.设置宽度
        background:lightblue;
        // 3. margin-left: -200px right会紧贴middle右边
        // 因为:左浮动框的左边缘会去贴包含框的左边缘，或者他之前的左浮动框的右边缘
        margin-left: -200px;
    }
}

</style>
