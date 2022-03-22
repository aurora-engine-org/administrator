<template>
 <div class="main">
    <LeftMenuBar  title='Home' :menus="menus" :windowLabels="windowLabels" ></LeftMenuBar>
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
          title:"1",
          isOpen:false,
          //菜单选项
          items:[
            'test',
            'bbb',
            'ccc'
          ],
          //子菜单
          child:[
            {
              title:"1-1",
              isOpen:false,
              items:[
                'ddd',
                'eee',
                'fff'
              ],
              child:[
                {
                  title:"1-1-1",
                  isOpen:false,
                  items:[
                    'ggg',
                    'hhh',
                    'iii'
                  ],
                  child:[]
                },
              ]
            }
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