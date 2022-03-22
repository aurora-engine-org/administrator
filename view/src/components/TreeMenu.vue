<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div class="menu" v-for="(menu,index) in menus" :key="menu" @click="close(index)">
    <!--  当前菜单名  -->
    <div class="menu-title" @click="menu.isOpen=!menu.isOpen">
      <div :class="{'menu-title-arrow':!menu.isOpen,'menu-title-arrowTrans':menu.isOpen}">
        <img class="title-arrow" src="../../public/ui/arrow-right.png">
      </div>
      <div class="title-text" >
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
  components:{

  },
  data(){
    return{

    }
  },
  //data end
  methods:{
    //箭头旋转
    spin(){

    },
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
      this.$router.push("/admin/"+item)
    },

    addWindowsLabels(item){
      //通过消息总线 传递给窗口标签组件创建一个标签
      this.$bus.emit('addwindow',item)
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
  flex-direction: row;

  background-color: #42b983;

}
.title-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  user-select: none;
}
.menu-title-arrow{

}
.menu-title-arrowTrans{
  transform: rotate(90deg);
}
.title-arrow{
  width: 40px;
  height: 40px;
}
.item{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #339c6b;

}
.item-title{
  padding-left: 40px;
  user-select: none;
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