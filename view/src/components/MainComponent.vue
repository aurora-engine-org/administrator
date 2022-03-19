<template>
 <div class="main">
    <LeftSidebar></LeftSidebar>
    <WindowViews></WindowViews>
 </div>
</template>

<script>


import LeftSidebar from "@/components/LeftSidebar";
import WindowViews from "@/components/WindowViews";

export default {
  name: "MainComponent",
  components:{
    LeftSidebar,
    WindowViews,
  },
}
</script>

<style scoped>
.main{
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
</style>