<template>
<section class="location-section">
  <div class="container">
    <div class="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48004.41161383683!2d69.21582480711123!3d41.23755149510157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvtosalon%20manzili%3A%20Sergeli%20tumani%202-kv%2C%205-metro%20stansiyasi!5e0!3m2!1sru!2s!4v1676435650053!5m2!1sru!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="location-title">
      <img src="@/images/location.svg" alt="">
      <h3>{{$t('location')}}</h3>
      <p>{{$t('location_title')}}</p>
      <div class="location-img">
        <img src="@/images/loc.png" alt="">
        <img src="@/images/loc.png" alt="">
      </div>
      <button>{{$t('btn_3')}}</button>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Location"
}
</script>

<style scoped lang="scss">
@import "src/styles/components/_vars.scss";
@import "src/styles/components/_mixins.scss";
  .location-section {
    padding-top: 100px;
    @include md {
      padding-top: 60px;
    }
    @include xl {
      margin: 0rem 9rem;

    }
    @include lg {
      margin: 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      @include xl {

        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .location iframe {
        width:756px;
        height:756px;
        @include xxl {
          width: 600px;
          height: 600px;
        }
        @include xl {
          width: 900px;
        }
        @include lg {
          width: 100%;

        }
      }
      .location-title {
        h3 {
          width: 326.23px;
          font-weight: 700;
          font-size: 56px;
          line-height: 67px;
          text-transform: uppercase;
          color: #212529;
          @include xxl{
            font-size: 40px;
          }
          @include lg {
            width: auto;
          }
        }
        p{
          width: 454.64px;
          padding-top: 10px;
          font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          color: #212529;
          @include xxl{
            font-size: 16px;
          }
          @include lg {
            width: auto;
          }
        }
       .location-img {
         margin-top: 40px;
         display: flex;
         gap: 15px;

         @include lg{
           display: none;
         }

       }
        button {
          margin-top: 60px;
          padding: 16px 40px;
          background: #A02218;
          color: white;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-transform: uppercase;
          @include lg {
            margin-top: 40px;

          }
        }
      }
    }

  }

</style>