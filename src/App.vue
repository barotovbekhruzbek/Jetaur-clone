<template>

  <Navbar/>
  <Footer />
  <router-view/>
</template>

<style lang="scss">

</style>
<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>