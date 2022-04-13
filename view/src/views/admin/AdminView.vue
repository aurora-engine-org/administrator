<template>
  <!--
   后台管理页面布局
   -->
  <header-component></header-component>
  <main-component></main-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/admin/HeaderComponent";
import MainComponent from "@/components/admin/MainComponent";
import FooterComponent from "@/components/admin/FooterComponent";

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