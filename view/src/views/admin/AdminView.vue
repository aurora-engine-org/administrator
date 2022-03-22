<template>
  <!--
   后台管理页面布局
   -->
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "AdminView",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
}
</script>

<style scoped>

</style>