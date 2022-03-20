<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

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
