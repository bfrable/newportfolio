<template>
  <div class="heading">
    <h2 class="heading__content">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heading {
  &__content {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 1.5;
    max-width: 700px;
    text-align: left;
  }
}
</style>
