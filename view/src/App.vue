<template>
  <HeaderComponent></HeaderComponent>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  created() {

  }
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
