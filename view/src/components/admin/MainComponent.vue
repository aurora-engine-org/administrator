<template>
<!--
  后台管理系统，侧边菜单栏以及，主面板显示出
-->
 <div class="main">
<!--   侧边菜单栏-->
    <LeftMenuBar  title='Home' :menus="menus" ></LeftMenuBar>
<!--   主窗口面板显示-->
    <WindowViews></WindowViews>
 </div>
</template>

<script>


import LeftMenuBar from "@/components/admin/LeftMenuBar";
import WindowViews from "@/components/admin/WindowViews";

export default {
  name: "MainComponent",
  components:{
    LeftMenuBar,
    WindowViews,
  },
  data(){
    return{
      //自定义目录位置
      menus:  [
        {
          //顶层菜单名
          title:"个人中心",
          isOpen:false,
          //菜单选项
          items:[
              //path 对应 router 路径
            {title:'个人资料',path:'test'},
            {title:'账号安全',path:'账号安全'},
            {title:'黑名单管理',path:'黑名单管理'},
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
            {title:'文章',path:'article'},
            {title:'专栏',path:'subject'},
          ],
          //子菜单
          child:[
            {
              //顶层菜单名
              title:"内容管理",
              isOpen:false,
              //菜单选项
              items:[
                {title:'稿件管理',path:'稿件管理'},
              ],
              //子菜单
              child:[]
            },
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