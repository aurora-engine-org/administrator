<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div class="menu" v-for="(menu,index) in menus" :key="menu" @click="closeAll(index)">
    <div class="menu-title" @click="menu.isOpen=!menu.isOpen">{{menu.title}}</div>
    <div v-if="menu.isOpen">
      <div class="item" v-for="item in menu.items" :key="item">
        <div class="item-title">
          {{item}}
        </div>
      </div>
    </div>
    <TreeMenu v-if="menu.isOpen" :menus="menu.child"></TreeMenu>
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
      //抛出 需要关闭的菜单项
      this.$emit('close-all',index)
    },
  },
}



</script>

<style scoped>
.menu{
}
.menu-title{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  background-color: darkgrey;
}
.item{
  background-color: antiquewhite;
}
.item-title{
  margin-left: 10px;
}
</style>