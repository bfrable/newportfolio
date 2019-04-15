<template>
  <header class="header">
    <h1 class="header__title">B F</h1>
    <nav>
      <ul class="header__navigation">
        <li class="header__navigation-item"><router-link to="/" class="header__navigation-link">Work</router-link></li>
        <li class="header__navigation-item"><router-link to="/about" class="header__navigation-link">About Me</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px;

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.6;
  }

  &__navigation {
    list-style-type: none;
    padding: 0;
  }

  &__navigation-item {
    display: inline-block;
    margin: 0 20px;
  }

  &__navigation-link {
    color: #460528;
    font-weight: 400;
    letter-spacing: .04em;
    text-decoration: none;
    &.router-link-exact-active {
      color: #f3128b;
      font-weight: 900;
    }
  }
}
</style>
