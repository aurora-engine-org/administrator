<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div class="menu" v-for="(menu,index) in menus" :key="menu" @click="close(index)">

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
        <div class="item-title" @click="openMenu(item),addWindowsLabels(item)">
          {{item}}
        </div>
      </div>

      <div class="child-menu"  v-if="menu.isOpen">
        <TreeMenu :menus="menu.child" :window-labels="windowLabels"></TreeMenu>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>

export default {
  name: "TreeMenu",
  props:['menus','windowLabels'],
  data(){
    return{

    }
  },
  //data end
  methods:{
    close(e){
      //判断当前菜单是否打开，如果打开则关闭所有子菜单
      if (this.menus[e].isOpen===false){
        this.closeIndex(this.menus[e])
      }
    },
    //递归关闭子菜单
    closeIndex(data){
      data.isOpen=false
      if (data.child.length>0){
        for (let i=0;i<data.child.length;i++){
          this.closeIndex(data.child[i])
        }
      }
    },

    //点击对应菜单选项 打开选项面板
    openMenu(item){
      this.$router.push({name:item})
    },
    addWindowsLabels(item){
      console.log("addWindowsLabels:"+item)
      this.$emit('addwindow',item)
    }
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
  background-color: #339c6b;

}

.item{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #42b983;
  padding-left: 10px;
}
.item-title{
  user-select: none;

}
.item-title>div{

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