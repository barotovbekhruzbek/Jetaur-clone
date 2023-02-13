<template>

    <Splide :options="{ rewind: true,
    type:'loop'}" aria-label="My Favorite Images">
      <SplideSlide>
       <div class="carusel">
         <div class="carusel-title">
           <img src="@/images/X70Plus-logo.svg.png" alt="">
         </div>
         <div class="carusel-btn">
           <button>{{ $t('btn') }}</button>
           <button>{{ $t('btn_2') }} <i class="fa-solid fa-right-long"></i></button>
         </div>
       </div>
      </SplideSlide>
      <SplideSlide>
        <div class="carusel-2">
          <div class="carusel-title">
            <img src="@/images/cars/x70-logo.svg" alt="">
          </div>
          <div class="carusel-btn">
            <button>{{ $t('btn') }}</button>
            <button>{{$t('btn_2')}}<i class="fa-solid fa-right-long"></i></button>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="carusel-3">
          <div class="carusel-title">
            <img src="@/images/cars/X90Plus-logo.svg" alt="">
          </div>
          <div class="carusel-btn">
            <button>{{ $t('btn') }}</button>
            <button>{{$t('btn_2')}}<i class="fa-solid fa-right-long"></i></button>
          </div>
        </div>
      </SplideSlide>
    </Splide>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: "Banner",
  components: {
    Splide,
    SplideSlide,
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_vars.scss";
@import "src/styles/components/_mixins.scss";
  .carusel {
    position: relative;

    background-position: center center;
    width: 100%;
    height: 100vh;
    background: url("@/images/slide/1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @include xxl {
    background-size: auto;
    }
  }
  .carusel-2{
    position: relative;

    background-position: center center;
    width: 100%;
    height: 100vh;
    background: url("@/images/slide/2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @include xxl {

    }
  }
  .carusel-3 {
    position: relative;

    background-position: center center;
    width: 100%;
    height: 100vh;
    background: url("@/images/slide/3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @include xxl {

    }

  }
  .carusel-title {
    padding: 20% 0 0 15%;
    @include xxl {

      padding: 25% 0 0 10%;
    }
    .carusel-title img {
      @include xxl {

      }
    }
  }
  .carusel-btn {
    display: flex;
    gap: 40px;
    padding: 3% 0 0 15%;
    @include xxl {
      padding: 5% 0 0 0;
      flex-direction: column;
      padding: 8px 40px;
    }

  }
  .carusel-btn button:nth-child(1) {
    letter-spacing: 1.28px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 35px;
    background: #A02218;
  border: none;
    color: white;
    @include xxl {
      width: 300px;
    }
    @include md{
      padding: 13px 25px;
      width: 250px;
    }
  }
  .carusel-btn button:nth-child(1):hover {
    box-shadow: 0px 8px 12px rgba(160, 34, 24, 0.25);
  }
  .carusel-btn button:nth-child(2) {
    letter-spacing: 1.28px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 15px 35px;
    @include xxl {
      width: 300px;
    }
    @include md {
      padding: 13px 25px;
      width: 250px;
    }
  }
  .carusel-btn button:nth-child(2):hover {
    transition: 0.4s linear;
    color: #A02218;
    background-color: white;

  }
.splide__slide img {
  @include xxl {
    width: 300px;
    margin-bottom: 40px;
  }
  @include sm {
    margin-top: 100px;
  }
}

</style>