<template>
<header>
  <div class="container">
    <div class="navbar">
      <div class="logo">
        <img src="../images/logo.svg" alt="">
      </div>
      <div class="menu-link">
        <div class="link">
          <ul>
            <li><a href="#">X70</a></li>
            <li><a href="#">X70Plus</a></li>
            <li><a href="#">X90Plus</a></li>
            <li><a href="#">{{ $t("menu") }}</a></li>

          </ul>

        </div>
        <div class="social-icons">
          <ul>
            <li><a href="#"><i class="fa-brands fa-instagram"></i> </a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i> </a></li>
            <li><a href="#"><i class="fa-brands fa-telegram"></i> </a></li>
          </ul>
        </div>
        <div class="tel">
          <a href="#"><i class="fa-solid fa-phone"></i>91 033-30-03</a>
        </div>
      </div>
     <div class="languages">
       <button @click="$i18n.locale ='uz'">Уз</button>
       <button @click="$i18n.locale ='ru'">Ru</button>
     </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_mixins.scss";
@import "src/styles/components/_vars.scss";


header {
  z-index: 999;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  top: 0;
  position: fixed;
  width: 100%;
  height: 76px;
  background: rgba(0, 0, 0, 0.8);
}

.navbar {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-link {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    @include xxl {
      display: none;
    }
    .link ul {
      display: flex;
      list-style: none;
      gap: 35px;
      li {
        a {
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 1.28px;
          text-transform: uppercase;
          color: #FFFFFF;

        }
      }
    }
    .social-icons ul {
      display: flex;
      gap: 15px;
      align-items: center;
      li {
        a {
          text-decoration: none;
          i {
            color: white;
          }
        }
      }
    }
    .tel {
      a {
        text-decoration: none;
        color: white;
        i{
          margin-right:15px;
          color: white;
        }
      }
    }
  }

  .languages {
    display: flex;
    gap: 10px;
  button {
    padding: 10px;
    background: #333941;
    border: 1px solid #333941;
    color: white;
  }
  }

}
</style>