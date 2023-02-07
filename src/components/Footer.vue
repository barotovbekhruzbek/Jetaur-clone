<template>
<footer>
  <div class="footer-menu">
  <div class="container">
    <ul>
      <li>X70</li>
      <li>X70PLUS</li>
      <li>X90PLUS</li>
    </ul>
  </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_mixins.scss";
@import "src/styles/components/_vars.scss";
.footer-menu {
  display: none;
  position: fixed;
  height: 76px;
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  z-index: 999;
  width: 100%;
 @include xxl {
   display: block;
 }

}
.footer-menu ul {
  padding-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.28px;
    text-transform: uppercase;
    color: #FFFFFF;

  }
}

</style>