<template>
  <header class="header">
    <h1 class="header__title">B F</h1>
    <nav>
      <ul class="header__navigation">
        <li class="header__navigation-item">
          <NowPlaying />
        </li>
        <li class="header__navigation-item">
          <a href="mailto:bfrable@gmail.com" class="header__navigation-link header__navigation-icon">
            <i class="fas fa-paper-plane"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import NowPlaying from '@/components/NowPlaying.vue';

export default {
  name: 'Header',

  components: {
    NowPlaying,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  align-items: center;
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
    margin-right: 15px;
    padding: 0;
    display: flex;
    align-items: center;
  }

  &__navigation-item {
    margin: 0 5px;
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

  &__navigation-icon {
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    display: flex;
    padding: 17px 10px;
  }
}
</style>
