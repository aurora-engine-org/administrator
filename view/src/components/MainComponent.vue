<template>
<!--
  后台管理系统，侧边菜单栏以及，主面板显示出
-->
 <div class="main">
<!--   侧边菜单栏-->
    <LeftMenuBar  title='Home' :menus="menus" :windowLabels="windowLabels" ></LeftMenuBar>
<!--   主窗口面板显示-->
    <WindowViews></WindowViews>
 </div>
</template>

<script>


import LeftMenuBar from "@/components/LeftMenuBar";
import WindowViews from "@/components/WindowViews";

export default {
  name: "MainComponent",
  components:{
    LeftMenuBar,
    WindowViews,
  },
  data(){
    return{
      menus:  [
        {
          //顶层菜单名
          title:"个人信息",
          isOpen:false,
          //菜单选项
          items:[
            'test',
            'bbb',
            'ccc'
          ],
          //子菜单
          child:[
          ]
        },
        {
          //顶层菜单名
          title:"创作中心",
          isOpen:false,
          //菜单选项
          items:[
            'test',
            'bbb',
            'ccc'
          ],
          //子菜单
          child:[
          ]
        },
      ],
    }
  },
  methods:{

  },
}
</script>

<style scoped>
.main{
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
</style>