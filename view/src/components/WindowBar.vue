<template>
  <div class="window-bar">
<!--  窗口标签  -->
    <WindowLabe v-for="label in windowLabel" :key="label" :title="label"></WindowLabe>
  </div>
</template>

<script>
import WindowLabe from "@/components/WindowLabe";

export default {
  name: "WindowBar",
  props:['windowLabel'],
  components:{
    WindowLabe,
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
  .window-bar{
    height: 40px;
    background-color: aquamarine;
  }
</style>