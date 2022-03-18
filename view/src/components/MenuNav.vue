<template>
  <div v-for="menu in menus" :key="menu" >
    <div class="menu-title" @click="showMenu(menu.isOpen)">
      {{menu.title}}
    </div>
    <div v-if="menu.isOpen">
      <MenuNav :menus="menu.child">

      </MenuNav>
    </div>
  </div>
</template>

<script>

export default {
  name: "MenuNav",
  props:['menus'],
  data(){
    return{

    }
  },
  //data end
  methods:{
    //控制子菜单的点击显示
    showMenu(flag){
      this.$emit('',!flag)
    },

  },
}



</script>

<style scoped>
.menu-title{
  width: 200px;
  height: 20px;
  background-color: #42b983;
}
</style>