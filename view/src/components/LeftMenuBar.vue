<template>
  <div class="left-menu">
    <div class="left-menu-tile" @click="openHome">
      <div class="left-menu-tile-icon">
          <img src="../../public/ui/home-fill.png" class="home-icon">
      </div>
      <div class="left-menu-tile-text">
        {{title}}
      </div>
    </div>
    <TreeMenu :menus="menus"></TreeMenu>
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
      windowLabels:[],
    }
  },
  methods: {
    openHome(){
      //打开管理首页 让高亮标签取消 WindowBar组件监听处理
      this.$bus.emit('open-home',-1)
      this.$router.push("/admin/home")
    },
    addWindowLabel(item){
      let flag=true
      if (this.windowLabels.length===0){
        this.windowLabels.push(item)
      }
      for (let i=0;i<this.windowLabels.length;i++){
        if (item===this.windowLabels[i]){
          flag=false
        }
      }
      if (flag){
        this.windowLabels.push(item)
      }
    }
  },
}
</script>

<style scoped>

.left-menu{
  width: 15vw;
  background-color: #dbd5d5;
  overflow: auto;
}

.left-menu-tile{
  height: 45px;
  display: flex;
  flex-direction: row;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.left-menu-tile-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
}

.home-icon{
  width: 20px;
  height: 20px;
}

.left-menu-tile-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  text-align: center;
  margin-left: 10px;
}
</style>