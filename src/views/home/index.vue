<template>
<Banner/>
  <Cars/>
</template>

<script>
import Banner from "@/views/home/components/Banner";
import Cars from "@/views/home/components/Cars";
export default {
  name: "index",
  components: {Cars, Banner}
}
</script>

<style scoped>

</style>