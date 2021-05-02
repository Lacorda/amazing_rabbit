<template>
    <div>
        <div ref="bg" class="enter-bg" />
        <div :class="bem()">
            <div :class="bem('title')" @click="$router.push('/')">
                <!-- 小兔叽<em>的博客</em> -->
                小兔的冲浪日记
            </div>
            <div :class="bem('extend')">
                <RSearch />
                <RNavs />
            </div>
        </div>
    </div>
</template>

<script>
import animation from '../mixins/animation';
import RSearch from './search';
import RNavs from './navs';

export default {
    name: 'Header',
    components: {
        RSearch,
        RNavs,
    },
    mixins: [animation],
    props: {
        bounding: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            searchKey: '',
        };
    },
    mounted() {
        this.doAni('bg');
    },
};
</script>

<style lang="scss" scoped>
@import "~@stylesheet/var.scss";
.enter-bg {
  width: 100vw;
  height: 3px;
  background: url("../assets/bg.jpeg") no-repeat center -100px;
  background-size: cover;
}

.rabit-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 24px;
  border-bottom: 1px solid #dfdfdf;
  &__title {
    font-size: 20px;
    color: $--color-primary;
    cursor: pointer;
    em {
      font-size: 16px;
      color: #000;
    }
  }
  &__extend {
    display: flex;
    align-items: center;
  }
}
</style>
