<template>
  <div class="window-bar">
<!--  窗口标签  -->
    <WindowLabe></WindowLabe>
  </div>
</template>

<script>
import WindowLabe from "@/components/WindowLabe";

export default {
  name: "WindowBar",
  components:{
    WindowLabe,
  }
}
</script>

<style scoped>
  .window-bar{
    height: 40px;
    background-color: aquamarine;
  }
</style>