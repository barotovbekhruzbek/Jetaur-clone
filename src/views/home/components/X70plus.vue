<template>
  <section class="cars">
    <div class="cars-img">
      <div class="sertificat">
        <img src="@/images/cars/s1.svg" alt="">
      </div>
      <div class="car">
        <img src="@/images/cars/img/Frame301.png" alt="">
      </div>
    </div>
    <div class="title">
      <h3>Jetour X70 PLUS</h3>
      <p>{{$t('car2')}}</p>
      <div class="cars-title">
        <ul>
          <li>{{$t('cars_title11')}}</li>
          <li>{{$t('cars_title22')}}</li>
          <li>{{$t('cars_title3')}}</li>
          <li>{{$t('cars_title4')}}</li>
        </ul>
      </div>
      <div class="cars-description">
        <ul>
          <li><img src="@/images/raindrop.svg" alt="">{{$t('card_description1')}} <span>7.6</span></li>
          <li><img src="@/images/speed.svg" alt="">{{$t('card_description2')}} <span>230</span></li>
          <li><img src="@/images/speed.svg" alt="">{{$t('card_description3')}} <span>156</span></li>
          <li><img src="@/images/seat.svg" alt="">{{$t('card_description4')}} <span>7</span></li>
        </ul>
        <button>{{$t('btn_2')}} <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "X70plus"
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_vars.scss";
@import "src/styles/components/_mixins.scss";
.cars {
  display: flex;

  @include xxl {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.title {
  width: 50%;
  background: #EEEEEE;
  padding: 10rem;


  @include xxl {
    width: 100%;
    padding: 10rem 24rem;
  }
  @include lg {
    text-align: center;
    padding: 0rem;
  }

  h3 {
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    color: #212529;
    text-transform: uppercase;
    @include lg{
      font-size: 40px;
    }
  }
  p {
    padding-top: 8px;
    width: 358.11px;
    color: #212529;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    @include lg {
      font-size: 22px;
      width: auto;
    }
  }
  .cars-title {
    ul {
      padding-top: 10px;
      @include lg{
        text-align: center;
      }
      li{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #212529;
      }
    }
  }
  .cars-description {

    width: 350px;
    padding-top: 15px;
    @include lg {
      width: auto;
      text-align: center;
    }
    ul {
      li {

        padding-top: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 15px;
        border-bottom: 1px solid;
        span {

        }
      }
    }
    button {
      margin-top: 40px;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 16px 40px;
      background: #A02218;

      color: white;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;

      &:hover {
        box-shadow: 0px 12px 12px rgba(160, 34, 24, 0.25);
        transition: 0.5s;
      }
    }
  }
}

//cars
.cars-img {
width: 50%;
  background: #171F5E;

  @include xxl {
    width: 100%;
  }
  .sertificat {
    padding-top: 180px;
    padding-left: 500px;
    @include xxl {
      padding-top: 100px;
    }
    @include lg {
      padding-left: 0px;
    }
    img {
      @include lg {
        width:250px;
      }
      @include sm{
        width: 150px;
      }
    }
  }
  .car {
    margin-top: 25px;
    transform: translateX(0px);
    @include xxl {
      transform: translateX(-50px);
    }
    @include lg {
      transform: translateX(0px);
    }
    img {
      @include lg {
        width: 100%;
      }
    }
  }
}

</style>