<template>
  <footer class="footer">
    <p class="footer__copy">&copy; 2018</p>
    <nav>
      <ul class="footer__navigation">
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fab fa-codepen"></i></router-link></li>
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fab fa-github-alt"></i></router-link></li>
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fab fa-spotify"></i></router-link></li>
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fab fa-facebook-square"></i></router-link></li>
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fab fa-instagram"></i></router-link></li>
        <li class="footer__navigation-item"><router-link to="/about" class="footer__navigation-link"><i class="fas fa-paper-plane"></i></router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  margin: 100px 0 0;

  &__copy {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.6;
  }

  &__navigation {
    list-style-type: none;
    padding: 0;
  }

  &__navigation-item {
    display: inline-block;
    margin: 0 15px;
  }

  &__navigation-link {
    color: #460528;
    text-decoration: none;
    transition: color .2s ease-in-out;
    &.router-link-exact-active, &:hover {
      color: #f3128b;
    }
  }
}
</style>
