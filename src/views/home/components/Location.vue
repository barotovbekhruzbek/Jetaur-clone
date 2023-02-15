<template>
<section class="location-section">
  <div class="container">
    <div class="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48004.41161383683!2d69.21582480711123!3d41.23755149510157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvtosalon%20manzili%3A%20Sergeli%20tumani%202-kv%2C%205-metro%20stansiyasi!5e0!3m2!1sru!2s!4v1676435650053!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="location-title">
      <img src="@/images/location.svg" alt="">
      <h3>Avtosalon <br> manzili</h3>
      <p>Avtosalon manzili: Sergeli tumani 2-kv, 5-metro stansiyasi</p>
      <img src="@/images/loc.png" alt="">
      <img src="@/images/loc.png" alt="">
      <button>Qayta qo‘ng‘iroqqa so‘rov</button>
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
  .location-section {
    padding-top: 100px;
    .container {
      display: flex;
      justify-content: space-between;
      gap: 40px;

    }

  }

</style>