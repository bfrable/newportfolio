<template>
  <div class="project-card" :style="'background:' + bgColor + ';'">
    <h2 class="project-card__title"> {{title}} </h2>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    bgColor: String,
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project-card {
    background: #fff2f9 !important;
    box-shadow: 0 0 3px 0 rgb(234, 224, 230);
    box-sizing: border-box;
    opacity: 0;
    padding: 10px 20px;
    position: absolute;
    top: 0;
    transition: all .5s;
    width: 100%;

    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &__title {
      color: #f3128b;
      font-size: 1.8rem;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 1.5;
      margin: 0;
      text-align: left;
      text-transform: uppercase;
    }
}
</style>
