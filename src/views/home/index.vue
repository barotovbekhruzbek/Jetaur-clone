<template>
<Banner/>
  <Cars/>
  <X70plus/>
  <X90/>
</template>

<script>
import Banner from "@/views/home/components/Banner";
import Cars from "@/views/home/components/Cars";
import X70plus from "@/views/home/components/X70plus";
import X90 from "@/views/home/components/X90";
export default {
  name: "index",
  components: {X90, X70plus, Cars, Banner}
}
</script>

<style scoped>

</style>