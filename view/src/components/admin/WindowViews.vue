<template>
<!--
  主窗口显示划分，窗口标签管理区以及主视图区
-->
  <div class="window-views">
<!--    窗口标签管理-->
    <WindowBar></WindowBar>
<!--    主视图管理-->
    <ViewsComponents ></ViewsComponents>
  </div>
</template>

<script>
import WindowBar from "@/components/admin/WindowBar";
import ViewsComponents from "@/components/admin/ViewsComponents";

export default {
  name: "WindowViews",
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