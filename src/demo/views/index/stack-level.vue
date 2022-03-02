<template>
    <RContainer>
        <div class="stack">
            <div class="box1">
                <p class="a">a</p>
                <p class="b">b</p>
            </div>

            <div class="box2">
                <p class="c">c</p>
            </div>
        </div>

        <br>
        <br>
        <br>
        <div class="box">
            <div class="parent">
                parent
                <div class="child">child</div>
            </div>
        </div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="box33">
            <div class="parent">
                parent
                <div class="child1">child1</div>
                <div class="child2">
                    child2
                    <div class="child2-1">child2-1</div>
                    <div class="child2-2">child2-2</div>
                </div>
            </div>
        </div>
    </RContainer>
</template>

<style lang="scss" scoped>
.stack {
    position: relative;
    width: 100px;
    height: 100px;
    color: #fff;
    .box1 {
        z-index: 2;
    }
    .box2 {
        z-index: 1;
    }
    p {
        position: absolute;
        font-size: 20px;
        width: 100px;
        height: 100px;
    }
    .a {
        background-color: blue;
        z-index: 100;
    }
    .b {
        background-color: green;
        top: 20px;
        left: 20px;
        z-index: 200;
    }
    .c {
        background-color: red;
        top: -0px;
        left: 40px;
        z-index: 9999;
    }
}

.box {
    // display: flex;
    .parent {
        width: 200px;
        height: 100px;
        background: #168bf5;
        /* 虽然设置了z-index，但是没有设置position，z-index无效，.parent还是普通元素，没有产生层叠上下文 */
        z-index: 1; // 当父元素设置了display: flex|inline-flex后，子元素z-index属性值不为auto的时候，子元素为层叠上下文元素；
    }
    .child {
        width: 100px;
        height: 200px;
        background: #32d19c;
        position: relative;
        z-index: -1;
    }
}

.box33 {
    position: relative;
    .parent {
        width: 100px;
        height: 200px;
        background: #168bf5;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0; // 形成层叠上下文，z-index:0
    }
    .child1 {
        width: 100px;
        height: 200px;
        background: #32d19c;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 1; // 形成层叠上下文，z-index:1
    }
    .child2 {
        width: 100px;
        height: 200px;
        background: #e4c950;
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: -1; // 形成层叠上下文，z-index:-1
    }
    .child2-1 {
        width: 100px;
        height: 200px;
        background: #e45050;
        position: absolute;
        top: 60px;
        left: 60px;
        z-index: 9999; // 形成层叠上下文，z-index:9999
    }
    .child2-2 {
        width: 100px;
        height: 200px;
        background: #db68a7;
        position: absolute;
        top: 80px;
        left: 40px;
        z-index: -9999;  // 形成层叠上下文，z-index:-9999
    }
}

</style>
