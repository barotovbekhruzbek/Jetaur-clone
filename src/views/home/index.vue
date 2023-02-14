<template>
<Banner/>
  <Cars/>
  <X70plus/>
  <X90/>
  <Galery/>
</template>

<script>
import Banner from "@/views/home/components/Banner";
import Cars from "@/views/home/components/Cars";
import X70plus from "@/views/home/components/X70plus";
import X90 from "@/views/home/components/X90";
import Galery from "@/views/home/components/Galery";
export default {
  name: "index",
  components: {Galery, X90, X70plus, Cars, Banner}
}
</script>

<style scoped>

</style>