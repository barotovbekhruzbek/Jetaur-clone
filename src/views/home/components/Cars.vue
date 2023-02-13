<template>
  <section class="cars">
      <div class="title">
        <h3>Jetour X70</h3>
        <p>{{$t('car')}}</p>
        <div class="cars-title">
          <ul>
            <li>{{$t('cars_title1')}}</li>
            <li>{{$t('cars_title2')}}</li>
            <li>{{$t('cars_title3')}}</li>
            <li>{{$t('cars_title4')}}</li>
          </ul>
        </div>
        <div class="cars-description">
          <ul>
            <li><img src="@/images/raindrop.svg" alt="">{{$t('card_description1')}} <span>8,2</span></li>
            <li><img src="@/images/speed.svg" alt="">{{$t('card_description2')}} <span>210</span></li>
            <li><img src="@/images/speed.svg" alt="">{{$t('card_description3')}} <span>147</span></li>
            <li><img src="@/images/seat.svg" alt="">{{$t('card_description4')}} <span>7</span></li>
          </ul>
          <button>{{$t('btn_2')}} <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div class="cars-img">
        <div class="sertificat">
          <img src="@/images/cars/s1.svg" alt="">
        </div>
        <div class="car">
          <img src="@/images/cars/img/Frame29.png" alt="">
        </div>
      </div>

  </section>
</template>

<script>
export default {
  name: "Cars"
}
</script>

<style scoped lang="scss">
.cars {
  display: flex;
}
.title {
  width: 50%;
  background: #EEEEEE;
  padding: 10rem;

  h3 {
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    color: #212529;
    text-transform: uppercase;

  }
  p {
    padding-top: 8px;
    width: 358.11px;
    color: #212529;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }
  .cars-title {
    ul {
      padding-top: 10px;
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

      &:hover {
        box-shadow: 0px 12px 12px rgba(160, 34, 24, 0.25);
        transition: 0.5s;
      }
    }
  }
}

//cars
.cars-img {

  background: #A02218;
.sertificat {
  padding-top: 180px;
  padding-left: 500px;
}
  .car {
    margin-top: 25px;
    transform: translateX(-350px);
  }
}

</style>