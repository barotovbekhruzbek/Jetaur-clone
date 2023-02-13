<template>
<Banner/>
  <Cars/>
  <X70plus/>
</template>

<script>
import Banner from "@/views/home/components/Banner";
import Cars from "@/views/home/components/Cars";
import X70plus from "@/views/home/components/X70plus";
export default {
  name: "index",
  components: {X70plus, Cars, Banner}
}
</script>

<style scoped>

</style>