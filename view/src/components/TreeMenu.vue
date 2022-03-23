<template>
<!--
  基于 TreeMenu 嵌套方式实现的菜单树
-->
  <div class="menu" v-for="(menu,index) in menus" :key="menu" @click="close(index)">
    <!--  当前菜单名  -->
    <div :class="menu.isOpen?'menu-title-open':'menu-title'" @click="menu.isOpen=!menu.isOpen">
      <div class="menu-title-box">
        <div :class="{'menu-title-arrow':!menu.isOpen,'menu-title-arrowTrans':menu.isOpen}">
          <img class="title-arrow" src="../../public/ui/arrow-right.png">
        </div>
        <div class="title-text" >
          {{menu.title}}
        </div>
      </div>
    </div>

    <div class="item-background" v-if="menu.isOpen">
      <!--  当前菜单选项    -->
      <div class="item-box">
        <div class="item" v-for="item in menu.items" :key="item" @click="openMenu(item.path),addWindowsLabels(item)">
          <div class="item-title" >
            {{item.title}}
          </div>
        </div>
      </div>
    </div>

    <div class="child-menu"  v-if="menu.isOpen">
      <TreeMenu :menus="menu.child"></TreeMenu>
    </div>
  </div>

</template>

<script>

export default {
  name: "TreeMenu",
  props:['menus'],
  components:{

  },
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
      this.$router.push("/admin/"+item)
    },

    addWindowsLabels(item){
      //通过消息总线 传递给窗口标签组件创建一个标签 WindowBar 组件
      this.$bus.emit('addwindow',item)
    }
  },
}



</script>

<style scoped>
.menu-title:hover{
  background-color: #72777b;
}
.menu-title-open{
  background-color: #72777b;
}
.menu-title-box{
  height: 40px;
  display: flex;
  flex-direction: row;
}
.title-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  user-select: none;
}
.menu-title-arrow{
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.menu-title-arrowTrans{
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(90deg);
}
.title-arrow{
  width: 40px;
  height: 40px;
  user-select: none;
}
.item{
  height: 40px;
  margin-left: 40px;
}
.item-title:hover{
  color: blue;
}

.item-title{
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}

/*子菜单样式格式管理*/
.child-menu{
  margin-left: 25px;
}
</style>