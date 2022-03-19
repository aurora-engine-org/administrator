<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div class="menu" v-for="(menu,index) in menus" :key="menu" @click="closeAll(index)">

    <!--  当前菜单名  -->
    <div class="menu-title" @click="menu.isOpen=!menu.isOpen">
      <div>
        {{menu.title}}
      </div>
    </div>

    <transition name="fade">
    <div v-if="menu.isOpen">
      <!--  当前菜单选项    -->
      <div class="item" v-for="item in menu.items" :key="item">

        <div class="item-title">
          {{item}}
        </div>

      </div>

      <div class="child-menu"  v-if="menu.isOpen">
        <TreeMenu :menus="menu.child"></TreeMenu>
      </div>
    </div>
    </transition>
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
  background-color: forestgreen;
}
.menu-title{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  background-color: forestgreen;

}

.item{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #42b983;
}
.item-title{
  user-select: none;

}
.child-menu{

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>