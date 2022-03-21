<template>
  <div class="left-menu">
    <div class="left-menu-tile">{{title}}</div>
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
  background-color: white;
  user-select: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>