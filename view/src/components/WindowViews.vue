<template>
  <div class="window-views">
    <WindowBar></WindowBar>
    <ViewsComponents ></ViewsComponents>
  </div>
</template>

<script>
import WindowBar from "@/components/WindowBar";
import ViewsComponents from "@/components/ViewsComponents";

export default {
  name: "WindowViews",
  props:[],
  components:{
    ViewsComponents,
    WindowBar,
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.window-views{
  width: 90vw;
  display: flex;
  flex-direction: column;
}
</style>