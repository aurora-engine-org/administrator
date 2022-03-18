<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div v-for="(menu,index) in menus" :key="menu" @click="closeAll(index)">
    <div class="menu-title" @click="menu.isOpen=!menu.isOpen">
      {{menu.title}}
    </div>
    <TreeMenu v-if="menu.isOpen" :menus="menu.child">

    </TreeMenu>
  </div>

</template>

<script>

export default {
  name: "TreeMenu",
  props:['menus'],
  data(){
    return{

    }
  },
  //data end
  methods:{
    //控制子菜单的点击显示
    closeAll(index){
      this.$emit('close-all',index)
    },

  },
}



</script>

<style scoped>
.menu-title{
  width: 200px;
  height: 20px;
  user-select: none;
  background-color: #42b983;
}
</style>