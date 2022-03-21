<template>
  <div class="left-menu">
    <div class="left-menu-tile">{{title}}</div>
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
    }
  },
  methods: {

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