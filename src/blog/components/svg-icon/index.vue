<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        type: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
    },
    computed: {
        iconName() {
            return `#icon-${this.type}`;
        },
        svgClass() {
            const classes = ['svg-icon'];
            if (this.type) {
                classes.push(`svg-icon-${this.type}`);
            }
            if (this.className) {
                classes.push(this.className);
            }
            return classes.join(' ');
        },
    },
};
</script>

<style lang="scss" scope>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
  position: absolute;

  &-cloud1 {
      z-index: 3;
      bottom: -2vh;
      left: 0;
      width: 100vw;
      height: 14.42vw;
  }
  &-cloud2 {
      z-index: 2;
      bottom: 0.5vh;
      left: 0;
      right: 0;
      width: 81.25vw;
      height: 12.73vw;
      margin: 0 auto;
  }
  &-huaban {
      z-index: 4;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: 100%;
      height: 38%;
  }
  &-rabbit {
      z-index: 5;
      bottom: 3rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: 70%;
      height: 80%;
  }
}
</style>
