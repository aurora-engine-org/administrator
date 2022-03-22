<template>
<div class="views">
<!-- 选项显示 -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "ViewsComponents",
}
</script>

<style scoped>
.views{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>