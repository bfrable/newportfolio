<template>
  <footer class="footer">
    <p class="footer__copy">&copy; 2019</p>
    <nav>
      <ul class="footer__navigation">
        <li class="footer__navigation-item"><a href="https://codepen.com/bfrable" target="_blank" class="footer__navigation-link"><i class="fab fa-codepen"></i></a></li>
        <li class="footer__navigation-item"><a href="https://github.com/bfrable" target="_blank" class="footer__navigation-link"><i class="fab fa-github-alt"></i></a></li>
        <li class="footer__navigation-item"><a href="https://instagram.com/frabblerock" class="footer__navigation-link"><i class="fab fa-instagram"></i></router-link></li>
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
  margin: 30px 0 15px;

  &__copy {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.6;
  }

  &__navigation {
    list-style-type: none;
    margin-right: 15px;
    padding: 0;
  }

  &__navigation-item {
    display: inline-block;
    margin: 0 10px;
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
