<template>
  <div class="left-menu">
    <div class="left-menu-tile">{{title}}</div>
    <TreeMenu @close-all="close" :menus="menus"></TreeMenu>
  </div>
</template>

<script>
import TreeMenu from "@/components/TreeMenu";

export default {
  name: "LeftMenuBar",
  props:['title','menus'],
  components:{
    TreeMenu,
  },
  data(){
    return{
    }
  },
  methods: {

    //监听关闭菜单通知
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
    }

  },
}
</script>

<style scoped>

.left-menu{
  width: 10vw;
  background-color: white;
  overflow: auto;
}
.left-menu-tile{
  height: 40px;
  background-color: white;
  user-select: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>