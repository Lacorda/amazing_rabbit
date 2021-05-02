<template>
    <div :class="bem()">
        <ElInput v-model="searchKey">
            <template #prefix>
                <i class="el-input__icon el-icon-search" />
            </template>
        </ElInput>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            searchKey: this.value,
        };
    },
    watch: {
        searchKey(nv) {
            this.$emit('input', nv);
        },
        value(nv) {
            this.searchKey = nv;
        },
    },
};
</script>

<style lang="scss">
.rabit-search {
    position: relative;
    display: inline-block;
    margin-right: 1rem;
    .el-input__inner {
        font-size: 0.9rem;
        line-height: 2rem;
        display: inline-block;
        width: 14rem;
        height: 2rem;
        padding: 0 0.5rem 0 2rem;
        cursor: text;
        transition: all 0.2s ease;
        color: #4e6e8e;
        border: 1px solid #cfd4db;
        border-radius: 2rem;
        outline: none;
        background-size: 1rem;
    }
}

</style>
