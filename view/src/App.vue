<template>
<!-- 页面布局 -->
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import MainComponent from "@/components/MainComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: auto;
}


</style>
