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
    <TreeMenu :menus="menus" :windowLabels="windowLabels"></TreeMenu>
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
      this.$router.push("/admin/home")
    },
    addWindowLabel(item){
      console.log(item)
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
      console.log(this.windowLabels)
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
  display: flex;
  flex-direction: row;
}

.left-menu-tile-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
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
  margin-left: 5px;
}
</style>