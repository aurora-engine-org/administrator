<template>
    <MenuNav :menus="menu" :isShow="isShow" :childShow="childShow"></MenuNav>
</template>

<script>

import MenuNav from "@/components/MenuNav";
export default {
  name: "MenuIter",
  component:MenuNav,
  props:['menus','isShow','childShow'],
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>