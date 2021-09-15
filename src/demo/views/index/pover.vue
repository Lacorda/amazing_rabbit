<template>
    <RContainer>
        <div class="parent">
            <ul>
                <li v-for="(li, idx) in lis" :key="idx">
                    <div class="content">relative content<br>relative content<br>relative content<br>relative content<br>relative content</div>
                    <div class="child">absolute child</div>
                </li>
            </ul>
        </div>
    </RContainer>
</template>

<script>
export default {
    data() {
        return {
            lis: [1]
        };
    },
};
</script>

<style lang="scss" scoped>
.parent > ul {
    > li {
        border: 1px solid #dfdfdf;
        border-top: none;
        width: 170px;
        position: relative;
        padding: 12px;
        max-height: 60px;
        // overflow-y: auto;
        &:first-child {
            border-top: 1px solid #dfdfdf;
        }
        > .child {
            // display: flex;
            position: absolute;
            top: 0;
            left: 100%;
            background: #dfdfdf;
            width: 150px;
            height: 60px;
        }
        &:hover >.child {
            display: flex;
        }
    }
}
</style>
